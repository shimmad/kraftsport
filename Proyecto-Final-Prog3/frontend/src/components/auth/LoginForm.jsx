// components/auth/LoginForm.jsx
import { useState } from 'react';
import '../../styles/loginForm.css';
export default function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
   await onLogin(email, password);  // la función que viene desde Perfil.jsx
  } catch (error) {
    console.error(error);
  }
  };

  return (
    <form  className="login-form" onSubmit={handleSubmit}>
      <h2 className="login-form-title">Iniciar Sesión</h2>
      <input className='login-form-input'
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <input className='login-form-input'
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      <button className="login-form-button" type="submit">Entrar</button>
    </form>
  );
}
