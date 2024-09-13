import React, { useState } from 'react';
import PhotoQuentin from '../../Sources/photos/team_contact/Quentin.png';
import PhotoTeddy from '../../Sources/photos/team_contact/Teddy.png';
import '../Style/TeamContact.css';

const TeamContact = () => {
    const [messageStatus, setMessageStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            email: e.target.user_email.value,
            message: e.target.message.value
        };

        fetch('/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.text())
            .then(data => setMessageStatus(data))
            .catch(error => setMessageStatus('Erreur lors de l\'envoi du message'));
    };

    return (
        <div id="team_contact" className="team-contact">
            <div className="team-contact__images">
                <a className="team-contact__image-wrapper" href='https://www.instagram.com/matchmaking_ig/' target="_blank" rel="noopener noreferrer">
                    <img src={PhotoQuentin} alt="Membre de l'équipe" className="team-contact__image"/>
                    <div className="team-contact__overlay">
                        <p className="team-contact__name">DESAUBLIAUX Quentin</p>
                    </div>
                </a>
                <a className="team-contact__image-wrapper" href='https://www.instagram.com/matchmaking_ig/' target="_blank" rel="noopener noreferrer">
                    <img src={PhotoTeddy} alt="Membre de l'équipe" className="team-contact__image"/>
                    <div className="team-contact__overlay">
                        <p className="team-contact__name">ESTABLET Teddy</p>
                    </div>
                </a>
            </div>

            <h2 className="team-contact__title">Contactez-nous !</h2>

            <form className="team-contact__form" onSubmit={handleSubmit}>
                <input type="email" placeholder="Votre email" className="team-contact__input team-contact__input--email"
                       name="user_email" required/>
                <textarea placeholder="Votre message" className="team-contact__input team-contact__input--message"
                          name="message" required></textarea>
                <button type="submit" className="team-contact__button">Envoyer</button>
            </form>

            {/*{messageStatus && <p>{messageStatus}</p>}*/}
        </div>
    );
};

export default TeamContact;
