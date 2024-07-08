import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './App.css';
import Navbar from './Components/Navbar';
import Topbar from './Components/Topbar';
import WaitingRoom from './Page/WaitingRoom';
import ManageReservation from './Page/ManageReservation';
import Login from './Components/Items/Login';
import BetaPopup from './Components/Items/BetaPopup';
import ChoicePage from "./Page/ChoicePage";
import InDevelopment from "./Components/Items/InDevelopment";

function AppContent() {
    return (
        <div className="App">
            <Navbar />
            <div className="main-content">
                <Topbar />
                <div className="content">
                    <Routes>
                        <Route path="/waiting-room" element={<WaitingRoom />} />
                        <Route path="/manage-reservation" element={<ManageReservation />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = Cookies.get('userToken');
        if (token) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
            navigate('/login');
        }
    }, [navigate]);

    return (
        <>
            <BetaPopup />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/choice-page" element={<ChoicePage/>} />
                <Route path="/in-development" element={<InDevelopment/>} />
                {isAuthenticated && <Route path="*" element={<AppContent />} />}
            </Routes>
        </>
    );
}

export default function AppWrapper() {
    return (
        <Router>
            <App />
        </Router>
    );
}
