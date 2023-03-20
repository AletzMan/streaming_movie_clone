import React from 'react';
import uuid from 'react-uuid';
import { premieres } from '../../../services/dataMovies';
import { Actor } from './Actor';
const CardPremiere = ({ data }) => {
    return (
        <div className='cardpremiere'>
            <span className='cardpremiere__date'>{data.date}</span>
            <img className='cardpremiere__image' src={data.urlImage} />
            <div className='cardpremiere__info'>
                <h3 className="cardpremiere__title">{data.title}</h3>
                <p className='cardpremiere__sinopsis'>{data.sinopsis}</p>
                <div className="cardpremiere__actors actorspremiere">
                    {data?.actors?.map(actor => (
                        <Actor key={uuid()} info={actor} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export { CardPremiere };