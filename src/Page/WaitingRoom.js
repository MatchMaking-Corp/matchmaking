import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faUser, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import '../Styles/WaitingRoom.css';

const WaitingRoom = () => {
    const data = [
        { user: "Marc928", id: "1129897", status: "Active", time: "02/03/2024 à 12:00", allocated: "Terrains 1", rate: "OK" },
        { user: "Julie123", id: "1129900", status: "Inactive", time: "02/03/2024 à 13:00", allocated: "Terrains 2", rate: "OK" },
        { user: "JohnDoe", id: "1129901", status: "Pending", time: "02/03/2024 à 14:00", allocated: "Terrains 3", rate: "OK" },
        { user: "Anna456", id: "1129902", status: "Active", time: "02/03/2024 à 15:00", allocated: "Terrains 4", rate: "OK" },
        { user: "Mike789", id: "1129903", status: "Inactive", time: "02/03/2024 à 16:00", allocated: "Terrains 5", rate: "OK" },
        { user: "Sara321", id: "1129904", status: "Pending", time: "02/03/2024 à 17:00", allocated: "Terrains 6", rate: "OK" },
        { user: "Chris654", id: "1129905", status: "Active", time: "02/03/2024 à 18:00", allocated: "Terrains 7", rate: "OK" },
        { user: "Eva987", id: "1129906", status: "Inactive", time: "02/03/2024 à 19:00", allocated: "Terrains 8", rate: "OK" }
    ];

    const getStatusClass = (status) => {
        switch (status) {
            case 'Active':
                return 'status-active';
            case 'Inactive':
                return 'status-inactive';
            case 'Pending':
                return 'status-pending';
            default:
                return '';
        }
    };

    return (
        <div className="waiting-room">
            <div className="table-header">
                <div className="header-left">
                    <FontAwesomeIcon icon={faUsers} />
                    <h2>Salon d'attente</h2>
                </div>
                <div className="header-right">
                    <span>{data.length}</span>
                    <FontAwesomeIcon icon={faUser} />
                    <FontAwesomeIcon icon={faEllipsisV} className="menu-icon" />
                </div>
            </div>
            <table className="rounded-table">
                <thead>
                <tr>
                    <th>Utilisateur</th>
                    <th>ID du groupe</th>
                    <th>Status</th>
                    <th>Time</th>
                    <th>Terrains Attribué</th>
                    <th>Taux d'ouverture</th>
                </tr>
                </thead>
                <tbody>
                {data.map((row) => (
                    <tr key={row.id}>
                        <td>{row.user}</td>
                        <td>{row.id}</td>
                        <td className={`status ${getStatusClass(row.status)}`}>{row.status}</td>
                        <td>{row.time}</td>
                        <td>{row.allocated}</td>
                        <td>{row.rate}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default WaitingRoom;
