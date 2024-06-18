import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Topbar from './Components/Topbar';
import WaitingRoom from './Page/WaitingRoom';
import ManageReservation from './Page/ManageReservation'

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <div className="main-content">
                    <Topbar />
                    <div className="content">
                        <Routes>
                            <Route path="/waiting-room" element={< WaitingRoom />} />
                            <Route path="/manage-reservation" element={< ManageReservation />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
