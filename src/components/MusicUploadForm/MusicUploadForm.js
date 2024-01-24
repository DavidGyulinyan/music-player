import React, { useState } from "react";
import "./MusicUploadForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addNewSong } from "../../redux/store";

// MusicUploadedFile component for handling music file upload
const MusicUploadedFile = () => {
    // State variables for song name, artist name, track number, file, and upload status
    const [songName, setSongName] = useState("");
    const [artistName, setArtistName] = useState("");
    const [trackNumber, setTrackNumber] = useState("");
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const dispatch = useDispatch();// Get the dispatch function from React Redux

    // Function to handle the upload of the music file
    const handleUpload = () => {
        setUploading(true);// Set the uploading status to true
        setTimeout(() => {
            //Simulate a 2-second delay for the upload process
            const newSong = {
                id: Math.random().toString(36).substring(2),
                songName: songName,
                artistName: artistName,
                trackNumber: trackNumber,
                fileName: file,
            };
            dispatch(addNewSong(newSong));// Dispatch the addNewSong action with the new song data
            setUploading(false); //Set the uploading status to false
            setArtistName(""); //Reset the artist name input field
            setSongName(""); //Reset the song name input field
            setTrackNumber(""); // Reset the track number input field
            setFile(null); //Reset the file state
            console.log("File Uploaded"); //log a message to the console
        }, 2000);
    };

    return (
        <div className="justify-column upload-form">
            {/*input field for song name */}
            <input
                className="upload-form-input"
                type="text"
                placeholder="Song Name"
                value={songName}
                onChange={(e) => setSongName(e.target.value)}
            />
            {/* Input field for artist name*/}
            <input
                className="upload-form-input"
                type="text"
                placeholder="Artist Name"
                value={artistName}
                onChange={(e) => setArtistName(e.target.value)}
            />
            {/* Input field for track number */}
            <input
                className="upload-form-input"
                type="number"
                placeholder="Track Number"
                value={trackNumber}
                onChange={(e) => setTrackNumber(e.target.value)}
            />
            {/* File upload buton */}
            <div className="file-upload-container">
                <label aria-label="file-upload" className="custom-file-upload flex-center" htmlFor="file-upload">
                    <FontAwesomeIcon icon={faArrowUpFromBracket} />
                    <input
                        type="file"
                        id="file-upload"
                        aria-labelledby="file-upload"
                        accept=".mp3,.wav,.m4p,.webm"
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                </label>
            </div>

            <button className="upload-form-button" onClick={handleUpload}>
                Upload
            </button>
            {/* Display "Uploading..." message when uploading is in progress */}
            {uploading && (
                <p
                    style={{
                        position: "absolute",
                        top: "-30px",
                    }}
                >
                    Uploading...
                </p>
            )}
        </div>
    );
};

export default MusicUploadedFile;
