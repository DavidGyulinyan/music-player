import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay} from "@fortawesome/free-solid-svg-icons";

const PlayAllButton = () => {

    return (
        <>
            <button className="button flex-center">
                <FontAwesomeIcon style={{border: "none"}} icon={faPlay}/>
                Play all
            </button>
        </>
    )
}

export default PlayAllButton
