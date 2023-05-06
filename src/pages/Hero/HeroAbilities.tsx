import { Ability } from "../../types";
import { faWandSparkles } from "@fortawesome/free-solid-svg-icons";
import HeroInfoSectionHeading from "./HeroInfoSectionHeading";
import HeroAbility from "./HeroAbility";

interface HeroAbilitiesProps {
    abilities: Ability[];
}

const HeroAbilities = ({ abilities }: HeroAbilitiesProps) => {
    return (
        <HeroInfoSectionHeading title="Abilites" icon={faWandSparkles}>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {abilities.map((ability) => (
                    <HeroAbility key={ability.name} ability={ability} />
                ))}
            </ul>
        </HeroInfoSectionHeading>
    );
};

export default HeroAbilities;
