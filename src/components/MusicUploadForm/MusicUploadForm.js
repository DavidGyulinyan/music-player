import React, { useState } from "react";
import "./MusicUploadForm.css"
const MusicUploadedFile = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = () => {
        if (selectedFile) {
            console.log("Uploading file:", selectedFile);
        } else {
            console.log("No file selected");
        }
    };

    return (
        <div className="musicUploadForm">
            {/*<input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>*/}
        </div>
    );
};

export default MusicUploadedFile;