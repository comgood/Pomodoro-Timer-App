import React from 'react'
import {Text, View} from 'react-native'
import {createStackNavigator, createAppContainer} from 'react-navigation'
import Dashboard from './Dashboard'
import Focus from './Focus'

const RootStack = createStackNavigator(

  {
    Dashboard:{screen:Dashboard},
    Focus:{screen:Focus},
  
  },

  {
    initialRoutename: 'Dashboard'
  },

  {headerShown:'none'}

)

const AppContainer = createAppContainer(RootStack)


export default class App extends React.Component{
  render(){
    return <AppContainer/>
  }
}