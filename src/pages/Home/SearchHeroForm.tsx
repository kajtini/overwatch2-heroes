import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchHeroForm = () => {
    return (
        <form className="p-5 bg-white bg-opacity-10 backdrop-blur-md focus:outline-none rounded-lg flex items-center justify-between max-w-sm flex-grow">
            <input
                className="bg-transparent w-full focus:outline-none"
                type="text "
                placeholder="Enter hero name..."
            />

            <FontAwesomeIcon icon={faMagnifyingGlass} />
        </form>
    );
};

export default SearchHeroForm;
