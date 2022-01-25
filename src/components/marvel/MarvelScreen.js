import React from 'react'
import { HeroList } from '../hero/HeroList';


export const MarvelScreen = () => {

    //renderizamos HeroList para q muestre la lista de heroes
    return (
        <div>
            <h1>MarvelScreen</h1>
            <hr />

            <HeroList publisher="Marvel Comics"/>

        </div>
    )
}