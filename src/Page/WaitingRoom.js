import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faUser, faEllipsisV, faCircleCheck, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import '../Styles/WaitingRoom.css';

const WaitingRoom = () => {
    const [data, setData] = useState([
        { user: "Marc928", id: "1129897", status: "Active", time: "02/03/2024 à 12:00", allocated: "Terrains 1", rate: "OK" },
        { user: "Julie123", id: "1129900", status: "Inactive", time: "02/03/2024 à 13:00", allocated: "Terrains 2", rate: "OK" },
        { user: "JohnDoe", id: "1129901", status: "Pending", time: "02/03/2024 à 14:00", allocated: "Terrains 3", rate: "Wait" },
        { user: "Anna456", id: "1129902", status: "Active", time: "02/03/2024 à 15:00", allocated: "Terrains 4", rate: "No" },
        { user: "Mike789", id: "1129903", status: "Inactive", time: "02/03/2024 à 16:00", allocated: "Terrains 5", rate: "OK" },
        { user: "Sara321", id: "1129904", status: "Pending", time: "02/03/2024 à 17:00", allocated: "Terrains 6", rate: "OK" },
        { user: "Chris654", id: "1129905", status: "Active", time: "02/03/2024 à 18:00", allocated: "Terrains 7", rate: "Wait" },
        { user: "Eva987", id: "1129906", status: "Inactive", time: "02/03/2024 à 19:00", allocated: "Terrains 8", rate: "No" },
        { user: "Paul222", id: "1129907", status: "Active", time: "02/03/2024 à 20:00", allocated: "Terrains 9", rate: "OK" },
        { user: "Alice444", id: "1129908", status: "Inactive", time: "02/03/2024 à 21:00", allocated: "Terrains 10", rate: "OK" },
        { user: "Bob333", id: "1129909", status: "Pending", time: "02/03/2024 à 22:00", allocated: "Terrains 11", rate: "Wait" },
        { user: "Charlie555", id: "1129910", status: "Active", time: "02/03/2024 à 23:00", allocated: "Terrains 12", rate: "No" },
        { user: "Diana666", id: "1129911", status: "Inactive", time: "03/03/2024 à 00:00", allocated: "Terrains 13", rate: "OK" },
        { user: "Eve777", id: "1129912", status: "Pending", time: "03/03/2024 à 01:00", allocated: "Terrains 14", rate: "OK" },
        { user: "Frank888", id: "1129913", status: "Active", time: "03/03/2024 à 02:00", allocated: "Terrains 15", rate: "Wait" },
        { user: "Grace999", id: "1129914", status: "Inactive", time: "03/03/2024 à 03:00", allocated: "Terrains 16", rate: "No" }
    ]);

    const handleRateChange = (index, newRate) => {
        const updatedData = [...data];
        updatedData[index].rate = newRate;
        setData(updatedData);
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
                    <th>Nom du groupe</th>
                    <th>ID du groupe</th>
                    <th>En attente depuis</th>
                    <th>Terrains Attribué</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {data.map((row, index) => (
                    <tr key={row.id}>
                        <td>{row.user}</td>
                        <td>{row.id}</td>
                        <td>{row.time}</td>
                        <td>{row.allocated}</td>
                        <td className="rate-cell">
                            {row.rate === 'OK' && <FontAwesomeIcon icon={faCircleCheck} className="rate-icon rate-ok" />}
                            {row.rate === 'No' && <FontAwesomeIcon icon={faTimesCircle} className="rate-icon rate-no" />}
                            {row.rate === 'Wait' && (
                                <div className="rate-wait">
                                    <FontAwesomeIcon
                                        icon={faCircleCheck}
                                        className="rate-icon rate-ok"
                                        onClick={() => handleRateChange(index, 'OK')}
                                    />
                                    <FontAwesomeIcon
                                        icon={faTimesCircle}
                                        className="rate-icon rate-no"
                                        onClick={() => handleRateChange(index, 'No')}
                                    />
                                </div>
                            )}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default WaitingRoom;
