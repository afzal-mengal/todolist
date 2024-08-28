import './CardButton.css'

export default function CardButton({ onClick, children, ...otherProps }) {
    return (<div className='button-container'>
        <button onClick={onClick} className='card-button' {...otherProps}>{children}</button>
    </div>)
}