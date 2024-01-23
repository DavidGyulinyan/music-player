import "./MusicUploadForm.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUpFromBracket} from "@fortawesome/free-solid-svg-icons";

const MusicUploadedFile = () => {

    return (
        <div className="file-upload-container flex-center">
            <label aria-label="file-upload" className="custom-file-upload" htmlFor="file-upload">
                <FontAwesomeIcon icon={faArrowUpFromBracket}/>
            </label>
            <input type="file" id="file-upload" aria-labelledby="file-upload"/>
        </div>
    );
};

export default MusicUploadedFile;
