import { useState } from "react";

const Question = ({ options }) => {
    const [opened, setOpened] = useState(false);
    const opendDetailStatus = (e) => {
        if (e.target.checked)
            setOpened(false);
        else
            setOpened(true);
    }
    return (
        <div className='questions__container question'>
            <input className='question__checkbox' name="question" defaultChecked={opened} type='checkbox' onChange={opendDetailStatus} />
            <div className='question__button'>
                <span className="question__text">{options.question}</span>
                <svg className='question__svg' height="128px" viewBox="0 0 128 128" width="128px">
                    <line className='question__svg--lineone question__svg--line' x1="13.787" x2="114.213" y1="64.001" y2="64.001" />
                    <line className='question__svg--linetwo question__svg--line' x1="64" x2="64" y1="13.787" y2="114.213" />
                </svg>
            </div>
            <div className={`question__response question__response--${opened}`}>
                <span className="question__response--text">{options.response}</span>
            </div>
        </div>
    );
};

export { Question };