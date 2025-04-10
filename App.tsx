import React from 'react';
import './App.css';
import PropertyCard from './Component/PropertyCard/PropertyCard'; 
import logo from './assets/image-1.svg'; 


const App: React.FC = () => {
  return (
    <div className="app">
      <header className="header">
        <img
          src={logo}
          alt="Similater logo"
          className="logo"
        />
        <div className="header-right">
          <h1 className="header-title">Service apartments</h1>
        </div>
      </header>

      <main className="main-content">
        <PropertyCard />
        <PropertyCard />
      </main>
    </div>
  );
};

export default App;

