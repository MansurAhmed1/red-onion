import React, { useEffect, useState, useContext } from 'react';
import { CartContext } from '../../../App';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import NavigateHome from '../NavigateHome/NavigateHome';
import CartItem from '../Cart/CartItem/CartItem';
import { ToastContainer, toast } from 'react-toastify';
import './CheckOut.css';
import Spinner from 'react-bootstrap/Spinner';

const CheckOut = () => {
    const [user, loading] = useAuthState(auth);
    const [cart, setCart] = useContext(CartContext);
    const navigate=useNavigate();

    let total=0;
    for(const meal of cart){
        total = meal.price + total;
    }
    const tax = total*0.01;
    const fee = tax/10;
    const subTotal = total + tax + fee;

    const formSubmit=(e)=>{
        e.preventDefault();
        toast('PLEASE PLACE YOUR ORDER');
    }

    if(loading){
        return (
            <div>
                <Spinner variant='danger' animation="grow" size="sm" />
                <Spinner variant='danger' animation="grow" />
            </div>
        )
    }

    return (
            <div style={{marginTop:'100px'}} className='checkout'>
            <NavigateHome></NavigateHome>
            <ToastContainer/>
            <div>
            <form onSubmit={formSubmit}>
                <h4>Edit Checkout Details</h4>
                <hr className='w-25 mx-auto border-5'/>
                <input type="text" name="address" id="address" placeholder='Enter Your Address' required/>
                <input type="text" name="City" id="City" placeholder='Your City'/>
                <input type="text" name="password" id="password" readOnly value={user?.email} />
                <textarea type="text" name="instructor" id="instructor" placeholder='Add Delivery Instructor'/>
                <input type="submit" value="Check Out" />
            </form>
            </div>
            <div>
                {cart.slice(0,2).map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem}></CartItem>)}
                {cart.length===0 && <h1>Cart is Empty</h1>}
                <div className='price-menu'>
                <div>
                    <h6>Subtotal~({cart.length}) items:</h6>
                    <b> ${subTotal}</b>
                </div>
                <div>
                    <h6>Total Price :</h6>
                    <b> ${total}</b>
                </div>
                <div>
                    <h6>Tax :</h6>
                    <b> ${tax}</b>
                </div>
                <div>
                    <h6>Delivery Fee :</h6>
                    <b> ${fee}</b>
                </div>
                </div>
                <input type="submit" onClick={formSubmit} className='custom-btn mt-2' style={{width:'300px'}} value="Place Order" />
            </div>
        </div>
        
    );
};

export default CheckOut;