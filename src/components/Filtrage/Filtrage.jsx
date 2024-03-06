// DemandesIncidentsListe.jsx
import React, { useState, useEffect } from 'react';
import './Filtrage.css';

function DemandesIncidentsListe() {
  const [demandes, setDemandes] = useState([]);
  const [recherche, setRecherche] = useState('');

  useEffect(() => {
    // Simuler le chargement des données (remplacez ceci par votre appel API)
    const demandesFictives = [
      { id: 1, description: "Nid de poule sur la route", categorie: "Infrastructure", statut: "En attente" },
      { id: 2, description: "Lampe cassée dans le parc", categorie: "Éclairage public", statut: "Assigné" },
      { id: 3, description: "Nid de poule sur la route", categorie: "Infrastructure", statut: "En attente" },
      { id: 4, description: "Lampe cassée dans le parc", categorie: "Éclairage public", statut: "Assigné" },
      { id: 1, description: "Nid de poule sur la route", categorie: "Infrastructure", statut: "En attente" },
      { id: 2, description: "Lampe cassée dans le parc", categorie: "Éclairage public", statut: "Assigné" },
      { id: 3, description: "Nid de poule sur la route", categorie: "Infrastructure", statut: "En attente" },
      { id: 4, description: "Lampe cassée dans le parc", categorie: "Éclairage public", statut: "Assigné" },
      { id: 1, description: "Nid de poule sur la route", categorie: "Infrastructure", statut: "En attente" },
      { id: 2, description: "Lampe cassée dans le parc", categorie: "Éclairage public", statut: "Assigné" },
      { id: 3, description: "Nid de poule sur la route", categorie: "Infrastructure", statut: "En attente" },
      { id: 4, description: "Lampe cassée dans le parc", categorie: "Éclairage public", statut: "Assigné" },
      // Ajoutez d'autres demandes fictives ici
    ];
    setDemandes(demandesFictives);
  }, []);

   // Filtre les demandes en fonction de la recherche
   const demandesFiltrees = demandes.filter(demande =>
    demande.description.toLowerCase().includes(recherche.toLowerCase()) ||
    demande.categorie.toLowerCase().includes(recherche.toLowerCase()) ||
    demande.statut.toLowerCase().includes(recherche.toLowerCase())
  );

  const handleRechercheChange = (e) => {
    setRecherche(e.target.value);
  };

  return (
    <div>
      <a href="./dashboard">Retour</a>
      <h2>Liste des Demandes et Incidents</h2>
      <input
        type="search"
        placeholder="Rechercher ...."
        value={recherche}
        onChange={handleRechercheChange}
      />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Catégorie</th>
            <th>Statut</th>
          </tr>
        </thead>
        <tbody>
          {demandes.map((demande) => (
            <tr key={demande.id}>
              <td>{demande.id}</td>
              <td>{demande.description}</td>
              <td>{demande.categorie}</td>
              <td>{demande.statut}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DemandesIncidentsListe;
