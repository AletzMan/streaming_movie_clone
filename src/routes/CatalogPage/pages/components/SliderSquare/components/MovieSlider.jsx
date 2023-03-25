import { AddIcon } from "../../../../../../services/svgFiles";

const BASE_PATH_IMAGE = 'https://image.tmdb.org/t/p/original';

const MovieSlider = ({ className, info, rating, isRating }) => {
    return (
        <>
            <button key={info.id} className={`${className}__card`}>
                <img className={`${className}__image`} src={BASE_PATH_IMAGE + info.poster_path} alt="" />
                <AddIcon className={`${className}__add`} />
                <span className={`${className}__name`}>{info.name}</span>
                {isRating && <span className={`${className}__rating`}>{rating + 1}</span>}
                {!isRating && <span className={`${className}__date`}>{info.release_date}</span>}
            </button>
        </>
    );
};

export { MovieSlider };