import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import Home from "./components/Home";
import Login from "./components/Login";
import About from "./components/About";
import Items from "./components/Items";
import Payment from "./components/Payment";
import Header from "./components/Header";

import "./main.css";

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/item-list" element={<Items/>}/>
            <Route path="/pay" element={<Payment/>}/>
        </Routes>
    </BrowserRouter>
);