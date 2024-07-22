import './NewItem.css';

export default function NewItem({ inputValue, handleInputEnter, handleInputChange }) {
    return (<div className='new-item-container'>
        <div className='add-symbol'>+</div>
        <input className="new-item" type='text' placeholder="Enter tasks, ideas, notes..." value={inputValue} onChange={handleInputChange} onKeyDown={handleInputEnter} />
    </div>);
}