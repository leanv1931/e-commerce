import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">INFINITA</div>
      <ul className="nav-links">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Producto</a></li>
        <li><a href="#">Contacto</a></li>
        <li><a href="#">Quienes somos</a></li>
      </ul>
       <CartWidget title="1"/>
    </nav>
  );
}

export default NavBar;
