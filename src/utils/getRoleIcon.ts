import {
    faShield,
    faGun,
    faStarOfLife,
    faQuestion,
} from "@fortawesome/free-solid-svg-icons";

export const getRoleIcon = (role: string) => {
    switch (role.toLowerCase()) {
        case "damage":
            return faGun;
        case "tank":
            return faShield;
        case "support":
            return faStarOfLife;
    }

    return faQuestion;
};
