import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../store/todoSlice';

import './ToDoCard.css';

import ToDoItem from './ToDoItem';
import CardButton from './CardButton';
import NewItem from './NewItem';

export default function ToDoCard() {

    const toDos = useSelector((state) => state.toDos);
    const dispatch = useDispatch();

    const [inputValue, setInputvalue] = useState('');

    function handleInputChange(event) {
        setInputvalue(event.target.value);
    }

    function handleAddTodo() {
        dispatch(addTodo(inputValue));
        setInputvalue('');
    }

    return (<div className="parent">
        <div className="card">
            <h2>&#128640; Essential To-Do</h2>
            <div className='card-content'>
                {toDos.length > 0 && toDos.map((toDo) => <ToDoItem key={toDo.id} id={toDo.id}>{toDo.item}</ToDoItem>)}
                <NewItem inputValue={inputValue} handleInputChange={handleInputChange}></NewItem>
                <div className='buttons'>
                    <CardButton onClick={handleAddTodo}>To-Do</CardButton>
                    <CardButton>Save</CardButton>
                </div>
            </div>
        </div>
    </div>);
}