import React, { useMemo } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

import { heroImages } from '../../helpers/heroImages';
//import batman from '../../assets'; //estatico


export const HeroScreen = () => {

    const {heroeId} = useParams();//usePARAMS para dirigirnos a la ventana individual de cada heroe
    
    const hero = useMemo( ()=> getHeroById(heroeId), [ heroeId ] ); //heroeId es la dependencia, solo bajo esa condicion
                                                                   //useMemo memoriza alores u objetos
    const navigate = useNavigate();//usamos el hook useNavigate

    const handleReturn = () => {
        navigate( -1 ); //utilizamos el navigate y le ponemos -1 para que retorne a la pag anterior
    }
    if (!hero) {
        return <Navigate to='/' />  //navigate especial para cuanodo te equivocas de url q te lleve a la ppal
    }

    const {//desestructuramos heroe
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero;

    //const imagePath=`/assets/${id}.jpg`;//path de la imagen

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    //src={ '../..assetss/${id}.jpg'} //desde public/assets
                    //src={ batman } // import

                    src={ heroImages(`./${id}.jpg`).default } 
                    alt={ superhero }
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>

            <div className="col-8 animate__animated animate__fadeIn">
                <hr3>{ superhero }</hr3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b>Alter Ego:</b> {alter_ego} </li>
                    <li className="list-group-item"> <b>Publisher:</b> {publisher} </li>
                    <li className="list-group-item"> <b>First Appearance:</b> {first_appearance} </li>
                </ul>

                <h5 className="mt-3">Characters</h5>
                <p>{ characters}</p>

                <button
                    className="btn btn-outline-info"
                    onClick={handleReturn}
                >
                    Regresar
                </button>
            </div>

        </div>
    )
}
