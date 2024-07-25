import { useSelector, useDispatch } from 'react-redux';
import { removeDoneToDo } from '../store/doneSlice';

import './DoneCard.css'

export default function DoneCard() {

    const doneToDos = useSelector(state => state.doneToDos)
    const dispatch = useDispatch()

    function handleRemoveDoneTodo(id) {
        dispatch(removeDoneToDo(id));
    }

    return (
        <div className="done-card">
            <h2>Completed</h2>
            <div className='done-card-content'>
                {doneToDos.length > 0 && doneToDos.map((toDo) => <div key={toDo.id} id={toDo.id} className='done-item'>{toDo.item}
                    <button onClick={() => handleRemoveDoneTodo(toDo.id)}>🗑️</button>
                </div>)}
            </div>
        </div>
    );
}