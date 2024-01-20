import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    songs: []
};

const songsSlice = createSlice({
    name: 'songs',
    initialState: {songs: []},
    reducers: {
        addSong: (state, action) => {
            state.songs.push(action.payload);
        },


    }
});

export const {addSong, updateSong, removeSong} = songsSlice.actions;
export default songsSlice.reducer;
