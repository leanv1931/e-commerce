
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import React, { useContext } from "react";

import { CartContext } from "../../context/cartContext";




const ItemCount= ( {producto } ) => {

    const {contador} = useContext(CartContext);
    const {decrement} = useContext(CartContext);
    const {increment} = useContext(CartContext);
    const {reset} = useContext(CartContext);
    const { agregarAlCarrito} = useContext(CartContext);
    const { carritoCheckout } = useContext(CartContext);



    const { setCheckout} = useContext(CartContext);


    const IrCheckout = () => {
      //  setCheckout(producto)
      setCheckout([...carritoCheckout, producto]);

    }

    return (

        <>
            <p>Contador: {contador}</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={reset}>Resetear</button>

           {/*  <button onClick={[agregarAlCarrito , IrCheckout() ]}  >Agregar al carrito</button> */}

            <button onClick={() => {
                    agregarAlCarrito();
                    IrCheckout();
                        }}>Agregar al carrito</button>
        </>
      );

}

export default ItemCount;