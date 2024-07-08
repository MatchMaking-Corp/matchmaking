import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight, faUsers, faClipboardList , faChartPie , faUserGroup , faGear, faLifeRing } from '@fortawesome/free-solid-svg-icons';
import '../Styles/Navbar.css';
import MonthlySummary from "./Items/MonthlySummery";
import {useNavigate} from "react-router-dom";
import Logo from "../Sources/logos/matchmaking.png"

const Navbar = () => {
    const [dropdown2Active, setDropdown2Active] = useState(false);

    const navigate = useNavigate();

    const handleHome = () => {
        navigate('/')
    }

    const handleWaitingRoom = () => {
        navigate('/waiting-room');
    };
    const handleManageReservation = () => {
        navigate('/manage-reservation');
    };

    return (
        <div className="navbar">
            <div className="top-section">
                <div className="logo" onClick={handleHome}>
                    <img src={Logo} alt="Logo"
                         className="logo-img"/>
                </div>
                <ul className="menu">
                    <li>
                        <div className="button" onClick={handleWaitingRoom}>
                            <FontAwesomeIcon icon={faUsers} />
                            <span>Salon d'attente</span>
                        </div>
                    </li>
                    <li>
                        <div className="button" onClick={handleManageReservation}>
                            <FontAwesomeIcon icon={faClipboardList} />
                            <span>Gestion des réservations</span>
                        </div>
                    </li>
                    <li>
                        <div className="dropdown" onClick={() => setDropdown2Active(!dropdown2Active)}>
                            <FontAwesomeIcon icon={faChartPie} />
                            <span>Suivi</span>
                            <FontAwesomeIcon icon={dropdown2Active ? faChevronDown : faChevronRight} />
                        </div>
                        {dropdown2Active && (
                            <ul className="submenu">
                                <li><a href="#item3">Item 3</a></li>
                                <li><a href="#item4">Item 4</a></li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <div className="button">
                            <FontAwesomeIcon icon={faUserGroup} />
                            <span>Adhérents</span>
                        </div>
                    </li>
                </ul>
            </div>
            <MonthlySummary />
            <ul className="bottom-menu">
                <li>
                    <div className="button">
                        <FontAwesomeIcon icon={faLifeRing} />
                        <span>Support</span>
                    </div>
                </li>
                <li>
                    <div className="button">
                        <FontAwesomeIcon icon={faGear} />
                        <span>Settings</span>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
