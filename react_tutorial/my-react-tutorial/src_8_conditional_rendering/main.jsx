// state -> isLoggedIn - false
// LoginForm -> Login button => isLoggedIn - true 
// Dashboard -> Logout button => isLoggedIn - false 


// const { createRoot } = require("react-dom/client");
import { useState } from "react"
import { createRoot } from"react-dom/client"

createRoot(document.getElementById("root")).render(
    // jsx - starting code
    <App/>
)

function App(props){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    function login(){
        setIsLoggedIn(true);
    }
    function logout(){
        setIsLoggedIn(false);
    }
    
    
    return (
        <div>
            <h1>IRCTC Portal</h1>
            <h2>isLoggedIn: {isLoggedIn+""}</h2>

            
            {isLoggedIn ? (<Dashboard logoutHandler={function(){
                logout()
            }}/>):(<LoginForm loginHandler={function(){
                login()
            }}/>)}

        </div>
    )
}

function Dashboard(props){
    return (
        <div>
            <h2>Dashboard</h2>
            <p>Your bookings are displayed here.</p>
            <form>
                <button onClick={function(){
                    props.logoutHandler()
                }}>Logout</button>
            </form>
        </div>
    )
}

function LoginForm(props){
    return (
        <div>
            <h2>Login Form</h2>
            <p>Please login to access bookings.</p>
            <form>
                <button onClick={function(){
                    props.loginHandler()
                }}>Login</button>
            </form>
        </div>
    )
}

