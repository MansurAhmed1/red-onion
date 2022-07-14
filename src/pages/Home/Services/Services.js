import React from 'react';
import './Services.css'
import service1 from '../../../images/service1.png';
import service2 from '../../../images/service2.png';
import service3 from '../../../images/service3.png';
import icon1 from '../../../images/icons/icon1.png'
import icon2 from '../../../images/icons/icon2.png'
import icon3 from '../../../images/icons/icon3.png'
import Service from '../Service/Service';

const Services = () => {
    const services = [
        {
            id: '1',
            img: service1,
            icon: icon1,
            title: 'Fast Delivery',
            description: "We'll send you an SMS confirming your order & delivery time. Relax and wait for hot food to be conveniently delivered to you!"
        },

        {
            id: '2',
            img: service2,
            icon: icon2,
            title: 'A Good Auto Responder',
            description: "If you have any query or question we are always there to answer you. Just Pick Your phone and call us by that number."
        },

        {
            id: '3',
            img: service3,
            icon: icon3,
            title: 'Home Delivery',
            description: 'Browse the menu and select the items you will like to order and It will be delivered straight away to your home address!'
        }

    ];

    return (
        <div className='py-5'>
            <div className="col-lg-6 ps-5 text-justify">
                <h3 className='pb-2'>Why Choose Us?</h3>
                <p>Red Onion Resturant is a simple service to order food from a variety of restaurants online. Enjoy different cuisines and flavours delivered to your door step.</p>
            </div>
            <div className='services'>
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;