import { useState } from "react";
import "./Game.css"

function Game(props){
    const [values, setValues] = useState([".",".",".",".",".",".",".",".","."])
    const [flag, setFlag] = useState(true);
    const [msg, setMsg] = useState("");
    
    function changeValueAtIndex(index){

        if(values[index]=="X" || values[index]=="O"){
            // exit from the function
            // function end
            return;
        }

        console.log("Changing value at "+index)
        if(flag==true){
            values[index] = "X";
            // setFlag(false);
        } else {
            values[index] = "O";
            // setFlag(true);
        }
        setFlag(!flag);

        console.log("Flag: "+flag)
        setValues([...values]);
        isWin();
    }
    function isWin(){
        if(isWinCondition()){
            if(flag){
                // x wins
                setMsg("Player X wins");
            } else {
                // 0 wins
                setMsg("Player 0 wins")
            }
            setTimeout(function(){setMsg("")},2000)
            setValues([".",".",".",".",".",".",".",".","."])
        }
    }
    function isWinCondition(){
        // first column
        // second column
        // third column

        // first row
        if(values[0]!=="." && values[0]==values[1] && values[0]==values[2]){
            return true;
        }
        // second row
        if(values[3]!=="." && values[3]==values[4] && values[4]==values[5]){
            return true;
        }
        // third row
        if(values[6]!=="." && values[6]==values[7] && values[8]==values[6]){
            return true;
        }

        // first diagonal
        // second diagonal

    }
    return (
        <div>
            <h1>Tic-Tac-Toe</h1>
            <h3>{msg}</h3>
            <button onClick={function(){
                changeValueAtIndex(0);
            }}>{values[0]}</button>

            <button onClick={function(){
                changeValueAtIndex(1);
            }} className="middleCol">{values[1]}</button>
            <button onClick={function(){
                changeValueAtIndex(2);
            }}>{values[2]}</button>
            <br/>
            <button onClick={function(){
                changeValueAtIndex(3);
            }} className="middleRow">{values[3]}</button>
            <button onClick={function(){
                changeValueAtIndex(4);
            }} className="middleRow middleCol">{values[4]}</button>
            <button onClick={function(){
                changeValueAtIndex(5);
            }} className="middleRow">{values[5]}</button>
            <br/>
            <button onClick={function(){
                changeValueAtIndex(6);
            }}>{values[6]}</button>
            <button onClick={function(){
                changeValueAtIndex(7);
            }} className="middleCol">{values[7]}</button>
            <button onClick={function(){
                changeValueAtIndex(8);
            }}>{values[8]}</button>
        </div>
    );
}

export default Game;