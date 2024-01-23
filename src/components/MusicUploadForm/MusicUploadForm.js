import "./MusicUploadForm.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUpFromBracket} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";
import {addNewSong} from "../../redux/store";
import {useState} from "react";

const MusicUploadedFile = () => {
    const dispatch = useDispatch();
    const [songName, setSongName] = useState('');
    const [artistName, setArtistName] = useState("");
    const [trackNumber, setTrackNumber] = useState();
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false)

    const handleUpload = () => {
        setUploading(true)
        setTimeout(() => {

            const newSong = {
                id: Math.random().toString(36).substring(2),
                songName: songName,
                artistName: artistName,
                trackNumber: trackNumber,
                fileName: file,
            };
            dispatch(addNewSong(newSong))
            setUploading(false)
            setArtistName('')
            setSongName('')
            setTrackNumber('')
            setFile(null)
        }, 2000)
    }

    return (
        <>
            <div className="justify-column upload-form">

                <input
                    className="upload-form-input"
                    type="text"
                    placeholder="Song Name"
                    value={songName}
                    onChange={e => setSongName(e.target.value)}
                />
                <input
                    className="upload-form-input"
                    type="text"
                    placeholder="Artist Name"
                    value={artistName}
                    onChange={e => {
                        setArtistName(e.target.value)
                    }}
                />
                <input
                    className="upload-form-input"
                    type="number"
                    placeholder="Track Number"
                    value={trackNumber}
                    onChange={(e) => setTrackNumber(e.target.value)}
                />
                <div className="file-upload-container">
                    <label style={{
                        position: "relative",
                    }}
                           aria-label="file-upload"
                           className="custom-file-upload flex-center"
                           htmlFor="file-upload"
                    >
                        <FontAwesomeIcon icon={faArrowUpFromBracket}/>
                        <input
                            type="file"
                            id="file-upload"
                            aria-labelledby="file-upload"
                            accept=".mp3,.wav,.m4p,.webm"
                            onChange={e => setFile(e.target.files[0])}
                        />
                    </label>
                </div>

                <button
                    className="upload-form-button"
                    onClick={handleUpload}
                >
                    Upload
                </button>
                {uploading && <p style={{
                    position: "absolute",
                    top: "-20px",
                }}>Uploading...</p>}
            </div>
        </>

    );
};

export default MusicUploadedFile;
