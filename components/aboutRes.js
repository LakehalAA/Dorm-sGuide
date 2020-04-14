import React from 'react'
import {StyleSheet, Text, View} from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

export default class AboutRes extends React.Component{
  
  render(){

    var markers = [
      {
        latitude: 45.65,
        longitude: -78.90,
        title: 'Foo Place',
        subtitle: '1234 Foo Drive'
      }
    ];

    return(
      <View style={{alignItems:'center', margin:15}}>
        <Text style={{fontSize: 22, textTransform: 'uppercase', color: '#E0465C', fontWeight:'bold'}}>About Bouraoui</Text>
        <View style={styles.uniCard}>
          <Text> 4000 Chambres </Text>
        </View>
        <View style={styles.uniCard}>
          <Text> Situé à El-HARRACH </Text>
        </View>
        <View style={styles.mapCard}>
          <MapView style={styles.mapStyle} 
            initialRegion={{
              latitude: 36.7171674,
              longitude: 3.151109,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }}>
              
              <MapView.Marker
                  coordinate={{latitude: 36.7171674,
                  longitude: 3.151109}}
                  title={"Bouraoui Ammar Campus"}
                  description={"La plus ancienne cité universitaire dans Alger"}
              />
            </MapView>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    uniCard:{
      width:300,
      backgroundColor:'#FFF',
      borderRadius: 5,
      margin:5,
      padding:15,
    },
    mapCard:{
      width:300,
      height:300,
      backgroundColor:'#FFF',
      margin:5,

    }, 
    mapStyle: {
      width: 300,
      height: 300,
      borderWidth: 3,
      borderColor: '#000',
      borderRadius: 5,
    }
})