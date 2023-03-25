import { CardSliderRating } from './components/CardSliderRating';
import './styles/SliderRating.css';
import uuid from 'react-uuid';
import { ArrowIcon } from '../../../../../services/svgFiles';
import { useSetPositionSlider } from '../../hooks/UseSetPositionSlider';

const SliderRating = ({ data }) => {
    const arrayMovies = data.filter((movie => movie.overview !== '')).filter((movie, index) => { if (index < 8) return movie });
    
    const { goToSlider, setTouchSliderPosition, setTouchStart, currentSlider } = useSetPositionSlider('.ratslider', '.sliderrating__slider', true);

    return (
        <div className="sliderrating">
            <div className="sliderrating__slider">
                <div className="sliderrating__container" onTouchStart={setTouchStart} onTouchEnd={setTouchSliderPosition}>
                    {arrayMovies.map(movie => (
                        <CardSliderRating key={movie.id} info={movie} />
                    ))}
                </div>
            </div>
            <div className='sliderrating__controls controlsrating'>
                {arrayMovies.map((movie, index) => (
                    <button key={uuid()} className={`controlsrating__circle controlsrating__circle--${currentSlider === (index)}`} onClick={() => goToSlider(index - 1)}></button>
                ))}
                {currentSlider > 0 && <button className='controlsrating__left controlsrating__button' onClick={() => goToSlider(currentSlider - 1)}>
                    <ArrowIcon className={'controlsrating__arrow'} />
                </button>}
                {currentSlider < (arrayMovies.length - 1) && <button className='controlsrating__right  controlsrating__button' onClick={() => goToSlider(currentSlider + 1)}>
                    <ArrowIcon className={'controlsrating__arrow'} />
                </button>}
            </div>
        </div>
    );
};

export { SliderRating };