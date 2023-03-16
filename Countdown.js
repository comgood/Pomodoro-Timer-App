import React from 'react'
import {View,Text} from 'react-native'
import {CountDown} from 'react-native-customizable-countdown'

const App = (props) => {
  
  return(
    <View>
    <CountDown
    ref = {(ref) => this.myRef=ref}
    initialSeconds = {1500}
    onTimeOut = {()=>{}}
    digitFontSize={30}
    labelFontSize = {15}
    width={200}
    height={70}
    hoursLabel={'hrs'}
    minutesLabel={'min'}
    enableLabel = {true}
    backgroundColor={'yellow'}
    showHours = {false}
    hoursBackgroundStyle={{borderWidth:2, backgroundColor:null, borderColor: 'blue'}}
    secondsBackgroundStyle={{borderWidth:0, backgroundColor:null, borderColor: 'blue'}}
    secondsDigitFontStyle={{color:'pink'}}
    secondsLabelFontStyle={{color:'green'}}
    labelColor='red'
    labelFontWeight='bold'
    labelPosition = 'top'
    />
    </View>
  )
}

export default App