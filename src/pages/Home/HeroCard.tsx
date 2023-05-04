import { HeroBriefInfo } from "../../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getRoleIcon } from "../../utils/getRoleIcon";
import { faH, faHeart } from "@fortawesome/free-solid-svg-icons";

interface HeroCardProps {
    hero: HeroBriefInfo;
}

const HeroCard = ({ hero }: HeroCardProps) => {
    return (
        <li className="cursor-pointer">
            <div className="relative rounded-lg overflow-hidden group hover:-translate-y-2 transition-all duration-500">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm">
                    <img
                        className="h-52 group-hover:scale-105 transition-all duration-500 w-full object-cover"
                        src={hero.portrait}
                        alt={`${hero.name} hero`}
                    />
                </div>

                <div className="z-10 absolute top-0 left-0 p-4 text-start flex items-center justify-between w-full">
                    <div>
                        <p className="text-2xl">{hero.name}</p>
                        <p className="uppercase text-sky-500">{hero.role}</p>
                    </div>
                    <FontAwesomeIcon icon={getRoleIcon(hero.role)} size="2xl" />
                </div>

                <div className="absolute bottom-0 right-0 p-4 scale-0 group-hover:scale-100 transition-all duration-500">
                    <FontAwesomeIcon
                        icon={faHeart}
                        className="text-white bg-white p-3 rounded-lg bg-opacity-10 backdrop-blur-sm"
                        size="lg"
                    />
                </div>

                <div className="absolute bg-gradient-to-b from-black to-transparent inset-0 opacity-90"></div>
            </div>
        </li>
    );
};

export default HeroCard;
