import React from 'react';
import '../Style/StrongPoints.css'; // Le fichier CSS associé doit être créé

const StrongPoints = () => {
    const skills = [
        {
            title: "Mise en relation",
            description: "Connecte les utilisateurs en fonction de leurs intérêts et niveau de compétence assurant ainsi des matchs de qualité."
        },
        {
            title: "Interface intuitive",
            description: "Permet aux utilisateurs de s'approprier facilement l'interface."
        },
        {
            title: "Liste d’amis",
            description: "Permet aux utilisateurs de se connecter à leurs amis ou partenaires précédents."
        },
        {
            title: "Recherches personnalisées",
            description: "Propose une expérience adaptée au besoin de l'utilisateur."
        },
        {
            title: "Suivi des activités",
            description: "Offre aux utilisateurs une vue complète de leurs activités passées et futures."
        },
        {
            title: "Paiement et réservation",
            description: "Intègre un système de paiement sécurisé et la réservation automatique pour chaque recherche."
        }
    ];

    return (
        <div id="matchmaking" className="skills">
            <div className="skills__row">
                {skills.map((skill, index) => (
                    <div key={index} className="skills__item">
                        <h3 className="skills__title">{skill.title}</h3>
                        <p className="skills__description">{skill.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StrongPoints;
