import './button.scss'
import PropTypes from "prop-types";

const Button = ( { title, type, callback } ) => {
    return (
        <>
            <button onClick={callback} className="button">
                {title}
            </button>
        </>
    );
};

Button.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string,
    callback: PropTypes.func,
}

export default Button;