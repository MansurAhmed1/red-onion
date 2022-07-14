import React, { useContext } from 'react';
import { useParams } from "react-router-dom";
import { CartContext } from '../../../App';
import NavigateHome from '../NavigateHome/NavigateHome';
import { useNavigate } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/solid';
import './MealDetails.css';

const MealDetails = () => {
    const { mealId } = useParams();
    const [cart] = useContext(CartContext);
    const navigate = useNavigate();


    const meal = cart.find(item => item.id === mealId);
    // const { name, photo, price, details } = meal;

    return (
        <div className='meal-detail'>
            <NavigateHome></NavigateHome>
            {meal ?
                <div className='d-flex single-meal justify-content-center my-3'>
                    <div className='details'>
                        <h1>{meal?.name}</h1>
                        <p>{meal?.details}</p>
                        <h4 className='text-danger fs-2'>$ {meal?.price}</h4>
                        <button className='d-flex w-75 align-items-center custom-btn my-2 gap-3' onClick={() => navigate('/checkout')}>
                            <ShoppingCartIcon style={{ width: '30px' }}></ShoppingCartIcon>
                            Proceed Checkout
                        </button>
                    </div>
                    <img className='img-fluid' src={meal?.photo} alt="" />
                </div>
                : 
                <h3 className='text-center my-5'>No Item Selected</h3>}
        </div>
    );
};

export default MealDetails;