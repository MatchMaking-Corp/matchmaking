import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import { UserProvider } from './Context/UserContext';
import Cookies from 'js-cookie';
import './App.css';
import Navbar from './Components/Navbar';
import Topbar from './Components/Topbar';
import WaitingRoom from './Page/WaitingRoom';
import ManageReservation from './Page/ManageReservation';
import Login from './Components/Items/Login';
import BetaPopup from './Components/Items/BetaPopup';
import ChoicePage from './Page/ChoicePage';
import InDevelopment from './Components/Items/InDevelopment';
import Member from "./Page/Member";
import LandingPage from "./LandingPage/LandingPage";
import ComingSoon from "./Page/ComingSoon";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = Cookies.get('userToken');
        setIsAuthenticated(!!token);
    }, []);

    return (
        <UserProvider>
            <>
                <BetaPopup />
                <Routes>
                    <Route path="/" element={<ComingSoon />} />
                    {/*<Route path="/login" element={<Login />} />*/}
                    {/*<Route path="/choice-page" element={isAuthenticated ? <ChoicePage /> : <Navigate to="/login" />} />*/}
                    {/*<Route path="/in-development" element={isAuthenticated ? <InDevelopment /> : <Navigate to="/login" />} />*/}
                    {/*{isAuthenticated ? (*/}
                    {/*    <Route path="*" element={<AppContent />} />*/}
                    {/*) : (*/}
                    {/*    <Route path="*" element={<Navigate to="/login" />} />*/}
                    {/*)}*/}
                </Routes>
            </>
        </UserProvider>
    );
}

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
                        <Route path="/member" element={<Member />}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default function AppWrapper() {
    return (
        <Router>
            <App />
        </Router>
    );
}
