
import Item from "./item"

const ListProductos = ({productos,  cart, setCart}) => {

  return (
    <>
    <h4>Productos</h4>
    <div>
   {/*  //    {productos?.map(prod => <Item productos={prod} key={prod.id} cart={cart} /> )} */}
{/*     {productos.map(prod => (<Item key={productos.id} productos={prod} cart={cart} setCart={[...cart, prod]} /> )
 */}    
 {productos.map(prod => (
          <Item key={prod.id} producto={prod} cart={cart} setCart={setCart} />
       ))}
    
    </div>
    
    
    </>
   
  );
};

export default ListProductos;
