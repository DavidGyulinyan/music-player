import React, { useState } from "react";
import "./MusicUploadForm.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUpFromBracket} from "@fortawesome/free-solid-svg-icons";
const MusicUploadedFile = () => {
  /*  const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = () => {
        if (selectedFile) {
            console.log("Uploading file:", selectedFile);
        } else {
            console.log("No file selected");
        }
    };*/

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