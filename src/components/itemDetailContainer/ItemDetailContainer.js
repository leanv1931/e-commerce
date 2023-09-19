
import { useEffect, useState } from 'react';
import ItemDetails from '../ItemDetail/ItemDetail';

import { useParams } from 'react-router-dom';


const ItemDetailContainer = (props) => {
    const params = useParams()
    const [producto, setProductos] = useState('')
    const [cargando, setCargando] = useState(true)



    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${params.id}`)
        .then(res => res.json())
        .then(data => {
     //   const filteredProducts = data.filter( producto => producto.category === params.id)
     //   console.log("category filtrada por useParams : "+filteredProducts.length)
       /*  if(filteredProducts.length > 0 ){
          return  setProductos(filteredProducts)
        } */
        setProductos(data)
        })
        .catch(e => console.error(e))
        .finally(() => setCargando(false))
      }, [params])
    


    return (
        <>
        <div className="item-list-container">
          <p>{props.greeting}</p>    
        </div>
       
        {cargando ? (<p>Cargando productos...</p>)
              : (
           /*    <ItemList productos={productos} cart={cantidadEnCarrito} setCart={agregarAlCarrito}/> */
              <ItemDetails producto={producto} /> 
              
              ) 
    }
 
     
        </>
      );


    
}


export default ItemDetailContainer;
