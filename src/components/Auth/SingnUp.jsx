import React, { useState } from 'react';
import './AuthForm.css'; // Assurez-vous que le fichier CSS est correctement lié

const SignUp = () => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({...user, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Ici, vous ajouterez la logique pour envoyer les données à votre backend
        console.log(user);
    };

    return (
        <div className="auth-form">
            <h2>Créer un compte</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Nom d'utilisateur" value={user.username} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} required />
                <input type="password" name="password" placeholder="Mot de passe" value={user.password} onChange={handleChange} required />
                <button type="submit"><a href="./Home" class='hr'>S'inscrire</a></button>
            </form>
        </div>
    );
};

export default SignUp;
