
import { ArrowIcon, FinalPageIcon } from '../../../../../services/svgFiles';
import './PageNavigatorStyles.css';

function PageNavigator({ currentPage, totalPage, setPageState }) {

    const handleCurrentPage = (position, isFirstOrEnd) => {
        if (isFirstOrEnd)
            setPageState(position)
        else
            setPageState(prevState => prevState + position);
    }

    return (
        <nav className='pagenavigator'>
            {currentPage > 1 &&
                <>
                    <button className='pagenavigator__first pagenavigator__controls' onClick={() => handleCurrentPage(1, true)}>
                        <FinalPageIcon className='pagenavigator__arrow' />
                    </button>
                    <button className='pagenavigator__prev pagenavigator__controls' onClick={() => handleCurrentPage(-1, false)}>
                        <ArrowIcon className='pagenavigator__arrow' />
                    </button>
                </>
            }
            <div className="pagenavigator__pages">
                <span className="pagenavigator__page pagenavigator__number">{currentPage}</span>
                <span className="pagenavigator__of pagenavigator__number">de</span>
                <span className="pagenavigator__totalpages  pagenavigator__number">{totalPage}</span>
            </div>
            {currentPage < totalPage &&
                <>
                    <button className='pagenavigator__next pagenavigator__controls' onClick={() => handleCurrentPage(1, false)}>
                        <ArrowIcon className='pagenavigator__arrow' />
                    </button>
                    <button className='pagenavigator__last pagenavigator__controls' onClick={() => handleCurrentPage(totalPage, true)}>
                        <FinalPageIcon className='pagenavigator__arrow' />
                    </button>
                </>
            }

        </nav>
    );
}

export { PageNavigator };