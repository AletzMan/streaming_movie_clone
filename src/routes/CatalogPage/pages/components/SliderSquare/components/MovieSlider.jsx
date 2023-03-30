import { useNavigate } from "react-router-dom";
import { AddIcon } from "../../../../../../services/svgFiles";

const BASE_PATH_IMAGE = 'https://image.tmdb.org/t/p/original';

const MovieSlider = ({ info, rating, isRating, isMovie }) => {
    const navigate = useNavigate();

    const handlesButtonInfo = () => {
        navigate(`/catalog/details/${isMovie?'movie':'serie'}/${info.id}`, { state: { id: info.id, isMovie: isMovie } });
        console.log(info)
    }
    return (
        <>
            <button key={info.id} className={`slider__card--details`} onClick={handlesButtonInfo}>
                <img className={`slider__image--details`} src={BASE_PATH_IMAGE + info.poster_path} alt="" />
                <AddIcon className={`slider__add--details`} />
                <span className={`slider__name--details`}>{info.name || info.title}</span>
                {isRating && <span className={`slider__rating--details`}>{rating + 1}</span>}
                {!isRating && <span className={`slider__date--details slider__date--details--${info.release_date !== undefined}`}>{info.release_date}</span>}
            </button>
        </>
    );
};

export { MovieSlider };