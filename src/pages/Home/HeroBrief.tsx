import { HeroBriefInfo } from "../../types";

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
    faShield,
    faGun,
    faStarOfLife,
    faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface HeroBriefProps {
    hero: HeroBriefInfo;
}

const HeroBrief = ({ hero }: HeroBriefProps) => {
    const getRoleIcon = (role: string) => {
        switch (role) {
            case "damage":
                return faGun;
            case "tank":
                return faShield;
            case "support":
                return faStarOfLife;
        }

        return faQuestion;
    };

    const getRoleColor = (role: string) => {
        switch (role) {
            case "damage":
                return "#ef4444";
            case "tank":
                return "#4b5563";
            case "support":
                return "#22c55e";
        }

        return "#000000";
    };

    return (
        <li className="cursor-pointer">
            <div className="relative rounded-lg overflow-hidden group hover:-translate-y-2 transition-all duration-500">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm">
                    <img
                        className="h-52 group-hover:scale-105 transition-all duration-500"
                        src={hero.portrait}
                        alt={`${hero.name} hero`}
                    />
                </div>

                <div className="z-20 absolute bottom-0 right-0 p-4 text-end flex items-center justify-between w-full">
                    <FontAwesomeIcon icon={getRoleIcon(hero.role)} size="2xl" />

                    <div>
                        <p className="text-2xl">{hero.name}</p>
                        <p className="uppercase text-sky-500">{hero.role}</p>
                    </div>
                </div>

                <div
                    style={{
                        backgroundImage: `linear-gradient(to top, ${getRoleColor(
                            hero.role
                        )}, transparent 30%)`,
                    }}
                    className="absolute inset-0 opacity-70 z-10"
                ></div>

                <div className="absolute bg-gradient-to-t from-black to-transparent inset-0 opacity-90"></div>
            </div>
        </li>
    );
};

export default HeroBrief;
