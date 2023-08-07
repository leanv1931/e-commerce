import React from 'react';
import logo from './cartI.png';

import './CartWidget.css';

const CartWidget = (props) => {
  return (
    <div className="container">
    <h2 className="cart-widget">{props.title}</h2>
    <img src={logo} className="img-small"  alt="logo" />
  </div>


     
      

  );
};

export default CartWidget;
