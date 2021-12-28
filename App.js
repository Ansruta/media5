import React,{Component} from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import Login from './LoginScreen';
import Loading from './LoadingScreen';
import Dashboard from './Dashboard';
import * as firebase from 'firebase';
import { firebaseConfig } from "./config";

if(!firabase.apps.length){
  firebase.initializeApp(firebaseConfig)
}else{
  firebase.app();
}

export default class App extends Component() {
  render(){
  return (
    <AppContainer/>
  );
  }
}
const AppNavigator=createSwitchNavigator({
  Loading:Loading,
  Login:Login,
  Dashboard:Dashboard
})
const AppContainer=createAppContainer(AppNavigator)
