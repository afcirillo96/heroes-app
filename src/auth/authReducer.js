import { types } from '../types/types';

const state = {//podemos poner tanta info como deseamos
    name: 'Agustin',
    logged: true,
}

//Un reducer es una funcion
export const authReducer = ( state = {}, action ) => {//con un estado igualado a un objeto vacio y una accion
                                //esa action modifica el state y entonces react disparará los cambios que tiene q hacer
    switch ( action.type) {
        case types.login: //importo el types creado y hago el login
            return {
                ...action.payload,  //toda la info
                //name: action.payload.name,//o especifico uno
                logged: true
            }
    
        case types.logout:  //hago el logout
            return {
                logged: false,
            }

        default:
            return state; //siempre necesitamos una excepcion para q no haga ningun cambio
    }
}