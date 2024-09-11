import React from 'react';
import '../Style/ServicePro.css';
import TeamContact from "./TeamContact";
import Prototype from "../../Sources/photos/service_matchmaking/photo7.png";
import LogoBleu from "../../Sources/logos/MatchMaking_Bleu.png";

const ServicePro = () => {
    return (
        <div id="service_pro" className="servicePro-mm">
            <div className="servicePro-mm__background-header"></div>
            <div className="servicePro-mm__bloc">
                <div className="servicePro-mm__image">
                    <img src={Prototype} alt="Version Web & Mobile"/>
                </div>
                <div className="servicePro-mm__content">
                    <div className="servicePro-mm__content-left">
                        <img className="servicePro-mm__content-img" src={LogoBleu} alt="Logo MatchMaking Pro"/>
                        <div className="servicePro-mm__content-title">
                            <span className="match">MATCH</span>
                            <span className="makingpro">MAKING PRO</span>
                            <div className="servicePro-mm__content-description">
                                "Service de gestion de club tout en un."
                            </div>
                        </div>
                    </div>
                </div>

                {/* Nouveau bloc de contenu */}
                <div className="servicePro-mm__promo">
                    <div className="servicePro-mm__promo-images">
                        <div className="servicePro-mm__promo-image-left">
                            <img src={LogoBleu || LogoBleu} alt="Image 1" />
                        </div>
                        <div className="servicePro-mm__promo-image-right">
                            <img src={LogoBleu} alt="Image 2" />
                            <div className="servicePro-mm__promo-text">
                                <p>Clubs sportifs : Participez au programme de pré-lancement</p>
                                <button className="servicePro-mm__promo-button">Participer</button>
                            </div>
                        </div>
                    </div>
                    <div className="servicePro-mm__promo-table">
                        <div className="servicePro-mm__promo-table-row">
                            <div className="servicePro-mm__promo-table-cell">
                                <h2>Accès au Service MATCHMAKING</h2>
                                <p></p>
                            </div>
                            <div className="servicePro-mm__promo-table-cell">
                                <h2>Outils de suivis des KPI de son club</h2>
                                <p></p>
                            </div>
                        </div>
                        <div className="servicePro-mm__promo-table-row">
                            <div className="servicePro-mm__promo-table-cell">
                                <h2>Gestion centralisé des réservations</h2>
                                <p></p>
                            </div>
                            <div className="servicePro-mm__promo-table-cell">
                                <h2>Accès à la liste des joueurs du réseaux Matchmaking</h2>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>

                <section id="team_contact">
                    <TeamContact/>
                </section>
            </div>
        </div>
    );
}

export default ServicePro;
