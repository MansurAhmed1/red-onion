import React, { useState, useContext } from 'react';
import logo from '../../../images/logo2.png'
import CustomLink from '../../CustomLink/CustomLink';
import { MenuAlt2Icon, ShoppingCartIcon, UserIcon, XIcon } from '@heroicons/react/solid';
import { CartContext } from '../../../App';
import './Header.css'
import Cart from '../Cart/Cart';
import { Badge } from 'react-bootstrap';
import auth from '../../../firebase.init'
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [modalShow, setModalShow] = useState(false);
    const [user] = useAuthState(auth);
    const [showUser, setShowUser] = useState(false);
    const [cart] = useContext(CartContext);
    const [showMenu, setShowMenu] = useState(true);

    return (
        <header className='fixed-top bg-white'>
            <img src={logo} alt="" />
            {
                showMenu &&
                <nav className='nav'>

                    <Cart
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />

                    <button className='border-0 bg-white position-relative' to={'/'} onClick={() => setModalShow(true)}>{<ShoppingCartIcon style={{ width: '30px' }} />}
                        <Badge bg='danger' className='cart-badge d-flex justify-content-center align-items-center'>{cart.length}</Badge>
                    </button>
                    {user ?
                        <button onClick={() => signOut(auth)} className='text-dark border-0 bg-white fw-bolder'>SignOut</button>
                        :
                        <CustomLink to={'/login'}>Login</CustomLink>
                    }
                    {
                        (user !== null && user?.displayName !== null) && <button onClick={() => setShowUser(!showUser)} className='position-relative border-0 bg-white d-flex flex-col justify-content-center'>
                            <UserIcon width={'30px'}></UserIcon>
                            <p className={`position-absolute bg-danger p-1 ${showUser ? '' : 'd-none'}`} style={{ top: '50px', left: '0', width: '130px' }}>{user?.displayName}</p>
                        </button>
                    }
                    <CustomLink className='custom-btn' to={'/signup'}>Signup</CustomLink>
                </nav>}
            <div onClick={() => setShowMenu(!showMenu)} className='menu-icon'>
                {
                    showMenu ?
                    <XIcon width={'30px'}></XIcon>
                    :
                    <MenuAlt2Icon width={'30px'}></MenuAlt2Icon>
                }
            </div>
        </header>
    );
};

export default Header;