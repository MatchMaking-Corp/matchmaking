import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import '../../Styles/Items/Notifications.css';

const Notification = ({ notifications, onClose }) => {
    return (
        <div className="notification-overlay">
            <div className="notification-container">
                <div className="notification-header">
                    <h2>Notifications</h2>
                    <button className="close-btn" onClick={onClose}>X</button>
                </div>
                <ul className="notification-list">
                    {notifications.length === 0 ? (
                        <li className="no-notifications">Aucune notification</li>
                    ) : (
                        notifications.map((notification, index) => (
                            <li key={index} className="notification-item">
                                <FontAwesomeIcon icon={faBell} className="notification-icon"/>
                                <div className="notification-content">
                                    <h3>{notification.title}</h3>
                                    <p>{notification.message}</p>
                                </div>
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Notification;
