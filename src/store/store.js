import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice.js';
import doneReducer from './doneSlice.js'

export default configureStore({
    reducer: {
        toDos: todoReducer,
        doneToDos: doneReducer
    }
})