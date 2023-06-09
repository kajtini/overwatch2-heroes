import Hero from "./pages/Hero";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-primary bg-fixed bg-cover font-primary text-white">
            <div className="max-w-[1200px] w-full flex-grow flex flex-col z-10 px-4 py-10 md:py-20">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/heroes/:id" element={<Hero />} />
                </Routes>
            </div>

            <div className="fixed inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
        </div>
    );
}

export default App;
