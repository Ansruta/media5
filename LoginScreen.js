import React,{Component} from 'react';
import {Text, View, Button} from 'react-native';
import * as Google from 'expo-google-app-auth';
import firebase from 'firebase';

export default class LoginScreen extends Component{

    isUserEqual=(googleUser, firebasUser)=>{
        if(firebaseUser){
            var providerData=firebaseUser.providerData;
            for(var i=0; i<providerData.length; i++){
                if(
                providerData[i].providerId===
                firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
                providerData[i].uid===googleUser.getBasicProfile().getId()
                ){
                    return true;
                }else{
                    return false;
                }
            }
        }
    };

    onSignIn=googleUser=>{
        var unsubscribe=firebase.auth().onAuthStateChanged(firebaseUser=>{
            unsubscribe();

            if(!this.isUserEqual(googleUser, firebaseUser)){
                var credential=firebase.auth.GoogleAuthProvider.credential(
                    googleUser.idToken,
                    googleUser.accessToken
                );

                firebase.auth().signInWithCredential(credential)
                 .then(function(result){
                     if(result.additionalUserInfo.isNewUser){
                         firebase.database().ref.set({
                             gmail:result.user.email,
                             profile_pic:result.additionalUserInfo.profile.picture,
                             locale:result.additionalUserInfo.profile.locale,
                             first_name:result.additionalUserInfo.profile.given_name,
                             last_name:result.additionalUserInfo.profile.family_name,
                             current_theme:"dark"
                         })
                         .then(function(snapshot){})
                     }
                 })
                 .catch(error=>{
                     var errorCode=error.code;
                     var errorMessage=error.message;
                     var email=error.email;
                     var credential=error.credential
                 });
            }else{
                console.log("User already signed-in Firebase")
            }
        })
    };

    signInWithGoogleAsync=async()=>{
        try{
            const result=await Google.logInAsync({
                behavior:"web",
                 androidClientId:
          "276718281193-6pfvmn001i6diluq4hsoko7ngifc1kht.apps.googleusercontent.com",
                 iosClientId:
          "72696421845-osrvc36bjie4264j4c0812sp5a2egqhj.apps.googleusercontent.com",
                scopes:['profile','email'],
            })
            if(result.type==="success"){
                this.onSignIn(result);
                return result.accessToken;
            }else{
                return {cancelled:true};
            }
        }catch(e){
            console.log(e.message);
            return {error:true};
        }

    }

    render(){
        return(
            <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
               <Button 
               title="Sign in with Google"
               onPress={()=>this.signInWithGoogleAsync()}/>
            </View>
        )
    }
}