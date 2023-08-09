import carrito from '../../assets/img/carrito.png'

const CartWidget = (props) => {

  return (
  <div className="CartWidget">
      <a href="#">
          <img src={carrito} alt='carrito'/>
      </a>
      <p>{props.title}</p>
  </div>    
  );
};

export default CartWidget;
