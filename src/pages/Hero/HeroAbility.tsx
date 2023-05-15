import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Ability } from "../../types";
import { faVideo } from "@fortawesome/free-solid-svg-icons";

interface HeroAbilityProps {
    ability: Ability;
    handleAbilityClick: (ability: Ability) => void;
}

const HeroAbility = ({ ability, handleAbilityClick }: HeroAbilityProps) => {
    return (
        <li className="p-5 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg shadow-md cursor-pointer group hover:-translate-y-1 transition-all duration-500 flex flex-col gap-5">
            <img
                className="h-20 mx-auto"
                src={ability.icon}
                alt={`${ability.name} hero ability`}
            />
            <div className="flex-grow flex flex-col justify-center">
                <p className="text-2xl text-center font-bold mb-1">
                    {ability.name}
                </p>
                <p className="text-slate-300 text-center">
                    {ability.description}
                </p>
            </div>

            <button
                className="flex items-center gap-3  bg-white bg-opacity-10 p-2 rounded-lg w-full justify-center shadow-sm "
                onClick={() => handleAbilityClick(ability)}
            >
                <FontAwesomeIcon icon={faVideo} size="lg" />
                Preview video
            </button>
        </li>
    );
};

export default HeroAbility;
