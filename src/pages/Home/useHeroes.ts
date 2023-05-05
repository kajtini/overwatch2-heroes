import axios from "axios";
import { HeroBriefInfo } from "../../types";
import { useState, useEffect } from "react";

export const useHeroes = (search: string, roleFilter: string) => {
    const [heroes, setHeroes] = useState<HeroBriefInfo[] | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getHeroes = async () => {
            try {
                setIsLoading(true);

                const res = await axios.get(
                    `https://overfast-api.tekrop.fr/heroes${
                        search ? `/${search}` : ""
                    }${roleFilter ? `?role=${roleFilter}` : ""}`
                );
                console.log(res);
                setHeroes(res.data.length ? [...res.data] : [res.data]);

                setIsLoading(false);
            } catch (err) {
                console.error(`Error while getting heroes: ${err}`);
                setIsLoading(false);
                setHeroes(null);
            }
        };

        getHeroes();
    }, [search, roleFilter]);

    return { heroes, isLoading };
};
