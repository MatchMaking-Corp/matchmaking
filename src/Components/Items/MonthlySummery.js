import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import '../../Styles/Items/MonthlySummery.css';

const MonthlySummary = () => {
    const [visible, setVisible] = useState(true);

    if (!visible) return null;

    const data = [
        { label: 'Groupes Acceptés', percentage: 50 },
        { label: 'Groupes Annulés', percentage: 75 },
        { label: 'Taux d\'occupation', percentage: 60 }
    ];

    return (
        <div className="monthly-summary">
            <div className="header">
                <h4>Résumé du mois</h4>
                <button className="close-btn" onClick={() => setVisible(false)}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </div>
            {data.map((item, index) => (
                <div key={index} className="summary-item">
                    <div className="summary-line">
                        <span>{item.label}</span>
                        <span>{item.percentage}/100</span>
                    </div>
                    <div className="progress-bar">
                        <div className="progress" style={{ width: `${item.percentage}%` }}></div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MonthlySummary;
