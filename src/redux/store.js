import { createStore } from 'redux';
import dataModel from '../redux/models/songModel';

// action types
const ADD_NEW_SONG = 'ADD_NEW_SONG';
const SET_CURRENT_SONG = 'SET_CURRENT_SONG';

// action creators
const addNewSong = (song) => ({
    type: ADD_NEW_SONG,
    payload: song,
});

const setCurrentSong = (song) => ({
    type: SET_CURRENT_SONG,
    payload: song,
});


const initialState = {
    songs: [

        dataModel(
            "Always Somewhere",
            "Scorpions",
            1,
            process.env.PUBLIC_URL + "/music/Scorpions - Always Somewhere.mp3",
            process.env.PUBLIC_URL + "/images/Scorpions.jpg"
        ),
        dataModel(
            "Bed Of Roses",
            "Bon Jovi",
            2,
            process.env.PUBLIC_URL + "/music/Bon Jovi - Bed Of Roses.mp3",
            process.env.PUBLIC_URL + "/images/Bon-Jovi.jpeg"
        ),
        dataModel(
            "Crazy",
            "Aerosmith",
            3,
            process.env.PUBLIC_URL + "/music/Aerosmith - Crazy.mp3",
            process.env.PUBLIC_URL + "/images/Aerosmith.jpeg"
        ),
        dataModel(
            "Coming Back To Life",
            "Pink Floyd",
            4,
            process.env.PUBLIC_URL + "/music/Pink Floyd - Coming back to life.mp3",
            process.env.PUBLIC_URL + "/images/Pink-Floyd.jpeg"
        )
    ],
    currentSong: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_SONG:
            // logic to add a new song to the state
            return {
                ...state,
                songs: [...state.songs, action.payload],
            };
        case SET_CURRENT_SONG:
            return {
                ...state,
                currentSong: action.payload,
            };
        default:
            return state;
    }
};

const store = createStore(reducer);

export { addNewSong, setCurrentSong };
export default store;