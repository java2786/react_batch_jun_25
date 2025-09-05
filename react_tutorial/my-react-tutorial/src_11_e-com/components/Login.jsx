import { useState } from "react";

export default function Login({setIsLoggedIn}){
    const [username, setUsername] = useState("demo");
    const [password, setPassword] = useState("demo123");
    function handleSubmit(){
        console.log("Data: "+username+", "+password);
    }
    return (
        <div>
            <h1>Login Page</h1>

            <form onSubmit={function(event){
                event.preventDefault();
                handleSubmit();
            }}>
                <label>Username</label>
                <input type="text" value={username} onChange={function(event){
                    setUsername(event.target.value)
                }}/>
                <br />
                <label>Password</label>
                <input type="text" value={password} onChange={function(event){
                    setPassword(event.target.value)
                }}/>

                <br />
                <button type="submit">Login</button>
            </form>

            {/* <button onClick={function(){
                setIsLoggedIn(true);
            }}>Login</button> */}
        </div>
    );
}