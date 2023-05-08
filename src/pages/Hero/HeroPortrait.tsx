interface HeroPortraitProps {
    name: string;
    portrait: string;
}

const HeroPortrait = ({ portrait, name }: HeroPortraitProps) => {
    return (
        // TODO: Add the ability to add hero to favourites. Afterwards restore the heart animation.

        <div className="shrink-0 relative overflow-hidden rounded-lg shadow-md w-full md:w-auto self-start">
            <img
                className="bg-white bg-opacity-10 backdrop-blur-sm h-60 object-cover sm:h-72 w-full"
                src={portrait}
                alt={`${name} hero`}
            />

            {/* <div className="absolute bottom-0 right-0 p-5 z-10 scale-0 group-hover:scale-100 transition-all duration-500">
                <FontAwesomeIcon icon={faHeart} size="3x" />
            </div>

            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-500"></div> */}
        </div>
    );
};

export default HeroPortrait;
