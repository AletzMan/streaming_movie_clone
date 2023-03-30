import { useLocation } from 'react-router-dom';
import { BASE_URL_IMG, IMG_DEFAULT_PROFILE } from '../../../../services/constants';
import { getBiography } from '../../../../services/fetchData';
import { SliderSquare } from '../components/SliderSquare/SliderSquare';
import './BiographyViewStyles.css';

function BiographyView() {
    const idActor = useLocation().state.id;
    const { loadingBiography, biography } = getBiography(idActor);
    
    return (
        <main className="biographyview">
            <h1 className="biographyview__title">Biografía</h1>
            <article className='biographyview__article biography'>
                <div className="biography__container">
                    <img className="biography__photo" src={(BASE_URL_IMG + biography.profile_path) || IMG_DEFAULT_PROFILE} alt={`foto de ${biography.name}`} />
                    <h2 className="biography__name">{biography.name}</h2>
                    <span className="biography__date">{biography.birthday}</span>
                    <span className="biography__place">{biography.place_of_birth}</span>
                </div>
                <p className="biography__description">{biography.biography}</p>
            </article>
            {!loadingBiography && <SliderSquare data={biography.credits.cast} title={`Películas de ${biography.name}`} isMovie isGenrer />}
            {!loadingBiography && <SliderSquare data={biography.tv_credits.cast} title={`Series de ${biography.name}`}  isGenrer />}
        </main>
    );
}

export { BiographyView };