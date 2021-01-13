import logo from './components/todoList.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/form';
import TodoList from './components/todo-list';

function App() {
  const [inputTodo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [todoStatus, setTodoStatus] = useState("all");
  const [filteredTodoList, setFilteredTodoList] = useState([]);


  useEffect(()=>{
    filterHandler();
  }, [todoList, todoStatus]);

  const filterHandler=()=>{
    switch(todoStatus){
      case 'completed':
        setFilteredTodoList(todoList.filter((todo)=> todo.completed === true));
        break;
      case 'incomplete':
        setFilteredTodoList(todoList.filter((todo)=> todo.completed === false));
        break;
        default:
        setFilteredTodoList(todoList);
        break;
    }
  } 


  return (
    <div className="App">
      <header>
        <img src={logo} className="logo"></img>
        <h1>TODOs: Lets Get These Done!</h1>
      </header>
      <Form inputTodo = {inputTodo} setTodo = {setTodo} todoList = {todoList} setTodoList = {setTodoList} setTodoStatus = {setTodoStatus}/>

      <TodoList todoList = {todoList} setTodoList = {setTodoList} filteredTodoList ={filteredTodoList}/>
    </div>
  );
}

export default App;
