
import ItemDetails from '../ItemDetail/ItemDetail';
import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";

const ItemDetailContainer = (props) => {

  const {cargando} = useContext(CartContext);

    
    return (
        <>
        <div className="item-list-container">
          <p>{props.greeting}</p>    
        </div>
        {cargando ? (<p>Cargando detalles productos ...</p>)
              : ( <ItemDetails/> ) 
        }
        </>
      );
}


export default ItemDetailContainer;
