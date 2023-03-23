import { SliderRating } from '../components/SliderRating/SliderRating';
import './styles/CatalogHomeStyles.css';

const CatalogHome = () => {
    return (
        <section className='cataloghome'>
           <SliderRating />
        </section>
    );
};

export { CatalogHome };