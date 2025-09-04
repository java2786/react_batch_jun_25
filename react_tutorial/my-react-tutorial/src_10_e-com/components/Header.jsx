import { Link } from "react-router";

import "./Header.css";

function Header(){


    return (
        <header id="header">
            <span><Link to="/">Home</Link></span> 
            <span><Link to="/login">Login</Link></span> 
            <span><Link>Logout</Link></span> 
            <span><Link to="/about">About</Link></span> 
            <span><Link to="/item-list">Items</Link></span> 
            <span><Link to="/pay">Buy</Link></span> 
        </header>
    );
}

export default Header;