import React from 'react';
import './TopSection.css';
import { SearchIcon } from '@heroicons/react/solid'

const TopSection = () => {
    return (
        <div className='top-section mt-5'>
            <h2>Best Food Waiting For You</h2>
            <div className='input-btn'>
                <input type="text" placeholder='Search Food' name='search' />
                <button className='search-btn'>Search <SearchIcon style={{width:'20px'}}/> </button>
            </div>
        </div>
    );
};

export default TopSection;