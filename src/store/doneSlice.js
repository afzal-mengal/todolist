import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../util/util";

const initialState = loadState('doneState');

export const doneSlice = createSlice({
    name: 'doneToDos',
    initialState,
    reducers: {
        addDoneTodo: (state, action) => {
            return [...state, action.payload];
        },
        removeDoneToDo: (state, action) => {
            return state.filter(todo => todo.id !== action.payload);
        }
    }
})

export const { addDoneTodo, removeDoneToDo } = doneSlice.actions;
export default doneSlice.reducer;