import React from 'react';
import './navbar.style.scss'

const Navbar = () => (
    <nav class="navbar">
        <div class="container">
            <h1 class="logo">BREWD</h1>
            <ul class="nav">
                <a href="#home">HOME</a>
                <a href="#about">ABOUT</a>
            </ul>
        </div >
    </nav >
);

export default Navbar;