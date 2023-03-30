import { BASE_URL_IMG, IMG_DEFAULT, IMG_DEFAULT_MOVIE } from '../../../../../services/constants';
import { AddTwoIcon, CheckIcon, PlayTwoIcon } from '../../../../../services/svgFiles';
import './SearchViewStyles.css';

function SearchView({data, goToPage}) {


    return (
        <div key={data.id} className="resultsearch__container">
            <h2 className="resultsearch__name">{data.title || data.name}</h2>
            <div className='resultsearch__addcontainer addcontainer' >
                <input className='resultsearch__check addcontainer__check' type='checkbox' ></input>
                <AddTwoIcon className='resultsearch__addicon addcontainer__addicon' />
                <CheckIcon className='resultsearch__checkicon addcontainer__checkicon' />
            </div>
            <div className='resultsearch__playcontainer addcontainer' >
                <PlayTwoIcon className='resultsearch__playicon' />
            </div>
            <button className='resultsearch__play' onClick={goToPage}>
                <img src={data?.poster_path ? `${BASE_URL_IMG}${data?.poster_path}` : IMG_DEFAULT_MOVIE} alt={`imagen del capitulo`} className="resultsearch__image" />
            </button>
            <span className="resultsearch__vote">{data.vote_average.toString().substring(0, 3)}</span>
        </div>
    );
};

export { SearchView };