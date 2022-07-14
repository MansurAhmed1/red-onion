import React from 'react';
import './SocialLogin.css';
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import { useSignInWithGoogle, useSignInWithFacebook, useSignInWithGithub } from 'react-firebase-hooks/auth';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithFacebook, fbUser, fbLoading, fbError] = useSignInWithFacebook(auth);
    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);

    if(error || fbError || gitError){
        toast((error||fbError||gitError).message);
    }

    return (
        <div>
            <ToastContainer/>
            <button onClick={() => signInWithGoogle()} className='social-btn'>
                <img src="https://www.dtl.coventry.domains/wp-content/uploads/2020/07/Google-Logo.png" alt="" />
                Continue With Google
            </button>

            <button onClick={() => signInWithFacebook()} className='social-btn'>
                <img src="https://www.apkmirror.com/wp-content/uploads/2021/11/28/61a4889ec1a4d-384x384.png" alt="" />
                Continue With FaceBook
            </button>

            <button onClick={() => signInWithGithub()} className='social-btn'>
                <img src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU" alt="" />
                Continue With GitHub
            </button>
        </div>
    );
};

export default SocialLogin;