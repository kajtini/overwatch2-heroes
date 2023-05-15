import ResetFiltersBtn from "./ResetFiltersBtn";
import SearchHeroForm from "./SearchHeroForm";
import FilterByRole from "./FilterByRole";

interface HeroFilterProps {
    search: string;
    roleFilter: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    setRoleFilter: React.Dispatch<React.SetStateAction<string>>;
}

const HeroFilter = ({
    search,
    roleFilter,
    setSearch,
    setRoleFilter,
}: HeroFilterProps) => {
    return (
        <div className="flex flex-col gap-5">
            {(search || roleFilter) && (
                <ResetFiltersBtn
                    setSearch={setSearch}
                    setRoleFilter={setRoleFilter}
                />
            )}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
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
        </div>
    );
};

export default HeroFilter;
