//pag princicipal de ejerciccios, grid de colunmnas
import React, { useState, useEffect } from 'react';
import EjercicioCard from '../components/ejercicios/EjercicioCard';
import { fetchEjercicios } from '../services/ejercicios';
import '../styles/ejercicios.css';
import imgFull from '../assets/img/FullEj.jpg';
import imgWarm from '../assets/img/warmEj.jpg';
import imgUp from '../assets/img/UpEj.jpg';
import imgLow from '../assets/img/LowEj.jpg';
import imgFlex from '../assets/img/flexEj.jpg';



const grupos = [
    // pondria una foto especifica para cada columna
    {key: 'warmup', label: 'Warmup', img: imgWarm},
    {key: 'fullbody', label: 'Fullbody', img: imgFull},
    {key: 'lowerbody', label: 'Lowerbody', img: imgLow},
    {key: 'upperbody', label: 'Upperbody',  img: imgUp},
    {key: 'flexibility', label: 'Flexibility', img: imgFlex},
];


 function Ejercicios() {
    const [ejercicios, setEjercicios] = useState([]);
    const [activo, setActivo] = useState(null);

    useEffect(() => {
        fetchEjercicios().then(data=>{
            setEjercicios(data);
        });
        console.log("ejercicicos desde backend", ejercicios);
    }, []);

    //agrupo por atribut tipo de columna ejercicio
    const ejerciosPorGrupo = grupos.reduce((acumulador, grupo) => {
        acumulador[grupo.key] = ejercicios.filter(ejercicio => ejercicio.tipo.toLowerCase() === grupo.key.toLowerCase());
        return acumulador;
    }, {});

    return(
        <div className="ejercicios-container">
          {grupos.map((grupo) => (
              <EjercicioCard
                key={grupo.key}
                grupo={grupo}
                ejercicios={ejerciosPorGrupo[grupo.key] || []}
                activo={activo === grupo.key}
                onClick={() => setActivo(activo ===grupo.key ? null : grupo.key)}
                />
          ))}
            </div>
            
    )
    /*solo muestra una columna por vez */
}

export default Ejercicios;