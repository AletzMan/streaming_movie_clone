import './styles/SliderSquareStyles.css';
import { ArrowIcon } from '../../../../../services/svgFiles';
import { useSetPositionSlider } from '../../hooks/UseSetPositionSlider';
import { GeneralSlider } from './components/GeneralSlider';
import { MovieSlider } from './components/MovieSlider';
import { useRef } from 'react';


function SliderSquare({ data, title, isGeneral, isRating, isSquare, isMovie, isGenrer }) {
    //console.log(data)
    const referenceSlider = useRef();
    const referenceContainer = useRef();
    const dataDetails = data.filter(serie => serie.poster_path !== null);
    const { goToSlider, currentSlider, sliderPositions } = useSetPositionSlider(referenceSlider?.current, referenceContainer?.current, false, true);

    
    const handlerButton =()=>{
        goToSlider(currentSlider - 1)
    }

    return (
        <div className={`slider__main`}>
            <h2 className={`slider__title`}>{title}</h2>
            <div className={`slider__container`}  ref={referenceContainer}>
                <div className={`slider__slider`} ref={referenceSlider}>
                    <div className={`slider__cards slider`}>
                        {isGeneral && dataDetails.map(info => (
                            <GeneralSlider key={info.id} info={info} isSquare={isSquare}  isMovie={isMovie} isGenrer={isGenrer}/>
                        ))}
                        {!isGeneral && dataDetails.map((info, index) => (
                            <MovieSlider key={info.id} info={info} rating={index} isRating={isRating} isMovie={isMovie}/>
                        ))}
                    </div>
                </div>
            </div>
            <div className={`slider__controls`}>
                {currentSlider > 0 && <button className={`slider__left slider__button`} onClick={handlerButton }>
                    <ArrowIcon className={`slider__button--arrow`} />
                </button>}
                {currentSlider <= sliderPositions  && <button className={`slider__right slider__button`} onClick={() => goToSlider(currentSlider + 1)}>
                    <ArrowIcon className={`slider__button--arrow`} />
                </button>}
            </div>
        </div>
    );
}

export { SliderSquare };
