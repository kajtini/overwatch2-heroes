import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";

interface HeroInfoSectionHeadingProps {
    icon: IconDefinition;
    title: string;
    children: ReactNode;
}

const HeroInfoSectionHeading = ({
    title,
    icon,
    children,
}: HeroInfoSectionHeadingProps) => {
    return (
        <div>
            <div className="flex items-center gap-3 mb-3">
                <FontAwesomeIcon icon={icon} size="lg" />
                <p className="text-3xl">{title}</p>
            </div>

            {children}
        </div>
    );
};

export default HeroInfoSectionHeading;
