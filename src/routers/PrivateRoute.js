import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../auth/authContext'

export const PrivateRoute = ({ children }) => {//children seria como un arreglo de componentes, osea lo que hay en DashboardRoutes
    
    const {user} = useContext(AuthContext);//importo el user
    const { pathname, search } = useLocation();

    localStorage.setItem('lastPath', pathname + search );

    return user.logged//si esta logeado
        ? children//renderizo las rutas
        : <Navigate to="/login" />//sino, adio
}
