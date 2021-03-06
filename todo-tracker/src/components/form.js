import React from 'react';

const Form = ({ setTodo, todoList, setTodoList, inputTodo, setTodoStatus }) =>{
    function  setTodoHandler(e) {
        //console.log(e.target.value);
        setTodo(e.target.value);
    }

    function submitTodoHandler(e) {
        e.preventDefault();
        setTodoList([...todoList,
        {
            text: inputTodo, completed: false, id: Math.random()*3000
        }]);
        setTodo("");
    }

    function todoStatus(e) {
        setTodoStatus(e.target.value) 
    }
    return(
        <form>
            <input value={inputTodo} onChange={setTodoHandler} className ="input-item" type = "text" placeholder="Task"></input>
            <button onClick={submitTodoHandler}className ="add-item" type= "submit" >
            <i className="fa fa-plus-square-o fa-3x" aria-hidden="true"></i>
            </button>
            <div className="select">
                <select onClick={todoStatus} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="incomplete">Incomplete</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
        </form>
    );
}

export default Form;