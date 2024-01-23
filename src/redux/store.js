import { createStore } from 'redux';
import dataModel from '../redux/models/songModel';

// action types
const ADD_NEW_SONG = 'ADD_NEW_SONG';
const PLAY_ALL_SONGS = "PLAY_ALL_SONGS";
const ADD_ALL_SONGS = "ADD_ALL_SONGS";

// action creators
const addNewSong = (song) => ({
    type: ADD_NEW_SONG,
    payload: song,
});

const playAllSongs = () => ({
    type: PLAY_ALL_SONGS,
});

const addAllSongs = () => ({
    type: ADD_ALL_SONGS,
})


const initialState = {
    songs: [

        dataModel(
            Math.random().toString(36).substring(2),
            "Always Somewhere",
            "Scorpions",
            1,
            process.env.PUBLIC_URL + "/music/Scorpions - Always Somewhere.mp3",
            process.env.PUBLIC_URL + "/images/Scorpions.jpg"
        ),
        dataModel(
            Math.random().toString(36).substring(2),
            "Bed Of Roses",
            "Bon Jovi",
            2,
            process.env.PUBLIC_URL + "/music/Bon Jovi - Bed Of Roses.mp3",
            process.env.PUBLIC_URL + "/images/Bon-Jovi.jpeg"
        ),
        dataModel(
            Math.random().toString(36).substring(2),
            "Crazy",
            "Aerosmith",
            3,
            process.env.PUBLIC_URL + "/music/Aerosmith - Crazy.mp3",
            process.env.PUBLIC_URL + "/images/Aerosmith.jpeg"
        ),
        dataModel(
            Math.random().toString(36).substring(2),
            "Coming Back To Life",
            "Pink Floyd",
            4,
            process.env.PUBLIC_URL + "/music/Pink Floyd - Coming back to life.mp3",
            process.env.PUBLIC_URL + "/images/Pink-Floyd.jpeg"
        )
    ]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_SONG:
            // logic to add a new song to the state
            return {
                ...state,
                songs: [...state.songs, action.payload],
            };

        case PLAY_ALL_SONGS:
            console.log("Play All button clicked");
            return state;

        case ADD_ALL_SONGS:
            console.log("Add All button clicked");
            return state;

        default:
            return state;
    }
};

const store = createStore(reducer);

export { addNewSong, playAllSongs, addAllSongs};
export default store;
