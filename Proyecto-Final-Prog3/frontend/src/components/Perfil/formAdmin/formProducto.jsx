import { useState } from 'react';
import '../../../styles/formAdmin.css';
import { crearProducto } from '../../../services/productos';

export default function FormNuevoProducto() {
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    img: ''
  });

  
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'precio' ? parseFloat(value) : value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await crearProducto(formData);
      alert('Producto creado con éxito');
      setFormData({ nombre: '', descripcion: '', precio: '', img: '' });
    } catch (err) {
      alert('Error al crear producto: ' + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-admin">
      <h3 className='form-admin-title'>Agregar nuevo producto</h3>

      <input className='form-admin-input'
        name="nombre"
        type="text"
        placeholder="Nombre del producto"
        value={formData.nombre}
        onChange={handleChange}
        required
      />

      <textarea
        name="descripcion"
        placeholder="Descripción"
        value={formData.descripcion}
        onChange={handleChange}
        required
      />

      <input
        name="precio"
        type="number"
        step="0.01"
        placeholder="Precio"
        value={formData.precio}
        onChange={handleChange}
        required
      />

      <input
        name="img"
        type="url"
        placeholder="URL de la imagen"
        value={formData.img}
        onChange={handleChange}
        required
      />

      <button className='form-admin-button' type="submit">Crear producto</button>
    </form>
  );
}
