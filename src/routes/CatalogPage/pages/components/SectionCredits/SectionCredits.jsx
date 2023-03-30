import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";
import { BASE_URL_IMG, IMG_DEFAULT, IMG_DEFAULT_PROFILE } from "../../../../../services/constants";
import './SectionCreditsStyles.css';

function SectionCredits({ credits, isMovie }) {
    const navigate = useNavigate();
    function handleGoToBiography(id, name) {
        navigate(`/catalog/actor/${id}`, { state: { id: id } });
    }

    function CardsActors({ infoActor }) {
        return (
            <button className="sectioncredits__actor actorcredits" onClick={() => handleGoToBiography(infoActor.id, infoActor.name)}>
                <div className="actorcredits__containerimage">
                    <img src={infoActor.profile_path !== null ? (BASE_URL_IMG + infoActor.profile_path) : IMG_DEFAULT_PROFILE} alt="" className="actorcredits__image" />
                </div>
                <h4 className="actorcredits__name">{infoActor.name}</h4>
                <span className="actorcredits__character">{infoActor.character}</span>
            </button>
        )
    }

    function SectionCrew({ data, name, department }) {
        return (
            <>
                <h4 className="directing__title">{name}</h4>
                {data.map(credit => {
                    if (credit.department === department) {
                        return (
                            <div key={uuid()} className="directing__director">
                                <span className="directing__name">{credit.name}</span>
                            </div>
                        )
                    }
                })}
            </>
        )
    }
    //console.log(credits)
    return (
        <>
            {
                <article className="sectioncredits">
                    <h4 className="sectioncredits__title">{`Reparto`}</h4>
                    <div className="sectioncredits__actors">
                        {credits.cast.map((credit, index) => {
                            if (index < 19) return <CardsActors key={credit.id} infoActor={credit} />
                        })}
                    </div>
                    <div className="sectioncredits__directing directing">
                        <SectionCrew data={credits.crew} name={'Dirección'} department={'Directing'} />
                        <SectionCrew data={credits.crew} name={'Producción'} department={'Production'} />
                        <SectionCrew data={credits.crew} name={'Escritor'} department={'Writing'} />
                    </div>
                </article>
            }
        </>
    );
}

export { SectionCredits };