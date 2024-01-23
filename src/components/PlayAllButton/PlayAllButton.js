import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";
import {playAllSongs} from "../../redux/store";

const PlayAllButton = () => {
    const dispatch = useDispatch();
    const onPlayAll = () => {
        dispatch(playAllSongs())
    }

    return (
        <>
            <button onClick={onPlayAll} className="button flex-center">
                <FontAwesomeIcon style={{border: "none"}} icon={faPlay}/>
                Play all
            </button>
        </>
    )
}

export default PlayAllButton
