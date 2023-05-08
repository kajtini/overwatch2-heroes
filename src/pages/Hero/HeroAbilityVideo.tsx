import { Video } from "../../types";

interface HeroAbilityVideoProps {
    video: Video;
}

const HeroAbilityVideo = ({ video }: HeroAbilityVideoProps) => {
    return (
        <video
            controls
            autoPlay
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg max-w-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl animate-fadeIn"
        >
            <source src={video.link}></source>
        </video>
    );
};

export default HeroAbilityVideo;
