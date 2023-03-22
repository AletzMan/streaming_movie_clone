import { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import { Actor } from './Actor';
const CardPremiere = ({ data }) => {
    const [witdthState, setWidthState] = useState(window.innerWidth);
    const resizeWindow = () => {
        setWidthState(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", resizeWindow);
        return () => {
            window.removeEventListener("resize", resizeWindow);
        };
    }, [resizeWindow]);

    return (
        <div className='cardpremiere'>
            <span className='cardpremiere__date'>{data.date}</span>
            <div className='cardpremiere__imagecontainer'>
                {witdthState > 575 && <img className='cardpremiere__image' src={data.urlImage} />}
                {witdthState < 576 && <img className='cardpremiere__image' src={data.urlImageMobil} />}
            </div>
            <div className='cardpremiere__info'>
                <h3 className="cardpremiere__title">{data.title}</h3>
                <p className='cardpremiere__sinopsis'>{data.sinopsis}</p>
                <div className="cardpremiere__actors actorspremiere">
                    {data?.actors?.map(actor => (
                        <Actor key={uuid()} info={actor} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export { CardPremiere };