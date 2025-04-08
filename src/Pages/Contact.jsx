import React, { useState } from 'react';
import './Contact.css';  // Import the CSS file for styling
import { FaEnvelope, FaGithub, FaPhoneAlt, FaMapMarkerAlt, FaBars } from 'react-icons/fa'; // FontAwesome Icons
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    // Function to toggle menu visibility
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Function to navigate to different pages
    const navigateToPage = (page) => {
        navigate(`/${page}`);
        setIsMenuOpen(false);
    };

// Function to go back to the previous page
    const goBack = () => {
        navigate(-1);
    };

    return (
        <div className="spotify-contact-container">
            <div className="contact-header-container">
                {/* Back Button */}


                {/* Portfolio link in the top right */}
                {/*<div className="portfolio-link-container">
                    <span className="portfolio-link" onClick={() => navigateToPage('')}>Portfolio</span>
                </div>*/}

                {/* Menu button with 3 vertical lines */}
                {/*    <div className="menu-container">*/}
                {/*        <button className="menu-button" onClick={toggleMenu}>*/}
                {/*            <FaBars />*/}
                {/*        </button>*/}

                {/*        /!* Dropdown menu *!/*/}
                {/*        {isMenuOpen && (*/}
                {/*            <div className="dropdown-menu">*/}
                {/*                <ul>*/}
                {/*                    <li onClick={() => navigateToPage('')}>Home</li>*/}
                {/*                    <li onClick={() => navigateToPage('About')}>About</li>*/}
                {/*                    <li onClick={() => navigateToPage('Project')}>Projects</li>*/}
                {/*                    <li onClick={() => navigateToPage('Contact')}>Contact</li>*/}
                {/*                </ul>*/}
                {/*            </div>*/}
                {/*        )}*/}
                {/*    </div>*/}
            </div>

            <div className="contact-header">
                <h1>Contact Me</h1>
                <p>Feel free to reach out through any of the following channels:</p>
            </div>

            <div className="contact-info">
                {/* Email */}
                <div className="contact-item">
                    <FaEnvelope className="contact-icon" />
                    <a href="mailto:jkenan72@gmail.com" className="contact-link">jkenan72@gmail.com</a>
                </div>

                {/* GitHub */}
                <div className="contact-item">
                    <FaGithub className="contact-icon" />
                    <a href="https://github.com/rONin01010101010" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
                </div>

                {/* Phone */}
                <div className="contact-item">
                    <FaPhoneAlt className="contact-icon" />
                    <a href="tel:+16475810671" className="contact-link">+1 (647) 581-0671</a>
                </div>

                {/* Location */}
                <div className="contact-item">
                    <FaMapMarkerAlt className="contact-icon" />
                    <span className="contact-text">Toronto, Ontario</span>
                </div>
            </div>

            <div className="contact-footer">
                <div className="navigation-buttons">
                    <button className="nav-button prev" onClick={() => navigateToPage('Project')}>

                        <span>Back</span>
                    </button>
                    <button className="nav-button next" onClick={() => navigateToPage('')}>
                        <span>Home</span>

                    </button>
                </div>
            </div>
        </div>
    );
};

export default Contact;