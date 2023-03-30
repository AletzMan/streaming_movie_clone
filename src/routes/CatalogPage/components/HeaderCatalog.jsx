import { NavLink, useNavigate, useParams } from "react-router-dom";
import { MenuIcon, SearchIcon } from "../../../services/svgFiles";
import logo from '../../../assets/logo-page.svg';
import '../styles/CatalogPageStyles.css';
import { LateralMenu } from "./LateralMenu";
import { useState } from "react";
const HeaderCatalog = () => {
    const navigate = useNavigate();
    const [stateMenuLateral, setStateMenuLateral] = useState(false);
    const param = useParams();
    const nameClass = param.page;
    const profileInfo = localStorage.getItem('user');

    
    const handleMenuState = () => {
        setStateMenuLateral(prevState => !prevState);
    }

    const handleGoToPage = (id) => {
        navigate(`/catalog/search`, { state: { isSearch: true, isMovie: true } });
    }
    
    return (
        <header className="catalog__header headercatalog">
            <nav className="headercatalog__nav navcatalog">
                <button className="navcatalog__menu" onClick={handleMenuState}>
                    <MenuIcon className='navcatalog__menu--icon' />
                </button>
                <NavLink to='/catalog/movies' className={`navcatalog__movies navcatalog__movies--${nameClass} navcatalog__link`} >Películas</NavLink>
                <NavLink to='/catalog/series' className={`navcatalog__series navcatalog__series--${nameClass} navcatalog__link`} >Series</NavLink>
                <NavLink to='/' className='navcatalog__home'>
                    <img className='navcatalog__logo' src={logo} />
                </NavLink>
                <button  onClick={handleGoToPage} className={`navcatalog__search navcatalog__search--${nameClass}`}>
                    <SearchIcon />
                </button>
                <NavLink className='navcatalog__profile userprofile'>
                    <div className="userprofile__logo">
                        <span className="userprofile__initial">{profileInfo.substring(0, 1)}</span>
                    </div>
                    <span className="userprofile__name navcatalog__link">{profileInfo}</span>
                </NavLink>
            </nav>
            <LateralMenu stateMenuLateral={stateMenuLateral} setStateMenuLateral={setStateMenuLateral}/>
        </header>
    );
};

export { HeaderCatalog };