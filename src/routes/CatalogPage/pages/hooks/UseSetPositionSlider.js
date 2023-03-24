import { useEffect, useState } from "react";

export function useSetPositionSlider(sizeSlider, slider, activaAuto) {
    const [witdthState, setWidthState] = useState(window.innerWidth);
    const [positionSlider, setPositionSlider] = useState(0);
    const [positionSliderScroll, setPositionSliderScroll] = useState(0);
    const [currentSlider, setCurrentSilder] = useState(0);
    const [touchStartPosition, setTouchStartPosition] = useState(0);
    let scrollWidthSlider = 375;
    const resizeWindow = () => {
        setWidthState(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", resizeWindow);
        scrollWidthSlider = document.querySelector(sizeSlider).getBoundingClientRect().width;
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
            for (let index = 0; index < 6; index++) {
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
                if (currentSlider < 5)
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

    return { goToSlider, setTouchSliderPosition, setTouchStart, currentSlider }
}