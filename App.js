import React from 'react';
import { StyleSheet, View, Image, TextInput, Text, Button, TouchableHighlight } from 'react-native';
import Info from './screens/info';
import Douches from './screens/douches';
import Douche from './components/Douche';
import SignIn from './screens/signIn';
import * as firebase from "firebase";

export default class app extends React.Component{

  state = {
    douches:"",
    input : '',
  }
  
  componentDidMount(){

    if( firebase.apps.length == 0 )
    firebase.initializeApp({
      apiKey: "AIzaSyB2oKpJpWNM8xP10lYb1rsWDgUoiB_p-Ek",
      authDomain: "studentmap-270322.firebaseapp.com",
      databaseURL: "https://studentmap-270322.firebaseio.com",
      projectId: "studentmap-270322",
      storageBucket: "studentmap-270322.appspot.com",
      messagingSenderId: "1036960039054",
      appId: "1:1036960039054:web:8143a94adb24f28d2b89df",
    })

    db = firebase.database();
  
    db.ref('/douches/').on('value', snap => {
      let data = snap.val();
      this.setState({douches : data});
    })

  }

  render(){

    return(
      <Douches douches={this.state.douches}/>
    );

  }
  
};
