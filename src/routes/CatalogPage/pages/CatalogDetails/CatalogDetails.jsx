
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { VideoPlayer } from '../../../../components/VideoPlayer/VideoPLayer';
import { BASE_URL_IMG } from '../../../../services/constants';
import { getCollections, getDetailsMovie, getDetailsTVShows } from '../../../../services/fetchData';
import { AddTwoIcon, CheckIcon, PlayTwoIcon, TrailerIcon } from '../../../../services/svgFiles';
import { SectionCredits } from '../components/SectionCredits/SectionCredits';
import { SliderSquare } from '../components/SliderSquare/SliderSquare';
import { ChapterSeason } from './components/ChapterSeason';
import './styles/CatalogDetailsStyles.css';

const CatalogDetails = () => {
    const [videoView, setVideoView] = useState(false);
    const [dataVideo, setDataVideo] = useState(null);
    const movieOrSerieID = useLocation().state.id;
    const isMovie = useLocation().state.isMovie;

    const { loading, details } = isMovie ? getDetailsMovie(movieOrSerieID) : getDetailsTVShows(movieOrSerieID);
    const { loadingCollection, searchCollection } = getCollections(details?.belongs_to_collection?.id);


    function handleCloseVideo(value) {
        setVideoView(value);
        setDataVideo(details);
    }

    console.log(details)

    return (
        <section className='cataloghome'>
            {!loading &&
                <>
                    <div className='details'>
                        <img draggable={false} className={`details__image`} src={`${BASE_URL_IMG}${details.backdrop_path || details.poster_path}`} alt={`image of ${details.name}`} />
                        <div className="details__info infodetails">
                            {details.genres.map(genrer => (
                                <span key={genrer.id} className='infodetails__genres'>{`${genrer.name}`}</span>
                            ))}
                            <h2 className="infodetails__name">{details?.name || details?.title}</h2>
                            <span className="infodetails__tagline">{details.tagline}</span>
                            <button className={`infodetails__watch infodetails__watch--${isMovie}`} onClick={() => handleCloseVideo(true)}>
                                <PlayTwoIcon className='infodetails__watchicon' />
                                {!isMovie && <span className="infodetails__watchsession">S1 E1</span>}
                            </button>
                            <div className='infodetails__addcontainer addcontainer' >
                                <input className='infodetails__check addcontainer__check' type='checkbox' ></input>
                                <AddTwoIcon className='infodetails__addicon addcontainer__addicon' />
                                <CheckIcon className='infodetails__checkicon addcontainer__checkicon' />
                            </div>
                            {isMovie &&
                                <div className='infodetails__informationmovie informationmovie'>
                                    <span className="informationmovie__time">{`${details.runtime} MIN`}</span>
                                    <span className="informationmovie__year">{details.release_date.substring(0, 4)}</span>
                                    <span className="informationmovie__rating">{details.vote_average.toString().substring(0, 3)}</span>
                                </div>
                            }
                            <p className="infodetails__synopsis">{details.overview}</p>
                            <button className="infodetails__trailerbutton" onClick={() => handleCloseVideo(true)}>
                                <TrailerIcon className={'infodetails__icontrailer'} />
                                <span className="infodetails__texttrailer">TRAILER</span>
                            </button>
                        </div>

                    </div>
                    <article className='infodetails__companies companiesinfo'>
                        {details.production_companies.map(companie => (
                            <div key={companie.id} className='companiesinfo__companie'>
                                <span className='companiesinfo__companie'>{companie.name}</span>
                            </div>
                        ))}
                    </article>
                    {(videoView && !loading) &&
                        <VideoPlayer details={dataVideo} urlVideo={details.videos} closeVideo={handleCloseVideo} />
                    }
                    {(!loading && isMovie) && <SectionCredits credits={details.credits} isMovie={isMovie} />}
                    {!isMovie && <ChapterSeason details={details} serieID={details.id} />}
                    {(!loading && !isMovie) && <SectionCredits credits={details.credits} />}
                    {(!loadingCollection && searchCollection !== 404) && <SliderSquare data={searchCollection.parts} title={'De la misma colección'} isMovie={isMovie} />}
                    {!loading && <SliderSquare data={details.similar.results} title={'Recomendaciones similires'} isMovie={isMovie} />}
                </>
            }
        </section>
    );
};

export { CatalogDetails };