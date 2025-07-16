import React from 'react';

export default function ChallengeDia({ days, tracker, onComplete }) {
    return (
        <div className="challenge-dia">
            {days.map((dia) => {
                const done = tracker.includes(dia); // Si tracker es array de días
                // Si tracker es array de objetos: const done = tracker.some(t => t.dia === dia && t.completado);
                return (
                    <div key={dia} className={`dia ${done ? 'completado' : ''}`}>
                        <span>Día {dia}</span>
                        <button disabled={done} onClick={() => onComplete(dia)}>
                            {done ? "Completado" : "Marcar como hecho"}
                        </button>
                    </div>
                );
            })}
        </div>
    );
}