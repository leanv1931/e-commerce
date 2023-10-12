import { createContext } from "react";
import { useEffect, useState} from 'react';
import { db } from '../firebase/client'
import {getDocs, collection, addDoc} from 'firebase/firestore'

export const CartContext = createContext(); 


export const CartComponentContext = ({children}) => {

  const [cargando, setCargando] = useState(true)
  const [productos, setProductos] = useState([])
  const [contador, setContador] = useState(0)
  const [producto_1, setProducto_1] = useState([])
  const [carritoCart, setCarrito] = useState([]);
  const [precioTotal, setPrecioTotal] = useState(0)

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
  const productoEnCarrito = {
    id: producto_1.id,
    cantidad: contador,
    precio: producto_1.price,
    image: producto_1.image,
    total: producto_1.price * contador
  };
  console.log("AGREGAR CARRITO")
  setCarrito(prevCarrito => [...prevCarrito, productoEnCarrito]);
  console.log(carritoCart)
};


const finalizarCompra = () =>{

    const order = {
      buyer: {name: "Abel", phone: "1155889966", email: "abel@abel.com"},
      items: carritoCart,
      total: carritoCart[0].total
    }
    const orderCollection = collection(db, 'pedidos')
    addDoc(orderCollection, order).then(({id}) => console.log(id))


}


  return <CartContext.Provider value={{productos, setProductos, producto_1, setProducto_1, cargando, increment,
                                      decrement, reset, contador, agregarAlCarrito, carritoCart, setPrecioTotal, precioTotal, finalizarCompra }}>
        {children}
    </CartContext.Provider>
}