import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  FlatList ,

} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import StoryCard from "./StoryCard";

import * as Font from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();


let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

let stories = require("./temp_stories.json");

export default class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  keyExtractor=(item,index)=>{
    index.toString()
    
  }
  renderItem=({item:story})=>{
    return(
      <StoryCard story={story}/>
    )
  }

  render() {
    if (this.state.fontsLoaded) {
      SplashScreen.hideAsync();
      return (
        <View style={styles.container}>
          
          <View style={styles.appTitleContainer}>
            <View style={styles.appIcon}>
        <Image source={require("../assets/logo.png")} style={{width:50,height:50}}/>
            </View>
            <View style={styles.appTitle}>
              <Text style={styles.titleText}>StoryTelling App</Text>
            </View>
            
          </View>
          <View style={styles.cardContainer}>
        <FlatList keyExtractor={this.keyExtractor} renderItem={this.renderItem} data={stories}></FlatList>
          </View>
          </View>
         
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15193c"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appTitle:{
justifyContent:'center',
alignItems:'center',
  },
  appTitleContainer:{
    flex:0.07,
    flexDirection:'row',
    flexWrap:"wrap",
    padding:10,

  },appIcon:{
    flex:0.3,
  },titleText:{
    color:'white',
    fontSize:28,
    fontFamily:'Bubblegum-Sans',
    paddingLeft:20
  },cardContainer:{
    flex:0.8,
    
  }
  }
);