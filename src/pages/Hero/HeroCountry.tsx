import { useHeroCountryFlag } from "./useHeroCountryFlag";

interface HeroCountryProps {
    heroCountry: string;
}

const HeroCountry = ({ heroCountry }: HeroCountryProps) => {
    const { heroCountryFlag, isLoading } = useHeroCountryFlag(heroCountry);

    return (
        <>
            {isLoading && (
                <div className="h-10 w-20 bg-white bg-opacity-10 backdrop-blur-md animate-pulse rounded-lg"></div>
            )}

            {!isLoading && heroCountryFlag && (
                <img
                    className="h-8 sm:h-10 rounded-lg animate-fadeInFromBottom"
                    src={heroCountryFlag}
                    alt={`${heroCountry} flag`}
                />
            )}

            {!isLoading && !heroCountryFlag && (
                <p className="uppercase text-sm text-sky-400 font-bold">
                    {heroCountry}
                </p>
            )}
        </>
    );
};

export default HeroCountry;
