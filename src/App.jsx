import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Tracklist from './Pages/tracklist.jsx'
import Project from './Pages/Project.jsx'
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
function App() {
    return (
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/tracklist" element={<Tracklist/>} />
                    <Route path="/Project" element={<Project/>} />
                    {/*<Route path="/Track2" element={<Track2/>} />*/}
                    <Route path="/About" element={<About/>} />
                    <Route path="/Contact" element={<Contact/>} />

                </Routes>

    );
}

export default App
