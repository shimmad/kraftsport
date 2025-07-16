import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchChallengeInfo, fetchChallengeDiasConVideos } from '../services/challengeEj';
import { completado, descompletado, fetchSeguimiento } from '../services/seguimientos';
import '../styles/challengesEj.css';
import VideoCard from '../components/ejercicios/VideoCard';

export default function ChallengeEj() {
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    const userID = user?.id;
   const isUsuario = user?.rol === 'user' || user?.rol === 'usuario';

    // Debug logs
    console.log('user:', user);
    console.log('userID:', userID);
    console.log('user rol:', user?.rol);
    console.log('isUsuario:', isUsuario);

    const { id } = useParams();
    const [challenge, setChallenge] = useState(null);
    const [diasConVideos, setDiasConVideos] = useState([]);
    const [tracker, setTracker] = useState([]); // Array de días completados

    useEffect(() => {
        fetchChallengeInfo(id).then(setChallenge);
        fetchChallengeDiasConVideos(id).then(setDiasConVideos);

        if (userID) {
            fetchSeguimiento(id, userID).then(seguimientos => {
                const completados = seguimientos.filter(s => s.completado).map(s => s.dia);
                setTracker(completados);
            });
        }
    }, [id, userID]);

    const handleComplete = (dia) => {
        completado(id, userID, dia).then(() =>
            fetchSeguimiento(id, userID).then(seguimientos => {
                const completados = seguimientos.filter(s => s.completado).map(s => s.dia);
                setTracker(completados);
            })
        );
    };

    const handleUncomplete = (dia) => {
        descompletado(id, userID, dia).then(() =>
            fetchSeguimiento(id, userID).then(seguimientos => {
                const completados = seguimientos.filter(s => s.completado).map(s => s.dia);
                setTracker(completados);
            })
        );
    };

    if (!challenge) return <div>Cargando...</div>;

    return (
        <div className="challenge-ej">
            <h2>{challenge.nombre}</h2>
            <p>{challenge.descripcion}</p>
            <div>Duración: {challenge.fecha_inicio} - {challenge.fecha_fin}</div>
            <div className="dias-list">
                {diasConVideos.map(({ dia, videos }) => {
                    const isDone = tracker.includes(dia);
                    return (
                       <div key={`dia-${dia}`} className={`dia-row ${isDone ? 'completado' : ''}`}>

                            <div className="dia-header">
                                <h4>Día {dia}</h4>
                                {isUsuario && userID && (
                                    isDone ? (
                                        <button className="descompletar" onClick={() => handleUncomplete(dia)}>
                                            Desmarcar como hecho
                                        </button>
                                    ) : (
                                        <button onClick={() => handleComplete(dia)}>
                                            Marcar como hecho
                                        </button>
                                    )
                                )}
                            </div>
                            <div className="videos-row">
                                {videos.map((ejercicio) => (
                                    <VideoCard key={ejercicio.id} ejercicio={ejercicio} />
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}