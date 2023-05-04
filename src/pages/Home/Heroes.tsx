import axios from "axios";
import { useEffect, useState } from "react";
import { HeroBriefInfo } from "../../types";

import HeroCard from "./HeroCard";
import SearchHeroForm from "./SearchHeroForm";
import FilterByRole from "./FilterByRole";
import { RingLoader } from "react-spinners";

const Heroes = () => {
    const [heroes, setHeroes] = useState<HeroBriefInfo[] | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [roleFilter, setRoleFilter] = useState("");

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

    return (
        <div className="flex-grow flex flex-col justify-center gap-5">
            <div className="flex items-center justify-between">
                <SearchHeroForm
                    setSearch={setSearch}
                    setRoleFilter={setRoleFilter}
                />
                <FilterByRole
                    roleFilter={roleFilter}
                    setRoleFilter={setRoleFilter}
                    setSearch={setSearch}
                />
            </div>

            {isLoading && (
                <div className="flex-grow flex items-center justify-center ">
                    <RingLoader
                        size={120}
                        className=""
                        loading={true}
                        color="#38bdf8"
                    />
                </div>
            )}

            {!isLoading && (
                <ul className="grid grid-cols-4 gap-6 animate-fadeIn">
                    {heroes?.map((hero) => (
                        <HeroCard key={hero.key} hero={hero} />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Heroes;
