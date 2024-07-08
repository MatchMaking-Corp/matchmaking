import React from 'react';
import '../../Styles/Items/InDevelopment.css';
import Logo from "../../Sources/logos/matchmaking.png";

function InDevelopment() {
    return (
        <div className="in-development-container">
            <img src={Logo} alt="Logo"
                 className="development-logo"/>
            <h1>Cette partie est en cours de développement ...</h1>
        </div>
    );
}

export default InDevelopment;
