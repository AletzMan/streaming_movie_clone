import { useState } from "react";
import { NavLink } from "react-router-dom";
import uuid from "react-uuid";
import { ArrowIcon, CloseIcon } from "../../../services/svgFiles";

const LateralMenu = ({ stateMenuLateral, setStateMenuLateral }) => {
    const [stateMenu, setMenuState] = useState(false);

    const handleMenuMove = () => {
        setMenuState(prevState => !prevState);
    }
    const handleMenuBlur = () => {
        setMenuState(false);
    }
    const handleMenuClose = () => {
        setStateMenuLateral(prevState => !prevState);
    }

    const menuOptions = ['Home', 'Series', 'Películas', 'Originales', 'Recien agregado', 'Última oportunidad', 'Muy pronto', 'Trending']
    const genresOptions = ['Acción', 'Animación', 'Comedia', 'Delito', 'Documentales', 'Drama', 'Fantasía y ciencia ficción', 'Terror y suspenso', 'Internacional', 'Niños y Familia', 'Producciones Locales', 'Romance']
    return (
        <section className={`catalog__lateralmenu lateralmenu lateralmenu__${stateMenuLateral}`}>
            <div className="lateralmenu__back" onClick={handleMenuClose}></div>
            <button className="lateralmenu__close" onClick={handleMenuClose}>
            <CloseIcon className='lateralmenu__close--icon' />
            </button>
            {menuOptions.map(option => (
                <NavLink key={uuid()} className='lateralmenu__link'>{option}</NavLink>
            ))}
            <button className='lateralmenu__genres' onBlur={handleMenuBlur} onClick={handleMenuMove}>Géneros
                <ArrowIcon className='lateralmenu__genres--arrow' />
            </button>
            <nav className={`lateralmenu__submenu genresmenu genresmenu__${stateMenu}`}>
                {genresOptions.map(option => (
                    <NavLink key={uuid()} className='lateralmenu__link'>{option}</NavLink>
                ))}
            </nav>
        </section>
    );
};

export { LateralMenu };