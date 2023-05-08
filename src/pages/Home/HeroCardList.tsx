import { HeroBriefInfo } from "../../types";
import HeroCard from "./HeroCard";

interface HeroCardListProps {
    heroes: HeroBriefInfo[] | null;
}

const HeroCardList = ({ heroes }: HeroCardListProps) => {
    return (
        <>
            {heroes && (
                <div className="flex-grow w-full">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fadeInFromBottom">
                        {heroes.map((hero) => (
                            <HeroCard key={hero.key} hero={hero} />
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
};

export default HeroCardList;
