import React from 'react';
import './CartItem.css';
import { useNavigate } from 'react-router-dom';
import NavigateHome from '../../NavigateHome/NavigateHome';
import { SearchIcon } from '@heroicons/react/solid';
// import {MealContext} from '../../Cart/Cart'

const CartItem = ({cartItem}) => {
    const { name, photo, price } = cartItem;
    const navigate=useNavigate();

    return (
            <div className='cart-item d-flex justify-content-between'>
            <NavigateHome style={{display:'none'}}></NavigateHome>
                <div className='basic-info d-flex'>
                    <img className='img-fluid' src={photo} alt="" />
                    <div>
                        <h5 title={name}>{(name.length>20 || name.length===20)? name.slice(0,15) : name}</h5>
                        <h4 className='text-danger'>$ {price}</h4>
                    </div>
                </div>
                <SearchIcon onClick={()=>navigate(`/meal/${cartItem.id}`)} className='detail-btn'></SearchIcon>
            </div>
    );
};

export default CartItem;