import { NavLink, useNavigate } from "react-router-dom";
import { PlayIcon } from "../../../../../../services/svgFiles";
const BASE_URL_IMG = 'https://image.tmdb.org/t/p/original'

const CardSliderRating = ({ info, isMovie }) => {
    const indexPoint = info.overview.indexOf('.');
    const navigate = useNavigate();

    const handlesButtonInfo = () => {
        navigate('/catalog/details', { state: {id: info.id, isMovie: isMovie}});
    }
    
    return (
        <div className="ratslider">
            <img src={`${BASE_URL_IMG}${info.backdrop_path}`} alt='image movie of' className="ratslider__backdrop" />
            <div className="ratslider__container">
                <div className="ratslider__options">
                    <span className="ratslider__title">{info?.name?.substring(0, 15) || info?.title?.substring(0, 25)}</span>
                    <p className="ratslider__sinopsis">{info.overview.substring(0, indexPoint)}</p>
                    <NavLink className='ratslider__play'>
                        <PlayIcon className='ratslider__play--icon' />
                    </NavLink>
                    <button className='ratslider__info' onClick={handlesButtonInfo}>MÁS INFORMACIÓN</button>
                </div>
                <img src="https://image.tmdb.org/t/p/original/tuomPhY2UtuPTqqFnKMVHvSb724.png" alt="" className="ratslider__logo" />
            </div>
        </div>
    );
};

export { CardSliderRating };