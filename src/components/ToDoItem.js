import { useDispatch } from 'react-redux';
import { removeToDo } from '../store/todoSlice';

import './ToDoItem.css'

export default function ToDoItem({ id, children }) {
    const dispatch = useDispatch();
    return (
        <div className="todo-item">
            <input type="checkbox" onChange={() => dispatch(removeToDo(id))} />
            <div>{children}</div>
        </div>);
}