import './input.scss'
import {useState} from "react";
import PropTypes from "prop-types";

const Input = ( { placeholder, size, label, isDisabled } ) => {
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

Input.propTypes = {
    placeholder: PropTypes.string,
    size: PropTypes.string,
    label: PropTypes.string,
    isDisabled: PropTypes.bool,
}

export default Input;