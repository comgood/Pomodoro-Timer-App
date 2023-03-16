import React from 'react'
import {View,Text, StyleSheet,Button,TouchableOpacity} from 'react-native'
import Countdown from './Countdown'

export default class Focus extends React.Component {

  startFocus = () => {
    
  }
  
  
  render(){
    return(
      <View style = {{flex:1}}>
        <View style = {styles.containerTop}>
          <Countdown
          ref = {(ref) => this.resetCountDown=ref}
          />
          <TouchableOpacity
            onPress = {this.startFocus}>
              <Text style = {styles.text}>Focus </Text>
          </TouchableOpacity>
        
        </View>
        <View style = {styles.containerBottom}></View>
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  containerTop:{
    backgroundColor:'white',
    flex:75,
    justifyContent:'flex-end',
    alignItems:'center'
  },

  containerBottom:{
    backgroundColor:'grey',
    flex:25,
    justifyContent:'flex-end',
    alignItems:'center'
  },

  text:{
    fontSize:35
  },
  currentTask:{

  }

})
