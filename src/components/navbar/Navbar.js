import React from 'react';
import './navbar.style.scss'

const Navbar = () => (
    <nav className="navbar">
        <div className="container">
            <h1 className="logo">BREWD</h1>
            <ul className="nav">
                <a href="#home">HOME</a>
                <a href="#shop">SHOP</a>
            </ul>
        </div >
    </nav >
);

export default Navbar;