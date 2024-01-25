import './App.css';
import AddAllButton from "./components/AddAllButton/AddAllButton";
import PlayAllButton from "./components/PlayAllButton/PlayAllButton";
import MusicUploadForm from "./components/MusicUploadForm/MusicUploadForm";
import SearchBar from "./components/SearchBar/SearchBar";
import SongList from "./components/SongList/SongList";

function App() {

    return (
        <div className="justify-column">
            <header className="flex-center">
                <div className="cols-wrapper">
                    <div className="header-col justify-start">
                        <div className="container flex-center">
                            <PlayAllButton/>
                            <AddAllButton/>
                        </div>
                    </div>
                    <div className="header-col justify-around">
                        <SearchBar/>
                    </div>
                </div>
            </header>

            <main className="justify-column">
                <section className="music-list-section justify-column">
                    <div className="main-title-row">
                        <div></div>
                        <div className="flex-center">Song Name</div>
                        <div className="flex-center">Artist Name</div>
                        <div className="flex-center">Track</div>
                        <div></div>
                    </div>
                    <SongList/>
                </section>
                <div className="uploadForm-wrapper">
                    <MusicUploadForm />
                </div>
            </main>
        </div>
    );
}

export default App;
