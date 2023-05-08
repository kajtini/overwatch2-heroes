import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const BackToHome = () => {
    return (
        <Link
            to="/"
            className="flex items-center gap-2 bg-white bg-opacity-10 backdrop-blur-sm py-5 max-w-[180px] justify-center rounded-lg"
        >
            <FontAwesomeIcon icon={faHouse} />
            Back To Home
        </Link>
    );
};

export default BackToHome;
