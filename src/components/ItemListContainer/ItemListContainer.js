
import { useEffect, useState } from 'react';
import ItemListDetailsContainer from '../ItemListDetailsContainer/ItemListDetailsContainer';
import { useParams } from 'react-router-dom'

const ItemListContainer = (props) => {

  const categoriesvalue = ["electronics", "jewelery", "men's clothing","women's clothing"]
  const [cargando, setCargando] = useState(true)
  const [productos, setProductos] = useState([])
  const [categories, setCategories] = useState([])
  const [categorySelected, setCategorySelected] = useState(categories)
  const [cantidadEnCarrito, setCantidadEnCarrito] = useState(0);
  const params = useParams()

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
    setProductos(data)
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

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
    const filteredProducts = data.filter( producto => producto.category === params.id)
    console.log("category filtrada por useParams : "+filteredProducts.length)
    if(filteredProducts.length > 0 ){
      return  setProductos(filteredProducts)
    }
    setProductos(data)
    })
    .catch(e => console.error(e))
    .finally(() => setCargando(false))
  }, [params])

  
  const agregarAlCarrito = () => {
    setCantidadEnCarrito(cantidadEnCarrito + 1);
  };

 
  
  return (
    <>
    <div className="item-list-container">
      <p>{props.greeting}</p>    
    </div>
   
    {cargando ? (<p>Cargando productos...</p>)
              : (<ItemListDetailsContainer productos={productos} cart={cantidadEnCarrito} setCart={agregarAlCarrito}/>) 
    }
    <footer className='footer-container'>
            {categoriesvalue?.map(cat => (
            <button className='category-button'
            key={cat} onClick={() => getByCategory(cat === categorySelected ? categories : [cat])}> 
            {cat}</button>
        ))}
    </footer>
    </>
  );
};

export default ItemListContainer;


