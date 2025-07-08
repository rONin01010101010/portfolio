import { StrictMode } from 'react';
import ErrorBoundary from './ErrorBoundary.jsx';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from "./App.jsx";
// import BottomProgressNavbar from './navbar/navbar.jsx';
// import Home from './Pages/Home.jsx';
// import Tracklist from './Pages/tracklist.jsx'
// import {BrowserRouter} from "react-router-dom";
// //import About from './Pages/About.jsx';
// //import Project from './Pages/Project.jsx';
import { HashRouter} from "react-router-dom";

console.log('Main.jsx loaded');

try {
    const rootElement = document.getElementById('root');

    if (!rootElement) {
        throw new Error('Root element not found');
    }

    console.log('Root element found, creating React app...');

    const root = createRoot(rootElement);

    root.render(
        <StrictMode>
            <ErrorBoundary>
                <HashRouter>
                    <App />
                </HashRouter>
            </ErrorBoundary>
        </StrictMode>
    );

    console.log('React app rendered successfully');

} catch (error) {
    console.error('Error mounting React app:', error);

    // Fallback: show error message in HTML
    const rootElement = document.getElementById('root');
    if (rootElement) {
        rootElement.innerHTML = `
      <div style="padding: 20px; color: red; font-family: Arial;">
        <h1>React App Failed to Load</h1>
        <p>Error: ${error.message}</p>
        <p>Check the browser console for more details.</p>
      </div>
    `;
    }
}

