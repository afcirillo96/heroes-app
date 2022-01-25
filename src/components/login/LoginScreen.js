import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { types } from '../../types/types';
import { AuthContext } from '../../auth/authContext';

export const LoginScreen = () => {

    const navigate = useNavigate();
    const {dispatch} = useContext(AuthContext);

    const handleLogin = () => {//metodo de logeuo
        
        const action = {//creo la accion
            type: types.login,
            payload: {name: 'Agustin'}
        }

        dispatch(action);

        const lastPath = localStorage.getItem('lastPath') || '/marvel';//elijo el ultimo path y si no existe entonces /marvel

        navigate(lastPath, {
            replace: true
        });
    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <button 
                className="btn btn-primary"
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}