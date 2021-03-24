import React from 'react';
import './homepage.style.scss';
import Directory from '../../components/directory/Directory';
import Navbar from '../../components/navbar/Navbar'
const Homepage = () => (
    <div className='homepage'>
        <Navbar></Navbar>
        <h1 className='intro'>FIND YOUR COLLECTION</h1>
        <div className='menu'>
            <Directory></Directory>
        </div>
    </div >
);

export default Homepage;