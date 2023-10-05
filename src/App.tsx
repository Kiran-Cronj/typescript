import React from 'react';
import logo from './logo.svg';
import Login from "./Components/Login/Login"

import './App.css';
import Dashboard from './Components/Dashboard';
import Add from './Components/Add';
import List from './Components/List';
import Products from './Components/Products';
import Cart from './Components/Cart';


function App() {
  return (
    <div className="App">
      <Add />
      <List />
      <Products />
      <Cart />
    </div>
  );
}

export default App;
