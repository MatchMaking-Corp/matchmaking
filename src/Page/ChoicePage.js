import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProImage from '../Sources/logos/professionnel.png'
import UserImage from '../Sources/logos/utilisateurs.png'
import '../Styles/ChoicePage.css';

function ChoicePage() {
    const navigate = useNavigate();

    const handleProfessionalClick = () => {
        navigate('/*');
    };

    const handleUserClick = () => {
        navigate('/in-development');
    };

    return (
        <div className="choice-page-container">
            <h1>Choisissez une option</h1>
            <p>Vous pouvez dès à présent visualiser le projet MatchMaking en version Beta.</p>
            <div className="cards-container">
                <div className="card" onClick={handleProfessionalClick}>
                    <img src={ProImage} alt="Gestion Professionnel" className="card-image-pro" />
                    <p>Gestion Professionnel</p>
                </div>
                <div className="card" onClick={handleUserClick}>
                    <img src={UserImage} alt="Utilisateurs" className="card-image-user" />
                    <p>Utilisateurs</p>
                </div>
            </div>
        </div>
    );
}

export default ChoicePage;
