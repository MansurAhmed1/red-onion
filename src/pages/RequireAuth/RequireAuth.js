import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Spinner from 'react-bootstrap/Spinner';

const RequireAuth = ({children}) => {
    const location = useLocation();
    const [user, loading] = useAuthState(auth);

    if(loading){
        return (
            <div className='text-center text-danger' style={{height:'400px', display:'flex', alignItem:'center', justifyContent:'center'}}>
                <Spinner variant="danger" animation="grow" size="sm" />
                <Spinner variant="danger" animation="grow" />
            </div>
        )
    }

    if(!user){
        return <Navigate to={'/login'} state={{ from : location }} replace/>
    }

    return children;
};

export default RequireAuth;