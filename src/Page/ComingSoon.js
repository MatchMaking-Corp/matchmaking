import React from 'react';
import Logo from '../Sources/logos/MatchMaking_Orange.png'
import '../Styles/ComingSoon.css';

function ComingSoon() {
    return (
        <div className="coming-soon-container">
            <img className="coming-soon__logo" src={Logo}/>
            <h1 className="coming-soon-title">Nous sommes en cours de développement ...</h1>
            <p>Veuillez revenir ultérieurement, merci de votre compréhension.</p>
        </div>
    );
}

export default ComingSoon;
