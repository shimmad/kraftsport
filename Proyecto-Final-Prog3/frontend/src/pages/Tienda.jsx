
//solamente van a ser cards con productos.. quedaria implementar una funcion para que se pueda formar una compra 

import React, { useEffect, useState } from 'react';
import { obtenerProductos } from '../services/productos';
import '../styles/tienda.css';



export default function Tienda() {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    obtenerProductos()
      .then(setProductos)
      .catch(() => setError('No se pudieron cargar los productos.'));
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <main className='tienda-container'>
      <h1>Tienda KraftSport</h1>
      <p>
        Si te interesa algún producto, <b>contactanos vía WhatsApp</b> para coordinar la compra: <b>2917654321 </b>
        <br />
      </p>

      <div className='tienda'>
        {productos.map(producto => (
          <div key={producto.id} className='tienda-card'>
            <img
              src={producto.img}
              alt={producto.nombre}
            className='tienda-img'
            />
            <h3 className='tienda-nombre'>{producto.nombre}</h3>
            <p className='tienda-descripcion'>{producto.descripcion}</p>
            <p className='tienda-precio'>${producto.precio}</p>
    
          </div>
        ))}
      </div>
    </main>
  );
}