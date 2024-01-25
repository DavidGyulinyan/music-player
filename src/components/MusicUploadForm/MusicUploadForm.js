import React, { useState } from "react";
import "./MusicUploadForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";

// MusicUploadedFile component for handling music file upload
const MusicUploadedFile = () => {
    // State variables for file input value, upload status, and error message
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState("");

    // Function to handle the file selection
    const handleFileSelect = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
        setError(""); // Clear the error message when a file is selected
    };

    // Function to handle the upload of the music file
    const handleUpload = () => {
        if (!selectedFile) {
            setError("Please select a file");
            console.error("File uploading error, select a file before uploading")
            return;
        }

        setUploading(true); // Set the uploading status to true
        setTimeout(() => {
            setUploading(false); // Set the uploading status to false
            console.log("File Uploaded"); // Displays a message to the console
            console.log(selectedFile)// Displays the file to the console
        }, Math.floor(Math.random() * 2500)); // Set uploading timeout duration randomly
    };

    return (
        <div className="justify-column upload-form">
            {/* File upload button */}
            <div className="file-upload-container">
                <label aria-label="file-upload" className="custom-file-upload flex-center" htmlFor="file-upload">
                    <FontAwesomeIcon icon={faArrowUpFromBracket} />
                    <input
                        type="file"
                        id="file-upload"
                        aria-labelledby="file-upload"
                        accept=".mp3,.wav,.m4p,.webm"
                        onChange={handleFileSelect} // Call handleFileSelect on file selection
                    />
                </label>
            </div>

            <button className="upload-form-button" onClick={handleUpload}>
                Upload
            </button>
            {/* Conditional rendering for error message */}
            {error && <div className="error-message">{error}</div>}
            {/* Display "Uploading..." message when uploading is in progress */}
            {uploading && (
                <div className="upload-message">
                    <div className="progress">Uploading...</div>
                </div>
            )}
        </div>
    );
};

export default MusicUploadedFile;
