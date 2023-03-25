import { SliderRating } from "../components/SliderRating/SliderRating";
import { SliderSquare } from "../components/SliderSquare/SliderSquare";
import { genresSeries, networksSeries } from '../../../../services/constants';
import { getTopTVShows } from "../../../../services/fetchData";
import { Loading } from "../../../../components/Loading";

const CatalogSeries = () => {
    const { loading, results } = getTopTVShows();
    
    return (
        <section className='cataloghome'>
            {!loading &&
                <>
                    <SliderRating data={results[0]} />
                    <SliderSquare className={'slidernetworks'} data={networksSeries} title={'Networks'} isGeneral />
                    <SliderSquare className={'slidersquare'} data={genresSeries} title={'Categorías'} isGeneral />
                    <SliderSquare className={'sliderpopular'} data={results[1]} title={'Popular'} />
                    <SliderSquare className={'slidertrending'} data={results[2]} title={'Trending'} />
                </>
            }
            {loading && <Loading />}
        </section>
    );
};

export { CatalogSeries };