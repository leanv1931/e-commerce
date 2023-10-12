
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
  const {productos} = useContext(CartContext);  





  return (
    <> 
{ 
    <div>
      <h4> item list container : </h4>
    {productos.map(prod => (
     <Item key={prod.id} producto={prod} />
     ))} 
    </div> 

} 

  </>
  );
};

export default ItemList;
