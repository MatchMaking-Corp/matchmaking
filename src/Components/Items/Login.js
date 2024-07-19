import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../Context/UserContext';
import Cookies from 'js-cookie';
import Logo from '../../Sources/logos/matchmaking.png';
import '../../Styles/Items/Login.css'

function Login() {
    const [isRegister, setIsRegister] = useState(false);
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });
    const [registerData, setRegisterData] = useState({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        password: '',
    });
    const navigate = useNavigate();
    const { setUser } = useUser();

    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    };

    const handleRegisterChange = (e) => {
        const { name, value } = e.target;
        setRegisterData({ ...registerData, [name]: value });
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:3000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginData)
            });
            const data = await response.json();
            if (response.ok) {
                Cookies.set('userToken', data.token, { expires: 1 });
                console.log('Connexion réussie', data);
                setUser(data.user);
                navigate('/choice-page');
            } else {
                console.error('Erreur de connexion', data.message);
            }
        } catch (error) {
            console.error('Erreur de connexion', error);
        }
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:3000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(registerData)
            });
            const data = await response.json();
            if (response.ok) {
                console.log('Inscription réussie', data);
                setIsRegister(false);
            } else {
                console.error('Erreur d\'inscription', data);
            }
        } catch (error) {
            console.error('Erreur d\'inscription', error);
        }
    };

    return (
        <div className="login-container">
            {isRegister ? (
                <form className="login-form" onSubmit={handleRegisterSubmit}>
                    <img src={Logo} alt="Logo" className="login-logo" />
                    <h2>Créer un compte</h2>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="Prénom"
                        value={registerData.firstName}
                        onChange={handleRegisterChange}
                        required
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Nom"
                        value={registerData.lastName}
                        onChange={handleRegisterChange}
                        required
                    />
                    <input
                        type="text"
                        name="company"
                        placeholder="Entreprise (optionnel)"
                        value={registerData.company}
                        onChange={handleRegisterChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={registerData.email}
                        onChange={handleRegisterChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Mot de passe"
                        value={registerData.password}
                        onChange={handleRegisterChange}
                        required
                    />
                    <button type="submit">Créer un compte</button>
                    <button type="button" onClick={() => setIsRegister(false)}>
                        Retour à la connexion
                    </button>
                </form>
            ) : (
                <form className="login-form" onSubmit={handleLoginSubmit}>
                    <img src={Logo} alt="Logo" className="login-logo" />
                    <h2>Connexion</h2>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={loginData.email}
                        onChange={handleLoginChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Mot de passe"
                        value={loginData.password}
                        onChange={handleLoginChange}
                        required
                    />
                    <button type="submit">Connexion</button>
                    <button type="button" onClick={() => setIsRegister(true)}>
                        Créer un compte
                    </button>
                </form>
            )}
        </div>
    );
}

export default Login;
