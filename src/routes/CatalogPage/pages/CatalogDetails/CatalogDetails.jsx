
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { BASE_URL_IMG } from '../../../../services/constants';
import { getDetailsMovie, getDetailsTVShows, getSimilarMovies, getSimilarTVShows } from '../../../../services/fetchData';
import { AddTwoIcon, CheckIcon, PlayTwoIcon, TrailerIcon } from '../../../../services/svgFiles';
import { SliderSquare } from '../components/SliderSquare/SliderSquare';
import { ChapterSeason } from './components/ChapterSeason';
import './styles/CatalogDetailsStyles.css';

const CatalogDetails = () => {
    const movieOrSerieID = useLocation().state.id;
    const isMovie = useLocation().state.isMovie;
    
    const { loading, details } = isMovie ? getDetailsMovie(movieOrSerieID) : getDetailsTVShows(movieOrSerieID);
    const { loadingSimilar, similarSearch } = isMovie ? getSimilarMovies(movieOrSerieID) : getSimilarTVShows(movieOrSerieID);

    return (
        <section className='cataloghome'>
            {!loading &&
                <>
                    <div className='details'>
                        <img draggable={false} className={`details__image`} src={`${BASE_URL_IMG}${details.backdrop_path || details.poster_path}`} alt={`image of ${details.name}`} />
                        <div className="details__info infodetails">
                            <h2 className="infodetails__name">{details?.name || details?.title}</h2>
                            <button className="infodetails__watch">
                                <PlayTwoIcon className='infodetails__watchicon' />
                                <span className="infodetails__watchsession">S1 E1</span>
                            </button>
                            <div className='infodetails__addcontainer addcontainer' >
                                <input className='infodetails__check addcontainer__check' type='checkbox' ></input>
                                <AddTwoIcon className='infodetails__addicon addcontainer__addicon' />
                                <CheckIcon className='infodetails__checkicon addcontainer__checkicon' />
                            </div>
                            <p className="infodetails__synopsis">{details.overview}</p>
                            <button className="infodetails__trailerbutton">
                                <TrailerIcon className={'infodetails__icontrailer'} />
                                <span className="infodetails__texttrailer">TRAILER</span>
                            </button>
                        </div>
                        {/*<iframe width="100%" height="315" src="https://www.youtube.com/embed/mXd1zTwcQ18"  title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>*/}
                    </div>

                    {!isMovie && <ChapterSeason details={details} serieID={details.id} />}
                    {!loadingSimilar && <SliderSquare data={similarSearch} title={'Recomendaciones similires'} isMovie={isMovie}/>}
                </>
            }
        </section>
    );
};

export { CatalogDetails };