import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getRoleIcon } from "../../utils/getRoleIcon";
import { useState, useEffect } from "react";

interface FilterByRoleProps {
    roleFilter: string;
    setRoleFilter: React.Dispatch<React.SetStateAction<string>>;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const FilterByRole = ({
    setRoleFilter,
    setSearch,
    roleFilter,
}: FilterByRoleProps) => {
    const [roles, setRoles] = useState([
        {
            id: 0,
            role: "Tank",
            isActive: false,
        },
        { id: 1, role: "Damage", isActive: false },
        { id: 2, role: "Support", isActive: false },
    ]);

    const toggleActiveRole = (role: string) => {
        setRoles((prevRoles) =>
            prevRoles.map((prevRole) =>
                prevRole.role.toLowerCase() === role.toLowerCase()
                    ? { ...prevRole, isActive: true }
                    : { ...prevRole, isActive: false }
            )
        );
    };

    const handleRoleClick = (role: string) => {
        setRoleFilter(role.toLowerCase());
        setSearch("");
    };

    useEffect(() => {
        toggleActiveRole(roleFilter.toLowerCase());
    }, [roleFilter]);

    return (
        <div className="self-end order-[-1] sm:order-1 flex items-center gap-5">
            <ul className="flex gap-5 items-center">
                {roles?.map((role) => (
                    <li
                        key={role.id}
                        className={`flex items-center gap-2 cursor-pointer py-2 px-5 rounded-lg ${
                            role.isActive && "-translate-y-2"
                        } transition-all duration-500 bg-white bg-opacity-10 shadow-sm`}
                        onClick={() => handleRoleClick(role.role)}
                    >
                        <FontAwesomeIcon
                            icon={getRoleIcon(role.role)}
                            className={`${role.isActive && "animate-bounce"}`}
                        />
                        <p className="sm:block hidden">{role.role}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FilterByRole;
