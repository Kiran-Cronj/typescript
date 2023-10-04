import React from 'react';
import logo from './logo.svg';
import Login from "./Components/Login/Login"

import './App.css';
import Dashboard from './Components/Dashboard';


function App() {
  return (
    <div className="App">
      <Dashboard title="new Project" />
      <Login/>
    </div>
  );
}

export default App;
