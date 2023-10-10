
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import React from "react";
import { useParams } from 'react-router-dom'
import { useEffect, useState} from 'react';
import { db } from '../../firebase/client'
import {getDoc, doc } from 'firebase/firestore'
import { CartContext } from "../../context/cartContext";


const ItemDetail = ( ) => {
  const {id} = useParams();
  const [productoID, setProducto] = useState([])



  useEffect(() => {
    if(id){
      const productRef = doc(db, "products", id)
      const getProduct = () => {
        getDoc(productRef).then(snapshot => {
          console.log( { id: snapshot.id, ...snapshot.data()} )

          setProducto(
            { ...snapshot.data(), id: snapshot.id } 
          ); 

        })
      } 
      getProduct();
    }
  }, [id]);





  return (
    <>
     <div className="product-item">
        <img src={productoID.image} alt={productoID.title} /> 
       <div className="product-details">
        <p className="product-title">Título: {productoID.title}</p>
        <p className="product-price">Precio: {productoID.price}</p>
        <p className="product-category">Categoría: {productoID.categoryID}</p>
        <p className="product-price">Description Producto: {productoID.description}</p>
        <p> {productoID.id} </p>

      </div>

       <ItemCount producto={productoID.id}/>  
       
    
    </div> 
    </>
  );
};

export default ItemDetail;
