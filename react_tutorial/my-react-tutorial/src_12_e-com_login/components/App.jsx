import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import About from "./About";
import Items from "./Items";
import Payment from "./Payment";
import { useState } from "react";

function App(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <BrowserRouter>
        <Header setIsLoggedIn={setIsLoggedIn} loggedIn={isLoggedIn}/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
            <Route path="/about" element={<About/>}/>
            <Route loggedIn={isLoggedIn} path="/item-list" element={<Items/>}/>
            <Route path="/pay" element={<Payment/>}/>
        </Routes>
    </BrowserRouter>
    );
}
export default App;