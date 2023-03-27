import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BASE_URL_IMG, IMG_DEFAULT } from "../../../../services/constants";
import { getMoviesByCompanie, getMoviesByGenrer, getTVShowsByCompanie, getTVShowsByGenrer } from "../../../../services/fetchData";
import { AddTwoIcon, ArrowIcon, CheckIcon, PlayTwoIcon } from "../../../../services/svgFiles";
import { PageNavigator } from "../components/PageNavigator/PageNavigator";
import './CatalogSearchStyle.css';


const CatalogSearch = () => {
    const [pageState, setPageState] = useState(1);
    const refButtonTop = useRef();
    const navigate = useNavigate();
    const idSearch = useLocation().state.id;
    const isMovie = useLocation().state.isMovie;
    const isGenrer = useLocation().state.isGenrer;
    const nameSearch = useLocation().state.name;

    const { loadingMovie, searchMovie } = isMovie ? isGenrer ? getMoviesByGenrer(idSearch, pageState) : getMoviesByCompanie(idSearch, pageState) : isGenrer ? getTVShowsByGenrer(idSearch, pageState) : getTVShowsByCompanie(idSearch, pageState);


    const handleGoToPage = (id) => {
        navigate(`/catalog/details`, { state: { id: id, isMovie: isMovie } });
    }

    const scrollWindow = () => {
        if (window.scrollY < 350)
            refButtonTop.current.style.display = 'none';
        else
            refButtonTop.current.style.display = 'block';
    }
    const handleButtonTop = () => {
        window.scroll(0, 0);
    }

    useEffect(() => {
        window.addEventListener("scroll", scrollWindow);
        return () => {
            window.removeEventListener("scroll", scrollWindow);
        };
    }, [scrollWindow]);

console.log(searchMovie)
    return (
        <main className="resultsearch"  >
            <button className="resultsearch__scrolltop" ref={refButtonTop} onClick={handleButtonTop}>
                <ArrowIcon className='resultsearch__arrowtop' />
            </button>
            <h1 className="resultsearch__title">{`Resultados para ${nameSearch}`}</h1>
            <div className="resultsearch__pages">
                {!loadingMovie && <PageNavigator currentPage={pageState} setPageState={setPageState} totalPage={searchMovie.total_pages > 500 ? 500 : searchMovie.total_pages} />}
            </div>
            <section className="resultsearch__section">
                {!loadingMovie && searchMovie.results.map(search => (
                    <div key={search.id} className="resultsearch__container">
                        <div className='resultsearch__addcontainer addcontainer' >
                            <input className='resultsearch__check addcontainer__check' type='checkbox' ></input>
                            <AddTwoIcon className='resultsearch__addicon addcontainer__addicon' />
                            <CheckIcon className='resultsearch__checkicon addcontainer__checkicon' />
                        </div>
                        <div className='resultsearch__playcontainer addcontainer' >
                            <PlayTwoIcon className='resultsearch__playicon' />
                        </div>
                        <button className='resultsearch__play' onClick={() => handleGoToPage(search.id)}>
                            <img src={search?.poster_path ? `${BASE_URL_IMG}${search?.poster_path}` : IMG_DEFAULT} alt={`imagen del capitulo`} className="resultsearch__image" />
                        </button>
                        <span className="resultsearch__name">{search.title || search.name}</span>
                        <span className="resultsearch__vote">{search.vote_average}</span>
                    </div>
                ))}
            </section>
            <div className="resultsearch__pages">
                {!loadingMovie && <PageNavigator currentPage={pageState} setPageState={setPageState} totalPage={searchMovie.total_pages > 500 ? 500 : searchMovie.total_pages} />}
            </div>
        </main>
    );
};

export { CatalogSearch };