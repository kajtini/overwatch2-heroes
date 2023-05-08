import {
    faCalculator,
    faHeart,
    faQuestion,
    faShield,
    faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { upperCaseFirstLetter } from "../../utils/uppercaseFirstLetter";
import ProgressBar from "../../components/ProgressBar";

interface HeroHitpointStatProps {
    stat: string;
    value: number;
}

const HeroHitpointStat = ({ stat, value }: HeroHitpointStatProps) => {
    const getHitpointStatIcon = (stat: string) => {
        switch (stat.toLowerCase()) {
            case "health":
                return faHeart;
            case "shields":
                return faShieldHalved;
            case "armor":
                return faShield;
            case "total":
                return faCalculator;
        }

        return faQuestion;
    };

    const getHitpointStatColor = (stat: string) => {
        switch (stat.toLowerCase()) {
            case "health":
                return "#ef4444";
            case "shields":
                return "#06b6d4";
            case "armor":
                return "#f97316";
            case "total":
                return "#22c55e";
        }

        return "#FFFFFF";
    };

    const calculateHitpointValuePercentage = (stat: string, value: number) => {
        switch (stat.toLowerCase()) {
            case "health":
                return Math.round((value / 700) * 100);
            case "shields":
                return Math.round((value / 225) * 100);
            case "armor":
                return Math.round((value / 300) * 100);
            case "total":
                return Math.round((value / 1050) * 100);
        }

        return 0;
    };

    return (
        <li
            key={stat}
            className="flex flex-col gap-5 p-5 bg-white bg-opacity-10 rounded-lg group hover:-translate-y-1 transition-all duration-500 cursor-pointer shadow-md"
        >
            <FontAwesomeIcon size="4x" icon={getHitpointStatIcon(stat)} />

            <div>
                <p className="text-2xl font-bold text-center mb-3">
                    {upperCaseFirstLetter(stat)}
                </p>

                <div className="flex w-full items-center gap-3">
                    <ProgressBar
                        width={calculateHitpointValuePercentage(stat, value)}
                        color={getHitpointStatColor(stat)}
                    />
                    <p className="text-slate-300">{value}</p>
                </div>
            </div>
        </li>
    );
};

export default HeroHitpointStat;
