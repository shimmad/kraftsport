import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Challenge from './pages/Challenges';
import Ejercicio from './pages/Ejercicios';
import Tienda from './pages/Tienda';
import Perfil from './pages/Perfil';
import ChallengeEj from './pages/ChallengesEj';
import Layout from './components/layout/layout';


function App() {
  return (
    <Router>
      <Layout >
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/challenge" element={<Challenge />} />
        <Route path="/ejercicio" element={<Ejercicio />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/challengesEj/:id" element={<ChallengeEj />} />
      </Routes>
      </Layout>
      
  
  
    </Router>
  );
}

export default App;
