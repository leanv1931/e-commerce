
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import { useContext } from "react";

const Item = ({ producto }) => {


  return (

  <>
    <div className="product-item">
      <img src={producto.image} alt={producto.title} />
      <div className="product-details">
        <p className="product-title">Título: {producto.title}</p>
        <p className="product-price">Precio: {producto.price}</p>
        <p className="product-category">Categoría ID: {producto.categoryID}</p>
      </div>
      <button> <Link to={`/item/${producto.id}`}> Ver Detalles </Link></button>
    </div>

</>
  );
};

export default Item;
