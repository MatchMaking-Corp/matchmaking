import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faChevronDown, faChevronRight, faHome, faMoon, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import '../Styles/Topbar.css';
import { useNavigate } from "react-router-dom";
import { useUser } from '../Context/UserContext';
import Notification from './Items/Notifications';

const Topbar = () => {
    const [dropdown1Active, setDropdown1Active] = useState(false);
    const [notificationsActive, setNotificationsActive] = useState(false);
    const navigate = useNavigate();
    const { user, setUser } = useUser();

    const getInitials = (firstName, lastName) => {
        const firstInitial = firstName ? firstName.charAt(0) : '';
        const lastInitial = lastName ? lastName.charAt(0) : '';
        return `${firstInitial}${lastInitial}`.toUpperCase();
    };

    const toggleDropdown = () => {
        setDropdown1Active(!dropdown1Active);
    };

    const handleHome = () => {
        navigate('/');
    };

    const handleNotifications = () => {
        setNotificationsActive(!notificationsActive);
    };

    const handleLogout = () => {
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        setUser(null);
        navigate('/login');
    };

    const notifications = [
        { title: 'Notification 1', message: 'Ceci est le message de la notification 1.' },
        { title: 'Notification 2', message: 'Ceci est le message de la notification 2.' },
        { title: 'Notification 3', message: 'Ceci est le message de la notification 3.' }
    ];

    return (
        <div className="topbar">
            <div className="left">
                <h2>Bonjour, {user?.firstName || 'Prénom'}</h2>
            </div>
            <div className="right">
                <button className="home-btn" onClick={handleHome}>
                    <FontAwesomeIcon icon={faHome} />
                </button>
                <button className="notification-btn" onClick={handleNotifications}>
                    <FontAwesomeIcon icon={faBell} />
                </button>
                <button className="theme-btn">
                    <FontAwesomeIcon icon={faMoon} />
                </button>
                <div className={`dropdown profile ${dropdown1Active ? 'active' : ''}`}>
                    <button className="profile-btn" onClick={toggleDropdown}>
                        <div className="profile-icon"> {getInitials(user?.firstName, user?.lastName) || 'PN'}</div>
                        <div className="profile-info">
                            <div>{user?.firstName || 'Prénom'} {user?.lastName || 'Nom'}</div>
                            <div>{user?.email || 'Email'}</div>
                        </div>
                        <FontAwesomeIcon icon={dropdown1Active ? faChevronDown : faChevronRight} className="dropdown-icon" />
                    </button>
                    {dropdown1Active && (
                        <ul className="submenu">
                            <li><a href="/profil"><FontAwesomeIcon icon={faCog}/> Profil</a></li>
                            <li><a href="/settings"><FontAwesomeIcon icon={faCog}/> Paramètres</a></li>
                            <li><a href="#" onClick={handleLogout}><FontAwesomeIcon
                                icon={faSignOutAlt}/> Déconnexion</a></li>
                        </ul>
                    )}
                </div>
            </div>
            {notificationsActive && (
                <Notification notifications={notifications} onClose={handleNotifications} />
            )}
        </div>
    );
}

export default Topbar;
