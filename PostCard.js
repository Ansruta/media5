import React,{Component} from "react";
import {Text, View, StyleSheet,Image } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class PostCard extends React.Component{
    render(){
        return(
<TouchableOpacity style={styles.container} onPress={()=>this.props.navigatoin.navigate("StoryScreen",{story:this.props.story})}>
    <View style={styles.cardContainer}>
        <View style={styles.authorContainer}>
            <View style={styles.authorImageContainer}>
                <Image source={require("./profile_img.png")}
                       style={styles.profileImage}/>
            </View>
            <View style={styles.authorNameContainer}>
                <Text style={styles.authorNameText}>(this.props.post.author)</Text>
            </View>
        </View>
        <Image source={require("./post.jpeg")}
                style={styles.postImage}/>
        <View style={styles.captionContainer}>
            <Text style={styles.captionText}>
                {this.props.post.caption}
            </Text>
        </View>
        <View style={styles.actionContainer}>
            <View style={styles.likeButton}>
                <Ionicons name={"heart"} size={RFValue(30)} color={"white"}/>
                <Text style={styles.likeText}>12k</Text>
            </View>
        </View>
    </View>
</TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    cardContainer: {
      margin: RFValue(13),
      backgroundColor: "#2f345d",
      borderRadius: RFValue(20)
    },
    profileImage: {
      resizeMode: "contain",
      width: "95%",
      alignSelf: "center",
      height: RFValue(250)
    },
    authorNameContainer: {
      paddingLeft: RFValue(20),
      justifyContent: "center"
    },
    
    authorNameText: {
      fontSize: RFValue(18),
      fontFamily: "sans-serif",
      color: "white"
    },
    captionText: {
      fontFamily: "sans-serif",
      fontSize: 13,
      color: "white",
      paddingTop: RFValue(10)
    },
    actionContainer: {
      justifyContent: "center",
      alignItems: "center",
      padding: RFValue(10)
    },
    likeButton: {
      width: RFValue(160),
      height: RFValue(40),
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      backgroundColor: "#eb3948",
      borderRadius: RFValue(30)
    },
    likeText: {
      color: "white",
      fontFamily: "sans-serif",
      fontSize: RFValue(25),
      marginLeft: RFValue(5)
    }
  });
  