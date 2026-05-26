import React from 'react';
import { Link } from 'react-router-dom';

import '../NavBar.css';

function NavBar() {
    return (
        <nav className="navbar">
            <h1 className="logo">StreamList</h1>

            <div className="nav-links">
                <Link to="/">Home</Link>
                <span>|</span>
                <Link to="/movies">Movies</Link>
                <span>|</span>
                <Link to="/cart">Cart</Link>
                <span>|</span>
                <Link to="/about">About</Link>
            </div>
        </nav>
    );
}

export default NavBar; 