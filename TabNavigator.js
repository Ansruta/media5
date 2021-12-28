import React,{Component} from "react";
import {StyleSheet} from 'react-native';
import Feed from './Feed';
import CreatePost from './CreatePost';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Tab= createMaterialBottomTabNavigator();
const BottomTabNavigator=()=>{
    return(
        <Tab.Navigator
        labeled={false}
        barStyle={styles.bottomTab}
        screenOptions={({route})=>({
            tabBaricon:({focused,color,size})=>{
                let iconName;
                if(route.name==='Feed'){
                    iconName=focused ? 'book':'book-outline';
                }else if(route.name==='CreatePost'){
                    iconName=focused ? 'create':'create-outline';
                }
                return<Ionicons name={iconName} size={size} color={color} style={styles.icon} />
            },
        })}
        tabBarOptions={{
            activeTintColor:'tomato',
            inactiveTintColor:'gray',
        }}
        >
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="CreatePost" component={CreatePost} />

        </Tab.Navigator>
    )
};
const styles=StyleSheet.create({
    bottomTab:{
        backgroundColor:"#2f345d",
        height:"8%",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        overflow:"hidden",
        position:"absolute"
    },
    icon:{
        width:RFValue(30),
        height:RFValue(30)
    }
})
export default BottomTabNavigator;