import React, { useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { Link } from "react-router-dom";

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
  </Routes>
</BrowserRouter>
 );
}

export default App;

