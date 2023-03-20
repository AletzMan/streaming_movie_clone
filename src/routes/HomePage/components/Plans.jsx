import React from 'react';
import { Card } from './Card';

const Plans = () => {
    return (
        <section className='homepage__plans plans'>
            <h1 className='plans__title'>Elige tu plan</h1>
            <button className='plans__button'>¿QUÉ ESTÁ INCLUIDO?</button>
            <div className='plans__cards cards'>
                <Card isOffer={true} values={['12 meses', '$1,249.00', 'Igual a $104.08 al mes*']} />
                <Card isOffer={false} values={['1 mes', '$149.00', '']} />
            </div>
        </section>
    );
};

export { Plans };