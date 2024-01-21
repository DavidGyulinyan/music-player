import { useSelector } from "react-redux";
import "./SongList.css"

const SongList = () => {
    // const songs = useSelector(state => state.songs);

    return (
        <div className="songList">
           {/* <h2>Song List</h2>
            <ul>
                {songs.map((song) => (
                    <li key={song.trackNumber}>
                        {song.trackNumber}  {song.songName} by {song.artistName}
                    </li>
                ))}
            </ul>*/}
        </div>
    );
};

export default SongList;