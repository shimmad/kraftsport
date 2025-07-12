import React from 'react';
import { NavLink } from 'react-router-dom';

import "../../styles/Navbar.css";

// Navlink es un componmente de react-router-dom, que sirve para navegacion interna
//  className isActivem es yuna funcion q recibe la prop isActiva(boolean)
// isActive vale true cuando la ruta coincide con el to="/home"
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo-nav">
                <NavLink to="/Home" className={({ isActive }) => "logo"}>KraftSport</NavLink>
            </div>
            <ul className="nav-links">
             
                <li>
                    <NavLink to="/challenge" className={({ isActive }) => (isActive ? 'active' : '')}>Challenge</NavLink>
            
                </li>
                <li>
                    <NavLink to="/ejercicio" className={({ isActive }) => (isActive ? 'active' : '')}>Ejercicio</NavLink>
                </li>
                <li>
                    <NavLink to="/tienda" className={({ isActive }) => (isActive ? 'active' : '')}>Tienda</NavLink>
                </li>
                <li>
                    <NavLink to="/perfil" className={({ isActive }) => (isActive ? 'active' : '')}>Perfil</NavLink>
                </li>
            </ul>
        </nav>
    );


};

export default Navbar;