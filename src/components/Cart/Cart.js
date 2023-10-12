import React, { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import { useEffect} from 'react';


const Cart = () => {
  const { productos, total } = useContext(CartContext);

  const { contador, calcularTotal } = useContext(CartContext);

  const { carritoCart } = useContext(CartContext);

  const { precioTotal} = useContext(CartContext);


   // Llama a la función calcularTotal y actualiza el precioTotal cuando sea necesario
   const actualizarTotal = () => {
   // const totalCalculado = calcularTotal(carritoCart); // Asumiendo que calcularTotal toma un argumento, que es tu carrito de compras
  //  setPrecioTotal(totalCalculado);

  calcularTotal();
  };

  // Llama a actualizarTotal cuando sea necesario, por ejemplo, cuando cambia el carrito de compras
  useEffect(() => {
    actualizarTotal();
  }, [carritoCart]);




  return (

    <div className="cart">
      <h2>Carrito de Compras</h2>
      <ul>
        {carritoCart.map((producto) => (
          <li key={producto.id}>
            {producto.title} - Cantidad: {producto.cantidad} - Precio por unidad: {producto.price}
            <div className="product-item">
            <img src={producto.image} alt={producto.title} />
            <div className="product-details"></div>
              <p className="product-title">Título: {producto.title}</p>
              <p className="product-price">Precio: {producto.price}</p>
              <p className="product-category">Categoría ID: {producto.categoryID}</p>
            </div>
          </li>
        ))}
      </ul>
          <p>console.log("mi compra total es : ")</p>
      
     
      <h3>Total: {precioTotal}</h3>

      {/* Agrega aquí un botón para eliminar productos del carrito */}
    </div>
  );
};

export default Cart;
