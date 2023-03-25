import './styles/SliderSquareStyles.css';
import { ArrowIcon } from '../../../../../services/svgFiles';
import { useSetPositionSlider } from '../../hooks/UseSetPositionSlider';
import { GeneralSlider } from './components/GeneralSlider';
import { MovieSlider } from './components/MovieSlider';


function SliderSquare({ className, data, title, isGeneral, isRating }) {
    const dataDetails = data.filter(serie => serie.poster_path !== null);
    const { goToSlider, currentSlider, sliderPositions } = useSetPositionSlider(`.${className}__slider`, `.${className}__container`, false, true);


    return (
        <div className={`${className}__main`}>
            <h2 className={`${className}__title`}>{title}</h2>
            <div className={`${className}__container`}>
                <div className={`${className}__slider`}>
                    <div className={`${className}__cards`}>
                        {isGeneral && dataDetails.map(info => (
                            <GeneralSlider key={info.id} className={className} info={info} />
                        ))}
                        {!isGeneral && dataDetails.map((info, index) => (
                            <MovieSlider key={info.id}  className={className} info={info} rating={index} isRating={isRating}/>
                        ))}
                    </div>
                </div>
            </div>
            <div className={`${className}__controls`}>
                {currentSlider > 0 && <button className={`${className}__left ${className}__button`} onClick={() => goToSlider(currentSlider - 1)}>
                    <ArrowIcon className={`slidersquare__button--arrow`} />
                </button>}
                {currentSlider + 1 < sliderPositions && <button className={`${className}__right ${className}__button`} onClick={() => goToSlider(currentSlider + 1)}>
                    <ArrowIcon className={`${className}__button--arrow`} />
                </button>}
            </div>
        </div>
    );
}

export { SliderSquare };
