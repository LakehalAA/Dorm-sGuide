import React, { Fragment } from 'react';
import { ProgressBarAndroid, StyleSheet, View, Image, TextInput, Text, Button, TouchableHighlight, ScrollView } from 'react-native';

class SignIn extends React.Component {

  signIn(){

  }

  render(){
    return(
      <Fragment>
        <View style={{flex:1, flexDirection:'column', alignItems:'center'}}>
          <View style={{flex:3, flexDirection:'column', justifyContent:'center'}}>
            <Text>Della3</Text>
          </View>
          <View style={{flex:3, flexDirection:'column', justifyContent:'center', width:260}}>
            <TextInput placeholder="test">

            </TextInput>
            <TouchableHighlight>
              <Text>
                Della3
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </Fragment>
    );
  }

}

export default SignIn;