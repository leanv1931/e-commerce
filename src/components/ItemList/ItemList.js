
import Item from "../Item/item"
import CartWidget from "../CartWidget/CartWidget"
/* import { useParams } from 'react-router-dom'
 */
import { CartContext } from "../../context/cartContext";
import React, { useContext } from "react";
import { useEffect, useState} from 'react';
import {getDocs, collection, query, where } from 'firebase/firestore'
import { useParams } from "react-router-dom";
import { db } from '../../firebase/client'


const ItemList = () => {
  const { productos } = useContext(CartContext);

  const [productosC, setProductos] = useState([])

  const [cargandoCategory, setCargandoCat] = useState(true)

  const { cantidadEnCarrito } = useContext(CartContext);

  const params = useParams();
  const categoria = useParams().id;
   console.log("category por id DESDE ITEM LIST ", categoria)


  useEffect(() => {
      const productsRef = collection(db, "products")
      const q = categoria ? query(productsRef, where( "categoryID", "==", categoria)) : productsRef;
        getDocs(q).then((resp)  => {
          setProductos(
            resp.docs.map((doc) => {
              return { ...doc.data(), id: doc.id  }
            })
          
          )
          setCargandoCat(false)
        })
       
  },[categoria]); 


  return (
    <> 
{ 
    <div>
      <h4>CATEGORIA  : </h4>
    {productosC.map(prod => (
     <Item key={prod.id} producto={prod} />
     ))} 
    </div> 

} 

  </>
  );
};

export default ItemList;
