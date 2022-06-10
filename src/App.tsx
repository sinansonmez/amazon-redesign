import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Cart from './pages/Cart';
import Photos from './pages/Photos';

function App() {
  return (
    <div className="App">
      <Header/>
      <h1>Home Page</h1>

      <Routes>
        <Route path='/cart' element={<Cart />} />
        <Route path='/' element={<Photos />} />
      </Routes>
    </div>
  );
}

export default App;
