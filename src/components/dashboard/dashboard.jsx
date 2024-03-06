import React, { useState } from 'react';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// Enregistrez les éléments nécessaires pour le graphique Doughnut
Chart.register(ArcElement, Tooltip, Legend);

function TableauDeBord() {
  const [etatDemandes, setEtatDemandes] = useState({
    labels: ['En attente', 'En cours', 'Résolu'],
    datasets: [
      {
        label: 'État des demandes',
        data: [10, 20, 30], // Données initiales
        backgroundColor: ['#FFCE56', '#36A2EB', '#FF6384'],
        hoverBackgroundColor: ['#FFCE56', '#36A2EB', '#FF6384'],
      },
    ],
  });

  const [recherche, setRecherche] = useState("");

  // Simule la mise à jour des données
  const miseAJourDesDonnees = () => {
    // Simuler un appel API avec de nouvelles données
    setTimeout(() => {
      setEtatDemandes({
        ...etatDemandes,
        datasets: [{
          ...etatDemandes.datasets[0],
          data: [Math.random() * 100, Math.random() * 100, Math.random() * 100], // Nouvelles données aléatoires
        }],
      });
    }, 1000); // Simuler un délai de réponse de l'API
  };

  const handleRechercheChange = (e) => {
    setRecherche(e.target.value);
  };

  return (
    <div>
      <a href="./Home" >Retour</a>
      <h2>Tableau de bord Adminstrateur</h2>
      <nav className="navbar">
          <a href="#home" className="active">APERCU</a>
          <a href="./Filtrage">STATISTIQUE</a>
        </nav>
      <button onClick={miseAJourDesDonnees}>Mettre à jour les données</button>
      <Doughnut data={etatDemandes} />
    
    </div>
    
  );
}

export default TableauDeBord;
