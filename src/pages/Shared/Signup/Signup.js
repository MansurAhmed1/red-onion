import React, { useEffect } from 'react';
import NavigateHome from '../NavigateHome/NavigateHome';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../../../images/logo2.png'
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Signup = () => {
    const [createUserWithEmailAndPassword, user,loading,error] = useCreateUserWithEmailAndPassword(auth);
    const navigate=useNavigate();
    const [updateProfile, updating] = useUpdateProfile(auth);

    const handleFromSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confrimPassword.value;

        if (password !== confirmPassword) {
            return toast("Confirm Password Didn't Match")
        }
        else if (password.length < 6) {
            toast('password should have 6 characters');
            return;
        }

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName:name });

        if (error) {
            toast(error.message);
        }
    }

    useEffect(()=>{
        if (user) {
            navigate('/');
            console.log(user);
        }
    } ,[user])

    return (
        <div style={{marginTop:'100px'}}>
            <ToastContainer />
            <NavigateHome></NavigateHome>
            <img src={logo} width='200px' className='mb-2 d-flex justify-content-center' style={{ margin: '0 auto' }} alt='' />
            {/* <h3 className='text-center'>Please Register</h3> */}
            <form onSubmit={handleFromSubmit}>
                <input type="text" name="name" id="name" placeholder='Enter Your Name' />
                <input type="email" name="email" id="email" placeholder='Enter Your Email' required/>
                <input type="password" name="password" id="password" placeholder='Enter Your Password' required/>
                <input type="password" name="confrimPassword" id="confrimPassword" placeholder='Confirm Password' required/>
                <input type="submit" value="Register" />
                <p>Have an Account? <Link to={'/login'} style={{ color: 'crimson' }}>Login Here</Link></p>
                <SocialLogin></SocialLogin>
            </form>
        </div>
    );
};

export default Signup;