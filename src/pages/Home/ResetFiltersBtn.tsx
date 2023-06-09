import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ResetFiltersBtnProps {
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    setRoleFilter: React.Dispatch<React.SetStateAction<string>>;
}

const ResetFiltersBtn = ({
    setSearch,
    setRoleFilter,
}: ResetFiltersBtnProps) => {
    const handleResetFiltersClick = () => {
        setSearch("");
        setRoleFilter("");
    };

    return (
        <button
            className="bg-white bg-opacity-10 w-full max-w-[156px] rounded-lg flex items-center justify-center gap-2 py-5 animate-popIn hover:-translate-y-1 transition-all duration-500 shadow-sm"
            onClick={handleResetFiltersClick}
        >
            <FontAwesomeIcon icon={faTrash} />
            <p>Reset filters</p>
        </button>
    );
};

export default ResetFiltersBtn;
