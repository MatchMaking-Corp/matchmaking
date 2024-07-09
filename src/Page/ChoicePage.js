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
                    <h2>Gestion Professionnel</h2>
                    <div>
                        <p>Outils de gestion des réservations permettant aux clubs de visualiser leur statistiques, l'admission de nouveaux joueurs, etc.</p>
                    </div>
                </div>
                <div className="card" onClick={handleUserClick}>
                    <img src={UserImage} alt="Utilisateurs" className="card-image-user"/>
                    <h2>Joueurs de Padel</h2>
                    <div>
                        <p>Application destinée aux joueurs de Padle afin de leurs faciliter la réservation de parties tout en leurs permettant de matcher avec d'autres joueurs.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChoicePage;
