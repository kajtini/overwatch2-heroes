import { useState, useEffect } from "react";
import { HeroDetailedInfo } from "../../types";
import axios from "axios";

export const useHero = (heroKey: string) => {
    const [hero, setHero] = useState<HeroDetailedInfo | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getHero = async () => {
            try {
                setIsLoading(true);

                const res = await axios.get(
                    `https://overfast-api.tekrop.fr/heroes/${heroKey}`
                );

                setHero(res.data);
                setIsLoading(false);
            } catch (err) {
                console.error(`Error while fetching the hero: ${err}`);
                setIsLoading(false);
            }
        };

        getHero();
    }, []);

    return { hero, isLoading };
};
