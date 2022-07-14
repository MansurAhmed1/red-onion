import 'react-toastify/dist/ReactToastify.css';
import './Meal.css'

const Meal = ({ meal, addToCart }) => {
    const { name, photo, price, description } = meal;

    return (
        <div onClick={()=>addToCart(meal)} className='meal'>
            <img className='img-fluid p-3' src={photo} alt="" />
            <h4 className='pb-2 text-danger'>{name}</h4>
            <p>{description}</p>
            <h5 className='price'>$ <span>{price}</span></h5>
        </div>
    );
};

export default Meal;