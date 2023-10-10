

import ItemList from '../ItemList/ItemList';
import { CartContext } from "../../context/cartContext";
import React, { useContext } from "react";
import {getDocs, collection, query, where } from 'firebase/firestore'



const ItemListContainer = (props) => {

  const {cargando} = useContext(CartContext);  
  return (
    <>
    <div className="item-list-container">
      <p>{props.greeting}</p>    
    </div>
    
    { cargando ? (<p>Cargando productos listing...</p>) 
                : ( <ItemList/> ) 
    }
 

    </>
  );
};

export default ItemListContainer;


