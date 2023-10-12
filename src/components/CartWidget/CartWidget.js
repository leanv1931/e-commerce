import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';
import carritoImg from '../../assets/img/carrito.png'



const CartWidget = () => {
const { contador } = useContext(CartContext);
const { carritoCart } = useContext(CartContext);



 
  return (
   
<div className="CartWidget">
          <img src={carritoImg} alt='carrito'/>
         <Link to={`/carrito`}> <p className="product-title">{contador}</p></Link>


  </div> 

    
    
  
  );
};

export default CartWidget;
