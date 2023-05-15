interface HeroPortraitProps {
    name: string;
    portrait: string;
}

const HeroPortrait = ({ portrait, name }: HeroPortraitProps) => {
    return (
        <div className="shrink-0 relative overflow-hidden rounded-lg shadow-md w-full md:w-auto self-start">
            <img
                className="bg-white bg-opacity-10 backdrop-blur-sm h-60 object-cover sm:h-72 w-full"
                src={portrait}
                alt={`${name} hero`}
            />
        </div>
    );
};

export default HeroPortrait;
