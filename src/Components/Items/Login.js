import React, { useState } from 'react';
// import Switch from '@mui/material/Switch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import '../../Styles/Items/Login.css';
import Logo from "../../Sources/logos/MatchMaking_Orange.png";
import LogoClub from "../../Sources/logos/MatchMaking_Bleu.png";
import imageJoueur from "../../Sources/photos/service_matchmaking/photo7.png";
import imageClub from "../../Sources/photos/service_matchmaking/photo8.png";

const Login = () => {
    const [isClubMode, setIsClubMode] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleModeSwitch = () => {
        setIsClubMode(!isClubMode);
    };

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="login">
            {/*<div*/}
            {/*    className={`login__sidebar-player ${isClubMode ? 'login__sidebar-clubs' : ''}`}*/}
            {/*></div>*/}
            {/*<div className="login__switch-container">*/}
            {/*    <span className="login__label">Espace Joueurs</span>*/}
            {/*    <Switch*/}
            {/*        checked={isClubMode}*/}
            {/*        onChange={handleModeSwitch}*/}
            {/*        className="login__switch"*/}
            {/*        color="primary"*/}
            {/*        sx={{*/}
            {/*            '& .MuiSwitch-switchBase.Mui-checked': {*/}
            {/*                color: '#220ADC',*/}
            {/*            },*/}
            {/*            '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {*/}
            {/*                backgroundColor: '#220ADC',*/}
            {/*            },*/}
            {/*            '& .MuiSwitch-track': {*/}
            {/*                backgroundColor: '#FF6600',*/}
            {/*            }*/}
            {/*        }}*/}
            {/*    />*/}
            {/*    <span className="login__label">Espace Clubs</span>*/}
            {/*</div>*/}

            {/*{!isClubMode && (*/}
            {/*    <div className="login__content">*/}
            {/*        <div className="login__form-container">*/}
            {/*            <form className="login__form">*/}
            {/*                <img src={Logo} alt="Login illustration" className="login__image"/>*/}

            {/*                <div className="login__input-container">*/}
            {/*                    <input type="email" placeholder="Email" className="login__input"/>*/}
            {/*                    <FontAwesomeIcon icon={faEnvelope} className="login__icon-envelope"/>*/}
            {/*                </div>*/}

            {/*                <div className="login__input-container">*/}
            {/*                    <input*/}
            {/*                        type={showPassword ? "text" : "password"}*/}
            {/*                        placeholder="Mot de passe"*/}
            {/*                        className="login__input"*/}
            {/*                    />*/}
            {/*                    <FontAwesomeIcon*/}
            {/*                        icon={showPassword ? faEyeSlash : faEye}*/}
            {/*                        className="login__icon login__icon--clickable"*/}
            {/*                        onClick={handleShowPassword}*/}
            {/*                    />*/}
            {/*                </div>*/}

            {/*                <div className="login__input-container">*/}
            {/*                    <a className="login__input-password-forgot">Mot de passe oublié ?</a>*/}
            {/*                </div>*/}

            {/*                <button type="submit" className="login__submit-button">Login</button>*/}

            {/*                <div className="login__separator"></div>*/}

            {/*                <button className="login__signup-button">S'inscrire</button>*/}
            {/*            </form>*/}
            {/*            <div className="login__image-container">*/}
            {/*                <img src={imageJoueur} alt="Visual Representation" />*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*)}*/}

            {/*{isClubMode && (*/}
            {/*    <div className="login__content">*/}
            {/*        <div className="login__form-container">*/}
            {/*            <form className="login__form">*/}
            {/*                <img src={LogoClub} alt="Login illustration" className="login__image"/>*/}

            {/*                <div className="login__input-container">*/}
            {/*                    <input type="email" placeholder="Email" className="login__input"/>*/}
            {/*                    <FontAwesomeIcon icon={faEnvelope} className="login-club__icon-envelope"/>*/}
            {/*                </div>*/}

            {/*                <div className="login__input-container">*/}
            {/*                    <input*/}
            {/*                        type={showPassword ? "text" : "password"}*/}
            {/*                        placeholder="Mot de passe"*/}
            {/*                        className="login__input"*/}
            {/*                    />*/}
            {/*                    <FontAwesomeIcon*/}
            {/*                        icon={showPassword ? faEyeSlash : faEye}*/}
            {/*                        className="login-club__icon login-club__icon--clickable"*/}
            {/*                        onClick={handleShowPassword}*/}
            {/*                    />*/}
            {/*                </div>*/}

            {/*                <div className="login__input-container">*/}
            {/*                    <a className="login-club__input-password-forgot">Mot de passe oublié ?</a>*/}
            {/*                </div>*/}

            {/*                <button type="submit" className="login-club__submit-button">Login</button>*/}

            {/*                <div className="login__separator"></div>*/}

            {/*                <button className="login-club__contact-button">Nous contacter</button>*/}
            {/*            </form>*/}
            {/*            <div className="login__image-container">*/}
            {/*                <img src={imageClub} alt="Visual Representation" />*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*)}*/}
        </div>
    );
};

export default Login;
