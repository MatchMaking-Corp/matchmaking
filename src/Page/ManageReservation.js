import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTurnUp, faPlus } from '@fortawesome/free-solid-svg-icons';
import '../Styles/ManageReservation.css';

const ManageReservation = () => {
    const [date, setDate] = useState(new Date());
    const [selectedTask, setSelectedTask] = useState(0);
    const [carouselIndex, setCarouselIndex] = useState(0);

    const onChange = (date) => {
        setDate(date);
    };

    const formatMonthYear = (date) => {
        const options = { month: 'long', year: 'numeric' };
        return date.toLocaleDateString('fr-FR', options);
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

    const tasks = [
        { title: 'Terrain 1', progress: 100, details: ['Task 1.1', 'Task 1.2', 'Task 1.3', 'Task 1.4', 'Task 1.5'] },
        { title: 'Terrain 2', progress: 100, details: ['Maintenance', 'Terrain Fermé', 'Tournois', 'Get the copy for the facebook image', 'Send Invision demo to squad'] },
        { title: 'Terrain 3', progress: 100, details: ['Task 3.1', 'Task 3.2', 'Task 3.3', 'Task 3.4', 'Task 3.5'] },
        { title: 'Terrain 4', progress: 100, details: ['Task 4.1', 'Task 4.2', 'Task 4.3', 'Task 4.4', 'Task 4.5'] },
        { title: 'Terrain 5', progress: 100, details: ['Task 5.1', 'Task 5.2', 'Task 5.3', 'Task 5.4', 'Task 5.5'] },
        { title: 'Terrain 6', progress: 100, details: ['Task 6.1', 'Task 6.2', 'Task 6.3', 'Task 6.4', 'Task 6.5'] },
        { title: 'Terrain 7', progress: 100, details: ['Task 7.1', 'Task 7.2', 'Task 7.3', 'Task 7.4', 'Task 7.5'] },
        { title: 'Terrain 8', progress: 100, details: ['Task 8.1', 'Task 8.2', 'Task 8.3', 'Task 8.4', 'Task 8.5'] }
    ];

    const showPrevTasks = () => {
        if (carouselIndex > 0) {
            setCarouselIndex(carouselIndex - 1);
        }
    };

    const showNextTasks = () => {
        if (carouselIndex < tasks.length - 3) {
            setCarouselIndex(carouselIndex + 1);
        }
    };

    return (
        <div className="manage-reservation">
            <div className="calendar-column">
                {/* Contenu de la première colonne (calendrier) */}
                <div className="calendar-container">
                    <Calendar
                        onChange={onChange}
                        value={date}
                        tileClassName={({date}) => {
                            const isToday = date.getDate() === new Date().getDate() && date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear();
                            return isToday ? "today" : null;
                        }}
                    />
                </div>
                <div className="todo-column">
                    <div className="carousel-controls">
                        <button onClick={showPrevTasks} disabled={carouselIndex === 0}
                                className="carousel-nav">{"<"}</button>
                        <div className="carousel">
                            {tasks.slice(carouselIndex, carouselIndex + 3).map((task, index) => (
                                <button
                                    key={index + carouselIndex}
                                    className={`carousel-button ${selectedTask === index + carouselIndex ? 'selected' : ''}`}
                                    onClick={() => setSelectedTask(index + carouselIndex)}
                                >
                                    {task.title}
                                    <div className="progress-bar">
                                        <div className="progress"
                                             style={{width: selectedTask === index + carouselIndex ? '100%' : '0%'}}></div>
                                    </div>
                                </button>
                            ))}
                        </div>
                        <button onClick={showNextTasks} disabled={carouselIndex >= tasks.length - 3}
                                className="carousel-nav">{">"}</button>
                    </div>
                    <div className="task-details-container">
                        {tasks[selectedTask].details.map((taskDetail, index) => (
                            <div key={index} className="task-item">
                                <input type="checkbox" id={`task-${selectedTask}-${index}`} />
                                <label htmlFor={`task-${selectedTask}-${index}`}>{taskDetail}</label>
                            </div>
                        ))}
                    </div>
                    <button className="edit-button">Editer</button>
                </div>
            </div>
            <div className="reservation-column">
                {/* Contenu de la deuxième colonne (réservations) */}
                <div className="reservation-header">
                    <h3>Détails</h3>
                    <span>{reservations.length}</span>
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
                        <FontAwesomeIcon icon={faPlus}/>
                    </button>
                    <span className="open-rate">Taux d'ouverture</span>
                    <div className="percentage-card">
                        <h1>75%</h1>
                        <FontAwesomeIcon icon={faArrowTurnUp}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ManageReservation;
