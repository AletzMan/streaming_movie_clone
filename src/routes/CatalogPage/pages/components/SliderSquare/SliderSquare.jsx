import './styles/SliderSquareStyles.css';
import { genresMovies } from "../../../../../services/dataMovies";
import { ArrowIcon } from '../../../../../services/svgFiles';
import { useSetPositionSlider } from '../../hooks/UseSetPositionSlider';


function SliderSquare({ className, jumpSlider, data }) {
    const { goToSlider, currentSlider } = useSetPositionSlider(`.${className}__card`, `.${className}__container`, false);

    console.log(currentSlider)

    return (
        <div className={`${className}__main`}>
            <div className={`${className}__container`}>
                <div className={`${className}__slider`}>
                    <div className={`${className}__cards`}>
                        {data.map(genrer => (
                            <button key={genrer.id} className={`${className}__card`}>
                                <img className={`${className}__image`} src={genrer.imageUrl} alt="" />
                                <div className={`${className}__containerlogo`}>
                                    <img className={`${className}__logo`} src={genrer.logoUrl} alt="" />
                                </div>
                                <span className={`${className}__name`}>{genrer.name}</span>
                                <div className={`${className}__cover`}></div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <div className={`${className}__controls`}>
                {currentSlider > 0 && <button className={`${className}__left ${className}__button`} onClick={() => goToSlider(currentSlider - jumpSlider)}>
                    <ArrowIcon className={`slidersquare__button--arrow`} />
                </button>}
                {currentSlider < data.length - 4 && <button className={`${className}__right ${className}__button`} onClick={() => goToSlider(currentSlider + jumpSlider)}>
                    <ArrowIcon className={`${className}__button--arrow`} />
                </button>}
            </div>
        </div>
    );
}

export { SliderSquare };
