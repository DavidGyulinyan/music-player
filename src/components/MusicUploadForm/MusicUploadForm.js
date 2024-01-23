import "./MusicUploadForm.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUpFromBracket} from "@fortawesome/free-solid-svg-icons";

const MusicUploadedFile = () => {

    return (
        <div className="file-upload-container">
            <label aria-label="file-upload" className="custom-file-upload flex-center" htmlFor="file-upload">
                <FontAwesomeIcon icon={faArrowUpFromBracket}/>
                <input type="file" id="file-upload" aria-labelledby="file-upload"/>
            </label>
        </div>
    );
};

export default MusicUploadedFile;
