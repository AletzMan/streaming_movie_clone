import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = ({ isOffer, values }) => {
    console.log(isOffer)
    console.log(values)
    return (<div className='plans__cards cards'>

        {values && <div className='cards__card card'>
            {isOffer && <h2 className='card__title'>AHORRA 3 MESES</h2>}
            <span className='card__months'>{values[0]}</span>
            <span className='card__price'>{values[1]}</span>
            <span className='card__comp'>{values[2]}</span>
            <NavLink className='card__button button'>ELIGE ESTE PLAN</NavLink>
            {isOffer && <span className='card__restric'>*Requiere pago anticipado. Ahorro basado en plan estándar anual vs plan estándar mensual por 12 meses.</span>}
        </div>}
    </div>
    );
};

export { Card };