import './input.scss'
import {useState} from "react";

const Input = ( { placeholder, size, label = '', isDisabled = false } ) => {
    let [value, setValue] = useState('');

    return (
        <div className="input__wrapper">
            <p className="input__label">{label}</p>
            <div className="input">
                <input disabled={isDisabled} onInput={e => setValue(value = e.target.value)} placeholder={placeholder} className="input__item" style={{width: size}}/>
            </div>
        </div>
    );
};

export default Input;