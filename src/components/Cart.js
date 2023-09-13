import React from 'react';
import CartWidget from '../components/CartWidget/CartWidget';

const Cart = ({ cantidadEnCarrito }) => {
  return (
    <div>
     
     <CartWidget cantidadEnCarrito={cantidadEnCarrito} />

  {/*     <span> {cantidadEnCarrito} </span> */}
    </div>
  );
};

export default Cart;
