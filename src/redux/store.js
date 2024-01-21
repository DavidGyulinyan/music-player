import {createStore} from "redux";
import dataModel from "../redux/models/songModel"

const initialState = {
    songs: [
        dataModel("I Wanna Dance with Somebody", "Whitney Houston", 1, "file.m3p"),
        dataModel("Wonderful Tonight", "Eric Clapton", 2, "file.m3p"),
        dataModel("I Wish It Would Rain Down", "Phil Collins", 3, "file.m3p"),
    ],
    buttonTitle: [
        "Play all",
        "Add all"
    ],
    currentSong: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "add-new-song":
            return {
                ...state,
                currentSong: action.payload
            };
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;