import { useParams } from "react-router-dom";
import { CatalogHome } from "../CatalogHome/CatalogHome";
import { CatalogMovies } from "../CatalogMovies/CatalogMovies";
import { CatalogSearch } from "../CatalogSearch/CatalogSearch";
import { CatalogSeries } from "../CatalogSeries/CatalogSeries";
const CatalogMain = () => {
    
    const param = useParams();

    console.log()
    return (
        <section className="catalog__section">
            {param.page === 'home' && <CatalogHome />}
            {param.page === 'movies' && <CatalogMovies />}
            {param.page === 'series' && <CatalogSeries />}
            {param.page === 'search' && <CatalogSearch />}
        </section>
    );
};

export { CatalogMain };