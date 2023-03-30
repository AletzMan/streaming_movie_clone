import { premieres } from '../../../../services/dataMovies';
import { getTrendingTVShows } from '../../../../services/fetchData';
import { SliderRating } from '../../../CatalogPage/pages/components/SliderRating/SliderRating';
import { CardPremiere } from './CardPremiere';
import { SliderControl } from './SliderControl';

const Premieres = () => {
const {loadingTrendingTV, treandingTV } = getTrendingTVShows();

    return (
        <section className='homepage__premieres premieres'>
            <h2 className='premieres__title'>Estrenos que se convertirán en nuevos favoritos.</h2>
            <div className="cardslider">
                <div className="cards__premiere">
                    <CardPremiere data={premieres[0]} />
                    <CardPremiere data={premieres[1]} />
                    <CardPremiere data={premieres[2]} />
                    <CardPremiere data={premieres[3]} />
                    <CardPremiere data={premieres[4]} />
                </div>
            </div>
                <SliderControl />
                {/*!loadingTrendingTV && <SliderRating data={treandingTV.results}/>*/}
        </section>
    );
};

export { Premieres };