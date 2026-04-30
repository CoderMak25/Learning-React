import {  useState } from "react";

export default function Form(){
    let [username,setUsername] = useState("");

    let changeFunc = (event) =>{
        setUsername(event.target.value);
    }
    return (
        <>
        <label htmlFor="username" style={{color: "white"}}>Username</label>
        <input id="username" type="text" placeholder="enter you name" value={username} onChange={changeFunc}/>
        <button>Submit</button>
        </>
    )
}