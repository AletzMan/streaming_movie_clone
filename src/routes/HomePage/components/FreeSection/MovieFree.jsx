import { freeEpisodes } from "../../../../services/dataMovies";


const MovieFree = ({info}) => {
    return (
        <a className="cardfree" href='/'>
            <img src={info.imageUrl} alt="" className="cardfree__image" />
            <span className="cardfree__name">{info.name}</span>
            <span className='cardfree__freeview'>VER GRATIS</span>
        </a>
    );
};

export { MovieFree };