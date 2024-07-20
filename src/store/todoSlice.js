import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialState = [];

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            console.log(action.payload);
            return [...state, { item: action.payload, id: uuidv4() }];
        },
        removeToDo: (state, action) => {
            console.log(action.payload);
            return state.filter(todo => todo.id !== action.payload);
        }
    }
})

export const { addTodo, removeToDo } = todoSlice.actions;
export default todoSlice.reducer;