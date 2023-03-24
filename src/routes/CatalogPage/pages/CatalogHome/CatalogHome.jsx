import { SliderRating } from '../components/SliderRating/SliderRating';
import { SliderSquare } from '../components/SliderSquare/SliderSquare';
import './styles/CatalogHomeStyles.css';
import { networksSeries } from '../../../../services/constants';


const CatalogHome = () => {
    return (
        <section className='cataloghome'>
            <SliderRating />   
            <SliderSquare className={'slidernetworks'} jumpSlider={2} data={networksSeries}/>        
            {/*<SliderSquare className={'slidersquare'} jumpSlider={4}/>    */    }
            {/*<SliderSquare className={'sliderpopular'} jumpSlider={4}/>       */ }
        </section>
    );
};

export { CatalogHome };