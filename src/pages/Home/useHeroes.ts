import { HeroBriefInfo } from "../../types";
import { useState, useEffect } from "react";
import axios from "axios";

export const useHeroes = (search: string, roleFilter: string) => {
    const [heroes, setHeroes] = useState<HeroBriefInfo[] | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getHeroes = async () => {
            try {
                setIsLoading(true);

                const { data } = await axios.get(
                    `https://overfast-api.tekrop.fr/heroes${
                        search ? `/${search}` : ""
                    }${roleFilter ? `?role=${roleFilter}` : ""}`
                );
                setHeroes(data.length ? [...data] : [data]);
            } catch (err) {
                console.error(`Error while getting heroes: ${err}`);
                setHeroes(null);
            } finally {
                setIsLoading(false);
            }
        };

        getHeroes();
    }, [search, roleFilter]);

    return { heroes, isLoading };
};
