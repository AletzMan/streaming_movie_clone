import React from 'react';
import { HeaderHome } from './components/HeaderHome';
import promo from '../../assets/promo.png';
import { NavLink } from 'react-router-dom';
import videoIntro from '../../assets/videos/intro-vid.mp4';
import { Card } from './components/Card';

function HomePage() {
    return (
        <main className='homepage'>
            <HeaderHome />
            <section className='homepage__promo promo'>
                <video className='promo__video' src={videoIntro} type="video/mp4" muted autoPlay playsInline></video>
                <span className='promo__title'>2023 LO TENDRÁ TODO</span>
                <img className='promo__img' src={promo} alt='ahorra tres meses' />
                <span className='promo__plan'>CON EL PLAN ANUAL</span>
                <NavLink className='promo__subscribe button' to={''} data='SUSCRÍBETE AHORA'>SUSCRÍBETE AHORA</NavLink>
                <span className='promo__restric'>*aplica al plan prepago anual</span>
            </section>
            <section className='homepage__plans plans'>
                <h1 className='plans__title'>Elige tu plan</h1>
                <button className='plans__button'>¿QUÉ ESTÁ INCLUIDO?</button>
               <Card />
            </section>
        </main>
    );
}

export { HomePage };