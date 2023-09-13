import CartWidget from '../CartWidget/CartWidget'
import Cart from '../Cart' ;
import { useState } from 'react';
import '../../App.css';
import { Link } from "react-router-dom";



const NavBar = () => {
  return (

    <nav className="navbar">
    <ul className="logo"><Link to='/'>INFINITA</Link></ul>
      <ul className="nav-links">
        <li><a href="#">Producto</a></li>
        <li><a href="#">Contacto</a></li>
        <li><a href="#">Quienes somos</a></li>
        <li><Link to='category/electronics'>Electronicos</Link></li>
        <li><Link to='category/jewelery'>Joyas</Link></li>
        <li><Link to={{ pathname: '/category/men\'s clothing' }}>Hombre</Link></li>
        <li><Link to={{ pathname: '/category/women\'s clothing' }}>Mujer</Link></li>
      </ul>
  {/*   <button onClick={agregarAlCarrito}>Agregar al carrito</button>
    <Cart cantidadEnCarrito={cantidadEnCarrito} />  */}
    <CartWidget title="1"/>
    </nav>
  );
}

export default NavBar;
