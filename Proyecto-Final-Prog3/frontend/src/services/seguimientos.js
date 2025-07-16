export async function fetchSeguimiento(challenge_id,user_id) {
    
    const res = await fetch(`/api/seguimientos/${challenge_id}/usuario/${user_id}`);
    //trae los seguimientos del usuario en el challenge
    if (!res.ok) throw new Error('Error al obtener los seguimientos');
    const data = await res.json();
    return data;
}

export async function completado(challenge_id,user_id,dia) {
    const res = await fetch(`/api/seguimientos/${challenge_id}/usuario/${user_id}/dia/${dia}/completar`, { method: 'PUT' });
    //seguimientos de un dia especifico
    if (!res.ok) throw new Error('Error al completar el dia');
    const data = await res.json();
    return data;
}
export async function descompletado(challenge_id, user_id, dia) {
    const res = await fetch(`/api/seguimientos/${challenge_id}/usuario/${user_id}/dia/${dia}/descompletar`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' }
    });
    if (!res.ok) throw new Error('Error al descompletar el seguimiento');
    return await res.json();
}