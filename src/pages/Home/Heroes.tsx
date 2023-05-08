import HeroCardList from "./HeroCardList";
import LoadingSpinner from "../../components/LoadingSpinner";
import HeroesNotFoundMessage from "./HeroesNotFoundMessage";
import { useState } from "react";
import { useHeroes } from "./useHeroes";
import HeroFilter from "./HeroFilter";

const Heroes = () => {
    const [search, setSearch] = useState("");
    const [roleFilter, setRoleFilter] = useState("");
    const { heroes, isLoading } = useHeroes(search, roleFilter);

    return (
        <div className="flex-grow flex flex-col justify-center gap-5">
            <HeroFilter
                search={search}
                setSearch={setSearch}
                roleFilter={roleFilter}
                setRoleFilter={setRoleFilter}
            />
            {isLoading && <LoadingSpinner />}
            {!isLoading && <HeroCardList heroes={heroes} />}
            {!heroes && !isLoading && <HeroesNotFoundMessage />}
        </div>
    );
};

export default Heroes;
