export async function  fetchChallengeInfo(id) {
    const res = await fetch(`/api/challengeEj/${id}`);
    if (!res.ok) throw new Error('Error al obtener los ejercicios del challenge');
    const data = await res.json();
    return data;
}

export async function fetchChallengeDia(id,dia) {
    const res = await fetch(`/api/challengeEj/${id}/${dia}`); 
    if (!res.ok) throw new Error('Error al obtener los ejercicios del dia');
    const data = await res.json();
    return data;
}
export async function fetchChallengeDiasConVideos(challenge_id) {
    const res = await fetch(`/api/challengeEj/diasConVideos/${challenge_id}`);
    if (!res.ok) throw new Error('Error al obtener los días con videos');
    return res.json();
}

export async function obtenerEjercicios() {
  const res = await fetch('http://localhost:3001/api/ejercicios');
  if (!res.ok) throw new Error('No se pudieron obtener los ejercicios');
  return res.json();
}


export async function agregarEjercicioAChallenge(challengeId, data) {
  const token = localStorage.getItem('token');

  const response = await fetch('http://localhost:3001/api/challengeEj', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      challenge_id: challengeId,
      ...data
    })
  });

  const result = await response.json();
  if (!response.ok) throw new Error(result.message || 'Error al agregar ejercicio');

  return result;
}
