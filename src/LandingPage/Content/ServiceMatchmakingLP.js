import React from 'react';
import '../Style/ServiceMatchmakingLP.css';
import Prototype from '../../Sources/photos/service_matchmaking/photo7.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";

const ServiceMatchmakingLP = () => {
    return (
        <div id="matchmaking" className="service-mm">
            <div className="service-mm__header">
            </div>

            <h1 className="service-mm__title">“L’occasion de vivre une nouvelle expérience sportive”</h1>
            <p className="service-mm__subtitle">
                Rejoignez une <span className="highlight">communauté passionnée</span>, élargissez votre réseau et
                profitez d'une
                <span className="highlight"> pratique sportive régulière et dynamique</span>. Avec MatchMaking,
                concentrez-vous sur l’essentiel :
                jouer, progresser et rencontrer de <span className="highlight">nouveaux partenaires</span>.
            </p>

            <div className="service-mm__bloc">
                <div className="service-mm__image">
                    <img src={Prototype} alt="Version Web & Mobile"/>
                </div>

                <div className="service-mm__content">
                    <div className="service-mm__content-left">
                        <h2 className="service-mm__content-title">Version Web & Mobile</h2>
                        <p className="service-mm__content-description">
                            Stay updated with the latest trends, tips, and insights in business analytics.
                            Explore our curated articles designed to empower your data-driven journey.
                        </p>
                    </div>
                    <div className="service-mm__content-right">
                        <button className="service-mm__cta">
                            S'inscrire
                            <span className="navbar__profile-icon">
                                <FontAwesomeIcon icon={faUser}/>
                            </span>
                        </button>
                    </div>
                </div>


                <div className="service-mm__steps">
                    <div className="service-mm__step">
                        <div className="service-mm__step-image"></div>
                        <p className="service-mm__step-description">Télécharge l'application et Crée toi un compte
                            (Gratuit)</p>
                    </div>
                    <div className="service-mm__step">
                        <div className="service-mm__step-image"></div>
                        <p className="service-mm__step-description">Configure ta recherche en sélectionnant ton niveau
                            et ton créneau</p>
                    </div>
                    <div className="service-mm__step">
                        <div className="service-mm__step-image"></div>
                        <p className="service-mm__step-description">Tu reçois une notification avec la date et l’heure
                            où le lieu de la rencontre lorsque ton groupe est formé</p>
                    </div>
                    <div className="service-mm__step">
                        <div className="service-mm__step-image"></div>
                        <p className="service-mm__step-description">Consulte les détails de la session proposée et
                            prépare-toi à rejoindre tes partenaires de jeu pour une session inoubliable.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceMatchmakingLP;
