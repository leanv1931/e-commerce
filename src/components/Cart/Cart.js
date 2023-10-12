import React, { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import { useEffect} from 'react';


const Cart = () => {

  const { carritoCart } = useContext(CartContext);
  const { finalizarCompra } = useContext(CartContext);



  return (

    <div className="cart">
      <h2>Carrito de Compras</h2>
      <ul>
        {carritoCart.map((producto) => (
          <li key={producto.id}>
            {producto.title} - Cantidad: {producto.cantidad} - Precio por unidad: {producto.precio}
            <div className="product-item">
            <img src={producto.image} alt={producto.title} />
            <div className="product-details"></div>
              <p className="product-category">Precio: {producto.precio}</p>
              <p className="product-title">Total: {producto.total}</p>
            </div>
          </li>
        ))}
      </ul>
      <h3><p> Total: ${carritoCart.total}</p></h3>

      <div className="product-item">
        <button onClick={finalizarCompra}>Agregar al Carrito</button>
      </div>

    </div>
   

  );
};

export default Cart;
