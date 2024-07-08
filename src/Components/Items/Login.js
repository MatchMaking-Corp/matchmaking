import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import '../../Styles/Items/Login.css';
import Logo from "../../Sources/logos/matchmaking.png";

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
            // Remplacer par un appel à votre API
            const response = await fakeApiLogin(loginData);
            if (response.success) {
                Cookies.set('userToken', response.token, { expires: 1 }); // Expire in 1 day
                console.log('Connexion réussie', response);
                navigate('/choice-page');
            } else {
                console.error('Erreur de connexion', response.message);
            }
        } catch (error) {
            console.error('Erreur de connexion', error);
        }
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        try {
            // Remplacer par un appel à votre API
            const response = await fakeApiRegister(registerData);
            if (response.success) {
                console.log('Inscription réussie', response);
                setIsRegister(false); // Revenir à la page de connexion après inscription réussie
            } else {
                console.error('Erreur d\'inscription', response.message);
            }
        } catch (error) {
            console.error('Erreur d\'inscription', error);
        }
    };

    return (
        <div className="login-container">
            {isRegister ? (
                <form className="login-form" onSubmit={handleRegisterSubmit}>
                    <img src={Logo} alt="Logo"
                         className="login-logo"/>
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
                    <img src={Logo} alt="Logo"
                         className="login-logo"/>
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

// Simulations d'appels API
const fakeApiLogin = async (data) => {
    // Simuler un délai
    await new Promise(resolve => setTimeout(resolve, 500));
    if (data.email === 'matchmaking@gmail.com' && data.password === 'M@tchM@king') {
        return { success: true, token: 'fake-jwt-token' };
    } else {
        return { success: false, message: 'Identifiants incorrects' };
    }
};

const fakeApiRegister = async (data) => {
    // Simuler un délai
    await new Promise(resolve => setTimeout(resolve, 500));
    return { success: true, token: 'fake-jwt-token' };
};

export default Login;
