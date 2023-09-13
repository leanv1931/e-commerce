
import Item from "../Item/item"



const ItemListDetailsContainer = ({productos, cart, agregarAlCarrito}) => {

  return (
    <>
   
    <h4>Productos : </h4>
    <div>  
       {productos.map(prod => (
          <Item key={prod.id} producto={prod} cart={cart} setCart={agregarAlCarrito} /> 
        ))} 
    </div>
    </>
  );
};

export default ItemListDetailsContainer;
