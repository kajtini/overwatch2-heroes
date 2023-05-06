import { useParams } from "react-router-dom";
import { useHero } from "./useHero";
import HeroInfo from "./HeroInfo";

const Hero = () => {
    const { id: heroKey } = useParams();

    if (!heroKey) return <div>No hero key provided!</div>;

    const { hero, isLoading } = useHero(heroKey);

    if (!hero) return <div>Hero not found</div>;

    return (
        <section className="flex-grow animate-fadeIn">
            <HeroInfo hero={hero} />
        </section>
    );
};

export default Hero;
