import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight, faHouseUser, faClipboardList , faChartPie , faUserGroup , faGear, faLifeRing } from '@fortawesome/free-solid-svg-icons';
import '../Styles/Navbar.css';
import MonthlySummary from "./Items/MonthlySummery";

const Navbar = () => {
    const [dropdown1Active, setDropdown1Active] = useState(false);
    const [dropdown2Active, setDropdown2Active] = useState(false);

    return (
        <div className="navbar">
            <div className="top-section">
                <div className="logo">
                    <h2>Logo</h2>
                </div>
                <ul className="menu">
                    <li>
                        <div className="dropdown" onClick={() => setDropdown1Active(!dropdown1Active)}>
                            <FontAwesomeIcon icon={faHouseUser} />
                            <span>Salon d'attente</span>
                            <FontAwesomeIcon icon={dropdown1Active ? faChevronDown : faChevronRight} />
                        </div>
                        {dropdown1Active && (
                            <ul className="submenu">
                                <li><a href="#item1">Item 1</a></li>
                                <li><a href="#item2">Item 2</a></li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <div className="button">
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
