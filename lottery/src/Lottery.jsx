import { useState } from "react"
import "./Lottery.css";
import {genRanNum,sum} from "./helper.js";
import Ticket from "./Ticket.jsx";


export default function Lottery({n=3,winCondition}){
    let [ticket,setTicket] = useState(genRanNum(n));

    let isWinning = winCondition(ticket);

    let buyTicket = ()=>{
        setTicket(genRanNum(n));
    }
    return (
        <div className="outerBox">
            <h1>Lottery</h1>
            <Ticket ticket={ticket}/>
            <button onClick={buyTicket}>Buy New Ticket</button>
            <h3>{isWinning && "Congrats! You won"}</h3>
        </div>
    )
}