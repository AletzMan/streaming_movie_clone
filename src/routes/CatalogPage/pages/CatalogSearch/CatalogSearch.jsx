import { useLocation } from "react-router-dom";
import { getMoviesByCompanie } from "../../../../services/fetchData";


const CatalogSearch = () => {
    const idSearch = useLocation().state.id;
    const isMovie = useLocation().state.isMovie;
    const { loadingMovie, searchMovie } = getMoviesByCompanie(idSearch);
    if (!loadingMovie)
        console.log(searchMovie)
    return (
        <div className="resultsearch">
            <h1 className="resultsearch__title">{`Busqueda para ${'s'}`}</h1>
            
        </div>
    );
};

export { CatalogSearch };