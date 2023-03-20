import React, { useEffect, useState } from 'react';
import { ArrowNext } from '../../../assets/SVG/SVGFiles';

const SliderControl = () => {
    const [positionSlider, setPositionSlider] = useState(0)
    const [currentSlider, setCurrentSilder] = useState(1)

    const prevSlider = () => {
        setPositionSlider(prevState => prevState += 20);
        setCurrentSilder(prevState => prevState - 1)
    }
    const nextSlider = () => {
        setPositionSlider(prevState => prevState -= 20);
        setCurrentSilder(prevState => prevState + 1)
    }

    useEffect(() => {
        document.querySelector('.cards__premiere').style.transform = `translateX(${positionSlider}%)`;
    }, [positionSlider])
    
    return (
        <div className='cardsilder__control cardslider__slidercontrol'>
            <div className="slidercontrol">
                <span className="slidercontrol__numbercard">{`${currentSlider} / 5`}</span>
                {positionSlider != 0 && <button className='slidercontrol__prev' onClick={prevSlider}>
                    <ArrowNext className='slidercontrol__buttoncontrol'></ArrowNext>
                </button>}
                {positionSlider > -80 && <button className='slidercontrol__next' onClick={nextSlider}>
                    <ArrowNext className='slidercontrol__buttoncontrol'></ArrowNext>
                </button>}
            </div>
            <button className='slidercontrol__subscribe button' >SUBSCRÍBETE AHORA</button>
        </div>
    );
};

export { SliderControl };