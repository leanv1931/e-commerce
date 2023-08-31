import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Api from './components/Api/Api'

function App() {

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a infinita" />
      <Api />
    </div>
  );
}

export default App;

