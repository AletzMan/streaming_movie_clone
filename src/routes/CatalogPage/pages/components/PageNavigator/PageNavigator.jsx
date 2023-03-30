
import uuid from 'react-uuid';
import { ArrowIcon, FinalPageIcon } from '../../../../../services/svgFiles';
import './PageNavigatorStyles.css';

function PageNavigator({ currentPage, totalPage, setPageState }) {


    let arrayPages = [];
    if (totalPage > 0) {
        for (let index = 0; index < totalPage; index++) {
            arrayPages.push(index + 1);
        }
    }
    const handleCurrentPage = (position, isFirstOrEnd) => {
        if (isFirstOrEnd)
            setPageState(position)
        else
            setPageState(prevState => prevState + position);
    }

    function handleChangePage(e) {
        if (e.target.value !== '')
            setPageState(e.target.value)
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
                <select type='number' className="pagenavigator__page pagenavigator__number" onChange={handleChangePage} value={currentPage || ''}>
                    {arrayPages.map(page => (
                        <option key={uuid()} value={page}>{page}</option>
                    ))}
                </select>
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