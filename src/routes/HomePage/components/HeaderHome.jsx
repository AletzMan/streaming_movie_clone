import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/logo-page.svg';
import '../../styles/HomePageStyle.css';

function HeaderHome() {
    return (
        <header className='homeheader'>
            <img className='homeheader__logo' src={logo} />
            <nav className='homeheader__nav'>
                <NavLink className='homeheader__sign' to={''}>INGRESA</NavLink>
                <NavLink className='homeheader__subscribe' to={''}>SUSCRÍBETE AHORA</NavLink>
            </nav>
        </header>
    );
}

export { HeaderHome };