// ModifierAttribuerDemande.jsx
import React, { useState } from 'react';

function ModifierAttribuerDemande({ demande, onUpdate }) {
  const [formData, setFormData] = useState({ ...demande });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData); // Simuler la mise à jour (remplacez ceci par votre logique de mise à jour)
    alert('Demande mise à jour !');
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <h2>Modifier/Attribuer Demande</h2>
        <div>
          <label>Description:</label>
          <textarea name="description" value={formData.description} onChange={handleChange} />
        </div>
        <div>
          <label>Catégorie:</label>
          <select name="categorie" value={formData.categorie} onChange={handleChange}>
            <option value="infrastructure">Infrastructure</option>
            <option value="eclairage">Éclairage public</option>
            <option value="dechets">Gestion des déchets</option>
          </select>
        </div>
        <div>
          <label>Statut:</label>
          <select name="statut" value={formData.statut} onChange={handleChange}>
            <option value="En attente">En attente</option>
            <option value="Assigné">Assigné</option>
            <option value="Résolu">Résolu</option>
          </select>
        </div>
        <button type="submit">Mettre à jour</button>
      </form>
    </div>
  );
}

export default ModifierAttribuerDemande;
