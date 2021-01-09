import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Form from './components/form';
import TodoList from './components/todo-list';

function App() {
  const [inputTodo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Sreenidhi's TODO Tracker</h1>
      </header>
      <Form inputTodo = {inputTodo} setTodo = {setTodo} todoList = {todoList} setTodoList = {setTodoList}/>

      <TodoList/>
    </div>
  );
}

export default App;
