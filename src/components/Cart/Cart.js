import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';

const Cart = () => {
  const { carritoCheckout } = useContext(CartContext);

  return (
    <>
      <div className="lista-productos">
        {carritoCheckout.length > 0 ? (
          <ul>
            {carritoCheckout.map(producto => (
              <li key={producto.id}>
                <h2>{producto.nombre}</h2>
                <p>{producto.descripcion}</p>
                {/* ...otros detalles del producto... */}
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay productos en el carrito.</p>
        )}
      </div>
      <button>
        <Link to={`/checkout`}>Finalizar compra</Link>
      </button>
    </>
  );
};

export default Cart;
