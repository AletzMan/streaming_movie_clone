import { NavLink } from "react-router-dom";
import uuid from "react-uuid";
import { freeEpisodes } from "../../../services/dataMovies";
import { MovieFree } from "./MovieFree";

const Free = () => {
    return (
        <section className="homepage__free free">
                <h2 className="free__title">Episodios gratis, sin necesidad de suscripción</h2>
                <div className='free__slider freeslider'>
                    <div className="freeslider__cards ">
                        {freeEpisodes.map(movie => (
                            <MovieFree key={uuid()} info={movie}/>
                        ))}
                    </div>
                </div>
                <NavLink className='free__button'>EXPLORA MÁS</NavLink> 
            </section>
    );
};

export {Free};