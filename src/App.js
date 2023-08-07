import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import CartWidget from './components/CartWidget';



function App() {

  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="list container" />
    </div>
  );
}








export default App;

