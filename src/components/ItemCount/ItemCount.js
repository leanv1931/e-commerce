
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import React, { useContext } from "react";

import { CartContext } from "../../context/cartContext";



const ItemCount= ( {producto } ) => {

    const { contador, increment, decrement, reset, agregarAlCarrito } = useContext(CartContext);

    

    return (

        <>
            <p>Contador: {contador}</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={reset}>Resetear</button>
            <button onClick={agregarAlCarrito}>Agregar al Carrito</button>

           
        </>
      );

}

export default ItemCount;