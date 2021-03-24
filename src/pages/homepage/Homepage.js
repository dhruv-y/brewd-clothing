import React from 'react';
import './homepage.style.scss';
import Directory from '../../components/directory/Directory';

const Homepage = () => (
    <div className='homepage'>
        <h1 className='intro'>FIND YOUR COLLECTION</h1>
        <div className='menu'>
            <Directory></Directory>
        </div>
    </div >
);

export default Homepage;