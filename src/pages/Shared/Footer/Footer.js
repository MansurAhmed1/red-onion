import React from 'react';
import './Footer.css'
import logo from '../../../images/logo.png'

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer>
            <div className='d-flex justify-content-between my-3 mb-5'>
                <img src={logo} width='150px' height={'40px'} alt="" />

                <div className='d-flex gap-4'>
                    <ul className='text-decoration-none'>
                        <li>About Online Food</li>
                        <li>Read Our Blog</li>
                        <li>Sign up To Deliver</li>
                        <li>Add Your Restuarant</li>
                    </ul>

                    <ul className='text-decoration-none'>
                        <li>Get Help</li>
                        <li>Read FAQs</li>
                        <li>View All Cities</li>
                        <li>Restuarants near me</li>
                    </ul>
                </div>
            </div>

            <div className='d-flex justify-content-between'>
                <p>©{year} Developer-Barsha</p>
                <ul className='d-flex text-decoration-none'>
                    <li>Privacy Policy</li>
                    <li>Terms Of Conditions</li>
                    <li>Pricing</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;