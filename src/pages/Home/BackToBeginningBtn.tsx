import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface BackToBeginningBtnProps {
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    setRoleFilter: React.Dispatch<React.SetStateAction<string>>;
}

const BackToBeginningBtn = ({
    setSearch,
    setRoleFilter,
}: BackToBeginningBtnProps) => {
    const handleHouseClick = () => {
        setSearch("");
        setRoleFilter("");
    };

    return (
        <button
            className="bg-white bg-opacity-10 w-full max-w-[156px] rounded-lg flex items-center justify-center gap-2 py-5 animate-popIn hover:-translate-y-1 transition-all duration-500 shadow-sm"
            onClick={handleHouseClick}
        >
            <FontAwesomeIcon size="lg" icon={faHouse} />
            <p>Beginning</p>
        </button>
    );
};

export default BackToBeginningBtn;
