import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Hitpoints } from "../../types";
import HeroInfoSectionHeading from "./HeroInfoSectionHeading";
import HeroHitpointStat from "./HeroHitpointStat";

interface HeroHitpointsProps {
    hitpoints: Hitpoints;
}

const HeroHitpoints = ({ hitpoints }: HeroHitpointsProps) => {
    return (
        <HeroInfoSectionHeading title="Hitpoints" icon={faHeart}>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                {Object.entries(hitpoints).map(([stat, value]) => (
                    <HeroHitpointStat key={stat} stat={stat} value={value} />
                ))}
            </ul>
        </HeroInfoSectionHeading>
    );
};

export default HeroHitpoints;
