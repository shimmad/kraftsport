//card visual para cada ejercicio
import React from "react";

export default function ChallengeCard({challenge, onClick}){
    return (
        <div className="challenge-card" onClick={onClick}>
            <h3>{challenge.nombre}</h3>
    
            <p>{challenge.id} - {challenge.descripcion}</p>
           
        </div>
    )
}