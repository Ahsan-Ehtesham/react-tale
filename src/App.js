import React from "react";

import './App.css';
import './Components/components.css';

import NavBar from "./Components/navbar";
import Carousel1 from "./Components/carousel";
import Card1 from "./Components/card";
import DGT from "./Components/dgt";
import Footer1 from "./Components/footer";


function App() {
    return (
        <div>
            <NavBar />
            <Carousel1 />
            <Card1 />
            <DGT />
            <Footer1 />
        </div>

    )
}
export default App

