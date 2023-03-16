import React from 'react';
import { HeaderHome } from './components/HeaderHome';
import promo from '../../assets/promo.png';
import { NavLink } from 'react-router-dom';

function HomePage() {
    return (
        <div>
            <HeaderHome />
            <section className='homepage__promo promo'>
                <span>2023 LO TENDRÁ TODO</span>
                <img src={promo} alt='ahorra tres meses' />
                <span>CON EL PLAN ANUAL</span>
                <NavLink className='homeheader__subscribe' to={''}>SUSCRÍBETE AHORA</NavLink>
                <span>*aplica al plan prepago anual</span>
            </section>
            <section className='homepage__plans plans'>
                <h1>Elige tu plan</h1>
                <button>¿QUÉ ESTÁ INCLUIDO?</button>
                <div className='cardplan'>
                    <span>AHORRA 3 MESES</span>
                    <span>12 meses</span>
                    <span>$1,249.00</span>
                    <span>Igual a $104.08 al mes*</span>
                    <NavLink>ELIGE ESTE PLAN</NavLink>
                    <span>*Requiere pago anticipado. Ahorro basado en plan estándar anual vs plan estándar mensual por 12 meses.</span>
                </div>
            </section>
        </div>
    );
}

export { HomePage };