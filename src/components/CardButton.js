import './CardButton.css'

export default function CardButton({ onClick, children }) {
    return (<div className='button-container'>
        <button onClick={onClick} className='card-button'>{children}</button>
    </div>)
}