import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ComboBox } from "../../../../components/ComboBox/ComboBox";
import { typeSearch } from "../../../../services/constants";
import { getMoviesByCompanie, getMoviesByGenrer, getSearchMovies, getSearchTVShows, getTVShowsByCompanie, getTVShowsByGenrer } from "../../../../services/fetchData";
import { AddTwoIcon, ArrowIcon, SearchIcon } from "../../../../services/svgFiles";
import { PageNavigator } from "../components/PageNavigator/PageNavigator";
import { SearchView } from "../components/SearchView/SearchView";
import './CatalogSearchStyle.css';


const CatalogSearch = () => {
    const [pageState, setPageState] = useState(1);
    const [genrerSelected, setGenrerSelect] = useState(1);
    const [search, setSearch] = useState('');
    const refButtonTop = useRef();
    const navigate = useNavigate();
    const idSearch = useLocation().state?.id;
    const isMovieInit = useLocation().state?.isMovie;
    const isGenrer = useLocation().state?.isGenrer;
    const isSearch = useLocation().state?.isSearch;
    const nameSearch = useLocation().state?.name;
    const [isMovie, setIsMovie] = useState(isMovieInit);

    const { loadingMovie, searchMovie } =
        isSearch ?
            isMovie ?
                getSearchMovies(search, pageState)
                :
                getSearchTVShows(search, pageState)
            : isMovie ?
                isGenrer ?
                    getMoviesByGenrer(idSearch, pageState)
                    :
                    getMoviesByCompanie(idSearch, pageState)
                : isGenrer ?
                    getTVShowsByGenrer(idSearch, pageState)
                    :
                    getTVShowsByCompanie(idSearch, pageState);

    const handleGoToPage = (id) => {
        console.log(isMovie);
        navigate(`/catalog/details/${isMovie?'movie':'serie'}/${id}`, { state: { id: id, isMovie: isMovie, isSearch: false } });
    }

    console.log()

    const scrollWindow = () => {
        if (window.scrollY < 350)
            refButtonTop.current.style.display = 'none';
        else
            refButtonTop.current.style.display = 'block';
    }

    const handleButtonTop = () => {
        window.scroll(0, 0);
    }

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }
    
    const handleGenrerSelect = () => {
        setIsMovie(prevState => !prevState);
    }

    useEffect(() => {
        window.addEventListener("scroll", scrollWindow);
        return () => {
            window.removeEventListener("scroll", scrollWindow);
        };
    }, [scrollWindow]);


    return (
        <main className="resultsearch"  >
            <button className="resultsearch__scrolltop" ref={refButtonTop} onClick={handleButtonTop}>
                <ArrowIcon className='resultsearch__arrowtop' />
            </button>
            {isSearch && <div className="resultsearch__search searcharea">
                <input className="searcharea__input" type="text" placeholder="¿Qué es lo que buscas?" value={search} onChange={handleSearch} />
                <SearchIcon className='searcharea__searchicon' />
                <ComboBox disabled={search !== ''} className='searcharea__type' data={typeSearch.type} setState={setGenrerSelect} state={genrerSelected} onChange={handleGenrerSelect} />
            </div>}
            <div className="resultsearch__pages">
                {(!loadingMovie && searchMovie.total_results > 0) && <PageNavigator currentPage={pageState} setPageState={setPageState} totalPage={searchMovie.total_pages > 500 ? 500 : searchMovie.total_pages} />}
            </div>
            {!isSearch && <h1 className="resultsearch__title">{`Resultados para ${isGenrer? 'la categoría ': ''}`}<span className="resultsearch__titlesearch">{`'${nameSearch}'`}</span></h1>}
            {(isSearch && searchMovie.total_results > 0 && search !== '') && <h1 className="resultsearch__title">{`Resultados para: `}<span className="resultsearch__titlesearch">{`'${search}'`}</span></h1>}
            {(isSearch && searchMovie.total_results === 0 && search !== '') && <h1 className="resultsearch__title">{`No se encontraron resultados para: `}<span className="resultsearch__titlesearch">{`'${search}'`}</span></h1>}
            {searchMovie.total_results > 0 && <section className="resultsearch__section">
                {!loadingMovie && searchMovie.results.map(search => (
                    <SearchView key={search.id} data={search} goToPage={() => handleGoToPage(search.id)} />
                ))}
            </section>}
            <div className="resultsearch__pages">
                {(!loadingMovie && searchMovie.total_results > 0) && <PageNavigator currentPage={pageState} setPageState={setPageState} totalPage={searchMovie.total_pages > 500 ? 500 : searchMovie.total_pages} />}
            </div>
        </main>
    );
};

export { CatalogSearch };