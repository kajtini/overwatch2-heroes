import HeroAbilities from "./HeroAbilities";
import HeroHitpoints from "./HeroHitpoints";
import HeroOverview from "./HeroOverview";
import { HeroDetailedInfo } from "../../types";

interface HeroInfoProps {
    hero: HeroDetailedInfo;
}

const HeroInfo = ({ hero }: HeroInfoProps) => {
    return (
        <div className="flex flex-col gap-10">
            <HeroOverview {...hero} />
            <HeroHitpoints hitpoints={hero.hitpoints} />
            <HeroAbilities abilities={hero.abilities} />
        </div>
    );
};

export default HeroInfo;
