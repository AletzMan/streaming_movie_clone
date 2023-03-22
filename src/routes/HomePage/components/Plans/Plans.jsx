import React, { useEffect, useState } from 'react';
import { Card } from './Card';

const Plans = () => {
    const [includeState, setIncludeStats] = useState(false);

    useEffect(() => {
        if (includeState)
            document.querySelector('.include').style.display = 'grid';
        else
            document.querySelector('.include').style.display = 'none';
    }, [includeState]);

    console.log(includeState)

    return (
        <section className='homepage__plans plans'>
            <h1 className='plans__title'>Elige tu plan</h1>
            <button className={`plans__button plans__button--${includeState}`} onClick={()=> setIncludeStats(prevState => !prevState)}>¿QUÉ ESTÁ INCLUIDO?</button>
            <ul className="plans__include include">
                <li className={`include__option include__option--one`}>Disfruta en todas tus pantallas.</li>
                <li className={`include__option include__option--two`}>Choremecast y Airplay disponibles.</li>
                <li className={`include__option include__option--three`}>Ve en 3 dispositivos a la vez.</li>
                <li className={`include__option include__option--four`}>Contenido en alta definición y 4K.</li>
                <li className={`include__option include__option--five`}>Descarga y disfruta donde sea.</li>
                <li className={`include__option include__option--six`}>Hasta 5 perfiles para toda la familia.</li>
            </ul>
            <div className='plans__cards cards'>
                <Card isOffer={true} values={['12 meses', '$1,249.00', 'Igual a $104.08 al mes*']} />
                <Card isOffer={false} values={['1 mes', '$149.00', '']} />
            </div>
        </section>
    );
};

export { Plans };