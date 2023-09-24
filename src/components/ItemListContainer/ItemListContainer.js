

import ItemList from '../ItemList/ItemList';
import { CartContext } from "../../context/cartContext";
import React, { useContext } from "react";

const ItemListContainer = (props) => {

  const {cargando} = useContext(CartContext);
  return (
    <>
    <div className="item-list-container">
      <p>{props.greeting}</p>    
    </div>
    
    { cargando ? (<p>Cargando productos...</p>) : (<ItemList/>) 
    }

{/* FOOTER CON BOTONES */}
   {/*  <footer className='footer-container'>
            {categoriesvalue?.map(cat => (
            <button className='category-button'
            key={cat} onClick={() => getByCategory(cat === categorySelected ? categories : [cat])}> 
            {cat}</button>
        ))}
    </footer> */}
    </>
  );
};

export default ItemListContainer;


