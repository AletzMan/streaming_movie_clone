import { SliderRating } from "../components/SliderRating/SliderRating";
import { SliderSquare } from "../components/SliderSquare/SliderSquare";
import { genresSeries, networksSeries } from '../../../../services/constants';
import { getTopTVShows } from "../../../../services/fetchData";
import { Loading } from "../../../../components/Loading";

const CatalogSeries = () => {
    const { loading, results } = getTopTVShows();
    
    return (
        <section className={`cataloghome cataloghome--${loading}`}>
            {!loading &&
                <>
                    <SliderRating data={results[2]} />
                    <SliderSquare className={'slidernetworks'} data={networksSeries} title={'Productoras'} isGeneral isSquare/>
                    <SliderSquare className={'slidersquare'} data={genresSeries} title={'Categorías'} isGeneral isGenrer isMovie={false}/>
                    <SliderSquare className={'sliderpopular'} data={results[1]} title={'Popular'} isRating/>
                    <SliderSquare className={'slidertrending'} data={results[0]} title={'Las más valoradas'} isRating/>
                </>
            }
            {loading && <Loading />}
        </section>
    );
};

export { CatalogSeries };