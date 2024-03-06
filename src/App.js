import React from "react"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import SignIn from "./components/Auth/SignIn"; 
import SignUp from "./components/Auth/SingnUp"; 
import DemandeForm from "./components/DemandeForm/DemandeForm"; 
import Signal from "./components/Signal/Signal"; 
import DemandesIncidentsListe from "./components/Filtrage/Filtrage"; 
import ModifierAttribuerDemande from "./components/Modifier/Modifier"; 
import TableauDeBord from "./components/dashboard/dashboard"; 
import HomePage from "./components/Home/Home"; 
import SignAdmin from "./components/AdminLogin/Admin"; 
import "./App.css"; 
 
function App() { 
  return ( 
    <Router> 
      <div className="App"> 
        <Routes> 
          <Route path="/signup" element={<SignUp />} /> 
          <Route path="/demandeform" element={<DemandeForm />} /> 
          <Route path="/signal" element={<Signal />} /> 
          <Route path="/filtrage" element={<DemandesIncidentsListe />} /> 
          <Route path="/dashboard" element={<TableauDeBord />} /> 
          <Route path="/modifier" element={<ModifierAttribuerDemande />} /> 
          <Route path="/home" element={<HomePage />} /> 
          <Route path="/adminlogin" element={<SignAdmin />} /> 
          {/* Redirige vers la page de connexion par défaut */} 
          <Route path="/" element={<SignUp />} /> 
        </Routes> 
      </div> 
    </Router> 
  ); 
} 
 
export default App;