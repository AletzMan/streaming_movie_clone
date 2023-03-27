import { BASE_URL_IMG, IMG_DEFAULT } from "../../../../../services/constants";
import { getMovieCredits, getTVShowCredits } from "../../../../../services/fetchData";
import './SectionCreditsStyles.css';

function SectionCredits({ id, isMovie }) {
    const { loading, credits } = isMovie ? getMovieCredits(id) : getTVShowCredits(id);
    if (!loading)
        console.log(credits)
    return (
        <>
            {!loading &&
                <article className="sectioncredits">
                    <h3 className="sectioncredits__title">{`Reparto`}</h3>
                    <div className="sectioncredits__actors">
                        {credits.cast.map((credit, index) => {
                            if (index < 11) {
                                return (
                                    <div className="sectioncredits__actor actorcredits">
                                        <div className="actorcredits__containerimage">
                                            <img src={(BASE_URL_IMG + credit.profile_path) || IMG_DEFAULT} alt="" className="actorcredits__image" />
                                        </div>
                                        <span className="actorcredits__name">{credit.name}</span>
                                        <span className="actorcredits__character">{credit.character}</span>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </article>
            }
        </>
    );
}

export { SectionCredits };