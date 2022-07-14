import React from 'react';
import { HomeIcon } from '@heroicons/react/solid';
import { useNavigate } from 'react-router-dom';
import './NavigateHome.css'

const NavigateHome = () => {
    const navigate = useNavigate();
    return (
      <div onClick={() => navigate('/')} className='d-flex p-2 home-icon'>

        <HomeIcon
          
        ></HomeIcon>
      </div>
    );
};

export default NavigateHome;