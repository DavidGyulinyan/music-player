import {useSelector, useDispatch} from "react-redux";
import "./SongList.css"
import { setCurrentSong } from '../../redux/store'

const SongList = () => {
    const songs = useSelector(state => state.songs);
    const currentSong = useSelector(state => state.currentSong);
    const dispatch = useDispatch();

    const playSong = (song) => {
        dispatch(setCurrentSong(song));
    };

    return (
        <div className="songList-wrapper">
            <h2 className="songList-title">Song List</h2>
            <div className="song-list flex-center">
                <ul>
                    {songs.map(song => (
                        <li
                            key={song.trackNumber}
                            className="justify-between"
                            onClick={playSong}
                        >
                            <div className="image-wrapper justify-between">
                                <div className="track-number">
                                    {song.trackNumber}
                                </div>
                                <div
                                    className="image"
                                    style={{backgroundImage: `url(${song.image})`}}
                                >

                                </div>
                            </div>
                            <div className="song-description">
                                {song.songName} by {song.artistName}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SongList;
