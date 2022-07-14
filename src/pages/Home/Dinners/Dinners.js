import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../../../App';
import Meal from '../Meal/Meal';

const Dinners = () => {
    const [cart, setCart] = useContext(CartContext);
    const [dinners, setDinners] = useState([]);

    useEffect(() => {
        fetch('dinner.json')
            .then(res => res.json())
            .then(data => setDinners(data))
    }, []);

    const addToCart = (meal) => {
        if (cart.includes(meal) === !1) {
            let addedItems = [...cart, meal];
            setCart(addedItems);
        } else {
            alert('already added');
        }
    };

    return (
        <div>
            <div className='meals'>
                {
                    dinners.map(meal => <Meal key={meal.id} addToCart={addToCart} meal={meal}></Meal>)
                }
            </div>
        </div>
    );
};

export default Dinners;