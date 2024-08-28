import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const doneSlice = createSlice({
    name: 'doneToDos',
    initialState,
    reducers: {
        addDoneTodo: (state, action) => {
            return [...state, { item: action.payload.item, id: action.payload._id }];
        },
        removeDoneToDo: (state, action) => {
            return state.filter(todo => todo.id !== action.payload);
        },
        resetDoneToDos: (state, action) => {
            return [];
        }
    }
})

export const { addDoneTodo, removeDoneToDo, resetDoneToDos } = doneSlice.actions;
export default doneSlice.reducer;