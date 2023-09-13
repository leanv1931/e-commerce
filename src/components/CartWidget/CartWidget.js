import carrito from '../../assets/img/carrito.png'

 //const CartWidget = ([props]) => {
const CartWidget = ({ cantidadEnCarrito }) => {


  return (
  <div className="CartWidget">
      <a href="#">
          <img src={carrito} alt='carrito'/>
      </a>
  {/*   <p>{props}</p>*/} 
           <span>{cantidadEnCarrito}</span> 
  </div>    
  );
};

export default CartWidget;
