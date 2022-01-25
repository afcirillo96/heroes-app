import { AppRouter } from './routers/AppRouter';
import { AuthContext } from './auth/authContext';
import { useEffect, useReducer } from 'react';
import { authReducer } from './auth/authReducer';

const init = () => {//verfica si tenemos alguna info en el storage
    return JSON.parse( localStorage.getItem('user') ) || { logged: false };
}
export const HeroesApp = () => {
    
    const [ user, dispatch ] = useReducer( authReducer, {}, init );//en el objeto vacio será el init q le pasemos
    
    useEffect(() => {//creamos un useEffect para guardar el usuario y no se pierda
        if ( !user ) return;
        localStorage.setItem('user', JSON.stringify(user));
    }, [user])

    return (//agregando el AuthConext.Provider value= podemos poner info q sera leida en todos los componentes hijos
        //esto luego, se manda al appRouter y decidira que ventana mostrar
        <AuthContext.Provider value={{
            user,
            dispatch
        }}> 
            <AppRouter />
        </AuthContext.Provider>
    )
}
