
import { useRef } from 'react';
import './CircleProgressBar.css';

function CircleProgressBar({ className, value }) {
    const valueProgress = useRef();
    let valueProportional

    if (valueProgress !== undefined) {
        const porcentage = 130 - ((value * 130) / 100);
        setTimeout(() => {
            valueProgress.current.style.strokeDashoffset = `${porcentage}`;
        }, 300);
        console.log(value)
    }

    return (
        <div className={`progressbar ${className}`} >
            <svg className='progressbar__svg' width="44" height="44" viewBox="22 22 44 44">
                <circle className='progressbar__circle' ref={valueProgress} cx='44' cy='44' r='20.2' fill='none' strokeWidth='2' stroke='white' />
            </svg>
            <span className='progressbar__value'>{`${Math.floor(value)}%`}</span>
        </div>
    );
}

export { CircleProgressBar };