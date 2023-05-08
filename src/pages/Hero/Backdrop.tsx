interface BackdropProps {
    handleBackdropClick: () => void;
}

const Backdrop = ({ handleBackdropClick }: BackdropProps) => {
    return (
        <div
            className="inset-0 fixed bg-black bg-opacity-70 animate-appear"
            onClick={handleBackdropClick}
        ></div>
    );
};

export default Backdrop;
