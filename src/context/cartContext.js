import { createContext } from "react";
import { useEffect, useState} from 'react';
import { db } from '../firebase/client'
import {getDocs, collection } from 'firebase/firestore'
/* import { useParams } from "react-router-dom";
 */// query, where

// Creamos el contexto con createContext
export const CartContext = createContext(); 


// Creamos un componente para nuestro contexto
export const CartComponentContext = ({children}) => {

  const [cargando, setCargando] = useState(true)
  const [productos, setProductos] = useState([])
  const [contador, setContador] = useState(0)
  const [producto_1, setProducto_1] = useState([])
  const [carritoCart, setCarrito] = useState([]);
  const [precioTotal, setPrecioTotal] = useState(0)







  //const params = useParams();
//  const categoria = useParams().id;

  useEffect(() => {
    const productsRef = collection(db, "products")
    const getProducts = async () => {
      const data = await getDocs(productsRef)
      const dataFiltrada = data.docs.map((doc) => ( {...doc.data(), id: doc.id} ))
      console.log(dataFiltrada)
      setProductos(dataFiltrada)
  }
    getProducts()
    setCargando(false)
  }, []); 




    
const increment = () => {
  setContador(contador => contador + 1)
}

const decrement = () => {
  setContador(contador => contador - 1)
}

const reset = () => {
  setContador(0)
}

const agregarAlCarrito = () => {
 // setContador(contador);
  const productoEnCarrito = {

   
    id: producto_1.id,
    cantidad: contador,
    precio: producto_1.precio,
    image: producto_1.image,
    contadorCart: contador
  };

    // Actualiza el estado del carrito agregando el producto
   // setCarrito([...carritoCart, productoEnCarrito]);
    setCarrito([productoEnCarrito]);

};

/* const calcularTotal = () => {
  return producto_1.reduce((total, producto_1) => {
    return total + producto_1.price * contador;
   
  }, 0);
}; */
let total = 0;
const calcularTotal = () => {


  for (const producto of carritoCart) {
  //  carritoCart.key= producto.id,
    total += producto.price * producto.cantidad;
  }

  setPrecioTotal(precioTotal)
 // return total;
};
//const total: calcularTotal()

  return <CartContext.Provider value={{productos, setProductos, producto_1, setProducto_1, cargando, increment,
                                      decrement, reset, contador, agregarAlCarrito, calcularTotal, carritoCart, setPrecioTotal, precioTotal }}>
        {children}
    </CartContext.Provider>
}