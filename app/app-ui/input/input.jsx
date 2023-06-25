import './input.scss'
import PropTypes from "prop-types";

const Input = ( { placeholder, size, label, value, isDisabled, callback, show } ) => {
    return (
        <div className="input__wrapper">
            <p className="input__label">{label}</p>
            <div className="input">
                <input disabled={isDisabled ?? show} value={value} onChange={callback} placeholder={placeholder} className="input__item" style={{width: size}}/>
            </div>
        </div>
    );
};

Input.propTypes = {
    placeholder: PropTypes.string,
    size: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    isDisabled: PropTypes.bool,
    callback: PropTypes.func,
    show: PropTypes.bool,
}

export default Input;