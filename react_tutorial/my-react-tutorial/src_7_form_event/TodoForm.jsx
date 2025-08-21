import { useState } from "react";
import Title from "./title";

function TodoForm(props){
    const outerStyle = {
        border: "1px solid black",
        padding: "5px"
    }
    let [inputTodo, setInputTodo] = useState("");
    return (
        <div style={outerStyle}>
            <Title title="Todo Form" size="18"/>
            {/* <p>Input Todo: +{inputTodo}+</p> */}
            <form>
                <label>Todo</label> : 
                <input 
                    value={inputTodo}
                    type="text" 
                    placeholder="Enter your task"
                    onChange={function(event){
                        console.log(event.target.value)
                        inputTodo = event.target.value;
                        setInputTodo(inputTodo)
                    }}
                    onBlur={function(){console.log(inputTodo)}}
                    onFocus={function(){console.log("focus")}}
                />
                <button onClick={function(e){
                    e.preventDefault();
                    props.hander(inputTodo)
                    setInputTodo("")
                }}>Submit</button>
            </form>
        </div>
    );
}

export default TodoForm;