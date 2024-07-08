import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import '../../Styles/Items/BetaPopup.css';

function BetaPopup() {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const cookieValue = Cookies.get('betaPopupDismissed');
        if (!cookieValue) {
            setShowPopup(true);
        }
    }, []);

    const handleClosePopup = () => {
        setShowPopup(false);
        Cookies.set('betaPopupDismissed', 'true', { expires: 1/12 }); // Expire dans 2 heures (1/12 jours)
    };

    if (!showPopup) {
        return null;
    }

    return (
        <div className="beta-popup-overlay">
            <div className="beta-popup">
                <h2>Version Bêta</h2>
                <p>Vous utilisez actuellement une version bêta de notre application. Certaines fonctionnalités peuvent être en cours de développement.</p>
                <button onClick={handleClosePopup}>Fermer</button>
            </div>
        </div>
    );
}

export default BetaPopup;
