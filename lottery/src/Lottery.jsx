import { useState } from "react"
import "./Lottery.css";
import {genRanNum} from "./helper.js";


export default function Lottery(){
    let [ticket,setTicket] = useState(genRanNum(3));

    return (
        <div>
            <h1>Lottery</h1>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
        </div>
    )
}