import React from 'react'
import { View, Image, Text, Button, TouchableHighlight, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

export default class Douche extends React.Component{

  state={
    votes:0,
    voted:false,
    upvoted:false,
    downvoted:false,
  }

  vote = (up) =>{
    if(this.state.voted == false){
      if(up == true){
        this.setState({voted:true, downvoted:false, upvoted:true})
        this.setState({votes:this.state.votes+1})
      }else{
        this.setState({voted:true, downvoted:true, upvoted:false})
        this.setState({votes:this.state.votes-1})
      }
    }else{
      if(this.state.upvoted == true && up){
        this.setState({voted:false, downvoted:false, upvoted:false})
        this.setState({votes:this.state.votes-1})
      }
      if(this.state.downvoted == true && !up){
        this.setState({voted:false, downvoted:false, upvoted:false})
        this.setState({votes:this.state.votes+1})
      }
      if(this.state.upvoted == true && !up){
        this.setState({voted:true, downvoted:true, upvoted:false})
        this.setState({votes:this.state.votes-2})
      }
      if(this.state.downvoted == true && up){
        this.setState({voted:true, downvoted:false, upvoted:true})
        this.setState({votes:this.state.votes+2})
      }
    }
  }

  render(){
    return(
      <View style={{flex: 1, flexDirection:"row", justifyContent:'space-between', alignItems:'center', marginVertical:0, height:140}}>
          <View style={{flex:1, flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
            <View style={{flex: 1, flexDirection:"column", margin:15, width:40,  backgroundColor:'#FFF', borderRadius:20, alignItems:'center', justifyContent:'center'}}>
              <TouchableOpacity onPressIn={()=>{
                this.vote(true);
              }} style={this.state.upvoted ? styles.Upvoted : styles.UpUnVoted}>
                <View style={{ flex:1,flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                  <Icon
                    name='keyboard-arrow-up'
                    type='MaterialIcons'
                    color={!this.state.upvoted ? '#57CB2E' : '#FFF'}/>
                </View>
              </TouchableOpacity>
              <Text style={{textAlign:'center', margin:5}}>
                {this.state.votes}
              </Text>
              <TouchableOpacity onPressIn={()=>{
                this.vote(false);
              }} style={this.state.downvoted ? styles.Downvoted : styles.DownUnVoted}>
                <View style={{ flex:1,flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                  <Icon
                    name='keyboard-arrow-down'
                    type='MaterialIcons'
                    color={!this.state.downvoted ? '#E0465C' : '#FFF'}/>
                </View>        
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flex:2.5 ,flexDirection:"column",height:100, backgroundColor:'#FFF', borderTopLeftRadius:10, borderBottomLeftRadius:10, overflow:"hidden", flexDirection:"row"}}>
            <Image source={{uri:this.props.url}} style={{height:100, width:100, borderRadius:10, borderWidth:4, borderColor:'#E0465C'}} />
            <View style={{flexDirection:"column", justifyContent:'center', margin:20}}>
            <Text style={{color:'#E0465C'}}>{this.props.name}</Text>
            <Text>{this.props.horraire}</Text>
            <TouchableOpacity title="Help" style={styles.Button} onPress={()=>{alert('test')}}>
            <Text style={{color:'#FFF'}}>See On Map</Text>
              </TouchableOpacity>
            </View>
          </View>
      </View>
    );
  }
}

const styles= StyleSheet.create({
  Button:{
    borderRadius: 15,
    height:30,
    width:100,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#E0465C',
    margin:10,
  },
  ButtonPressed:{
    borderRadius: 15,
    height:30,
    width:100,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#E0465C',
    margin:10,
  },
  Upvoted:{
    backgroundColor:'#57CB2E',
    height: 50,
    width: 50,
    borderRadius:30,
  },
  Downvoted:{
    backgroundColor:'#E0465C',
    height: 50,
    width: 50,
    borderRadius:30,
  },
  UpUnVoted:{
    backgroundColor:'#FFF',
    height: 40,
    width: 40,
    borderRadius:30,
  },
  DownUnVoted:{
    backgroundColor:'#FFF',
    height: 40,
    width: 40,
    borderRadius:30,
  }
})