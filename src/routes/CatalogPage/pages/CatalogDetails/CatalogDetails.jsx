
import { useLocation } from 'react-router-dom';
import { BASE_URL_IMG } from '../../../../services/constants';
import { getDetailsTVShows } from '../../../../services/fetchData';
import './styles/CatalogDetailsStyles.css';

const CatalogDetails = () => {
    const serieID = useLocation().state;
    const { loading, details } = getDetailsTVShows(serieID);

    if (!loading)
        console.log(details)
    return (
        <section className='cataloghome'>
            {!loading && <div className='details'>
                <img className={`details__image`} src={BASE_URL_IMG + details.backdrop_path} alt={`image of ${details.name}`}/>
                <span className="details__name">{details.name}</span>
                <p className="details__synopsis">{details.overview}</p>
            </div>}
        </section>
    );
};

export { CatalogDetails };