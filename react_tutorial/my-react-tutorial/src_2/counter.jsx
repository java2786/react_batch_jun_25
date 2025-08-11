import { useState } from "react";

export function Counter(){
    const title = "My Counter App";
    // let num = 45;
    let [num, setNum] = useState(0)
    const increment = function(){
        console.log("increasing num: "+num);
        setNum(num+1)
    }

    const dec = function(){
        num--;
        console.log(num)
        setNum(num)
    }
    return (
        <div> 
            <h4>{title}</h4>
            <h3>Num: {num}</h3>
            <button onClick={increment}>Increment</button>
            <button onClick={dec}>Dec</button>
        </div>
    );
}