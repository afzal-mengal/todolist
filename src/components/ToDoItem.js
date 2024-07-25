import { useDispatch, useSelector } from 'react-redux';
import { removeToDo } from '../store/todoSlice';
import { addDoneTodo } from '../store/doneSlice';

import './ToDoItem.css'

export default function ToDoItem({ id, children }) {

    const toDos = useSelector((state) => state.toDos);
    const dispatch = useDispatch();

    function handleRemoveTodo() {
        const index = toDos.findIndex(todo => todo.id === id);
        dispatch(addDoneTodo(toDos[index]));
        dispatch(removeToDo(id));
    }

    return (
        <div className="todo-item">
            <input type="checkbox" onChange={handleRemoveTodo} />
            <div>{children}</div>
        </div>);
}