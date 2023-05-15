import HeroInfo from "./HeroInfo";
import BackToHome from "../../components/BackToHome";
import LoadingSpinner from "../../components/LoadingSpinner";
import { useHero } from "./useHero";
import { useParams } from "react-router-dom";

const Hero = () => {
    const { id: heroKey } = useParams();

    if (!heroKey) return <div>No hero key provided!</div>;

    const { hero, isLoading } = useHero(heroKey);

    return (
        <section className="flex-grow animate-fadeInFromBottom flex flex-col gap-8">
            {isLoading && <LoadingSpinner />}

            {hero && !isLoading && (
                <>
                    <BackToHome />
                    <HeroInfo hero={hero} />
                </>
            )}
        </section>
    );
};

export default Hero;
