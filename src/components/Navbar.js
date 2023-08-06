import React from 'react';
import './Navbar.css';
import CartWidget from './CartWidget'; // Importamos el componente CartWidget

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">INFINITA</div>
      <ul className="nav-links">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Producto</a></li>
        <li><a href="#">Contacto</a></li>
        <li><a href="#">Quienes somos</a></li>
      </ul>
       <CartWidget title="cart widget enviado"/>
    </nav>
  );
}

export default Navbar;
