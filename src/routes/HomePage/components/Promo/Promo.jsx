import React from 'react';
import promo from '../../../../assets/promo.png';
import { NavLink } from 'react-router-dom';
import videoIntro from '../../../../assets/videos/intro-vid.mp4';

const Promo = () => {
    return (
        <section className='homepage__promo promo'>
                <video className='promo__video' src={videoIntro} type="video/mp4" muted autoPlay playsInline loop></video>
                <div className="promo__container">
                    <span className='promo__title'>2023 LO TENDRÁ TODO</span>
                    <img className='promo__img' src={promo} alt='ahorra tres meses' />
                    <span className='promo__plan'>CON EL PLAN ANUAL</span>
                    <NavLink className='promo__subscribe button' to={''} data='SUSCRÍBETE AHORA'>SUSCRÍBETE AHORA</NavLink>
                    <span className='promo__restric'>*aplica al plan prepago anual</span>
                </div>
            </section>
    );
};

export {Promo};