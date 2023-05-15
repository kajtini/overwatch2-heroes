import HeroInfoSectionHeading from "./HeroInfoSectionHeading";
import HeroAbility from "./HeroAbility";
import Backdrop from "./Backdrop";
import HeroAbilityVideo from "./HeroAbilityVideo";
import { Ability, Video } from "../../types";
import { faWandSparkles } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface HeroAbilitiesProps {
    abilities: Ability[];
}

const HeroAbilities = ({ abilities }: HeroAbilitiesProps) => {
    const [selectedAbilityVideo, setSelectedAbilityVideo] =
        useState<Video | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleAbilityClick = (ability: Ability) => {
        setSelectedAbilityVideo(ability.video);
        setIsOpen(true);
    };

    const handleBackdropClick = () => {
        setIsOpen(false);
    };

    return (
        <>
            <HeroInfoSectionHeading title="Abilites" icon={faWandSparkles}>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {abilities.map((ability) => (
                        <HeroAbility
                            key={ability.name}
                            ability={ability}
                            handleAbilityClick={handleAbilityClick}
                        />
                    ))}
                </ul>
            </HeroInfoSectionHeading>

            {selectedAbilityVideo && isOpen && (
                <>
                    <Backdrop handleBackdropClick={handleBackdropClick} />
                    <HeroAbilityVideo video={selectedAbilityVideo} />
                </>
            )}
        </>
    );
};

export default HeroAbilities;
