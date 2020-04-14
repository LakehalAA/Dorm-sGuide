import React from 'react';
import { ProgressBarAndroid, StyleSheet, View, Image, TextInput, Text, Button, TouchableHighlight, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import CardInfo from '../components/cardInformations';
import AboutRes from '../components/aboutRes';

export default class Info extends React.Component{
  render(){
    return(
      <View style={{flex: 1, justifyContent:'center', alignItems:'stretch'}}>
        <View style={{flex: 4, justifyContent:'center', alignItems:'stretch', }}>
          <LinearGradient style={{flex: 1, justifyContent: 'center', alignItems:'center'}} colors={['#B10946','#E0465C','#E0465C']}>
            <View>
              <Image style={{marginTop:30, height:148, width:148, borderRadius:74, resizeMode:'cover', borderWidth : 6, borderColor:"#FFF", }} source={{uri:'https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/user_photos/000/832/497/datas/xlarge.png'}} />
            </View>
              <Text style={styles.name}>Hello Ouchar</Text>
          </LinearGradient>
        </View>        
        <View style={{flex: 6, flexDirection: "column"}}>
          <View style={{flex: 4}}>
            <ScrollView style={{backgroundColor:'#F7F7F7', padding:15}}>
              <CardInfo opt="Scientifique" moy="18.09" school="ESI Algiers" />
              <AboutRes opt="Scientifique" moy="18.09" school="ESI Algiers" />
            </ScrollView>
          </View>
          <View style={styles.rounded, {flex: 1, backgroundColor:'white', flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
            <Text style={{fontSize:11, color:'#CF3154'}} >Telechargement Des Données...</Text>
            <ProgressBarAndroid style={styles.progress  }
            styleAttr="Horizontal"
            indeterminate={false}
            progress={0.5}
            />
          </View>
        </View>        
      </View>
    );
  }
} 


const styles = StyleSheet.create({
  name:{

    color: '#FFF',
    fontSize: 25,
    margin : 12,

  },
  progress :{
    color: '#CF3154',
    width: 200,  
  },
})