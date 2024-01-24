import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";
import {playAllSongs} from "../../redux/store";

// PlayAllButton component for playing all songs
const PlayAllButton = () => {
    const dispatch = useDispatch();

    // Function to dispatch the playAllSongs action
    const onPlayAll = () => {
        dispatch(playAllSongs())
    }

    return (
        <>
            {/* Button to pley all songs */}
            <button onClick={onPlayAll} className="button flex-center">
                <FontAwesomeIcon style={{border: "none"}} icon={faPlay}/>
                Play all
            </button>
        </>
    )
}

export default PlayAllButton
