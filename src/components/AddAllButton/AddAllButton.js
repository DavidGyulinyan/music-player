import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";
import {addAllSongs} from "../../redux/store";

const AddAllButton = () => {
    const dispatch = useDispatch()// Get the dispatch function from the Redux store
    const onAddAll = () => {
        dispatch(addAllSongs());// Dispatch the addAllSongs action when the button is clicked
    };

    return (
        <>
            <button onClick={onAddAll} className="button flex-center">
                <FontAwesomeIcon icon={faPlus}/>
                Add all
            </button>
        </>
    )
}

export default AddAllButton
