import { premieres } from '../../../../services/dataMovies';
import { CardPremiere } from './CardPremiere';
import { SliderControl } from './SliderControl';

const Premieres = () => {
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
        </section>
    );
};

export { Premieres };