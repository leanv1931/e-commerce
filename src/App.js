import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';

/* import { Link } from "react-router-dom"; */
// check si necesito etiqueta Link EN EL PROYECTO

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {


return (

<BrowserRouter>
  <NavBar/>
  <Routes>
    <Route path="/" element={<ItemListContainer greeting="Bienvenidos a infinita"/>} /> 
    <Route path="/category/:id" element={<ItemListContainer/>} />
    <Route path="/item/:id" element={<ItemDetailContainer reeting="Bienvenidos a details container"/>} />
  </Routes>
</BrowserRouter>
 );
}

export default App;

