import { getRoleIcon } from "../../utils/getRoleIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface HeroRoleProps {
    role: string;
}

const HeroRole = ({ role }: HeroRoleProps) => {
    return (
        <div className="flex items-center gap-2">
            <FontAwesomeIcon
                icon={getRoleIcon(role)}
                className="text-xl md:text-2xl"
            />
            <p className="uppercase text-sky-400 text-xl md:text-2xl">{role}</p>
        </div>
    );
};

export default HeroRole;
