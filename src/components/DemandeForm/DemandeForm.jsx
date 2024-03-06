// DemandeForm.jsx
import React, { useState } from 'react';
import './DemandeForm.css';

function DemandeForm() {
  const [demande, setDemande] = useState({
    description: '',
    categorie: '',
    lieu: '',
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDemande({...demande, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(demande);
    // Ici, vous pouvez ajouter la logique pour envoyer les données au serveur
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Formuler une demande</h2>
      <div>
        <label>Description:</label>
        <textarea name="description" value={demande.description} onChange={handleChange} />
      </div>
      <div>
        <label>Catégorie:</label>
        <select name="categorie" value={demande.categorie} onChange={handleChange}>
          <option value="voirie">La voirie</option>
          <option value="env">Environnement</option>
          <option value="urbanisme">Urbanisme</option>
          <option value="autres">Autres</option>
        </select>
      </div>
      <div>
        <label>Lieu:</label>
        <input type="text" name="lieu" placeholder='Lomé-Baguida' value={demande.lieu} onChange={handleChange} />
      </div>
      <div>
        <label>Photo:</label>
        <input type="file" name="photo" onChange={(e) => setDemande({...demande, photo: e.target.files[0]})} />
      </div>
      <div className="bouton">
        <br />
       <a href="./Home" class='lien'>Retour</a>
      <button type="submit">Soumettre</button>
      </div>
    </form>
  );
}

export default DemandeForm;
