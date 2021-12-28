import React,{Component} from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
  Dimensions
} from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from "react-native-responsive-fontsize";

let customFonts = {
    "Bubblegum-Sans": require("./BubbleGum.ttf")
  };
  
  export default class CreateStory extends Component {
    constructor(props) {
      super(props);
      this.state = {
        fontsLoaded: false,
        previewImage: "image_1",
        dropdownHeight: 40
      };
    }
  
    async _loadFontsAsync() {
      await Font.loadAsync(customFonts);
      this.setState({ fontsLoaded: true });
    }
  
    componentDidMount() {
      this._loadFontsAsync();
    }
    render(){
      if(!this.state.fontsLoaded){
        return <AppLoading/>
      }else{
        
          let previewImages={
            image1:require("./image_1.jpg"),
            image2:require("./image_2.jpg"),
            image3:require("./image_3.jpg"),
            image4:require("./image_4.jpg"),
            image5:require("./image_5.jpg"),
            image6:require("./image_6.jpg"),
            image7:require("./image_7.jpg"),
          };
          return(
            <View style={styles.contain}>
            <SafeAreaView style={styles.droidSafeArea}/>
            <View style={styles.appTitle}>
                <View style={styles.appIcon}>
                    <Image source={require("./logo.png")}
                    style={styles.iconImage}/>
                </View>
                <View style={styles.appTitleTextContainer}>
                    <Text style={styles.appTitleText}>New Post</Text>
                </View>
            </View>
            <View style={styles.fieldsContainer}>
                <SrollView>
                    <Image source={previewImages[this.state.previewImage]}
                    style={styles.previewImage}/>
                    <View style={{height:RfValue(this.state.dropdownHeight)}}>
                        <DropDownPicker
                        items={[
                            {label:"Image1", value:"image1"},
                            {label:"Image2", value:"image2"},
                            {label:"Image3", value:"image3"},
                            {label:"Image4", value:"image4"},
                            {label:"Image5", value:"image5"},
                            {label:"Image6", value:"image6"},
                            {label:"Image7", value:"image7"},
                        ]}
                        defaultValue={this.state.previewImage}
                        containerStyle={{
                            height:40,
                            borderRadius:20,
                            marginBottom:10
                        }}
                        onOpen={()=>{
                            this.setState({dropdownHeight:170});
                        }}
                        onClose={()=>{
                            this.setState({dropdownHeight:40});
                        }}
                        style={{backgroungColor:"black"}}
                        labelstyle={{color:"white"}}
                        arrowStyle={{color:"white"}}
                        onChangeItem={item=>
                        this.setState({previewImage:item.value})}></DropDownPicker>

                    </View>
                    <TextInput
                    style={styles.inputFont}
                    onChangeText={caption=>this.setState({caption:caption})}
                    placeHolder={"Caption"}
                    placeHolderTextColor="white"
                    />
                </SrollView>
            </View>
            </View>
        )
      }
    }
}
const styles=StyleSheet.create({
contain:{
    flex:1,
    backgroundColor:"black"
},
droidSafeArea:{
    marginTop:Platform.OS==="android"?StatusBar.currentHeight:RFValue(30)
},
appTitle:{
    flex:0.07,
    flexDirection:"row"
},
appIcon:{
    flex:0.2,
    justifyContent:"center",
    alignItems:"center"
},
iconImage:{
    width:"100%",
    height:"100%",
    resizeMode:"contain"
},
appTitleTextContainer:{
    flex:0.8,
    justifyContent:"center"
},
appTitleText:{
    color:"white",
    fontSize:RFValue(28)
},
fieldsContainer: {
    flex: 0.85
  },
previewImage: {
    width: "93%",
    height: RFValue(250),
    alignSelf: "center",
    borderRadius: RFValue(10),
    marginVertical: RFValue(10),
    resizeMode: "contain"
  },
  inputFont: {
    height: RFValue(40),
    borderColor: "white",
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: "white",
    fontFamily: "Bubblegum-Sans"
  },
  inputFontExtra: {
    marginTop: RFValue(15)
  },
  inputTextBig: {
    textAlignVertical: "top",
    padding: RFValue(5)
  }
})
