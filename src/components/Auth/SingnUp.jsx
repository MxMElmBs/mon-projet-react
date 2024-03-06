import React, { useState } from 'react';
import './AuthForm.css'; // Assurez-vous que le fichier CSS est correctement lié
import UserService from '../services/UserService'; // Importez le service UserService

const SignUp = () => {
    const [user, setUser] = useState({
        nom: '',
        prenom: '',
        email: '',
        password: '',
        role: 'Citoyen' // Définir le rôle comme "Citoyen"
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Envoyer les données utilisateur au backend pour la création
            await UserService.createUser(user);
            console.log('Utilisateur créé avec succès !');
            // Rediriger l'utilisateur vers la page d'accueil après l'inscription
            window.location.href = "/Home";
        } catch (error) {
            console.error('Erreur lors de la création de l\'utilisateur :', error);
            // Gérer les erreurs et afficher un message d'erreur à l'utilisateur si nécessaire
        }
    };

    return (
        <div className="auth-form">
            <h2>Créer un compte</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="nom" placeholder="Nom" value={user.nom} onChange={handleChange} required />
                <input type="text" name="prenom" placeholder="Prénom" value={user.prenom} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} required />
                <input type="password" name="password" placeholder="Mot de passe" value={user.password} onChange={handleChange} required />
                <button type="submit">S'inscrire</button>
            </form>
        </div>
    );
};

export default SignUp;
