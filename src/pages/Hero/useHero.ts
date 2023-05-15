import { HeroDetailedInfo } from "../../types";
import { useState, useEffect } from "react";
import axios from "axios";

export const useHero = (heroKey: string) => {
    const [hero, setHero] = useState<HeroDetailedInfo | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getHero = async () => {
            try {
                setIsLoading(true);

                const { data } = await axios.get(
                    `https://overfast-api.tekrop.fr/heroes/${heroKey}`
                );

                setHero(data);
            } catch (err) {
                console.error(`Error while fetching the hero: ${err}`);
            } finally {
                setIsLoading(false);
            }
        };

        getHero();
    }, []);

    return { hero, isLoading };
};
