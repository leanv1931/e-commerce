
import ItemCount from "../ItemCount/ItemCount";
import React from "react";
import { useParams } from 'react-router-dom'
import { useEffect} from 'react';
import { db } from '../../firebase/client'
import {getDoc, doc } from 'firebase/firestore'
import { CartContext } from "../../context/cartContext";
import { useContext } from "react";



const ItemDetail = ( ) => {
  const {id} = useParams();
  const {producto_1, setProducto_1 } = useContext(CartContext);

  useEffect(() => {
    if (id) {
      const productRef = doc(db, "products", id);
      const getProduct = () => {
        getDoc(productRef).then(snapshot => {
          const producto = { ...snapshot.data(), id: snapshot.id };
          setProducto_1(producto); // Agregar producto al estado global
        });
      };
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
