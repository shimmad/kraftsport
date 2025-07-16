import { Form } from 'react-router-dom';
import {useState} from 'react';
import FormChallenge from './formChallenge';
import FormChallengeEj from './formChallengeEj';
import FormEjercicio from './formEjercicio';
import FormProducto from './formProducto';
import '../../../styles/panelAdmin.css';

export default function PanelAdmin() {
    const [challengeCreado, setChallengeCreado] = useState(null);
  return (
    <div className="panel-admin">
      <h3 className='panel-admin-title'>Panel de administración</h3>
      <FormEjercicio/>
     <FormChallenge onCreated={setChallengeCreado} />

      {challengeCreado && (
        <div className="challenge-container">
          
          <h4 className='panel-challenge-titile'>Agregar ejercicios al challenge #{challengeCreado}</h4>
          <FormChallengeEj challengeId={challengeCreado} />
        </div>  
      
      )}

      
      <FormProducto />
    </div>
  );
}
