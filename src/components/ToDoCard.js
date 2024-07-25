import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../store/todoSlice';

import './ToDoCard.css';

import ToDoItem from './ToDoItem';
import CardButton from './CardButton';
import NewItem from './NewItem';

export default function ToDoCard() {

    const toDos = useSelector((state) => state.toDos);
    const doneToDos = useSelector((state) => state.doneToDos)
    const dispatch = useDispatch();

    const [inputValue, setInputvalue] = useState('');

    useEffect(() => {
        try {
            const serializedTodos = JSON.stringify(toDos);
            localStorage.setItem('toDosState', serializedTodos);
            const serializedDoneToDos = JSON.stringify(doneToDos);
            localStorage.setItem('doneState', serializedDoneToDos);
        }
        catch (error) {
            console.error("Local Storage Error", error);
        }
    }, [toDos, doneToDos]);

    function handleInputChange(event) {
        setInputvalue(event.target.value);
    }

    function handleAddTodo() {
        if (inputValue === '') {
            return;
        }
        dispatch(addTodo(inputValue));
        setInputvalue('');
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