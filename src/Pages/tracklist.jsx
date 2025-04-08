import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TrackList.css';
// Import your own image below
import Ippo from '../assets/Ippo.jpg';
import logo from '../assets/GitHub logo - Copy.png';

const TrackList = () => {
    // Use the navigate hook from react-router-dom
    const navigate = useNavigate();

    // Portfolio sections as tracks
    const tracks = [
        {
            id: 1,
            title: "About",
            duration: "2:45",
            content: "Budding Software developer",
            link: "/about"
        },
        {
            id: 2,
            title: "Projects",
            duration: "4:05",
            content: "Web applications with both frontend and backend applications",
            link: "/Project"
        },
        {
            id: 3 ,
            title: "Contact",
            duration: "1:58",
            content: "Get in touch for collaborations and opportunities",
            link: "/contact"
        }
    ];

    // Function to handle play button click
    const handlePlayClick = () => {
        // Navigate to the About page
        navigate('/about');
    };

    return (
        <div className="spotify-tracklist" style={{ margin: '0', textAlign: 'left' }}>
            <div className="tracklist-header" style={{ justifyContent: 'flex-start' }}>
                <div className="album-info" style={{ marginLeft: '0' }}>
                    {/* Replace the placeholder with your image import */}
                    <img
                        src={Ippo}
                        alt="Portfolio Cover"
                        className="album-thumbnail"
                    />

                    <div className="album-details">
                        <span className="album-type">Portfolio</span>
                        <h1 className="album-title">My Development Journey</h1>
                        <div className="artist-info">
                            <div className="artist-image">

                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <a href="https://github.com/rONin01010101010" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src={logo}
                                        alt="GitHub"
                                        style={{ width: '40px', height: '40px', marginRight: '10px' }}
                                    />
                                </a>
                                <span className="artist-name">Kenan Odongo</span>
                            </div>
                            <span className="album-year">• 2025</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tracklist-controls" style={{ justifyContent: 'flex-start' }}>
                <button
                    className="play-all-button"
                    onClick={handlePlayClick}
                    title="Go to About page"
                >
                    <svg viewBox="0 0 24 24" width="24" height="24">
                        <polygon points="8,5 19,12 8,19" fill="currentColor"/>
                    </svg>
                </button>
            </div>

            <div className="tracks-container" style={{ alignItems: 'flex-start' }}>
                <div className="tracks-header" style={{ justifyContent: 'flex-start', paddingLeft: '1rem' }}>
                    <div className="track-number">#</div>
                    <div className="track-title">TITLE</div>
                    <div className="track-duration">
                        <svg width="16" height="16" viewBox="0 0 16 16">
                            <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z" fill="currentColor" fillRule="evenodd"/>
                            <path d="M8 3.25a.75.75 0 01.75.75v3.25H11a.75.75 0 010 1.5H7.25V4A.75.75 0 018 3.25z" fill="currentColor" fillRule="evenodd"/>
                        </svg>
                    </div>
                </div>

                <ul className="tracks-list" style={{ padding: '0', alignItems: 'flex-start' }}>
                    {tracks.map((track) => (
                        <li key={track.id} className="track-item" style={{ justifyContent: 'flex-start' }}>
                            <div className="track-number">{track.id}</div>
                            <div className="track-info">
                                <a href={track.link} className="track-title-link">{track.title}</a>
                                <span className="track-content">{track.content}</span>
                            </div>
                            <div className="track-duration">{track.duration}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TrackList;