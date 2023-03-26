import { useState } from "react";
import uuid from "react-uuid";
import { ComboBox } from "../../../../../components/ComboBox/ComboBox";
import { Loading } from "../../../../../components/Loading";
import { BASE_URL_IMG } from "../../../../../services/constants";
import { getSesionTVShows } from "../../../../../services/fetchData";
import { AddTwoIcon, CheckIcon, PlayTwoIcon } from "../../../../../services/svgFiles";
import { IMG_DEFAULT } from "../../../../../services/constants";
const loadinClip = new Array(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);

function ChapterSeason({ details, serieID }) {
    const [seasonSelected, setSeasonSelected] = useState(1);
    const { season, loading } = getSesionTVShows(serieID, seasonSelected);
    
   //console.log(season)
   console.log(details)
   console.log(seasonSelected)

 

    return (
        <article className='seasons'>
            <ComboBox className='seasons__combobox' data={details.seasons.filter(season => season.name !== 'Especiales')} setState={setSeasonSelected} state={seasonSelected}/>
            <div className="seasons__chapters chapters">
                {!loading && season.map(episode => (
                    <div key={episode.id} className='chapters__chapter chapter'>
                        <div className="chapter__container">
                            <div className='chapter__addcontainer addcontainer' >
                                <input className='chapter__check addcontainer__check' type='checkbox' ></input>
                                <AddTwoIcon className='chapter__addicon addcontainer__addicon' />
                                <CheckIcon className='chapter__checkicon addcontainer__checkicon' />
                            </div>
                            <div className='chapter__playcontainer addcontainer' >
                                <PlayTwoIcon className='chapter__playicon' />
                            </div>
                            <button className='chapter__play' onClick={() => console.log('CLICK')}>
                                <img src={ episode.still_path?`${BASE_URL_IMG}${episode.still_path}`:IMG_DEFAULT} alt={`imagen del capitulo ${episode.episode_number} de la temporada ${seasonSelected}`} className="chapter__image" />
                            </button>
                        </div>
                        <h3 className="chapter__title">{episode.name}</h3>
                        <span className="chapter__time">{`${episode.runtime} MIN`}</span>
                    </div>
                ))}
                {loading && loadinClip.map(clip => (
                    <div key={uuid()} className="chapters__loading"></div>
                ))}
            </div>
        </article>
    );
}

export { ChapterSeason };