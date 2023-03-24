import { CardSliderRating } from './components/CardSliderRating';
import './styles/SliderRating.css';
const movies = new Array(1, 2, 3, 4, 5, 6, 7);
import { ratingMoves } from '../../../../../services/dataMovies';
import uuid from 'react-uuid';
import { ArrowIcon } from '../../../../../services/svgFiles';
import { useSetPositionSlider } from '../../hooks/UseSetPositionSlider';

const SliderRating = () => {
    const arrayMovies = ratingMoves.filter((movie, index) => { if (index < 7) return movie });
    const { goToSlider, setTouchSliderPosition, setTouchStart, currentSlider } = useSetPositionSlider('.ratslider', '.sliderrating__slider', true);


    return (
        <div className="sliderrating">
            <div className="sliderrating__slider">
                <div className="sliderrating__container" onTouchStart={setTouchStart} onTouchEnd={setTouchSliderPosition}>
                    {arrayMovies.map(movie => {
                        if (movie.overview !== '')
                            return <CardSliderRating key={movie.id} info={movie} />
                    })}
                </div>
            </div>
            <div className='sliderrating__controls controlsrating'>
                {arrayMovies.map((movie, index) => {
                    if (movie.overview !== '')
                        return <button key={uuid()} className={`controlsrating__circle controlsrating__circle--${currentSlider === (index - 1)}`} onClick={() => goToSlider(index - 1)}></button>
                })}
                {currentSlider > 0 && <button className='controlsrating__left controlsrating__button' onClick={() => goToSlider(currentSlider - 1)}>
                    <ArrowIcon className={'controlsrating__arrow'} />
                </button>}
                {currentSlider < 5 && <button className='controlsrating__right  controlsrating__button' onClick={() => goToSlider(currentSlider + 1)}>
                    <ArrowIcon className={'controlsrating__arrow'} />
                </button>}
            </div>
        </div>
    );
};

export { SliderRating };