import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Card = ({ isOffer, values }) => {
const navigate = useNavigate();
const handlerButtonPlan = () =>{
    navigate('create-account', { state: values[1] });
}

    return (
        <>
            {values &&
                <div className={`cards__card card card__${isOffer}`}>
                    {isOffer && <h2 className='card__title'>AHORRA 3 MESES</h2>}
                    <span className='card__months'>{values[0]}</span>
                    <span className='card__price'>{values[1]}</span>
                    <span className='card__comp'>{values[2]}</span>
                    <button onClick={handlerButtonPlan} className='card__button button'>ELIGE ESTE PLAN</button>
                    {isOffer && <span className='card__restric'>*Requiere pago anticipado. Ahorro basado en plan estándar anual vs plan estándar mensual por 12 meses.</span>}
                </div>}
        </>
    );
};

export { Card };