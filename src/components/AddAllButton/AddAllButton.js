import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

const AddAllButton = () => {

    return (
        <>
            <button className="button flex-center">
                <FontAwesomeIcon icon={faPlus}/>
                Add all
            </button>
        </>
    )
}

export default AddAllButton
