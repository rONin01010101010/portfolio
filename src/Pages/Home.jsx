import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
// Import your own image below
 import Ippo from '../assets/Ippo.jpg';
const Home = () => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    const handlePlayClick = () => {
        navigate("/tracklist");
    };

    return (
        <div className="spotify-home">
            <div className="home-content">
                <span className="newest-release">NEWEST RELEASE</span>

                <div
                    className="album-container"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >

                    <img
                        src={Ippo}
                        alt="Portfolio Cover"
                        className="album-cover"
                    />

                    {isHovered && (
                        <div className="play-button-container">
                            <button
                                className="play-button"
                                onClick={handlePlayClick}
                                aria-label="Play and view portfolio"
                            >
                                <svg viewBox="0 0 24 24" width="24" height="24">
                                    <polygon points="8,5 19,12 8,19" fill="currentColor"/>
                                </svg>
                            </button>
                        </div>
                    )}
                </div>

                <h1 className="portfolio-title">MY PORTFOLIO</h1>
            </div>
        </div>
    );
};

export default Home;