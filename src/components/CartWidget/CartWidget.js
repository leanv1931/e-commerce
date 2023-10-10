import carritoImg from '../../assets/img/carrito.png'
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";




const CartWidget = ({ producto }) => {

  const {cantidadEnCarrito} = useContext(CartContext);


  return (
    
  <div className="CartWidget">
          <img src={carritoImg} alt='carrito'/>
          <Link to={`/carrito`}> <p className="product-title">{cantidadEnCarrito}</p></Link>

  </div> 

  );
};

export default CartWidget;
