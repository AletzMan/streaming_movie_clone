import React from 'react';
import { HeaderHome } from './components/HeaderHome';
import promo from '../../assets/promo.png';
import { NavLink } from 'react-router-dom';
import videoIntro from '../../assets/videos/intro-vid.mp4';
import { Card } from './components/Card';
import { CardPremiere } from './components/CardPremiere';
import { ArrowNext } from '../../assets/SVG/SVGFiles';

function HomePage() {
    return (
        <main className='homepage'>
            <HeaderHome />
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
            <section className='homepage__plans plans'>
                <h1 className='plans__title'>Elige tu plan</h1>
                <button className='plans__button'>¿QUÉ ESTÁ INCLUIDO?</button>
                <div className='plans__cards cards'>
                    <Card isOffer={true} values={['12 meses', '$1,249.00', 'Igual a $104.08 al mes*']} />
                    <Card isOffer={false} values={['1 mes', '$149.00', '']} />
                </div>
            </section>
            <section className='homepage__premieres premieres'>
                <h2 className='premieres__title'>Estrenos que se convertirán en nuevos favoritos.</h2>
                <div className="cardslider">
                    <div className="cards__premiere">
                        <CardPremiere />
                        <CardPremiere />
                        <CardPremiere />
                        <CardPremiere />
                        <CardPremiere />
                    </div>
                    <div className='cardsilder__control cardslider__slidercontrol'>
                        <div className="slidercontrol">
                            <span className="slidercontrol__numbercard">1 / 5</span>
                            <ArrowNext className='slidercontrol__prev slidercontrol__buttoncontrol'></ArrowNext>
                            <ArrowNext className='slidercontrol__next slidercontrol__buttoncontrol'></ArrowNext>
                        </div>
                        <button className='subscribe button' >SUBSCRÍBETE AHORA</button>
                    </div>
                </div>
            </section>
        </main>
    );
}

export { HomePage };