import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = () => {
    return (
        <div className='plans__cards cards'>
            <div className='cards__card card'>
                <h2 className='card__title'>AHORRA 3 MESES</h2>
                <span className='card__months'>12 meses</span>
                <span className='card__price'>$1,249.00</span>
                <span className='card__comp'>Igual a $104.08 al mes*</span>
                <NavLink className='card__button button'>ELIGE ESTE PLAN</NavLink>
                <span className='card__restric'>*Requiere pago anticipado. Ahorro basado en plan estándar anual vs plan estándar mensual por 12 meses.</span>
            </div>
        </div>
    );
};

export { Card };