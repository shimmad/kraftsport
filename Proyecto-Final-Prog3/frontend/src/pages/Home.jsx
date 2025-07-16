import React from 'react';
import { Link} from 'react-router-dom';
import "../styles/home.css";
import imgChallenge from "../assets/img/challenge.jpg";
import imgEjercicio from "../assets/img/ejercicio.jpg";
import imgTienda from "../assets/img/compras.jpg";

function Home () {
    return (
      
            
          <div className="home-container">
            <header className="home-header">
            <h1>KraftSport</h1>
            <h2 className='home-vision'>Crea tu espacio de entrenamiento en casa. 
                </h2>
            </header>
            <section className="home-features">
              <h2>Encontra tu entrenamiento preferido! </h2>
              <ul>
                <li>Completa desafios mensuales y registrar tu avance</li>
                <li>Busca ejercicios por grupo musuclar y tipo</li>
                <li>Segui tu progreso y logros con tu perfil</li>
                <li>Encontra productos pensados para mejorar tu calidad de entrenamiento</li>
              </ul>
            </section>
            <section className="home-cards">
              <Link to="/challenge" className="h-card" style={{ backgroundImage: `url(${imgChallenge})` }}>
                <h3>Empeza un <strong className='enfasis'>Challenge</strong></h3>
                
              </Link>
              <Link to="/ejercicio" className="h-card" style={{ backgroundImage: `url(${imgEjercicio})` }}>
                <h3>Busca <strong className='enfasis'>Ejercicios</strong></h3>
                
              </Link>
              <Link to="/tienda" className="h-card" style={{ backgroundImage: `url(${imgTienda})` }}>
                <h3>Tienda Kraftsport</h3>
                
              </Link>
            </section>
          
        </div>
        
    );
}

export default Home;