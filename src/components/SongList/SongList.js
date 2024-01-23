import "./SongList.css"
import SongRow from "../SongRow/SongRow"
import {useSelector} from "react-redux";

const SongList = () => {
    const songs = useSelector(state => state.songs)

    return (
        <>
            {
                songs.map(
                    song => <SongRow
                        key={song.id}
                        songName={song.songName}
                        artistName={song.artistName}
                        trackNum={song.trackNumber}
                    />
                )
            }
        </>
    )
}

export default SongList