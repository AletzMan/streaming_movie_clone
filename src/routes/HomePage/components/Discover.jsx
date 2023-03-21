import uuid from "react-uuid";
import { discoverMovies } from "../../../services/dataMovies";

const Discover = () => {
    return (
        <section className='homepage__experience discover'>
            <h2 className="discover__title">Muchos universos por descubrir</h2>
            <div className="discover__movies">
                {discoverMovies.map(movie => (
                    <button className="discover__button">
                        <img className="discover__image discover__image--hover" key={uuid()} src={movie.imageUrlHover} alt={'image of'} />
                        <img className="discover__image discover__image--normal" key={uuid()} src={movie.imageUrl} alt={'image of'} />
                    </button>
                ))}
            </div>
        </section>
    );
};

export { Discover };