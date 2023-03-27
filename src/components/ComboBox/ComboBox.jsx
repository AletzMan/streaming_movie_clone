import { useState } from 'react';
import { ArrowIcon, CheckIcon } from '../../services/svgFiles';
import './ComboBoxStyle.css';

function ComboBox({ className, data, setState, state }) {
    //const [seasonSelected, setSeasonSelected] = useState(1);
    const [viewOptions, setViewOptions] = useState(false);

    const handleViewOptions = (e) => {
        setViewOptions(prevState => !prevState)
    }
    const handleChangeSeason = (e) => {
        setState(e.target.value)
    }
    return (
        <div className={className} >
            <div name="seasons" className='combobox__list' onChange={handleViewOptions} >
                <input className='combobox__select' type='checkbox' />
                <span className="combobox__textselected">{data[state - 1].name}</span>
                <ArrowIcon className='combobox__arrow' />
                <div className="combobox__main">
                    <div className={`combobox__container--${viewOptions}`}>
                        {data.map((season, index) => (
                            <div key={season.id} className='combobox__season'>
                                <input type='radio' name='season' defaultChecked={index === 0} className='combobox__option' onChange={handleChangeSeason} value={season.season_number}></input>
                                <span className="combobox__textoption">{season.name}</span>
                                <CheckIcon className='combobox__check' />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export { ComboBox };