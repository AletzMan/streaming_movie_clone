import { NavLink, useParams } from "react-router-dom";
import { MenuIcon, SearchIcon } from "../../../services/svgFiles";
import logo from '../../../assets/logo-page.svg';
import '../styles/CatalogPageStyles.css';
import { LateralMenu } from "./LateralMenu";
import { useEffect, useState } from "react";
const HeaderCatalog = () => {
    const [stateMenuLateral, setStateMenuLateral] = useState(false);
    const param = useParams();
    const nameClass = param.page;

    const handleMenuState = () => {
        console.log(stateMenuLateral)
        setStateMenuLateral(prevState => !prevState);
        console.log(stateMenuLateral)
    }
    
    return (
        <header className="catalog__header headercatalog">
            <nav className="headercatalog__nav navcatalog">
                <button className="navcatalog__menu" onClick={handleMenuState}>
                    <MenuIcon className='navcatalog__menu--icon' />
                </button>
                <NavLink to='/catalog/movies' className={`navcatalog__movies navcatalog__movies--${nameClass} navcatalog__link`} >Películas</NavLink>
                <NavLink to='/catalog/series' className={`navcatalog__series navcatalog__series--${nameClass} navcatalog__link`} >Series</NavLink>
                <NavLink to='/catalog/home' className='navcatalog__home'>
                    <img className='navcatalog__logo' src={logo} />
                </NavLink>
                <NavLink to='/catalog/search' className={`navcatalog__search navcatalog__search--${nameClass}`}>
                    <SearchIcon />
                </NavLink>
                <NavLink className='navcatalog__profile userprofile'>
                    <div className="userprofile__logo">
                        <span className="userprofile__initial">A</span>
                    </div>
                    <span className="userprofile__name navcatalog__link">Maria Jose</span>
                </NavLink>
            </nav>
            <LateralMenu stateMenuLateral={stateMenuLateral} setStateMenuLateral={setStateMenuLateral}/>
        </header>
    );
};

export { HeaderCatalog };