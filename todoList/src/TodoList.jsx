import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList(){
    let oldStyles = {
        textDecorationLine:"None",
    };
    let newStyles ={
        textDecorationLine:"Line-through",
    };
    let [todos,setTodos] = useState([{task:"sample-task" , id: uuidv4(),isDone:false}]);
    let [newTodo,setNewTodo] = useState("");

    let addNewTask = ()=>{
        setTodos((prevTodos)=>{
            return [...prevTodos,{task:newTodo,id:uuidv4(),isDone:false}];
        });
        setNewTodo("");
    }

    let updateTodoValue = (event)=>{
        setNewTodo(event.target.value);
    }
    let deleteTodo = (id)=>{
        setTodos((prevTodos)=> todos.filter((prevTodos)=> prevTodos.id != id));
        
    }

    let upperCaseAll = ()=>{
        setTodos((prevTodo)=> (
            prevTodo.map((todo)=>{
            return{
                ...todo,task:todo.task.toUpperCase(),
            };
        })
        ));
        
    }

    let upperCaseOne = (id)=>{
        setTodos((prevTodo)=> (
            prevTodo.map((todo)=>{
            if(todo.id == id){
                return{
                ...todo,task:todo.task.toUpperCase(),
            };
            }else{
                return todo;
            }
        })
        ));
    }

    let markAsDone = (id)=>{
        setTodos((prevTodo)=> (
            prevTodo.map((todo)=>{
            if(todo.id == id){
                return{
                ...todo,isDone:true,
            };
            }else{
                return todo;
            }
            
        })
        ));
        
    }

    let markAllAsDone = ()=>{
        setTodos((prevTodo)=> (
            prevTodo.map((todo)=>{
            return{
                ...todo,isDone:true,
            };
        })
        ));
    }

    

    return(
        <div>
            <h2>TodoList</h2>
            <input type="text" placeholder="add a task" value={newTodo} onChange={updateTodoValue}/>
            <button onClick={addNewTask}>Add Task</button>
            <br /><br />
            <hr />
            <h4>Tasks to do :</h4>
            <ul>
                {
                    todos.map((todo)=>(
                       <li key={todo.id}>
                            {todo.isDone ? (<span style={newStyles}>{todo.task}</span>) : 
                                (<span>{todo.task}</span>)};
                        
                        
                        &nbsp;&nbsp;
                        <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                        <button onClick={()=>upperCaseOne(todo.id)}>UpperCase One</button>

                        <button onClick={()=>markAsDone(todo.id)} >Mark as done</button>
                        </li>
                    ))
                }
            </ul>
            <button onClick={upperCaseAll}>UpperCase All</button>
            <button onClick={markAllAsDone}>Mark All As Done</button>
        </div>
    )
}