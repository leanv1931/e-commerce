import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart'
import CartWidget from './components/CartWidget/CartWidget'
import Checkout from './components/Checkout/checkout'

import { CartComponentContext } from './context/cartContext';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  


return (
<CartComponentContext>
<BrowserRouter>
  <NavBar/>
  <Routes>
    <Route path="/" element={<ItemListContainer greeting="Bienvenidos a infinita"/>} /> 
    <Route path="/category/:id" element={<ItemListContainer/>} />
    <Route path="/item/:id" element={<ItemDetailContainer greeting="Bienvenidos a details container"/>} />
    <Route path="/carrito/:id" element={<Cart />} />
    <Route path="/cartwidget/:id" element={<CartWidget />} />
    <Route path="checkout" element={<Checkout/>} />
  </Routes>
</BrowserRouter>
</CartComponentContext>
 );
}

export default App;

