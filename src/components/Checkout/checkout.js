import React, { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import { useEffect} from 'react';
import { db } from '../../firebase/client'
import {getDoc, doc } from 'firebase/firestore'
import { useParams } from 'react-router-dom'



const Checkout = () => {

  const { mostrarCheckout } = useContext(CartContext);
  const { checkout } = useContext(CartContext);
  const { carritoCart } = useContext(CartContext);
  const {id} = useParams();


  useEffect(() => {
    
      const productRef = doc(db, "pedidos", "AzyN6E0ZwilM8QapKvlv");
      const getProduct = () => {
        getDoc(productRef).then(snapshot => {
          console.log("detalles de la compra ", { id: snapshot.id, ...snapshot.data() });
          const producto = { ...snapshot.data(), id: snapshot.id };
          mostrarCheckout(producto); // Agregar producto al estado global
        });
      };
      getProduct();
     
  }, []);



  return (

    <div className="cart">
      <h2>COMPRA FINALIZADA : </h2>
      <div className="product-item">
        <div className="product-details">
        <h4> DETALLES DE LA COMPRA : </h4>
        <p className="product-price">Nombre: {checkout.buyer.name}</p>
         <p className="product-price">Nombre: {checkout.buyer.lastname}</p>
         <p className="product-price">Contacto: {checkout.buyer.email}</p>
         <p className="product-price">Telefono: {checkout.buyer.phone}</p>
         <p className="product-category">Id Producto: {checkout.items[0].id}</p>
         <p className="product-price">total: {checkout.items[0].total}</p>
         <p className="product-title">ID de Orden : {checkout.id}</p>
         <img src={checkout.items[0].image} alt={checkout.id} /> 
       </div>
     </div> 
    </div>
  );
};

export default Checkout;
