import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faUser, faEllipsisV, faPlus } from '@fortawesome/free-solid-svg-icons';
import '../Styles/Member.css';

const Member = () => {
    const [members, setMembers] = useState([
        { firstName: "Marc", lastName: "Dupont", email: "marc.dupont@example.com", status: "Active", joined: "02/03/2021" },
        { firstName: "Julie", lastName: "Martin", email: "julie.martin@example.com", status: "Inactive", joined: "05/06/2022" },
        { firstName: "John", lastName: "Doe", email: "john.doe@example.com", status: "Pending", joined: "11/12/2023" },
        { firstName: "Anna", lastName: "Smith", email: "anna.smith@example.com", status: "Active", joined: "07/08/2020" },
    ]);

    const [formVisible, setFormVisible] = useState(false);
    const [newMember, setNewMember] = useState({
        firstName: '',
        lastName: '',
        email: '',
        status: 'Active',
        joined: ''
    });

    const toggleForm = () => {
        setFormVisible(!formVisible);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewMember({ ...newMember, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setMembers([...members, newMember]);
        setNewMember({
            firstName: '',
            lastName: '',
            email: '',
            status: 'Active',
            joined: ''
        });
        setFormVisible(false);
    };

    return (
        <div className="member-list">
            <div className="table-header">
                <div className="header-left">
                    <FontAwesomeIcon icon={faUsers} />
                    <h2>Liste des Membres</h2>
                </div>
                <div className="header-right">
                    <FontAwesomeIcon icon={faPlus} className="add-icon" onClick={toggleForm} />
                    <span>{members.length}</span>
                    <FontAwesomeIcon icon={faUser} />
                    <FontAwesomeIcon icon={faEllipsisV} className="menu-icon" />
                </div>
            </div>
            {formVisible && (
                <form className="member-form" onSubmit={handleSubmit}>
                    <h3>Ajouter un Membre</h3>
                    <label>
                        Prénom:
                        <input type="text" name="firstName" value={newMember.firstName} onChange={handleInputChange} required />
                    </label>
                    <label>
                        Nom:
                        <input type="text" name="lastName" value={newMember.lastName} onChange={handleInputChange} required />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" value={newMember.email} onChange={handleInputChange} required />
                    </label>
                    <label>
                        Statut:
                        <select name="status" value={newMember.status} onChange={handleInputChange}>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                            <option value="Pending">Pending</option>
                        </select>
                    </label>
                    <label>
                        Date d'inscription:
                        <input type="date" name="joined" value={newMember.joined} onChange={handleInputChange} />
                    </label>
                    <button type="submit">Ajouter</button>
                </form>
            )}
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
