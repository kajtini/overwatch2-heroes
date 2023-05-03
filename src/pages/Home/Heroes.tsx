import axios from "axios";
import { useEffect, useState } from "react";
import { HeroBriefInfo } from "../../types";

import HeroBrief from "./HeroBrief";
import SearchHeroForm from "./SearchHeroForm";
import FilterByRole from "./FilterByRole";

const Heroes = () => {
    const [heroes, setHeroes] = useState<HeroBriefInfo[] | null>(null);

    useEffect(() => {
        const getHeroes = async () => {
            try {
                const res = await axios.get(
                    "https://overfast-api.tekrop.fr/heroes"
                );
                setHeroes(res.data);
            } catch (err) {
                console.error(`Error while getting heroes.`);
            }
        };

        getHeroes();
    }, []);

    console.log(heroes);

    return (
        <div className="flex flex-col gap-5">
            <div className="flex items-stretch justify-between">
                <SearchHeroForm />
                <FilterByRole />
            </div>

            <ul className="grid grid-cols-6 gap-6">
                {heroes?.map((hero) => (
                    <HeroBrief key={hero.key} hero={hero} />
                ))}
            </ul>
        </div>
    );
};

export default Heroes;
