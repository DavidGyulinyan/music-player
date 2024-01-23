import './App.css';
import AddAllButton from "./components/AddAllButton/AddAllButton";
import PlayAllButton from "./components/PlayAllButton/PlayAllButton";
import MusicUploadForm from "./components/MusicUploadForm/MusicUploadForm";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {

    return (
        <div className="App flex-center">
            <header className="flex-center">
                <div className="cols-wrapper">
                    <div className="header-col justify-start">
                        <div className="container flex-center">
                            <PlayAllButton/>
                            <AddAllButton/>
                        </div>
                    </div>
                    <div className="header-col justify-around">
                        <MusicUploadForm/>
                        <SearchBar/>
                    </div>
                </div>
            </header>

            <main>

            </main>
        </div>
    );
}

export default App;
