import { useEffect, useState } from 'react';
import { CardSliderRating } from './components/CardSliderRating';
import './styles/SliderRating.css';
const movies = new Array(1, 2, 3, 4, 5, 6, 7);
import { ratingMoves } from '../../../../../services/dataMovies';

const SliderRating = () => {
    const [witdthState, setWidthState] = useState(window.innerWidth);
    const [positionSlider, setPositionSlider] = useState(0)
    const [positionSliderScroll, setPositionSliderScroll] = useState(0)
    const [currentSlider, setCurrentSilder] = useState(0)
    let scrollWidthSlider = 375;

    const resizeWindow = () => {
        setWidthState(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", resizeWindow);
        scrollWidthSlider = document.querySelector('.ratslider').getBoundingClientRect().width;
        return () => {
            window.removeEventListener("resize", resizeWindow);
        };
    }, [resizeWindow]);

    const goToSlider = (number) => {
        if (witdthState > 575) {
            let valuePosition = number * (-5.263);
            setPositionSlider(valuePosition);
        } else {
            let valuePosition = number * (scrollWidthSlider);
            setPositionSliderScroll(valuePosition);
        }
        setCurrentSilder(number);
        console.log(currentSlider)
    }

    useEffect(() => {
        if (witdthState > 575)
            document.querySelector('.sliderrating__container').style.transform = `translateX(${positionSlider}%)`;
        else
            document.querySelector('.sliderrating__container').scroll(`${positionSliderScroll}`, 0);
    }, [positionSlider, positionSliderScroll])

    return (
        <div className="sliderrating">
            <div className="sliderrating__container">
                {ratingMoves.map(movie => {
                    if (movie.overview !== '')
                        return <CardSliderRating info={movie} />
                })}
            </div>
            <div className='sliderrating__controls controlsrating'>
                {ratingMoves.map((movie, index) => {
                    if (movie.overview !== '')
                        return <button className='controlsrating__circle' onClick={() => goToSlider(index-1)}></button>
                })}
            </div>
        </div>
    );
};

export { SliderRating };