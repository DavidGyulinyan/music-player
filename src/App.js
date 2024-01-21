import './App.css';
import SongList from "./components/SongList/SongList"
import MusicUploadForm from "./components/MusicUploadForm/MusicUploadForm"

function App() {
  return (
    <div className="App">
      <main className="app-main">
          <nav>
              <div className="logo">
              </div>


          </nav>
          <div className="content-wrapper">
              <SongList/>
              <MusicUploadForm/>
          </div>
      </main>
    </div>
  );
}

export default App;
