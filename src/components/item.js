
const Item = ({producto, cart, setCart}) => {

    const addToCart = () => {
        setCart([...cart, producto]) 
    }

  return (
    <>
    <div>
        <div>
          <p> nota para tutor: NO PUEDO RESOLVER EL CLICK DE "AGREGAR button" </p>
        </div>
        <div>
            <li key={producto}>
                  <p>Titulo: {producto.titulo}</p> 
                  <p>Precio: {producto.price}</p> 
                  <p>Categoria: {producto.category}</p> 
                  <img src={producto.image} alt={producto.title} />
            </li>
        </div>
        <button onClick={addToCart}> Agregar </button> 
    </div>
    </>
  );
};

export default Item;
