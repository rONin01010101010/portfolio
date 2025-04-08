import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Project.css';
import book from '../assets/book logo.jpeg';
import discord from '../assets/discord logo.png';
import Gomoku from '../assets/BOARD.jpeg';
import cart from '../assets/shopping logo.jpg';
import weather from '../assets/weather.png';
import proj from '../assets/Proj.jpg';
import terminal from '../assets/terminal.png';

// Import React Icons for technologies
import {
    FaReact,
    FaNodeJs,
    FaJs,
    FaHtml5,
    FaCss3Alt,
    FaPython,
    FaGithub
} from 'react-icons/fa';
import {
    SiDotnet,
    SiPostgresql,
    SiDiscord
} from 'react-icons/si';

const projects = [
    {
        id: 1,
        name: "Discord Bot",
        description: "Discord bot for managing server tasks on server built in node js.",
        repo: "https://github.com/rONin01010101010/Discord-Bot",
        demo: "",
        status: "Coming Soon",
        image: discord,
        technologies: [
            { name: "Node.js", icon: <FaNodeJs /> },
            { name: "JavaScript", icon: <FaJs /> },
            { name: "Discord API", icon: <SiDiscord /> }
        ]
    },
    {
        id: 2,
        name: "Weather Project",
        description: "Weather Project made in Vanilla JS ",
        repo: "https://github.com/rONin01010101010/Weather-APP",
        demo: "",
        status: "Completed",
        image: weather,
        technologies: [
            { name: "JavaScript", icon: <FaJs /> },
            { name: "HTML", icon: <FaHtml5 /> },
            { name: "CSS", icon: <FaCss3Alt /> }
        ]
    },
    {
        id: 3,
        name: "Gomoku AI game",
        description: "Gomoku AI game implemented with minimax algorithm",
        repo: "https://github.com/yourusername/project-gamma",
        demo: "",
        status: "Completed",
        image: Gomoku,
        technologies: [
            { name: "JavaScript", icon: <FaJs /> },
            { name: "HTML", icon: <FaHtml5 /> },
            { name: "CSS", icon: <FaCss3Alt /> }
        ]
    },
    {
        id: 4,
        name: "Basic Library",
        description: "Basic library that adds and removes books according to user preference.",
        repo: "https://github.com/rONin01010101010/Library",
        demo: "",
        status: "Completed",
        image: book,
        technologies: [
            { name: "JavaScript", icon: <FaJs /> },
            { name: "HTML", icon: <FaHtml5 /> },
            { name: "CSS", icon: <FaCss3Alt /> }
        ]
    },
    {
        id: 5,
        name: "Shopping app built in ASP.NET",
        description: "ASP.NET shopping app built using c#, postgres db, and vanilla js for the frontend.",
        repo: "https://github.com/rONin01010101010/ASP.NET-ASSIGN01",
        demo: "",
        status: "Completed",
        image: cart,
        technologies: [
            { name: "ASP.NET", icon: <SiDotnet /> },
            { name: "PostgreSQL", icon: <SiPostgresql /> },
            { name: "JavaScript", icon: <FaJs /> }
        ]
    },
    {
        id: 6,
        name: "Project Management App",
        description: "ASP.NET Project Management built using c#, postgres db, and vanilla js for the frontend.",
        repo: "https://github.com/rONin01010101010/ICE3-2139",
        demo: "",
        status: "Coming Soon",
        image: proj,
        technologies: [
            { name: "ASP.NET", icon: <SiDotnet /> },
            { name: "PostgreSQL", icon: <SiPostgresql /> },
            { name: "JavaScript", icon: <FaJs /> }
        ]
    },
    {
        id: 7,
        name: "Python terminal game ",
        description: "This is a terminal game built using python that has exploring, fighting etc.",
        repo: "https://github.com/rONin01010101010/2152-PYTHON_GAME",
        demo: "",
        status: "Completed",
        image: terminal,
        technologies: [
            { name: "Python", icon: <FaPython /> }
        ]
    },
];

function ProjectsPage() {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navigateToPage = (page) => {
        navigate(`/${page}`);
        setIsMenuOpen(false);
    };

    // Spotify scrollbar style
    const spotifyStyle = {
        '--spotify-green': '#1DB954', // Spotify's green color
        '--spotify-light-green': '#1ed760', // Lighter green for hover effects
        '--spotify-dark-green': '#1aa34a', // Darker green for active states
        '--spotify-background': '#121212', // Dark background
    };

    return (
        <div className="projects-container" style={spotifyStyle}>
            <div className="main-heading">
                <h1 className="spotify-heading">Projects</h1>
                <div className="spotify-underline"></div>
            </div>

            <div className="projects-list spotify-scrollbar">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className={`project-card ${project.status === "Coming Soon" ? "coming-soon" : ""}`}
                    >
                        <div className="project-image-container">
                            <img
                                src={project.image}
                                alt={`${project.name} screenshot`}
                                className="project-image"
                            />
                        </div>
                        <div className="project-card-info">
                            <h3 className="project-name spotify-green-text">{project.name}</h3>
                            <p className="project-description">{project.description}</p>

                            {/* Tech bubbles */}
                            <div className="tech-bubbles">
                                {project.technologies.map((tech, index) => (
                                    <div key={index} className="tech-bubble">
                                        <span className="tech-icon">{tech.icon}</span>
                                        <span className="tech-name">{tech.name}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="project-links">
                                {project.repo && (
                                    <a
                                        href={project.repo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="github-link"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <FaGithub className="github-icon" />
                                    </a>
                                )}
                                <p className="project-status">{project.status}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="projects-footer">
                <div className="navigation-buttons">
                    <button className="nav-button prev" onClick={() => navigateToPage('About')}>
                        <i className="fas fa-arrow-left"></i>
                        <span>Back</span>
                    </button>
                    <button className="nav-button next" onClick={() => navigateToPage('Contact')}>
                        <span>Next</span>
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProjectsPage;