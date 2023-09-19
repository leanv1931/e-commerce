
import Item from "../Item/item"
import { useParams } from 'react-router-dom'




const ItemList = ({productos, cart, agregarAlCarrito}) => {
  const params = useParams()


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

export default ItemList;
