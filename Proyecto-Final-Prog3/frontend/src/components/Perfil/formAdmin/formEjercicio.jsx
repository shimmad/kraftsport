import { useState } from 'react';
import '../../../styles/formAdmin.css';
import { crearEjercicio } from '../../../services/ejercicios';


export default function FormEjercicio({ onSuccess }) {
  const [formData, setFormData] = useState({
    nombre: '',
    tipo: '',
    video_url: '',
    descripcion: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };



    const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await crearEjercicio(formData);
    alert(' Ejercicio creado correctamente');
    setFormData({ nombre: '', tipo: '', video_url: '', descripcion: '' });
    onSuccess && onSuccess();
  } catch (err) {
    alert('oh no!  ' + err.message);
  }
};


  return (
    <form onSubmit={handleSubmit} className="form-admin">
      <h3 className="form-admin-title">Crear Nuevo Ejercicio</h3>
      <input className='form-admin-input' name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Nombre" required />
      <input className="form-admin-input" name="tipo" value={formData.tipo} onChange={handleChange} placeholder="Upperbody, Lowerbody, Fullbody, flexibility, warmup" required />
      <input className="form-admin-input" name="video_url" value={formData.video_url} onChange={handleChange} placeholder="URL del video" required />
      <textarea  className="form-admin-input" name="descripcion" value={formData.descripcion} onChange={handleChange} placeholder="Descripción" rows={3} required />
      <button className="form-admin-button" type="submit">Crear</button>
    </form>
  );
}
