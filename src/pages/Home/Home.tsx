import Heroes from "./Heroes";

const Home = () => {
    return (
        <div className="flex-grow flex flex-col w-full ">
            {/* Charcter List */}
            <Heroes />
        </div>
    );
};

export default Home;
