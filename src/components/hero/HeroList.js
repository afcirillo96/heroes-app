//se encarga de mostrar la lista de los heroes
import React, { useMemo } from 'react'
import { getHerosByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';
import 'animate.css';

export const HeroList = ( {publisher} ) => {//publisher para saber q heroes que voy a mostrar. 
                                        // //Podriamos usar props, pero lo desestructuramos para buscar por publisher
    
    const heroes = useMemo( ()=> getHerosByPublisher(publisher) , [publisher] );//useMemo memoriza valores u objetos
    
    //Aqui dentro del return mostramos la lista de los heroes con el .map
    //y lo identificamos con el id y el nombre (superhero)
    return (                               
        <div className="row rows-cols-1 row-cols-md3 g-3 animate__animated animate__fadeIn">
            {
                heroes.map( hero => (
                    <HeroCard 
                        key={ hero.id }
                        { ...hero }
                    />
                ))
            }
        </div>
    )
}
