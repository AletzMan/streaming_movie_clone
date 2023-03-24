import { NavLink } from "react-router-dom";
import { PlayIcon } from "../../../../../../services/svgFiles";
const BASE_URL_IMG = 'https://image.tmdb.org/t/p/original'

const CardSliderRating = ({ info }) => {
    const indexPoint = info.overview.indexOf('.');

    return (
        <div className="ratslider">
            <img src={`${BASE_URL_IMG}${info.backdrop_path}`} alt='image movie of' className="ratslider__backdrop" />
            <div className="ratslider__container">
                <div className="ratslider__options">
                    <span className="ratslider__title">{info.name.substring(0, 15)}</span>
                    <p className="ratslider__sinopsis">{info.overview.substring(0, indexPoint)}</p>
                    <NavLink className='ratslider__play'>
                        <PlayIcon className='ratslider__play--icon' />
                    </NavLink>
                    <NavLink className='ratslider__info'>MÁS INFORMACIÓN</NavLink>
                </div>
                <img src="https://image.tmdb.org/t/p/original/tuomPhY2UtuPTqqFnKMVHvSb724.png" alt="" className="ratslider__logo" />
            </div>
        </div>
    );
};

export { CardSliderRating };