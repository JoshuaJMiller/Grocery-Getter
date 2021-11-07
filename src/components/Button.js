import PropTypes from 'prop-types'

const Button = ({text, addItem}) =>
{
    return (
        <button onClick={addItem} className='btn'>{text}</button>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
}

export default Button