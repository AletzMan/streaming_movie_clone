import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import uuid from "react-uuid";
import { genresMovies, MENU_OPTIONS } from "../../../services/constants";
import { ArrowIcon, CloseIcon } from "../../../services/svgFiles";
import './LateralMenuStyles.css';

const LateralMenu = ({ stateMenuLateral, setStateMenuLateral }) => {
    const [stateMenu, setMenuState] = useState(false);
    const navigate = useNavigate();

    const handleMenuMove = () => {
        setMenuState(prevState => !prevState);
    }
    const handleMenuBlur = () => {
       // setMenuState(false);
    }
    const handleMenuClose = () => {
        setStateMenuLateral(prevState => !prevState);
    }
    const handleGoToPage = (link, isGenrer, name) => {
        console.log('GO')
        if (isGenrer) {
            navigate('/catalog/search', { state: { name: name, isSearch: false, isMovie: true, isGenrer: true, id: link } });
        } else {
            navigate(link, { state: { isSearch: true, isMovie: false } });
        }
        setStateMenuLateral(prevState => !prevState);
        setMenuState(false);
    }



    return (
        <section className={`catalog__lateralmenu lateralmenu lateralmenu__${stateMenuLateral}`}>
            <div className="lateralmenu__back" onClick={handleMenuClose}></div>
            <button className="lateralmenu__close" onClick={handleMenuClose}>
                <CloseIcon className='lateralmenu__close--icon' />
            </button>
            {MENU_OPTIONS.map(option => (
                <button key={option.id} className='lateralmenu__link' onClick={() => handleGoToPage(option.link, false)}>{option.name}</button>
            ))}
            <button className='lateralmenu__genres' onBlur={handleMenuBlur} onClick={handleMenuMove}>Géneros
                <ArrowIcon className='lateralmenu__genres--arrow' />
            </button>
            <nav className={`lateralmenu__submenu genresmenu genresmenu__${stateMenu}`}>
                {genresMovies.map(option => (
                    <button key={uuid()} className='lateralmenu__sublink' onClick={() => handleGoToPage(option.id, true, option.name)}>{option.name}</button>
                ))}
            </nav>
        </section>
    );
};

export { LateralMenu };