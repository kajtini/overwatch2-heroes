import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FilterByRole = () => {
    return (
        <div className="bg-white bg-opacity-10 backdrop-blur-sm  px-6 rounded-lg flex items-center justify-between gap-5 cursor-pointer">
            <p>Filter by role</p>

            <FontAwesomeIcon icon={faChevronDown} />
        </div>
    );
};

export default FilterByRole;
