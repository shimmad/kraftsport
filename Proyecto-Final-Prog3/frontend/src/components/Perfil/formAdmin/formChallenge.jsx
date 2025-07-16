import { useState } from 'react';
import { crearChallenge } from '../../../services/challenges';
import '../../../styles/formAdmin.css';

export default function FormNuevoChallenge({ onCreated }) {
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    fecha_inicio: '',
    fecha_fin: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const result = await crearChallenge(formData);
      alert('✅ Challenge creado');
      onCreated && onCreated(result.id);
    } catch (err) {
      alert('❌ ' + err.message);
    }
  };

  return (
    <form className="form-admin" onSubmit={handleSubmit}>
      <h3 className="form-admin-title">Crear Challenge</h3>
      <input
        className="form-admin-input"
        name="nombre"
        placeholder="Nombre"
        value={formData.nombre}
        onChange={handleChange}
        required
      />
      <textarea
        className="form-admin-input"
        name="descripcion"
        placeholder="Descripción"
        value={formData.descripcion}
        onChange={handleChange}
        required
      />
      <input
        className="form-admin-input"
        name="fecha_inicio"
        type="date"
        value={formData.fecha_inicio}
        onChange={handleChange}
        required
      />
      <input
        className="form-admin-input"
        name="fecha_fin"
        type="date"
        value={formData.fecha_fin}
        onChange={handleChange}
        required
      />
      <button className="form-admin-button" type="submit">Crear Challenge</button>
    </form>
  );
}
