const Item = ({producto, cart, setCart}) => {

    const addToCart = () => {
        setCart([...cart, producto])
    }

  return (

    <div>
        <div>
          <p> nota para tutor: NO PUEDO RESOLVER EL CLICK DE "AGREGAR button" </p>
        </div>
        <div>
         {/*    <p> {producto.title}</p>
            <p>${producto.price} </p> */}
            <li key={producto}>
               {/*   <p>Titulo: {producto.price}</p> */}
               {/*  <img src={producto.image} alt={producto.title} /> */}
            </li>
        </div>
        <button onClick={addToCart}> Agregar </button> 
   
    </div>
  
  );
};

export default Item;
