import { useState } from "react";

const InputForm = ({name, nameLabel}) => {
    const [stateFocus, setStateFocus] = useState(false);

    const handlerFocus = (e) => {
        if (e.target.value === '') {
            setStateFocus(true);
        } 
    }
    const handlerBlur = (e) => {
        if (e.target.value === '') {
            setStateFocus(false);
        } 
    }
    const handlerChanged = (e) => {
    }
    return (
        <div className={`inputform inputform__${name}`}>
            <input type="text" className={`inputform__input inputform__name inputform__input`} onBlur={handlerBlur} onFocusCapture={handlerFocus} />
            <label className={`inputform__label inputform__label--${stateFocus}`}>{nameLabel}</label>
        </div>
    );
};

export { InputForm };