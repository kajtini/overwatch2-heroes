export const getRoleColor = (role: string) => {
    switch (role.toLowerCase()) {
        case "damage":
            return "#ef4444";
        case "tank":
            return "#4b5563";
        case "support":
            return "#22c55e";
    }

    return "#000000";
};
