import React, { useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import { CartComponentContext } from './context/cartContext';
import { db } from './firebase/client'
import {getDocs, collection, doc } from 'firebase/firestore'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  
const productsRef = collection(db, "products")

const getProducts = async () => {
  const data = await getDocs(productsRef)
  const dataFiltrada = data.docs.map((doc) => ( {...doc.data(), id: doc.id} ))
  console.log(dataFiltrada)
}


useEffect(() => {
  getProducts();

}, []);


return (
<CartComponentContext>
<BrowserRouter>
  <NavBar/>
  <Routes>
    <Route path="/" element={<ItemListContainer greeting="Bienvenidos a infinita"/>} /> 
    <Route path="/category/:id" element={<ItemListContainer/>} />
    <Route path="/item/:id" element={<ItemDetailContainer greeting="Bienvenidos a details container"/>} />
   {/*  <Route path="/cart" element={<Cart/> } />
        <Route path="/checkout" element={<Checkout /> } /> */}
  </Routes>
</BrowserRouter>
</CartComponentContext>
 );
}

export default App;

