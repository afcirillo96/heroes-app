import React, { useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';
import queryString from 'query-string';

export const SearchScreen = () => {

    const location = useLocation();
    const {q = ''} = queryString.parse(location.search);//para leer los query parameters

    const [ fromValues, handleInputChange ] = useForm({//usamos useForm copiado del git del profe. Creamos hook/useForn.js
        searchText: q,
    });

    const { searchText } = fromValues;//desestructuramos
    
    const navigate = useNavigate();
    const handleSearch =(e) => {//creamos el handle search. e es el evento
        e.preventDefault();
        navigate(`?q=${ searchText }`);
    }

    const heroesFiltered = useMemo( ()=> getHeroesByName(q), [q])//mostramos los heroes filtrados con la query

    return (//aqui dentro utilizamos handleInputChange y handleSearch
        <>
            <h1>Búsquedas</h1>
            <hr />

            <div className="row">
                
                <div className="col-5">
                <h4>Buscar</h4>
                <hr />

                <form onSubmit={ handleSearch }>
                    <input
                        type="text"
                        placeholder="Buscar un héroe"
                        className="form-control"
                        name="searchText"
                        autoComplete="off"
                        value={ searchText }
                        onChange={ handleInputChange }
                    />

                    <button
                        className="btn btn-outline-primary m-1"
                        type="submit">
                        Buscar...
                    </button>

                </form>

                </div>

                <div className="col-7">
                    <h4>Resultados</h4>
                    <hr />

                    {
                        (q === '')
                            ? <div className="alert alert-info"> Buscar un Héroe </div>
                            : ( heroesFiltered.length === 0)
                                && <div className="alert alert-danger"> No Hay Resultados: {q}</div>
                    }

                    {
                        heroesFiltered.map(hero => (
                            <HeroCard 
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>

            </div>
        </>
    )
}