import React from 'react';
import '../Style/HomeLP2.css';

const HomeLP2 = () => {
    return (
        <div className="home-next-container">
            <div className="home-next-container__stats">
                <div className="home-next-container__stat-item">
                    <h2 className="home-next-container__stat-value">-50%</h2>
                    <p className="home-next-container__stat-description">De temps passé à organiser vos matchs</p>
                </div>
                <div className="home-next-container__stat-item">
                    <h2 className="home-next-container__stat-value">2'mns</h2>
                    <p className="home-next-container__stat-description">Nécessaire pour paramétrer vos sessions.</p>
                </div>
                <div className="home-next-container__stat-item">
                    <h2 className="home-next-container__stat-value">30 km</h2>
                    <p className="home-next-container__stat-description">Configurez un rayon de recherche adapté.</p>
                </div>
            </div>
        </div>
    );
}

export default HomeLP2;
