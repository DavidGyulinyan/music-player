import "./SongRow.css"
import {faPlay} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const SongRow = ({songName, artistName, trackNum}) => {

    return(
        <>
            <div className="row">
                <div className="row-section flex-center">
                    <FontAwesomeIcon style={{border: "none"}} icon={faPlay}/>
                </div>
                <div className="row-section flex-center">{songName}</div>
                <div className="row-section flex-center">{artistName}</div>
                <div className="row-section flex-center">{trackNum}</div>
                <div className="row-section flex-center"></div>
            </div>
        </>
    )
}

export default SongRow
