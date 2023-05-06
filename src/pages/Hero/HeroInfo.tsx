import { HeroDetailedInfo } from "../../types";
import HeroAbilities from "./HeroAbilities";
import HeroHitpoints from "./HeroHitpoints";

interface HeroInfoProps {
    hero: HeroDetailedInfo;
}

const HeroInfo = ({ hero }: HeroInfoProps) => {
    return (
        <div className="flex flex-col gap-10">
            <HeroHitpoints hitpoints={hero.hitpoints} />
            <HeroAbilities abilities={hero.abilities} />
        </div>
    );
};

export default HeroInfo;
