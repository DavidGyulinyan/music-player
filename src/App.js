import './App.css';
import SongList from "./components/SongList/SongList"
// import MusicUploadForm from "./components/MusicUploadForm/MusicUploadForm"
import AddAllButton from "./components/AddAllButton/AddAllButton"
import PlayAllButton from "./components/PlayAllButton/PlayAllButton"
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import React, {useEffect, useRef} from "react";
import {useSelector} from "react-redux";
import CurrentSongData from "./components/CurrentSongData";


function App() {
    const audioRef = useRef();
    const currentSong = useSelector(state => state.currentSong);


    useEffect(() => {
        if (currentSong) {
            audioRef.current.src = currentSong.audioSrc;
        }
    }, [currentSong]);

    return (
        <div className="App flex-center">
            <main className="app-main justify-between">
                <nav className="justify-between">
                    <div className="logo">
                    </div>

                    <div className="button-wrapper justify-between">
                        <AddAllButton/>
                        <PlayAllButton/>
                    </div>
                </nav>
                <div className="content-wrapper">
                    <SongList/>
                    <div className="control-bar flex-center">
                        <div className="control flex-center">
                            <CurrentSongData/>
                            <AudioPlayer
                                style={{
                                    width: "70%",
                                    height: "100px",
                                    borderRadius: "40px",
                                    backgroundColor: "#3015AF7F",
                                }}
                                className="player"
                                controls
                                ref={audioRef}
                                src={currentSong}
                                onPlay={e => console.log("onPlay")}
                            />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
