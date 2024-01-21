import {createStore} from "redux";
import dataModel from "../redux/models/songModel"


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
        ),
        dataModel(
            "Coming Back To Life",
            "Pink Floyd",
            5,
            process.env.PUBLIC_URL + "/music/Pink Floyd - Coming back to life.mp3",
            process.env.PUBLIC_URL + "/images/Pink-Floyd.jpeg"
        ),
dataModel(
            "Coming Back To Life",
            "Pink Floyd",
            6,
            process.env.PUBLIC_URL + "/music/Pink Floyd - Coming back to life.mp3",
            process.env.PUBLIC_URL + "/images/Pink-Floyd.jpeg"
        ),

    ],
    currentSong: null
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case "add-new-song":
            return {
                ...state,
                currentSong: action.payload.currentSong
            };
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;
