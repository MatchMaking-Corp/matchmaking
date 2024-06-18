import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../Styles/ManageReservation.css';

const ManageReservation = () => {
    const [date, setDate] = useState(new Date());

    const onChange = (date) => {
        setDate(date);
    };

    const formatMonthYear = (date) => {
        const options = { month: 'long', year: 'numeric' };
        return date.toLocaleDateString('fr-FR', options);
    };

    const formatDay = (date) => {
        if (date.getDay() === 0) {
            return 'D';
        } else {
            return date.getDate();
        }
    };

    const generateReservations = () => {
        const reservations = [];
        for (let i = 14; i <= 19; i++) {
            const reservationDate = new Date(2024, 0, 1, i, 0); // Janvier 2024, à partir de 14h
            reservations.push({
                time: `${reservationDate.getHours()}:${reservationDate.getMinutes() < 10 ? '0' : ''}${reservationDate.getMinutes()}`,
                monthYear: "Janvier 2024",
                day: reservationDate.toLocaleDateString('fr-FR', { weekday: 'long' }),
            });
        }
        return reservations;
    };

    const reservations = generateReservations();

    return (
        <div className="manage-reservation">
            <div className="calendar-column">
                {/* Contenu de la première colonne (calendrier) */}
                <div className="calendar-container">
                    <div className="calendar-header">
                        <div className="month-year">{formatMonthYear(date)}</div>
                        <div className="navigation">
                            <button onClick={() => onChange(new Date(date.getFullYear(), date.getMonth() - 1, 1))}>
                                {"<"}
                            </button>
                            <button onClick={() => onChange(new Date(date.getFullYear(), date.getMonth() + 1, 1))}>
                                {">"}
                            </button>
                        </div>
                    </div>
                    <Calendar
                        onChange={onChange}
                        value={date}
                        tileClassName={({ date }) => {
                            const isToday = date.getDate() === new Date().getDate() && date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear();
                            return isToday ? "today" : null;
                        }}
                        tileContent={({ date, view }) => {
                            if (view === 'month') {
                                return (
                                    <div className="calendar-day">
                                        <div className="day-initial">{formatDay(date)}</div>
                                        <div className="day-number">{date.getDate()}</div>
                                    </div>
                                );
                            }
                        }}
                    />
                </div>
            </div>
            <div className="reservation-column">
                {/* Contenu de la deuxième colonne (réservations) */}
                <div className="reservation-header">
                    <h3>Header gauche</h3>
                </div>
                <div className="reservation-cards">
                    {reservations.map((reservation, index) => (
                        <div className="reservation-card" key={index}>
                            <div className="time">{reservation.time}</div>
                            <div className="details">
                                <div><strong>{reservation.monthYear}</strong></div>
                                <div>{reservation.day}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="action-column">
                {/* Contenu de la troisième colonne (actions) */}
                <div className="floating-buttons">
                    <button className="add-button">
                        <span>Ajouter</span>
                        {/* Ajoutez ici votre icône d'ajout */}
                    </button>
                    <div className="percentage-card">
                        <h1>75%</h1>
                        {/* Ajoutez ici votre icône de flèche vers le haut */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ManageReservation;
