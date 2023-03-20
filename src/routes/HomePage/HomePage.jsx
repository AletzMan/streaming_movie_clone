import React from 'react';
import { HeaderHome } from './components/HeaderHome';
import { Promo } from './components/Promo';
import { Plans } from './components/Plans';
import { Premieres } from './components/Premieres';

function HomePage() {
   

    return (
        <main className='homepage'>
            <HeaderHome />
            <Promo />
            <Plans />
            <Premieres />
        </main>
    );
}

export { HomePage };