//funciones de request a backend
//fetchejercicios

export async function fetchEjercicios(){
    const res = await fetch('/api/ejercicios');
    if (!res.ok) throw new Error('Error al obtener los ejercicios');
    const data = await res.json();
    return data;
}
export async function crearEjercicio(formData) {
  const token = localStorage.getItem('token');

  const res = await fetch('http://localhost:3001/api/ejercicios', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(formData)
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || 'Error al crear ejercicio');
  }

  return await res.json();
}
