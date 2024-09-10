import React from 'react';
import "./Style/LandingPage.css"
import NavbarLP from './NavbarLP';
import HomeLP from "./Content/HomeLP";

const LandingPage = () => {
    return (
        <div>
            <NavbarLP />
            <section id="home">
                <HomeLP />
            </section>
            <section id="matchmaking">
                {/*<h1>MatchMaking</h1>*/}
            </section>
            <section id="service_pro">
                {/*<h1>Service Pro</h1>*/}
            </section>
            <section id="team">
                {/*<h1>L'équipe</h1>*/}
            </section>
        </div>
    );
};

export default LandingPage;
