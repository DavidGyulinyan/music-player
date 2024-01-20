import { configureStore } from "@reduxjs/toolkit";
import songsReducer from './slices/songSlice';

const store = configureStore({
    reducer: {
        songs: songsReducer,
        // Other reducers
    }
});

export default store;
