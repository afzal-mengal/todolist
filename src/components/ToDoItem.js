import { useDispatch } from 'react-redux';
import { removeToDo } from '../store/todoSlice';
import { addDoneTodo } from '../store/doneSlice';
import axios from "axios";

import './ToDoItem.css'

export default function ToDoItem({ id, children }) {
    const dispatch = useDispatch();

    const handleRemoveTodo = async () => {
        try {
            let response = await axios.post("http://localhost:4000/todo/delete", {
                toDoId: id
            });
            const deletedToDo = response.data.toDo;
            dispatch(removeToDo(id));
            response = await axios.post("http://localhost:4000/done/add", {
                item: deletedToDo.item,
                userId: deletedToDo.userId
            });
            const newDoneToDo = response.data.toDo
            dispatch(addDoneTodo(newDoneToDo));
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="todo-item">
            <input type="checkbox" onChange={handleRemoveTodo} />
            <div>{children}</div>
        </div>);
}