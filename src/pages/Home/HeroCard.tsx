import { HeroBriefInfo } from "../../types";
import { getRoleIcon } from "../../utils/getRoleIcon";
import { replaceSpacesWithDashAndLowercase } from "../../utils/replaceSpacesWithDashAndLowercase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

interface HeroCardProps {
    hero: HeroBriefInfo;
}

const HeroCard = ({ hero }: HeroCardProps) => {
    const heroRoleIcon = getRoleIcon(hero.role);

    return (
        <li>
            <Link
                to={`/heroes/${
                    hero?.key || replaceSpacesWithDashAndLowercase(hero.name)
                }`}
                className="cursor-pointer relative rounded-lg overflow-hidden group hover:-translate-y-2 transition-all duration-500 shadow-sm block"
            >
                <img
                    className="h-52 group-hover:scale-105 transition-all duration-500 w-full object-cover"
                    src={hero.portrait}
                    alt={`${hero.name} hero`}
                />
                <div className="absolute top-0 left-0 p-4 text-start flex items-center justify-between w-full bg-gradient-to-b from-black to-transparent">
                    <div>
                        <p className="text-2xl">{hero.name}</p>
                        <p className="uppercase text-sky-500">{hero.role}</p>
                    </div>
                    <FontAwesomeIcon icon={heroRoleIcon} size="2xl" />
                </div>
            </Link>
        </li>
    );
};

export default HeroCard;
