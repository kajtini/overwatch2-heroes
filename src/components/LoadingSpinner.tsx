import { RingLoader } from "react-spinners";

const LoadingSpinner = () => {
    return (
        <div className="flex-grow flex items-center justify-center">
            <RingLoader
                size={120}
                className=""
                loading={true}
                color="#FFFFFF"
            />
        </div>
    );
};

export default LoadingSpinner;
