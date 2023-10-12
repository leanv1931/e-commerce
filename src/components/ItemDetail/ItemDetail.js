
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import React from "react";
import { useParams } from 'react-router-dom'
import { useEffect, useState} from 'react';
import { db } from '../../firebase/client'
import {getDoc, doc } from 'firebase/firestore'
import { CartContext } from "../../context/cartContext";
import { useContext } from "react";



const ItemDetail = ( ) => {
   const {id} = useParams();

 
 

  const {producto_1, setProducto_1 } = useContext(CartContext);

  const [] = useState([])
  console.log("prodcuto 1 antes ",producto_1)




  useEffect(() => {
    if(id){
      const productRef = doc(db, "products", id)
      const getProduct = () => {
        getDoc(productRef).then(snapshot => {
          console.log( "set producto_1", { id: snapshot.id, ...snapshot.data()} );
    //      setProducto_1({ ...snapshot.data(), id: snapshot.id } 
          const producto = { ...snapshot.data(), id: snapshot.id };
          setProducto_1("set producto global ",(prevProductos) => [...prevProductos, producto]); 

          console.log("producto 1 despues :  ",producto_1)


        })
      } 
      getProduct();
    }
  }, [id]);





  return (
    <>
     <h4> item details : </h4>
     <div className="product-item">
       <img src={producto_1.image} alt={producto_1.title} /> 
       <div className="product-details">
        <p className="product-title">Título: {producto_1.title}</p>
        <p className="product-price">Precio: {producto_1.price}</p>
        <p className="product-category">Categoría: {producto_1.categoryID}</p>
        <p className="product-price">Description Producto: {producto_1.description}</p>
        <p> {producto_1.id} </p>
      </div>

       <ItemCount />  
       
    
    </div> 
    </>
  );
};

export default ItemDetail;
