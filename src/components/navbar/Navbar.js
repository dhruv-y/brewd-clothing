import React from 'react';
import './navbar.style.scss'
import { Link } from 'react-router-dom'

const Navbar = () => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            Brewd
        </Link>

        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
        </div>
    </div>
);

export default Navbar;