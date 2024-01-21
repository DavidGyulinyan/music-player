import './App.css';
import SongList from "./components/SongList/SongList"
// import MusicUploadForm from "./components/MusicUploadForm/MusicUploadForm"
import AddAllButton from "./components/AddAllButton/AddAllButton"
import PlayAllButton from "./components/PlayAllButton/PlayAllButton"
import AudioPlayer from "react-h5-audio-player";


function App() {

  return (
    <div className="App">
      <main className="app-main">
          <nav>
              <div className="logo">
              </div>

              <div className="button-wrapper">
                  <AddAllButton/>
                  <PlayAllButton/>
              </div>
          </nav>
          <div className="content-wrapper">
              <SongList/>
              <div className="control-bar">
                    <AudioPlayer/>
              </div>
          </div>
      </main>
    </div>
  );
}

export default App;
