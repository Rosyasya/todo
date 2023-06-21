import './button.scss'
import PropTypes from "prop-types";

const Button = ( { title, type, icon, iconSize , isReversed, callback, buttonSize } ) => {
    return (
        <>
            <button onClick={callback} className="button">
                <div className={isReversed ? "button__icon-reversed" : 'button__icon'} style={{width: buttonSize}}></div>
                {title}
            </button>
        </>
    );
};

Button.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string,
    icon: PropTypes.string,
    iconSize: PropTypes.string,
    buttonSize: PropTypes.string,
    isReversed: PropTypes.bool,
    callback: PropTypes.func,
}

export default Button;