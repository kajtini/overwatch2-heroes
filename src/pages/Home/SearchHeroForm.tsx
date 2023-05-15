import { replaceSpacesWithDashAndLowercase } from "../../utils/replaceSpacesWithDashAndLowercase";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

interface SearchHeroFormProps {
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    setRoleFilter: React.Dispatch<React.SetStateAction<string>>;
}

const SearchHeroForm = ({ setSearch, setRoleFilter }: SearchHeroFormProps) => {
    const [searchContent, setSearchContent] = useState("");

    const handleSearchContentChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => setSearchContent(e.target.value);

    const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearch(replaceSpacesWithDashAndLowercase(searchContent));
        setRoleFilter("");
        setSearchContent("");
    };

    return (
        <form
            className="p-5 bg-white bg-opacity-10 backdrop-blur-md focus:outline-none rounded-lg flex items-center justify-between sm:max-w-sm shadow-sm"
            onSubmit={handleSearchSubmit}
        >
            <input
                className="bg-transparent w-full focus:outline-none"
                type="text "
                placeholder="Hero name..."
                value={searchContent}
                onChange={handleSearchContentChange}
            />

            <button>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </form>
    );
};

export default SearchHeroForm;
