import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getRoleIcon } from "../../utils/getRoleIcon";
import { getRoleColor } from "../../utils/getRoleColor";
import { faBan } from "@fortawesome/free-solid-svg-icons";

interface FilterByRoleProps {
    roleFilter: string;
    setRoleFilter: React.Dispatch<React.SetStateAction<string>>;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const FilterByRole = ({
    roleFilter,
    setRoleFilter,
    setSearch,
}: FilterByRoleProps) => {
    const roles = [
        {
            id: 0,
            role: "Tank",
        },
        { id: 1, role: "Damage" },
        { id: 2, role: "Support" },
    ];

    const handleRoleClick = (role: string) => {
        setRoleFilter(role.toLowerCase());
        setSearch("");
    };

    const handleRoleFilterClearClick = () => {
        setRoleFilter("");
    };

    return (
        <div className="flex items-center gap-5">
            {roleFilter && (
                <div
                    className="flex items-center gap-2 bg-white bg-opacity-10 self-stretch px-5 rounded-lg cursor-pointer hover:-translate-y-1 transition-all duration-500 backdrop-blur-sm"
                    onClick={handleRoleFilterClearClick}
                >
                    <FontAwesomeIcon icon={faBan} size="lg" />

                    <p>Clear</p>
                </div>
            )}

            <ul className="flex gap-5 items-center max-w-xs w-full overflow-scroll scrollbar-hide">
                {roles?.map((role) => (
                    <li
                        key={role.id}
                        className="flex items-center gap-1 cursor-pointer py-2 px-5 rounded-lg"
                        style={{
                            backgroundColor: getRoleColor(role.role),
                        }}
                        onClick={() => handleRoleClick(role.role)}
                    >
                        <FontAwesomeIcon icon={getRoleIcon(role.role)} />
                        <p>{role.role}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FilterByRole;
