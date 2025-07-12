import React from 'react';
import { Link} from 'react-router-dom';
import "../styles/home.css";

function Home () {
    return (
      
            
          <div className="home-container">
            <header className="home-header">
            <h1>KraftSport</h1>
            <p className='home-vision'>Bienvenido a tu espacio de entrenamiento en casa. <br /> Descubre una amplia variedad de ejercicios y desafíos para mejorar tu salud y bienestar.
                </p>
            </header>
            <section className="home-features">
              <h2>Encontra el entrenamiento mas adecuado! </h2>
              <ul>
                <li>Completa desafios mensuales y registrar tu avance</li>
                <li>Busca ejercicios por grupo musuclar y tipo</li>
                <li>Segui tu progreso y logros con tu perfil</li>
                <li>Encontra productos pensados para mejorar tu calidad de entrenamiento</li>
              </ul>
            </section>
            <section className="home-cards">
              <Link to="/challenge" className="h-card challenge">
                <h3>Empeza un Challenge!</h3>
                <p>Sumate al desadio mensual, y marca tu progreso diario</p>
              </Link>
              <Link to="/ejercicio" className="h-card ejercicio">
                <h3>Busca un ejercicio!</h3>
                <p>Encuentra ejercicios con un filtro de grupo musuclar y tipo</p>
              </Link>
              <Link to="/tienda" className="h-card compras">
                <h3>Tienda Kraftsport</h3>
                <p>Productos y accesesorios para tu entrenamiento </p>
              </Link>
            </section>
          
        </div>
        
    );
}

export default Home;