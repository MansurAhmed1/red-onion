import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { img, icon, title, description } = service;

    return (
        <div className='service'>
            <img src={img} className='img-fluid' alt="" />
            <div className='service-info d-flex'>
                <img src={icon} className='img-fluid' alt="" />
                <div>
                    <h5>{title}</h5>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;