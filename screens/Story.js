import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";

let customFonts = {
    "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
  };
  
  let stories = require("./temp_stories.json");
  
  export default class Story extends Component {
    constructor(props) {
      super(props);
      this.state = {
        fontsLoaded: false,
        speakerColor:'grey',
        speakerIcon:'volume-high-outline'
      };
    }
  
    async _loadFontsAsync() {
      await Font.loadAsync(customFonts);
      this.setState({ fontsLoaded: true });
    }
  
    componentDidMount() {
      this._loadFontsAsync();
    }
    
  }
const styles = StyleSheet.create({})