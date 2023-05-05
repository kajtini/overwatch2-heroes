import { HeroBriefInfo } from "../../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getRoleIcon } from "../../utils/getRoleIcon";

interface HeroCardProps {
    hero: HeroBriefInfo;
}

const HeroCard = ({ hero }: HeroCardProps) => {
    const heroRoleIcon = getRoleIcon(hero.role);

    return (
        <li className="cursor-pointer relative rounded-lg overflow-hidden group hover:-translate-y-2 transition-all duration-500 shadow-sm">
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

            {/* 
                FIXME: Screen flickering while this is active

                <div className="absolute bottom-0 right-0 p-4 scale-0 group-hover:scale-100 transition-all duration-500 z-10">
                    <FontAwesomeIcon
                        icon={faHeart}
                        className="text-white bg-white p-3 rounded-lg bg-opacity-10 backdrop-blur-sm"
                        size="lg"
                    />
                </div> */}
        </li>
    );
};

export default HeroCard;
