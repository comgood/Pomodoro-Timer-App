import React from 'react'
import {View,Text,TextInput,StyleSheet,TouchableOpacity, FlatList,Button,KeyboardAvoidingView} from 'react-native'
import  CheckBox  from 'react-native-check-box'


export default class Dashboard extends React.Component {
  state= {
      // store temp todo
      tempTodo:"",
      isChecked:false,
      data:[
        {id: 1,title:"Walk the dog", done:true},
        {id: 2,title:"Find the cat", done:false}
      ]
    }

  static navigationOptions = {
    title: 'Dashboard',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }


addTodo = () => {
    let newTodo = {
      id: Math.random(1000000, 999999), // naive way of generating an unique
      title: this.state.tempTodo,
      done: false
    }

    this.setState({
      tempTodo: "", // reset temp todo to empty,
      data: [ ...this.state.data, newTodo]
    })
    Keyboard.dismiss()
    console.log(this.state)
  }

  deleteTodo = (item) => {
      // use find index to find the item to delete
      let index = this.state.data.findIndex((each) => {
        return each.id == item.id;  
      });

      let copy = [...this.state.data];
      copy.splice(index, 1);
      this.setState({
        data: copy
      });
  }

  toggleCheckbox = (currentItem) => {
    const todos = [...this.state.data];   

    // linear search to find the item to update
    let foundIndex = null;
    for (let i = 0; i < this.state.data.length; i++) {
      if (todos[i].id == currentItem.id) {
        foundIndex = i;
      }
    }         
    // if we found the item
    if (foundIndex != null) {
      // clone the todo
      const newTodo = {...currentItem};
      // inverse it's done status
      newTodo.done = !newTodo.done;

      todos[foundIndex]=newTodo;
    }


    // merge back into the state
    this.setState({
      data: todos
    })
  }

  renderListItem = (info) => {
    let currentItem = info.item
    return (
      <View style={ {flexDirection:"row", justifyContent:"flex-start"}}>
        <CheckBox
          style={{ paddingTop: 10}}
          onClick={()=>{
          this.toggleCheckbox(currentItem);       
          }}
          isChecked={currentItem.done}     
        />
        <Text style={{paddingTop:15, paddingLeft:10, flex:1}}>{currentItem.title}</Text>
        <View style={{paddingTop:5}}>
          <Button title="Delete" onPress={() => {this.deleteTodo}}/ >        
        </View>
       
      </View>
    )
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>      
        
        <FlatList
          renderItem={this.renderListItem}
          data={this.state.data}
          keyExtractor={(item) => item.id}
        >
        </FlatList>
        <View style={{padding:5,paddingBottom:-5}}>
          <TextInput style={styles.textInput} 
              value={this.state.tempTodo} 
              onChangeText={ (text) => {this.setState({tempTodo:text})}} 
              placeholder={"Enter your task"}
              placeholderTextColor ={'white'}
              onSubmitEditing = {this.addTodo}
              
          />
          </View>

          <View style={{padding:10,paddingTop:-5}}>
            <Button 
              title="Start Focus Time" 
              onPress = {()=>   this.props.navigation.navigate('Focus')}
              />
          </View>

          <View style={{padding:10,paddingTop:-5}}>
            <Button title="Save" onPress={ ()=>{this.saveData()}} />
          </View>
           
   
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent:'flex-end'
  },

  textInput:{
    backgroundColor:'tomato',
    color:'white',
    borderRadius:10,
    marginBottom:10,
    marginTop:30,
    paddingHorizontal:10,
    paddingVertical:3,
    height:30
  },

  renderContainer:{
     width: '100%',
    backgroundColor: '#999999',
    padding: 5,
    margin: 5,
    fontSize: 15,
    color: '#ffffff',
    height: 50,
    flexDirection:'row',
    justifyContent:'space-between'
  }
  
})


