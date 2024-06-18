import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import './App.css';
import Topbar from "./Components/Topbar";

function App() {
  return (
      <Router>
        <div className="App">
          <div className="header">
            <div className="navbar-container">
                <Navbar/>
                <Topbar/>
            </div>
          </div>
          <div className="content">
          </div>
        </div>
      </Router>
  );
}

export default App;
