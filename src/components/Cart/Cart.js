import React, { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';



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

      <div className="product-item">
      <p> Total: {carritoCart.id}</p>



        <button onClick={finalizarCompra}>Agregar al Carrito</button>
        <button> <Link to={`/checkout`} > IR A DETALLES DE COMPRA </Link></button>




      </div>

    </div>
   

  );
};

export default Cart;
