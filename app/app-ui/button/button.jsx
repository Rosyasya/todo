import './button.scss'

const Button = ( { title = '', type = '', icon = '', iconSize = '', isReversed = false, callback, buttonSize = '' } ) => {
    return (
        <>
            <button onClick={callback} className="button">
                <div className={isReversed ? "button__icon-reversed" : 'button__icon'} style={{width: buttonSize}}></div>
                {title}
            </button>
        </>
    );
};

export default Button;