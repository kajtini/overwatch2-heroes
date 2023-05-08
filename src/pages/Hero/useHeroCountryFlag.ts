import axios from "axios";
import { useState, useEffect } from "react";

export const useHeroCountryFlag = (heroCountry: string) => {
    const [heroCountryFlag, setHeroCountryFlag] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getHeroCountryFlag = async () => {
            try {
                setIsLoading(true);

                const res = await axios.get(
                    `https://restcountries.com/v3.1/name/${heroCountry}`
                );
                const {
                    data: [data],
                } = res;

                setHeroCountryFlag(data.flags.png);

                setIsLoading(false);
            } catch (err) {
                console.error(`Error while retrieving the hero flag: ${err}`);
                setIsLoading(false);
            }
        };

        getHeroCountryFlag();
    }, []);

    return { heroCountryFlag, isLoading };
};
