import { useState } from "react";

export function Counter(){
    const title = "My Counter App";
    // let num = 45;
    let [num, setNum] = useState(32)
    const increment = function(){
        console.log("increasing num: "+num);
        setNum(num+1)
        console.log("increased num: "+num);
    }
    return (
        <div> 
            <h4>{title}</h4>
            <h3>Num: {num}</h3>
            <button onClick={increment}>Increment</button>
        </div>
    );
}