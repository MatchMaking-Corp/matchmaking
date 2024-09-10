import React from 'react';
import '../Style/HomeLP.css';
import image1 from '../../Sources/photos/accueil/photo1.png';
import image2 from '../../Sources/photos/accueil/photo2.png';
import image3 from '../../Sources/photos/accueil/photo3.png';
import image4 from '../../Sources/photos/accueil/photo4.jpeg';
import image5 from '../../Sources/logos/MatchMaking_Orange.png';
import image6 from '../../Sources/photos/accueil/photo5.png';

const HomeLP = () => {
    return (
        <div id="home" className="home-container">
            <div className="home-container__left-column">
                <div className="home-container__title">
                    <span className="match">MATCH</span>
                    <span className="making">MAKING</span>
                </div>
                <div className="home__subtitle">
                    <span>"Transformez votre façon de jouer."</span>
                </div>
                <div className="home__description">
                    <p>MatchMaking élargit les horizons du sport en intégrant une application conviviale pour les joueurs et un outil de gestion complet pour les clubs de la Fédération Française de Tennis (FFT).</p>
                    <p>Découvrez une nouvlle manière de vivre votre passion sportive MatchMaking !</p>
                </div>
                <div className="home__buttons">
                    <button onClick={() => window.location.href = '/signin'} className="home__button signup-button">
                        S'inscrire
                    </button>
                    <button className="home__button learn-more-button">
                        En savoir plus
                    </button>
                </div>
            </div>
            <div className="home-container__right-column">
                <div className="home__image-grid">
                    <img src={image1} alt="Description 1" className="grid-image" />
                    <img src={image2} alt="Description 2" className="grid-image" />
                    <img src={image3} alt="Description 3" className="grid-image" />
                    <img src={image4} alt="Description 4" className="grid-image" />
                    <img src={image5} alt="Description 5" className="grid-image" />
                    <img src={image6} alt="Description 6" className="grid-image" />
                </div>
            </div>
        </div>
    );
};

export default HomeLP;
