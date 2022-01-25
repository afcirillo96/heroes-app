import React from 'react'
import { HeroList } from '../hero/HeroList';

export const DcScreen = () => {

    //renderizamos HeroList para q muestre la lista de heroes
    return (
        <div>
            <h1>DCScreen</h1>
            <hr />

            <HeroList publisher="DC Comics"/>

        </div>
    )
}
