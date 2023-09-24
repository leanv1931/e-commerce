
import { Link } from "react-router-dom";
/* import { useParams } from 'react-router-dom'
 */
import { CartContext } from "../../context/cartContext";
import { useContext } from "react";

const Item = ({ producto }) => {

  const { agregarAlCarrito } = useContext(CartContext);


/*   const params = useParams() 
 */

  return (

    <>
    <div className="product-item">
      <img src={producto.image} alt={producto.title} />
      <div className="product-details">
        <p className="product-title">Título: {producto.title}</p>
        <p className="product-price">Precio: {producto.price}</p>
        <p className="product-category">Categoría: {producto.category}</p>
      </div>
      <button> <Link to={`/item/${producto.id}`} onClick={agregarAlCarrito}> Ver Detalles </Link></button>


   {/*    <Cart cantidadEnCarrito={cart} /> */}     
    </div>
    </>
  );
};

export default Item;
