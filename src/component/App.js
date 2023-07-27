import React from "react";
import Header from "./Header";
import Movies from "./Movies/Movies";
import Footer from "./Footer";
import MDetails from "./MDetails/MDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import VideoPlayer from "./MDetails/VideoPlayer";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <div>
                    <Routes>
                        <Route path="/" element={<Movies/>}/>
                        <Route path="/DetailsOfMovies" element={<MDetails/>}/>
                        <Route path="/play" element={<VideoPlayer/>}/>
                        <Route path="/Home" element={<Home/>}/>
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App;