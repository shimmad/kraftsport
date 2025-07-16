// pages/Perfil.jsx
import { useEffect, useState } from 'react';
import LoginForm from '../components/auth/LoginForm';
import SeguimientosUsuario from '../components/Perfil/seguimientosUser';
import PanelAdmin from '../components/Perfil/formAdmin/panelAdmin';
import '../styles/perfil.css';

import { login as loginService } from '../services/auth';


export default function Perfil() {
  const [user, setUser] = useState(null);

  const handleLogin = async (email, password) => {
    const result = await loginService(email, password);
    if (result.success) {
      setUser(result.user);
    } else {
      alert(result.error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  if (!user) return <LoginForm onLogin={handleLogin} />;

  return (
    <div className="perfil-container">
      <h2 className="perfil-title">Bienvenido, {user.email}!</h2>
      <p className="perfil-rol">Rol: {user.rol}</p>
      <button className="logout-button" onClick={handleLogout}>Logout</button>

      {user.rol === 'admin' && <PanelAdmin />}
      {user.rol === 'usuario' && <SeguimientosUsuario />}
    </div>
  );
}
