import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            return [...state, { item: action.payload.item, id: action.payload._id }];
        },
        removeToDo: (state, action) => {
            return state.filter(todo => todo.id !== action.payload);
        },
        resetToDos: (state, action) => {
            return [];
        }
    }
})

export const { addTodo, removeToDo, resetToDos } = todoSlice.actions;
export default todoSlice.reducer;