
import Item from "../Item/item"
/* import { useParams } from 'react-router-dom'
 */
import { CartContext } from "../../context/cartContext";
import React, { useContext } from "react";

const ItemList = () => {
  const { productos } = useContext(CartContext);
  /* const params = useParams() */
  return (
    <> 
   <h4>Productos : </h4>
     <div>
       {productos.map(prod => (
        <Item key={prod.id} producto={prod} />
        ))} 
     </div>
    
    </>
  );
};

export default ItemList;
