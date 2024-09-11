import React from 'react';
import "./Style/LandingPage.css"
import NavbarLP from './NavbarLP';
import HomeLP from "./Content/HomeLP";
import HomeLP2 from "./Content/HomeLP2";
import ServiceMatchmakingLP from "./Content/ServiceMatchmakingLP";
import StrongPoints from "./Content/StrongPoints";
import ServicePro from "./Content/ServicePro";
import FooterLP from "./FooterLP";

const LandingPage = () => {
    return (
        <div>
            <NavbarLP/>
            <section id="home">
                <HomeLP/>
                <HomeLP2/>
            </section>
            <section id="matchmaking">
                <ServiceMatchmakingLP/>
                <StrongPoints/>
            </section>
            <section id="service_pro">
                <ServicePro/>
            </section>
            <FooterLP />
        </div>
    );
};

export default LandingPage;
