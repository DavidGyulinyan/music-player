import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";
import {addAllSongs} from "../../redux/store";

const AddAllButton = () => {
    const dispatch = useDispatch()
    const onAddAll = () => {
        dispatch(addAllSongs())
    }

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
