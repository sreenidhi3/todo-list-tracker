import React from 'react';
import Todo from './todo.js'
const TodoList = ({todoList, setTodoList, filteredTodoList}) =>{
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodoList.map((todoItem)=>(
                     <Todo todoItem = {todoItem} text = {todoItem.text} id = {todoItem.id} setTodoList = {setTodoList} todoList = {todoList}/>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;