import {useSelector} from "react-redux";
import "./SongList.css"

const SongList = () => {
    const songs = useSelector(state => state.songs);

    return (
        <div className="songList-wrapper">
            <h2 className="songList-title">Song List</h2>
            <div className="song-list">
                <ul>
                    {songs.map(song => (
                        <li key={song.trackNumber} className="songList-item">
                            <div className="image-wrapper">
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
