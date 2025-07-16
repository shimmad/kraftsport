import React from "react";
import VideoCard from "./VideoCard";

function EjercicioCard({ grupo, ejercicios, activo, onClick }) {
    return (
        <div className={`ej-card${activo ? ' activo' : ''}`} onClick={onClick}
           style={
                !activo
                    ? {
                          backgroundImage: `url(${grupo.img})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          color: "#fff",
                          boxShadow: "0 2px 16px rgba(0,0,0,0.15)",
                          position: "relative",
                      }
                    : {}
            }>
            
             <div className={`ej-card-title-container${!activo ? " overlay" : ""}`}>
                <h2 className="ej-card-title">{grupo.label}</h2>
            </div>
            {activo && (
                <div className="ejercicios-list">
                    {ejercicios.length === 0 && <p>No hay ejercicios en esta sección.</p>}
                     
                    {ejercicios.map(ej => (
                        <VideoCard key={ej.id} ejercicio={ej} />
                    ))}
                </div>
            )}
        </div>
        
    );
}
export default EjercicioCard;
// en el map de ejercicios, splo llamo a VideoCard