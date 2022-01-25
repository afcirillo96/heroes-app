import { heroes } from '../data/heroes';

export const getHeroesByName = ( name = '' ) => {
    
    if( name.length === 0 ){    //si no hay nada, no se busca nada
        return [];
    }
    else {
        name = name.toLowerCase();//sino, que muestre el heroe q se busco, filtrando entre ellos.
        return heroes.filter( hero => hero.superhero.toLowerCase().includes(name) );
    }
    
}