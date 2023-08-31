import { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import ListProductos from '../listProductos'




// https://fakestoreapi.com/docs

const Api = () => {

  const [cargando, setCargando] = useState(true)
  const [productos, setProductos] = useState([])
  const [categories, setCategories] = useState([])
  const [categorySelected, setCategorySelected] = useState(categories)
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setProductos(data)
    })
    .catch(e => console.error(e))
    .finally(() => setCargando(false))

    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(e => console.error(e))
  }, [])

  useEffect(() => {
    if(categorySelected){
    fetch(`https://fakestoreapi.com/products/category/${categorySelected}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
    //  setProductos(data)
    setCategories(data)
    })
    .catch(e => console.error(e))
    .finally(() => setCargando(false))
    }
  }, [categorySelected])

  const getByCategory = (categories) => {
    setCargando(true)
    setCategorySelected(categories)
  }

  return (
    <div className="App">
      <header className="App-header">
       {/*  <h1>Mi Ecommerce en React - Cart: {cart.length}</h1> */}
        <div>
          <div className='categories-container'>
            {categories?.map(cat =>  
             <button key={cat} onClick={() => getByCategory(categories)}> {cat}</button>
              // mis botones de categorias que cada onClick ejecute getByCategory('MiCategoria')
            
            )} 
          </div>
        {cargando ? (
          <p>Cargando productos...</p>
        ) : (
     <ListProductos productos={productos} cart={cart} setCart={setCart} />
        )}
        </div>
      </header>
    </div>
  );
}

export default Api;



// Componente que me devuelva los items con una llamada fetch
// y una lista de botones que me permita filtrar por categorias