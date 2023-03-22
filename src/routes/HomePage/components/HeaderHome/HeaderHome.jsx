import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../../assets/logo-page.svg';

function HeaderHome() {
    return (
        <header className='homeheader'>
            <a href="/" className="homeheader__link">
                <img className='homeheader__logo' src={logo} />
            </a>
            <nav className='homeheader__nav'>
                <NavLink className='homeheader__sign' to={'profile-select'}>INGRESA</NavLink>
                <NavLink className='homeheader__subscribe' to={'plan-picker'}>SUSCRÍBETE AHORA</NavLink>
            </nav>
        </header>
    );
}

export { HeaderHome };