import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowNext } from '../../../../assets/SVG/SVGFiles';

const SliderControl = () => {
    const [positionSlider, setPositionSlider] = useState(0)
    const [positionSliderScroll, setPositionSliderScroll] = useState(0)
    const [currentSlider, setCurrentSilder] = useState(0)
    const [witdthState, setWidthState] = useState(window.innerWidth);
    const [defaultChecked, setDefaultChecked] = useState([true, false, false, false, false]);
    let scrollWidthSlider = 375;

    const resizeWindow = () => {
        setWidthState(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", resizeWindow);
        scrollWidthSlider = document.querySelector('.cardpremiere').getBoundingClientRect().width;
        return () => {
            window.removeEventListener("resize", resizeWindow);
        };
    }, [resizeWindow]);



    const prevSlider = () => {
        setPositionSlider(prevState => prevState += 20);
        setCurrentSilder(prevState => prevState - 1)
        updateCurrentSlider(currentSlider)
        setPositionSliderScroll(currentSlider * scrollWidthSlider);
    }
    const nextSlider = () => {
        setPositionSlider(prevState => prevState -= 20);
        setCurrentSilder(prevState => prevState + 1)
        updateCurrentSlider(currentSlider)
        setPositionSliderScroll(currentSlider * scrollWidthSlider);
    }

    const goToSlider = (number) => {
        if (witdthState > 575) {
            let valuePosition = number * (-20);
            setPositionSlider(valuePosition);
        } else {
            let valuePosition = number * (scrollWidthSlider);
            setPositionSliderScroll(valuePosition);
        }

        setCurrentSilder(number);
        updateCurrentSlider(number);
        console.log(currentSlider)
    }

    const updateCurrentSlider = (number) => {
        let valuesChecked = [false, false, false, false, false];
        valuesChecked[number] = true;
        setDefaultChecked(valuesChecked);
    }

    useEffect(() => {
        if (witdthState > 575)
            document.querySelector('.cards__premiere').style.transform = `translateX(${positionSlider}%)`;
        else
            document.querySelector('.cardslider').scroll(`${positionSliderScroll}`, 0);
    }, [positionSlider, positionSliderScroll])

    return (
        <div className='cardsilder__control cardslider__slidercontrol'>
            <div className="slidercontrol">
                {witdthState > 575 &&
                    <>
                        <span className="slidercontrol__numbercard">{`${currentSlider + 1} / 5`}</span>
                        {positionSlider != 0 && <button className='slidercontrol__prev' onClick={prevSlider}>
                            <ArrowNext className='slidercontrol__buttoncontrol'></ArrowNext>
                        </button>}
                        {positionSlider > -80 && <button className='slidercontrol__next' onClick={nextSlider}>
                            <ArrowNext className='slidercontrol__buttoncontrol'></ArrowNext>
                        </button>}
                    </>}
                {witdthState < 576 &&
                    <>
                        <div className='slidercontrol__checks checks'>
                            <input className='checks__check' type="radio" defaultChecked={defaultChecked[0]} onChange={() => goToSlider(0)} name='slider' />
                            <div className='checks__view'></div>
                        </div>
                        <div className='slidercontrol__checks checks'>
                            <input className='checks__check' type="radio" defaultChecked={defaultChecked[1]} onChange={() => goToSlider(1)} name='slider' />
                            <div className='checks__view'></div>
                        </div>
                        <div className='slidercontrol__checks checks'>
                            <input className='checks__check' type="radio" defaultChecked={defaultChecked[2]} onChange={() => goToSlider(2)} name='slider' />
                            <div className='checks__view'></div>
                        </div>
                        <div className='slidercontrol__checks checks'>
                            <input className='checks__check' type="radio" defaultChecked={defaultChecked[3]} onChange={() => goToSlider(3)} name='slider' />
                            <div className='checks__view'></div>
                        </div>
                        <div className='slidercontrol__checks checks'>
                            <input className='checks__check' type="radio" defaultChecked={defaultChecked[4]} onChange={() => goToSlider(4)} name='slider' />
                            <div className='checks__view'></div>
                        </div>
                    </>}
            </div>
            <NavLink to={'plan-picker'} className='slidercontrol__subscribe button' >SUBSCRÍBETE AHORA</NavLink>
        </div>
    );
};

export { SliderControl };