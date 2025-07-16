//muestro las cards de desafios
import React, { useState, useEffect } from 'react';
import ChallengeCard from '../components/challenges/challengeCard';
import { fetchChallenges } from '../services/challenges';
import '../styles/challenges.css';  
import {useNavigate} from 'react-router-dom'; 

export default function Challenge() {
    const [challenges, setChallenges] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchChallenges().then(data => {
            setChallenges(data);
        });
    }, []);

    return (
        <div className='challenges-container'>
            <h1>Challenges</h1>
            <h3>Elige tu desafio! compromiso diario, resultados increibles</h3>
            <div className='challenges-cards'>
                {challenges.map((challenge) => (
                    <ChallengeCard key={challenge.id} challenge={challenge} onClick={() => navigate(`/challengesEj/${challenge.id}`)} />
                ))}
            </div>
        </div>

    );
}