import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        // FIXME: Scrollbar making the page flicker

        <div className="min-h-screen flex flex-col items-center justify-center bg-primary bg-fixed bg-cover font-primary text-white">
            <div className="max-w-[1200px] w-full flex-grow flex flex-col z-10 px-4 py-20">
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>

            <div className="fixed inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
        </div>
    );
}

export default App;
