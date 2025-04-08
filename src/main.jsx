import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from "./App.jsx";
import BottomProgressNavbar from './navbar/navbar.jsx';
import Home from './Pages/Home.jsx';
import Tracklist from './Pages/tracklist.jsx'
import {BrowserRouter} from "react-router-dom";
//import About from './Pages/About.jsx';
//import Project from './Pages/Project.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <HashRouter>
            <App/>
        </HashRouter>
    </StrictMode>,
);

