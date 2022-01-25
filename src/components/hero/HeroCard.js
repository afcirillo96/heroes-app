import React from 'react'
import { Link } from 'react-router-dom';
import { heroImages } from '../../helpers/heroImages';

export const HeroCard = ({//tiene todo lo que contiene una carte de heroe

    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,

}) => {//tarjeta por heroe

    //const imagePath =`/assets/${id}.jpg`; //para el path de las imagenes. ya no se usa

    return (
        <div className="col animate__animated animate__fadeIn">{/* columa*/}
            <div className="card">{/* tarjeta*/}

                <div className="row no-gutters">
                    <div className="col-15">
                        <img src={ heroImages(`./${id}.jpg`).default } className="card-img" alt={superhero} />{/* IMAGEN */}
                    </div>

                        <div className="col-8"/>
                        <div className="card-body"> {/* CUERPO DE LA TARJETA*/}

                            <h5 className="card-title">{superhero}</h5> {/* NOMBRE*/}
                            <p className="card-text">{alter_ego}</p> {/* ALTER EGO*/}

                            {/* SI ESTO ES VERDADERO, SE MUESTRA LOS CHRACTERS. Si el atler ego es distinto que characters, se muestra*/
                                ( alter_ego !== characters )
                                && <p className="text-muted">{ characters }</p>
                            }

                            <p className="card-text">
                                <small className="text-muted">{ first_appearance }</small>  {/* PRIMERA APARICION */}
                            </p>

                            <Link to={`/hero/${id}`}>   {/* MAS INFO. CON LINK TE LLEVA A LA DIRECCION /hero/id */}
                                Más...
                            </Link>

                        </div>
                </div>

            </div>

        </div>

    )
}
