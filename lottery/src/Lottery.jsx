import { useState } from "react"
import "./Lottery.css";
import {genRanNum,sum} from "./helper.js";


export default function Lottery(){
    let [ticket,setTicket] = useState(genRanNum(3));
    let isWinning = sum(ticket) === 15;
    let buyTicket = ()=>{
        setTicket(genRanNum(3));
    }
    return (
        <div className="outerBox">
            <h1>Lottery</h1>
            <div className="ticket">
                <span>{ticket[0]}</span>
                
            </div>
            <button onClick={buyTicket}>Buy New Ticket</button>
            <h3>{isWinning && "Congrats! You won"}</h3>
        </div>
    )
}