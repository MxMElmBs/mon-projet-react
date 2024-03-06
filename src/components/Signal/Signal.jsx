// DemandeForm.jsx
import React, { useState } from 'react';

function Signal() {
  const [demande, setSignal] = useState({
    description: '',
    categorie: '',
    lieu: '',
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignal({...demande, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(demande);
    // Ici, vous pouvez ajouter la logique pour envoyer les données au serveur
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signaler un incident</h2>
      <div>
        <label>Description:</label>
        <textarea name="description" value={demande.description} onChange={handleChange} />
      </div>
      <div>
        <label>Catégorie:</label>
        <select name="categorie" value={demande.categorie} onChange={handleChange}>
          <option value="nids">Nids-de-poules</option>
          <option value="eclairage">Éclairage public</option>
          <option value="dechets">Gestion des déchets</option>
        </select>
      </div>
      <div>
        <label>Lieu:</label>
        <input type="text" name="lieu" value={demande.lieu} onChange={handleChange} />
      </div>
      <div>
        <label>Photo:</label>
        <input type="file" name="photo" onChange={(e) => setSignal({...demande, photo: e.target.files[0]})} />
      </div>
      <a href="./Home">Retour</a>
      <button type="submit">Soumettre</button>
    </form>
  );
}

export default Signal;
