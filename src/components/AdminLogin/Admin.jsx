import React, { useState } from 'react';
import './Admin.css';

const SignAdmin = () => {
    const [login, setLogin] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLogin({...login, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Ici, vous ajouterez la logique pour vérifier les identifiants avec votre backend
        console.log(login);
    };

    return (
        <div className="auth-form">
            <h2>Identifiant Admin</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" value={login.email} onChange={handleChange} required />
                <input type="password" name="password" placeholder="Mot de passe" value={login.password} onChange={handleChange} required />
                <button type="submit"> <a href="./dashboard" class='alien'>Connexion</a> </button>
            </form>
        </div>
    );
};

export default SignAdmin;