/*
seria que si un usuario se logea, muestre la info de que challenges estas hacirndo ..

import { useEffect, useState } from 'react';
import { getToken } from '../../services/auth';

export default function SeguimientosUsuario() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/seguimientos', {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
      .then(res => res.json())
      .then(setData)
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h3>Tus seguimientos</h3>
      <ul>
        {data.map(s => (
          <li key={`${s.challenge_id}-${s.dia}`}>
            Challenge {s.challenge_id}, Día {s.dia} → {s.completado ? 'si' : 'no}
          </li>
        ))}
      </ul>
    </div>
  );
}
 cuestiones de logica a revisar:
yo ahora elegi que si soy admin me renderice el panel de admin, no los seguimientos. es decir que yo como admin no vere seguimientos
aunque en este momento tengo cargados en la tabla seguimientos al usuario 1. deberia agregar seguimientos a admin, o antes de permitir crear un seguimiento verificar que es para un usuario. */