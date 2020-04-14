import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

export default class CardInfo extends React.Component{
  render(){
    return(
      <View style={{alignItems:'center'}}>
        <Text style={{fontSize: 22, textTransform: 'uppercase', color: '#E0465C', fontWeight:'bold'}}>Mes Informations</Text>
        <View style={styles.card}>
          <Text>- Bac {this.props.opt}, La moyen {this.props.moy}</Text>
          <Text>- Etudiant à {this.props.school}</Text>
          <Text>- Affecté à Bouraoui Ammar, El-HARRACH</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    card:{
      width:300,
      backgroundColor:'#FFF',
      borderRadius: 5,
      margin:10,
      padding:15,
    },
    shadow:{
      shadowOpacity: 0.75,
      shadowRadius:15, 
    }
})