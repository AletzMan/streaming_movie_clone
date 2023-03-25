import { useEffect, useState } from "react";

export function useSetPositionSlider(sizeSlider, slider, activaAuto, isfullWidth) {
    const [witdthState, setWidthState] = useState(window.innerWidth);
    const [positionSlider, setPositionSlider] = useState(0);
    const [positionSliderScroll, setPositionSliderScroll] = useState(0);
    const [currentSlider, setCurrentSilder] = useState(0);
    const [touchStartPosition, setTouchStartPosition] = useState(0);
    const [sliderPositions, setSliderPosition] = useState(0);
    let scrollWidthSlider = 0;
    let sizeTotalSlider = 0;
    const resizeWindow = () => {
        setWidthState(window.innerWidth);
    }
    //console.log(scrollWidthSlider)


    useEffect(() => {
        window.addEventListener("resize", resizeWindow);
        scrollWidthSlider = document.querySelector(slider).getBoundingClientRect().width;
        sizeTotalSlider = document.querySelector(sizeSlider).scrollWidth;
        if (isfullWidth) {
            let paddingSlider = parseInt(window.getComputedStyle(document.querySelector(slider), null).getPropertyValue('padding-left').replace('px', ''));
            
            scrollWidthSlider = scrollWidthSlider - (paddingSlider * 0.6)
        }
        setSliderPosition(sizeTotalSlider / scrollWidthSlider);
        
        return () => {
            window.removeEventListener("resize", resizeWindow);
        };
    }, [resizeWindow]);

    const goToSlider = (number) => {
        let valuePosition = number * (scrollWidthSlider);
        setPositionSliderScroll(valuePosition);
        setCurrentSilder(number);
        setTimeout(() => {
            if (currentSlider < 0)
                setCurrentSilder(0)
        }, 1000);

    }

    const setTouchStart = (e) => {
        setTouchStartPosition(e.changedTouches[0].clientX)
    }

    const setTouchSliderPosition = (e) => {
        const posTouchEnd = e.changedTouches[0].clientX
        const widthSlider = e.target.clientWidth / 2;

        if (touchStartPosition < widthSlider && posTouchEnd > widthSlider) {
            goToSlider(currentSlider - 1);
        } else if (touchStartPosition > widthSlider && posTouchEnd < widthSlider) {
            goToSlider(currentSlider + 1);
        } else {
            setPositionSliderScroll(positionSliderScroll - 1);
            setTimeout(() => {
                goToSlider(currentSlider);
            }, 400);
        }

        setTimeout(() => {
            const finalPosScroll = document.querySelector(slider).scrollLeft;
            let posNear = [];
            for (let index = 0; index < 7; index++) {
                posNear.push(((widthSlider * 2) * index) - finalPosScroll);
            }
            const absValue = posNear.map(pos => Math.abs(pos));
            const indexValue = absValue.indexOf(Math.min(...absValue));
            goToSlider(indexValue);
        }, 1500);


    }
    useEffect(() => {
        if (activaAuto) {
            const sliderAuto = setInterval(() => {
                if (currentSlider < 7)
                    goToSlider(currentSlider + 1);
                else
                    goToSlider(0)
            }, 3000);
            return () => {
                clearInterval(sliderAuto);
            };
        }
    }, [currentSlider]);


    useEffect(() => {
        document.querySelector(slider).scroll(`${positionSliderScroll}`, 0);
    }, [positionSlider, positionSliderScroll])

    return { goToSlider, setTouchSliderPosition, setTouchStart, currentSlider, sliderPositions }
}