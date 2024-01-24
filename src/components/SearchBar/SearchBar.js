import "./SearchBar.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

        //SearchBar component for displaying a search input field
const SearchBar = () => {
    return (
        <>
            <label aria-label="search" className="search-bar-container justify-between">
                <FontAwesomeIcon icon={faSearch} aria-hidden="true"/>
                <input type="search" placeholder="search" aria-labelledby="search"/>
            </label>
        </>
    )
}

export default SearchBar
