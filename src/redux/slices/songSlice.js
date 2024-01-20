import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    songs: []
};

const songsSlice = createSlice({
    name: 'songs',
    initialState,
    reducers: {
        addSong: (state, action) => {
            state.songs.push(action.payload);
        },
    }
});

export const { addSong } = songsSlice.actions;
export default songsSlice.reducer;