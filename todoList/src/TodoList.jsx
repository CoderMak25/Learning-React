import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList(){

    let [todos,setTodos] = useState([{task:"sample-task" , id: uuidv4()}]);
    let [newTodo,setNewTodo] = useState("");

    let addNewTask = ()=>{
        setTodos([...todos,{task:newTodo,id:uuidv4()}]);
        setNewTodo("");
    }

    let updateTodoValue = (event)=>{
        setNewTodo(event.target.value);
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
                       <li key={todo.id}>{todo.task}</li>
                    ))
                }
            </ul>

        </div>
    )
}