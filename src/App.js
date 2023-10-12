import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import CartWidget from './components/CartWidget/CartWidget'

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
    <Route path="/cartwidget/:id" element={<CartWidget />} />
    <Route path="/carrito" element={<Cart />} />
    <Route path="/checkout" element={<Checkout />} />
  </Routes>
</BrowserRouter>
</CartComponentContext>
 );
}

export default App;

