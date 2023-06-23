import './button.scss'
import PropTypes from "prop-types";

const Button = ( { title, type, callback, isDisabled } ) => {
    return (
        <>
            <button disabled={isDisabled} onClick={callback} className="button">
                {title}
            </button>
        </>
    );
};

Button.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string,
    callback: PropTypes.func,
    isDisabled: PropTypes.bool,
}

export default Button;