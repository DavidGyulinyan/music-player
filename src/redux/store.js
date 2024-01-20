import { configureStore } from "@reduxjs/toolkit";
import songSlice from "./slices/songSlice";

const store = configureStore({
        reducer: {
            addSong: songSlice,
        }
    }
);

export default store;