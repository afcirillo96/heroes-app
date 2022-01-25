import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../auth/authContext'

export const PublicRoute = ({ children }) => {
    
    const {user} = useContext(AuthContext);//importo el user

    return user.logged//si esta logeado
        ? <Navigate to="/marvel" />//sino, adio
        : children
}
