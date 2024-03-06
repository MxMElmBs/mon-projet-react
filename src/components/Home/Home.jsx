import React from 'react';
import './Home.css';
import photo from './photo.png';

function HomePage() {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">Hello 👋</div>
        <nav className="navbar">
          <a href="#" className="active">HOME</a>
          <a href="./DemandeForm">DEMANDE</a>
          <a href="./Signal">INCIDENT</a>
          <a href="./AdminLogin">ADMINISTRATION</a>
        </nav>
      </header>
      <main className="main-content">
        <div>
        <h1>Soyez les Bienvenues sur notre Plateform</h1>
        <p>Nous sommes à l'écoute de vos inquiètudes et demandes!!! 
          Veuillez formuler vos préoccupations</p>
        </div>
        <div className="image-container">
          <img src={photo} alt="Business Woman" />
        </div>
      </main>
    </div>
  );
}

export default HomePage;
