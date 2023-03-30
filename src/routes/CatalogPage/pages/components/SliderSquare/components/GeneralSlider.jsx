import { useNavigate } from "react-router-dom";


const GeneralSlider = ({ info, isSquare, isMovie, isGenrer }) => {
    const navigate = useNavigate();

    const handleButtoGenrer = () => {
        navigate(`/catalog/search/${info.name.toLowerCase()}`, { state: { id: info.id, name: info.name, isMovie: isMovie, isGenrer: isGenrer } });
    }
    return (
        <>
            {isSquare && <button key={info.id} className={`slider__card--rectangle`} onClick={handleButtoGenrer}>
                <img className={`slider__image--rectangle`} src={info.imageUrl} alt="" />
                <div className={`slider__containerlogo--rectangle`}>
                    <img className={`slider__logo--rectangle`} src={info.logoUrl} alt="" />
                </div>
                <span className={`slider__name--rectangle`}>{info.name}</span>
                <div className={`slider__cover--rectangle`}></div>
            </button>}
            {!isSquare && <button key={info.id} className={`slider__card--general`} onClick={handleButtoGenrer}>
                <img className={`slider__image--general`} src={info.imageUrl} alt="" />
                <div className={`slider__containerlogo--general`}>
                    <img className={`slider__logo--general`} src={info.logoUrl} alt="" />
                </div>
                <span className={`slider__name--general`}>{info.name}</span>
                <div className={`slider__cover--general`}></div>
            </button>}
        </>
    );
};

export { GeneralSlider };