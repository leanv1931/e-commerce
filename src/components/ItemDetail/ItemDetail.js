// contador
// itemCount.js


import React from "react";
import { Link } from "react-router-dom";


const ItemDetails = ({producto, cart, agregarAlCarrito}) => {

  return (

    <>
    <div className="product-item">
      <img src={producto.image} alt={producto.title} />
      <div className="product-details">
        <p className="product-title">Título: {producto.title}</p>
        <p className="product-price">Precio: {producto.price}</p>
        <p className="product-category">Categoría: {producto.category}</p>
      </div>
      <button> <Link to={`/item/${producto.id}`} onClick={agregarAlCarrito}> Agregar </Link></button>


   {/*    <Cart cantidadEnCarrito={cart} /> */}     
    </div>
    </>
  );
};

export default ItemDetails;
