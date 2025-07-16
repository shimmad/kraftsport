export async function obtenerProductos() {
  const res = await fetch('/api/productos');
  if (!res.ok) throw new Error('Error al obtener productos');
  return await res.json();
}
export async function crearProducto(productoData) {
  const token = localStorage.getItem('token');

  const response = await fetch('http://localhost:3001/api/productos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(productoData)
  });

  const result = await response.json();
  if (!response.ok) throw new Error(result.message || 'Error al crear producto');

  return result; 
}