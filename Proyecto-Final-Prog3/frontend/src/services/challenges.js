// funcion para llamar al backend



export async function fetchChallenges() {
    const res = await fetch('/api/challenges');
    if (!res.ok) throw new Error('Error al obtener los challenges');
    const data = await res.json();
    return data;
}

export async function crearChallenge(data) {
  const token = localStorage.getItem('token');

  const response = await fetch('http://localhost:3001/api/challenges', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(data)
  });

  const result = await response.json();

  if (!response.ok) throw new Error(result.message || 'Error al crear challenge');

  return result; // idealmente retorna el challenge creado (o su id)
}