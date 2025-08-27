import { useState } from "react";
import "./Game.css"

function Game(props){
    const [values, setValues] = useState(["X","O","","","","","","",""])
    return (
        <div>
            <h1>Tic-Tac-Toe</h1>
            <button>{values[0]}</button>
            <button className="middleCol">{values[1]}</button>
            <button></button>
            <br/>
            <button className="middleRow"></button>
            <button className="middleRow middleCol"></button>
            <button className="middleRow"></button>
            <br/>
            <button></button>
            <button className="middleCol"></button>
            <button></button>
        </div>
    );
}

export default Game;