import React from 'react';
import './ItemListContainer.css';




const ItemListContainer = (props) => {
  return (
    <div>
      <h2 className="item-list-container">{props.greeting}</h2>
    </div>
  );
};

export default ItemListContainer;


