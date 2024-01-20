import { useSelector, useDispatch } from 'react-redux';
import { addSong } from '../../redux/slices/songSlice';
import {useState} from "react";

const SongList = () => {

    const song = useSelector((state) => state.songs.songs);
    const dispatch = useDispatch();

    const [songs, setSongs] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);
    const addSong = (newSong) => {
        setSongs([...songs, newSong]);
    };

    const updateSong = (index, updatedSong) => {
        const updatedSongs = [...songs];
        updatedSongs[index] = updatedSong;
        setSongs(updatedSongs);
    };

    const removeSong = (index) => {
        const updatedSongs = songs.filter((_, i) => i !== index);
        setSongs(updatedSongs);
    };

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange}/>
            <ul>
                {songs.map((song, index) => (
                    <li key={index}>{song.songName} by {song.artistName}</li>
                ))}
            </ul>
        </div>
    )
}

export default SongList
