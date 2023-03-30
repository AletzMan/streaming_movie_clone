import { useParams } from "react-router-dom";
import { BiographyView } from "../BiographyView/BiographyView";
import { CatalogDetails } from "../CatalogDetails/CatalogDetails";
import { CatalogMovies } from "../CatalogMovies/CatalogMovies";
import { CatalogSearch } from "../CatalogSearch/CatalogSearch";
import { CatalogSeries } from "../CatalogSeries/CatalogSeries";
const CatalogMain = () => {
    
    const param = useParams();
    
    return (
        <section className="catalog__section">
            {param.page === 'details' && <CatalogDetails />}
            {param.page === 'movies' && <CatalogMovies />}
            {param.page === 'series' && <CatalogSeries />}
            {param.page === 'search' && <CatalogSearch />}
            {param.page === 'actor' && <BiographyView />}
        </section>
    );
};

export { CatalogMain };