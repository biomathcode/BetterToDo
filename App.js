import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Header from './components/Header'
import Input from './components/TextInput';
import Button from './components/Button'
import TodoList from './components/Todo/TodoList'

import TabBar from "./components/TabBar";
let todoIndex = 0
class App extends Component {
  constructor() {
    super()
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All'
    }
    // setType  
    this.setType = this.setType.bind(this)
    // toggle complete
    this.toggleComplete = this.toggleComplete.bind(this)
    // delete 
    this.deleteTodo = this.deleteTodo.bind(this)
    //since this is cc and function will not be binded auto
    this.submitTodo = this.submitTodo.bind(this)
  }
  inputChange(inputValue) {
    //console.log('inputvalue: ', inputValue)
    this.setState({inputValue})
  }
  deleteTodo(todoIndex) {
    let {todos} = this.state
    //Leave the one that is being selected
    //return the rest of them
    todos = todos.filter((todo) => todo.todoIndex !== todoIndex)
    this.setState({ todos})
  }
  setType(type) {
    this.setState({ type })
  }
  toggleComplete(todoIndex) {
    let {todos} = this.state
    todos.forEach((todo) => {
      if(todo.todoIndex === todoIndex) {
        todo.complete = !todo.complete;
      }
    })
    this.setState({todos})
  }
  submitTodo(){
    if (this.state.inputValue.match(/^\s*$/)) {
      return 
    }
    const todo = {
      title: this.state.inputValue,
      todoIndex,
      complete: false
    }
    todoIndex++
    const todos = [...this.state.todos, todo]
    this.setState({todos, inputValue: ''}, ()=> {
      console.log('State: ', this.state)
    })
  }
  render() {
    const {inputValue, todos, type} = this.state
    return (
    <View style={styles.container}>
      <ScrollView keyboardShouldPersistTaps='always'
        style={styles.content}>
              <Header />
              <Input  
               inputValue={inputValue}
               inputChange={(text) => this.inputChange(text)}
              />
      <TodoList 
      type={type}
      todos = {todos} 
      toggleComplete={this.toggleComplete} 
      deleteTodo={this.deleteTodo}/>
      <Button  submitTodo={this.submitTodo} />
      </ScrollView>
      <TabBar type={type} setType={this.setType} />
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: "center",
  },
  content: {
    flex: 1,
    paddingTop: 60
  }
});

export default App