import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
// Import your own image below
import ProfilePhoto from '../assets/ProfilePhoto.jpg';

const Home = () => {
    const navigate = useNavigate();

    const handlePlayClick = () => {
        navigate("/tracklist");
    };

    return (
        <div className="spotify-home">
            <div className="home-content">
                <span className="newest-release">NEWEST RELEASE</span>
                <div className="album-container">
                    <img
                        src={ProfilePhoto}
                        alt="Portfolio Cover"
                        className="album-cover"
                    />
                    <div className="play-button-container-fixed">
                        <button
                            className="play-button-fixed"
                            onClick={handlePlayClick}
                            aria-label="Play and view portfolio"
                        >
                            <svg viewBox="0 0 24 24" width="20" height="20">
                                <polygon points="8,5 19,12 8,19" fill="currentColor"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <h1 className="portfolio-title">MY PORTFOLIO</h1>
                <span className="play-instruction">CLICK THE PLAY BUTTON!!!</span>
            </div>
        </div>
    );
};

export default Home;