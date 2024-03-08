import React from 'react';
import logo from './logo.png';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <div className="logo-container">
        <img src={logo} className="app-logo" alt="logo" />
        <p className="bold-text">Gradify is still under development</p>
      </div>
    </div>
  );
};

export default App;
