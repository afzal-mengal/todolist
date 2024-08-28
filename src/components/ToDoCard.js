import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../store/todoSlice';
import axios from "axios";
import ToDoItem from './ToDoItem';
import CardButton from './CardButton';
import NewItem from './NewItem';

import './ToDoCard.css';

export default function ToDoCard({ userId }) {

    const toDos = useSelector((state) => state.toDos);
    const dispatch = useDispatch();

    const [inputValue, setInputvalue] = useState('');

    function handleInputChange(event) {
        setInputvalue(event.target.value);
    }

    const handleAddTodo = async () => {
        if (inputValue === '') {
            return;
        }
        try {
            const response = await axios.post("http://localhost:4000/todo/add", {
                item: inputValue,
                userId: userId
            });
            const newToDo = response.data.toDo;
            dispatch(addTodo(newToDo));
        }
        catch (error) {
            console.log(error);
        }
        finally {
            setInputvalue('');
        }
    }

    function handleInputEnter(event) {
        if (event.key === 'Enter') {
            handleAddTodo();
        }
    }

    return (
        <div className="todo-card">
            <h2>&#128640; Essential To-Do</h2>
            <div className='todo-card-content'>
                {toDos.length > 0 && toDos.map((toDo) => <ToDoItem key={toDo.id} id={toDo.id}>{toDo.item}</ToDoItem>)}
                <NewItem inputValue={inputValue} handleInputEnter={handleInputEnter} handleInputChange={handleInputChange}></NewItem>
                <div className='todo-card-buttons'>
                    <CardButton onClick={handleAddTodo}>+ To-Do</CardButton>
                    <CardButton>Save</CardButton>
                </div>
            </div>
        </div>);
}