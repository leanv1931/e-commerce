
import React from "react";
import Cart from '../Cart' ;
import NavBar from "../NavBar/NavBar";


const Item = ({producto, cart, agregarAlCarrito}) => {
 
  return (

    <>
    <div className="product-item">
      <img src={producto.image} alt={producto.title} />
      <div className="product-details">
        <p className="product-title">Título: {producto.title}</p>
        <p className="product-price">Precio: {producto.price}</p>
        <p className="product-category">Categoría: {producto.category}</p>
      </div>
      <button onClick={agregarAlCarrito}> Agregar </button>
   {/*    <Cart cantidadEnCarrito={cart} /> */}     
    </div>
    </>
  );
};

export default Item;
