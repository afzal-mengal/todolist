import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice.js';

export default configureStore({
    reducer: {
        toDos: todoReducer
    }
})