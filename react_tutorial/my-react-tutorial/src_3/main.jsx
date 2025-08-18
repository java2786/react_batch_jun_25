// nested component

import { createRoot } from "react-dom/client";
import "./MyButton.css";

function MyButton(props){
    console.log(!!props.bgColor)

    const btnCssObj = {
        background: !!props.bgColor?props.bgColor:"#042423ff",
        border: "1px solid black",
        borderRadius: "5px",
        padding: "5px 8px",
        color: "white",
        margin: "2px 5px",
        width: "150px"
    };
    return (
        <button onClick={function(){
            props.handler("Login123")
        }} className="mybtn" style={btnCssObj}>{props.label}</button>
    );
}


createRoot(document.getElementById("root")).render(
    <div>
        <MyButton handler={function(task){
            console.log(task)
        }} label="Login" bgColor="#497a49ff" />
        <MyButton label="Buy" bgColor="#415e89ff" />
        <MyButton label="Delete" bgColor="#7e331aff" />
        <MyButton label="Home" />

        {/* <button>Login</button>
        <button>Buy</button>
        <button>Delete</button> */}
    </div>
)