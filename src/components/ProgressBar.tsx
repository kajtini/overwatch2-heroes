const ProgressBar = ({ color, width }: { color: string; width: number }) => {
    return (
        <div className="w-full bg-white bg-opacity-10 backdrop-blur-sm h-2.5 rounded-full ">
            <div
                className="rounded-full h-2.5"
                style={{
                    width: `${width}%`,
                    backgroundColor: color,
                }}
            ></div>
        </div>
    );
};

export default ProgressBar;
