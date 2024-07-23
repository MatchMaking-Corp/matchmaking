import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faUser, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import '../Styles/Member.css';

const Member = () => {
    const [members, setMembers] = useState([
        { firstName: "Marc", lastName: "Dupont", email: "marc.dupont@example.com", status: "Active", joined: "02/03/2021" },
        { firstName: "Julie", lastName: "Martin", email: "julie.martin@example.com", status: "Inactive", joined: "05/06/2022" },
        { firstName: "John", lastName: "Doe", email: "john.doe@example.com", status: "Pending", joined: "11/12/2023" },
        { firstName: "Anna", lastName: "Smith", email: "anna.smith@example.com", status: "Active", joined: "07/08/2020" },
    ]);

    return (
        <div className="member-list">
            <div className="table-header">
                <div className="header-left">
                    <FontAwesomeIcon icon={faUsers} />
                    <h2>Liste des Membres</h2>
                </div>
                <div className="header-right">
                    <span>{members.length}</span>
                    <FontAwesomeIcon icon={faUser} />
                    <FontAwesomeIcon icon={faEllipsisV} className="menu-icon" />
                </div>
            </div>
            <table className="rounded-table">
                <thead>
                <tr>
                    <th>Nom</th>
                    <th>Email</th>
                    <th>Statut</th>
                    <th>Date d'inscription</th>
                </tr>
                </thead>
                <tbody>
                {members.map((member, index) => (
                    <tr key={index}>
                        <td>{`${member.firstName} ${member.lastName}`}</td>
                        <td>{member.email}</td>
                        <td>{member.status}</td>
                        <td>{member.joined}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Member;
