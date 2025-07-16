import { useState, useEffect } from 'react';
import { obtenerEjercicios, agregarEjercicioAChallenge } from '../../../services/challengeEj';
import '../../../styles/formAdmin.css';

export default function FormAgregarEjercicios({ challengeId }) {
  const [ejercicios, setEjercicios] = useState([]);
  const [formData, setFormData] = useState({
    ejercicio_id: '',
    dia: 1,
    posicion: 1
  });

  useEffect(() => {
    obtenerEjercicios()
      .then(setEjercicios)
      .catch(err => alert('❌ ' + err.message));
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await agregarEjercicioAChallenge(challengeId, formData);
      alert(' Ejercicio agregado al challenge');
    } catch (err) {
      alert('oh no! ' + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-admin">
      <h4 className='form-admin-title'>Agregar Ejercicio al Challenge</h4>
      <select name="ejercicio_id" value={formData.ejercicio_id} onChange={handleChange} required>
        <option value="">-- Seleccioná un ejercicio --</option>
        {ejercicios.map(ej => (
          <option key={ej.id} value={ej.id}>{ej.nombre}</option>
        ))}
      </select>
      <label>Día</label>
      <input type="number" name="dia" value={formData.dia} onChange={handleChange} min="1" required />
      <label>Posición</label>
      <input type="number" name="posicion" value={formData.posicion} onChange={handleChange} min="1" required />
      <button className="form-admin-button" type="submit">Agregar</button>
    </form>
  );
}
