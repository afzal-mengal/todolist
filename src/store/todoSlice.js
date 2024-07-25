import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
import { loadState } from "../util/util";

const initialState = loadState('toDosState');

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            return [...state, { item: action.payload, id: uuidv4() }];
        },
        removeToDo: (state, action) => {
            return state.filter(todo => todo.id !== action.payload);
        }
    }
})

export const { addTodo, removeToDo } = todoSlice.actions;
export default todoSlice.reducer;