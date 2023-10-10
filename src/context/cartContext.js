import { createContext } from "react";
import { useEffect, useState} from 'react';
import { db } from '../firebase/client'
import {getDocs, collection, query, where } from 'firebase/firestore'
import { useParams } from "react-router-dom";


// Creamos el contexto con createContext
export const CartContext = createContext(); 


// Creamos un componente para nuestro contexto
export const CartComponentContext = ({children}) => {

  const [cargando, setCargando] = useState(true)
  const [productos, setProductos] = useState([])
  const [cantidadEnCarrito, setCantidadEnCarrito] = useState(0);
  const [carritoCheckout, setCheckout ] = useState([])
  const [contador, setContador] = useState(0)



  //const params = useParams();
  const categoria = useParams().id;

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


const agregarAlCarrito = () => {
  setCantidadEnCarrito(contador);
  
};

    
const increment = () => {
  setContador(contador => contador + 1)
}

const decrement = () => {
  setContador(contador => contador - 1)
}

const reset = () => {
  setContador(0)
}

  return <CartContext.Provider value={{productos, cargando, agregarAlCarrito, cantidadEnCarrito, increment,
                                      decrement, reset, contador, carritoCheckout, setCheckout }}>
        {children}
    </CartContext.Provider>
}