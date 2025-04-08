import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './About.css'; // For styling
import Ippo from '../assets/Ippo.jpg'; // Main image
import { FaDownload } from 'react-icons/fa'; // Added download icon
import Kenan_Resume from '../assets/KENAN_ODONGOSOFTWAREDEV.pdf'
import {
    FaJs,
    FaReact,
    FaNodeJs,
    FaCss3Alt,
    FaDatabase,
    FaJava,
    FaPhp,
    FaGitAlt,
    FaDocker,
    FaPython,
    FaCode,
    FaGraduationCap,
    FaTools,
    FaLaptopCode,
    FaBriefcase,
    FaUserGraduate
} from 'react-icons/fa';
import { SiDotnet } from 'react-icons/si';
import { HiOutlineCodeBracket } from 'react-icons/hi2';
import { BsBuilding } from 'react-icons/bs';

const About = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const navigate = useNavigate();

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    // Function to handle resume download
    const handleResumeDownload = (e) => {
        e.preventDefault();

        // Create a link element
        const link = document.createElement('a');

        // Set the href to the path of your resume file
        // Assuming your resume is stored in the public folder as "Kenan_Odongo_Resume.pdf"
        link.href = Kenan_Resume;

        // Set the download attribute to suggest filename to the browser
        link.download = Kenan_Resume;

        // Append to the document body
        document.body.appendChild(link);

        // Trigger the download
        link.click();

        // Clean up - remove the link from the document
        document.body.removeChild(link);
    };

    const images = [Ippo];

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            (prevIndex + 1) % images.length
        );
    };

    const navigateToPage = (page) => {
        navigate(`/${page}`);
    };

    // Skills data with react-icons
    const skills = [
        { id: 1, name: "JavaScript", level: "Advanced", icon: <FaJs className="skill-icon" /> },
        { id: 2, name: "React", level: "Intermediate", icon: <FaReact className="skill-icon" /> },
        { id: 3, name: "Node.js", level: "Intermediate", icon: <FaNodeJs className="skill-icon" /> },
        { id: 4, name: "CSS/SCSS", level: "Advanced", icon: <FaCss3Alt className="skill-icon" /> },
        { id: 5, name: "MYSQL", level: "Intermediate", icon: <FaDatabase className="skill-icon" /> },
        { id: 6, name: "Java", level: "Intermediate", icon: <FaJava className="skill-icon" /> },
        { id: 7, name: "PHP", level: "Intermediate", icon: <FaPhp className="skill-icon" /> },
        { id: 8, name: "Git", level: "Intermediate", icon: <FaGitAlt className="skill-icon" /> },
        { id: 9, name: "Docker", level: "Beginner", icon: <FaDocker className="skill-icon" /> },
        { id: 11, name: "ASP.NET", level: "Intermediate", icon: <SiDotnet className="skill-icon" /> },
        { id: 12, name: "Python", level: "Intermediate", icon: <FaPython className="skill-icon" /> },
    ];

    // Education data
    const education = [
        {
            id: 1,
            degree: "Advanced Diploma",
            institution: "George Brown College",
            year: "2024",
            graduation: "April 2026",
            involvement: [
                "Member GBC Computer Science Club (2024-Present)",
                "Lab Monitor (2024-Present)"
            ]
        }
    ];

    // Current project data
    const currentProject = {
        name: "Spotify-Inspired Portfolio",
        description: "A creative portfolio website using React that mimics Spotify's interface to showcase my projects and skills in an interactive way.",
        technologies: ["React", "JavaScript", "CSS", "React Router"],
        completion: "65%",
        githubLink: "https://github.com/yourusername/spotify-portfolio"
    };

    // Spotify scrollbar style
    const scrollbarStyle = {
        '--spotify-green': '#1DB954', // Spotify's green color
        '--scrollbar-thumb-hover': '#1ed760', // Brighter green for hover
        '--scrollbar-thumb-active': '#1aa34a', // Darker green for active state
        '--scrollbar-background': '#121212', // Dark background
    };

    return (
        <div className="spotify-about-container" style={scrollbarStyle}>
            {/* Profile Image Circle at Top */}
            <div className="profile-image-container">
                <img src={Ippo} alt="Profile" className="profile-image-circle"/>
                <h1 className="profile-name">Kenan Odongo</h1>
            </div>

            <div className="spotify-header">
                <div className="spotify-logo">
                    <i className="fab fa-spotify"></i>
                    <Link to="/" className="portfolio-link">Portfolio</Link>
                </div>

                <div className="spotify-resume-button">
                    {/* Modified resume link to trigger download */}
                    <a
                        href="#"
                        className="resume-link"
                        onClick={handleResumeDownload}
                    >
                        <FaDownload className="download-icon" /> Download Resume
                    </a>
                </div>
            </div>

            <div className="spotify-action-bar">
                <div className="spotify-icons">
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <button className="spotify-more-button">
                        <i className="fas fa-ellipsis-h"></i>
                    </button>
                </div>
            </div>

            {/* Content Boxes using Flexbox */}
            <div className="content-boxes spotify-scrollbar">
                {/* About Me Box */}
                <div className="content-box about-box">
                    <h2 className="box-title">About Me</h2>
                    <p>
                        I'm a programming student with a passion for creating software that interests me and that I feel
                        will make a useful impact on people's everyday life. I have experience developing web apps in PHP, JS, React,
                        and MySQL database. I'm currently exploring machine learning and trying to get into the field after I graduate as I
                        see how it may be useful to the world.
                    </p>
                    <p>
                        I enjoy tackling complex problems and turning ideas into elegant, efficient code. When I'm not
                        coding, you can find me
                        exploring new technologies, contributing to open-source projects, or mentoring aspiring
                        developers.
                    </p>
                </div>

                {/* Education Box */}
                <div className="content-box education-box">
                    <div className="section-header">
                        <FaUserGraduate className="section-icon" />
                        <h2 className="box-title">Education</h2>
                    </div>
                    <div className="education-list">
                        {education.map(item => (
                            <div key={item.id} className="education-item">
                                <div className="education-year">{item.year}</div>
                                <div className="education-details">
                                    <h3>{item.degree}</h3>
                                    <p>{item.institution}</p>
                                    <p>Expected Graduation: {item.graduation}</p>
                                    <div className="involvement">
                                        <h4>Involvement:</h4>
                                        <ul>
                                            {item.involvement.map((activity, index) => (
                                                <li key={index}>{activity}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Skills Box */}
                <div className="content-box skills-box">
                    <div className="section-header">
                        <FaLaptopCode className="section-icon" />
                        <h2 className="box-title">Top Skills</h2>
                    </div>
                    <div className="skill-list-container spotify-scrollbar">
                        <div className="skill-list">
                            {skills.map(skill => (
                                <div key={skill.id} className="skill-item">
                                    <div className="skill-logo">
                                        {skill.icon}
                                    </div>
                                    <div className="skill-info">
                                        <span className="skill-name">{skill.name}</span>
                                        <span className="skill-level">{skill.level}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Current Project Box - Full Width */}
            <div className="current-project-container">
                <div className="content-box current-project-box">
                    <div className="section-header">
                        <FaBriefcase className="section-icon" />
                        <h2 className="box-title">Currently Working On</h2>
                    </div>
                    <div className="project-content">
                        <div className="project-header">
                            <h3 className="project-title">{currentProject.name}</h3>
                            <div className="project-progress">
                                <div className="progress-bar">
                                    <div
                                        className="progress-fill"
                                        style={{width: currentProject.completion}}
                                    ></div>
                                </div>
                                <span className="progress-text">{currentProject.completion} Complete</span>
                            </div>
                        </div>

                        <p className="project-description">{currentProject.description}</p>

                        <div className="project-tech">
                            <h4>Technologies:</h4>
                            <div className="tech-tags">
                                {currentProject.technologies.map((tech, index) => (
                                    <span key={index} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="spotify-navigation">
                <button className="spotify-next-button" onClick={() => navigateToPage('Project')}>
                    <span>Next: Projects</span>
                    <i className="fas fa-arrow-right"></i>
                </button>
            </div>

            {isModalOpen && (
                <div className="spotify-modal-overlay">
                    <div className="spotify-modal">
                        <div className="modal-header">
                            <h2>Gallery</h2>
                            <button className="modal-close" onClick={toggleModal}>
                                <i className="fas fa-times"></i>
                            </button>
                        </div>

                        <div className="modal-gallery">
                            <button className="gallery-arrow left" onClick={handlePrevImage}>
                                <i className="fas fa-chevron-left"></i>
                            </button>
                            <div className="gallery-image-container">
                                <img
                                    src={images[currentImageIndex]}
                                    alt={`Gallery ${currentImageIndex + 1}`}
                                    className="gallery-image"
                                />
                                <div className="image-caption">
                                    Photo {currentImageIndex + 1} of {images.length}
                                </div>
                            </div>
                            <button className="gallery-arrow right" onClick={handleNextImage}>
                                <i className="fas fa-chevron-right"></i>
                            </button>
                        </div>

                        <div className="modal-footer">
                            <div className="social-links">
                                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github"></i>
                                </a>
                                <a href="https://linkedin.com/in/yourusername" target="_blank"
                                   rel="noopener noreferrer">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Updated Footer with Contact and Project Buttons */}
            <div className="About-footer">
                <div className="navigation-buttons">
                    <button className="nav-button" onClick={() => navigateToPage('Project')}>
                        <span>Projects</span>
                        <i className="fas fa-arrow-right"></i>
                    </button>
                    <button className="nav-button" onClick={() => navigateToPage('Contact')}>
                        <span>Contact</span>
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;