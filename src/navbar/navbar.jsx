import React, { useState, useEffect } from 'react';
import './navbar.css'
const BottomProgressNavbar = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const calculateScrollProgress = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercentage = (scrollTop / docHeight) * 100;

            setScrollProgress(scrollPercentage);
        };

        // Add scroll event listener
        window.addEventListener('scroll', calculateScrollProgress);

        // Initialize on component mount
        calculateScrollProgress();

        // Clean up on unmount
        return () => window.removeEventListener('scroll', calculateScrollProgress);
    }, []);

    return (
        <div className="bottom-navbar-container">
            <div className="bottom-navbar">
                {/* Logo/Brand */}
                    <div className="logo">My Portfolio</div>

                {/* Nav items */}
                <div className="nav-links">
                    <a href="#home" className="hover-link">Home</a>
                    <a href="#about" className="hover-link">About</a>
                    <a href="#Projects" className="hover-link">Projects</a>
                    <a href="#contact" className="hover-link">Contact</a>
                </div>

                {/* Progress bar */}
                <div
                    className="progress-bar"
                    style={{ width: `${scrollProgress}%` }}
                />
            </div>
        </div>
    );
};

// // Mock content to enable scrolling for the demo
// const ScrollableContent = () => {
//     return (
//         <div>
//             <div id="home" className="section">
//                 <h1 className="text-4xl font-bold">Home </h1>
//             </div>
//             <div id="about" className="section">
//                 <h1 className="text-4xl font-bold">About </h1>
//             </div>
//             <div id="services" className="section">
//                 <h1 className="text-4xl font-bold">Projects </h1>
//             </div>
//             <div id="contact" className="section">
//                 <h1 className="text-4xl font-bold">Contact</h1>
//             </div>
//         </div>
//     );
// };

const App = () => {
    return (
        <div>
            <BottomProgressNavbar />

        </div>
    );
};

export default BottomProgressNavbar;
