import React from 'react';

const Todo = ({todoItem, text, id, setTodoList, todoList})=>{

    const deleteHandler =()=>{
        setTodoList(todoList.filter(el=> el.id !== todoItem.id))
    }

    const completeHandler =()=>{
        setTodoList(todoList.map((el)=>{
            if(el.id === todoItem.id){
                return {...el, completed: !el.completed};
            }
            return el;
        }
    ))
    }

    return(
        <div className="todo">
            <li className={`todo-item ${todoItem.completed ? "completed" : ""}`} key ={id}>{text}
            </li>
            <button className="complete-btn" onClick={completeHandler}> <i className="fa fa-check fa-2x"></i></button>
            <button className="trash-btn" onClick={deleteHandler}> <i className="fa fa-trash fa-2x"></i></button>
        </div>
    );
}

export default Todo;