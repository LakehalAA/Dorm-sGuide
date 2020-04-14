import React from 'react';
import { ProgressBarAndroid, StyleSheet, View, Image, TextInput, Text, Button, TouchableHighlight, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Douche from '../components/Douche'

export default class Douches extends React.Component{

  state = {
    douches:this.props.douches,
  }

  doucheLister = () => {
    var list=[];

    Object.keys(this.state.douches).map((douche, index)=>{

      let dch = this.state.douches[douche];
      list.push(<Douche name={dch.name} horraire={dch.horraire} url={dch.url} />)
      
    })

    return list;

  }

  render(){
    return(
      <View style={{flex: 1, justifyContent:'center', alignItems:'stretch', backgroundColor:'#F7F7F7'}}>
        <View style={{flex: 1, justifyContent:'center', alignItems:'stretch', }}>
          <LinearGradient style={{flex: 1, justifyContent: 'center', alignItems:'stretch'}} colors={['#B10946','#E0465C','#E0465C']}>
            <View style={{flex: 4, alignItems: "center", justifyContent:'center'}}>
              <Text style={{color:'#FFF'}} >Della3</Text>
            </View>
            <View style={{flex: 5, alignItems:'stretch'}}>
              <View style={{flex: 2, justifyContent: 'flex-start', alignContent: 'flex-start', paddingHorizontal:20}}>
                <Text style={{color:'#FFF', fontSize:22 , marginBottom:4}}>La Douche</Text>
                <View style={{width:320, height:1, backgroundColor:'#FFF5'}}>
                </View>
              </View>
              <View style={{flex: 4, paddingHorizontal:20, justifyContent:'center', alignItems:'center', paddingBottom:7.5}}>
                <View style={{padding:5, flexDirection:'row', justifyContent:'center', backgroundColor:'#FFFFFF', width:310, height: 60, borderRadius:30, alignItems:'center'}}>
                  <View style={{width:50, height:50, backgroundColor: '#E0465C', borderRadius:30}}>
                  </View>
                  <View style={{flex: 1, flexDirection:'column', alignItems:'center', margin:50}}>
                    <Text style={{fontSize: 16, color: "#E0465C", textTransform:'uppercase'}}>
                      -C'est fermé-
                    </Text>
                    <View style={{height:2, backgroundColor:"#E0465C", flexDirection:"row", marginVertical:4}}>
                      <View style={{flex:1}}>
                      </View>
                    </View>
                    <Text style={{fontSize: 8, color: "#E0465C", textTransform:'uppercase'}}>
                      45:00 minutes pour ouvrir
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </LinearGradient>
        </View>
        <View style={{flex: 2, justifyContent:'center', alignItems:'stretch', }}>
          <ScrollView style={{  flex: 1,flexDirection: "column", paddingVertical:15}}>
            {this.doucheLister()}
          </ScrollView>
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