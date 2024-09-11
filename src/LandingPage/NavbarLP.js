import React, { useEffect, useState } from 'react';
import './Style/NavbarLP.css';
import Logo from "../Sources/logos/MatchMaking_Orange.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faGlobe } from '@fortawesome/free-solid-svg-icons';

const NavbarLP = () => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const scrollPos = window.scrollY + window.innerHeight / 2;

            sections.forEach(section => {
                if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
                    setActiveSection(section.id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <img src={Logo} alt="Logo MatchMaking" />
            </div>
            <ul className="navbar__nav-links">
                <li
                    onClick={() => scrollToSection('home')}
                    className={`navbar__nav-item ${activeSection === 'home' ? 'navbar__nav-item--active' : ''}`}
                >
                    Accueil
                </li>
                <li
                    onClick={() => scrollToSection('matchmaking')}
                    className={`navbar__nav-item ${activeSection === 'matchmaking' ? 'navbar__nav-item--active' : ''}`}
                >
                    MatchMaking
                </li>
                <li
                    onClick={() => scrollToSection('service_pro')}
                    className={`navbar__nav-item-next ${activeSection === 'service_pro' ? 'navbar__nav-item--active-next' : ''}`}
                >
                    Service Pro
                </li>
                <li
                    onClick={() => scrollToSection('team_contact')}
                    className={`navbar__nav-item-next ${activeSection === 'team' ? 'navbar__nav-item--active-next' : ''}`}
                >
                    L'équipe
                </li>
            </ul>

            <div className="navbar__buttons">
                <button onClick={() => window.location.href = '/login'}
                        className="navbar__button navbar__button--outline">
                    Se connecter
                </button>
                <button onClick={() => window.location.href = '/signin'}
                        className="navbar__button navbar__button--filled">
                    S'inscrire
                    <span className="navbar__profile-icon">
                        <FontAwesomeIcon icon={faUser}/>
                    </span>
                </button>
                <button className="navbar__langage-button">
                    <FontAwesomeIcon icon={faGlobe}/>
                </button>
            </div>
        </nav>
    );
};

export default NavbarLP;
