import ProgressBar from "../../components/ProgressBar";
import { HitpointInfo } from "../../types";
import {
    faCalculator,
    faHeart,
    faShield,
    faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

interface HeroHitpointStatProps {
    stat: string;
    value: number;
}

const HeroHitpointStat = ({ stat, value }: HeroHitpointStatProps) => {
    const [hitpointInfo, setHitpointInfo] = useState<HitpointInfo | null>(null);

    const roundValue = (value: number) => Math.round(value);

    const getHitpointInfo = (
        stat: string,
        value: number
    ): HitpointInfo | null => {
        switch (stat) {
            case "health":
                return {
                    icon: faHeart,
                    color: "#ef4444",
                    valuePercentage: roundValue((value / 700) * 100),
                };
            case "shields":
                return {
                    icon: faShieldHalved,
                    color: "#06b6d4",
                    valuePercentage: roundValue(
                        Math.round((value / 225) * 100)
                    ),
                };
            case "armor":
                return {
                    icon: faShield,
                    color: "#f97316",
                    valuePercentage: roundValue((value / 300) * 100),
                };
            case "total":
                return {
                    icon: faCalculator,
                    color: "#22c55e",
                    valuePercentage: roundValue((value / 1050) * 100),
                };

            default:
                return null;
        }
    };

    useEffect(() => {
        setHitpointInfo(getHitpointInfo(stat, value));
    }, [stat, value]);

    if (!hitpointInfo) return <p>No hitpoint info</p>;

    return (
        <li
            key={stat}
            className="flex flex-col gap-5 p-5 bg-white bg-opacity-10 rounded-lg shadow-md"
        >
            <FontAwesomeIcon size="4x" icon={hitpointInfo.icon} />

            <div>
                <p className="text-2xl font-bold text-center mb-3 capitalize">
                    {stat}
                </p>

                <div className="flex w-full items-center gap-3">
                    <ProgressBar
                        width={hitpointInfo.valuePercentage}
                        color={hitpointInfo.color}
                    />
                    <p className="text-slate-300">{value}</p>
                </div>
            </div>
        </li>
    );
};

export default HeroHitpointStat;
