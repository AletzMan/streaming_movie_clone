import { genresMovies, networksMovies } from "../../../../services/constants";
import { SliderRating } from "../components/SliderRating/SliderRating";
import { SliderSquare } from "../components/SliderSquare/SliderSquare";
import { getTopMoves } from "../../../../services/fetchData";
import { Loading } from "../../../../components/Loading";

const CatalogMovies = () => {
    const { loading, results } = getTopMoves();
    let newData;

    if (!loading) {
        const today = new Date().getTime()
        const resultNews = results[3][0].concat(results[3][1], results[3][2], results[3][3], results[3][4]);
        newData = resultNews.filter(result => {
            const date = new Date(result.release_date);
            if (date - today > 0 && result.backdrop_path !== null) {
                return result
            }
        })
    }

    return (
        <section className={`cataloghome cataloghome--${loading}`}>
            {!loading &&
                <>
                    <SliderRating data={results[2]} isMovie />
                    <SliderSquare className={'slidernetworks'} data={networksMovies} title={'Productoras'} isGeneral isSquare isMovie />
                    <SliderSquare className={'slidersquare'} data={genresMovies} title={'Categorías'} isGeneral isMovie isGenrer/>
                    <SliderSquare className={'sliderpopular'} data={results[1]} title={'Popular'} isRating isMovie />
                    <SliderSquare className={'slidertrending'} data={results[0]} title={'Las más valoradas'} isRating isMovie />
                    <SliderSquare className={'sliderupcoming'} data={newData} title={'Próximamente'} isMovie />
                </>
            }
            {loading && <Loading />}
        </section>
    );
};

export { CatalogMovies };