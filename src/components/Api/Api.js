import { useEffect, useState } from 'react';
import ListProductos from '../listProductos'

const Api = () => {

  const categoriesvalue = ["electronics", "jewelery", "men's clothing","women's clothing"]
  const [cargando, setCargando] = useState(true)
  const [productos, setProductos] = useState([])
  const [categories, setCategories] = useState([])
  const [categorySelected, setCategorySelected] = useState(categories)
  const [cart, setCart] = useState([productos])

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

  return (
    <div className="App">
      <header className="App-header">
 
        <div>
          <div className='categories-container'>
            {categoriesvalue?.map(cat =>  
             <button key={cat} onClick={() => getByCategory(cat === categorySelected ? categories : [cat])}
             > {cat}</button>
       
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
