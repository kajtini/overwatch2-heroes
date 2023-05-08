import HeroPortrait from "./HeroPortrait";
import HeroRole from "./HeroRole";
import HeroCountry from "./HeroCountry";

interface HeroOverviewProps {
    portrait: string;
    description: string;
    role: string;
    name: string;
    location: string;
    story: { summary: string };
}

const HeroOverview = ({
    portrait,
    description,
    role,
    name,
    location,
    story,
}: HeroOverviewProps) => {
    const heroCountry = location
        .replaceAll("(formerly)", "")
        .split(",")?.[1]
        ?.trim()
        .toLowerCase();

    return (
        <div className="flex md:flex-row flex-col items-center gap-5 md:gap-8">
            <HeroPortrait name={name} portrait={portrait} />
            <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 md:gap-5">
                        <p className="font-bold text-4xl md:text-5xl">{name}</p>

                        <HeroCountry heroCountry={heroCountry} />
                    </div>
                    <HeroRole role={role} />
                </div>

                <p className="text-lg bg-gradient-to-tr from-red-400 to-pink-400 bg-clip-text text-transparent font-bold text-center md:text-start">
                    {description}
                </p>

                <p className="text-lg text-slate-300 text-center md:text-start leading-8">
                    {story.summary}
                </p>
            </div>
        </div>
    );
};

export default HeroOverview;
