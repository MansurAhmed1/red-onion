import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home/Home';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';
import Login from './pages/Shared/Login/Login';
import MealDetails from './pages/Shared/MealDetails/MealDetails';
import Signup from './pages/Shared/Signup/Signup';
import CheckOut from './pages/Shared/CheckOut/CheckOut';
import RequireAuth from './pages/RequireAuth/RequireAuth';
export const CartContext = createContext([]);
// export const MealContext=createContext([]);

function App() {
  
  const [cart, setCart] = useState([]);
  // cnst [meal, setMeal] = useState({});

  return (
    <CartContext.Provider value={[cart, setCart]}>
      <div>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/meal/:mealId' element={<MealDetails />}></Route>
          <Route path='/checkout' element={<RequireAuth><CheckOut /></RequireAuth>}></Route>
          <Route path='/signup' element={<Signup />}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </CartContext.Provider>
  );
}

export default App;
