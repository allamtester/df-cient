import React, { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Auth from './pages/auth/Auth';
import Product from './pages/Product';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Overview from './pages/Overview';
import Orders from './pages/Orders';
import Cart from './pages/Cart';

function App() {
  return (
    <div className='min-h-screen'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/products' element={<Product />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/order' element={<Orders />}></Route>
        </Routes>
        {/* <Overview /> */}
        <Footer />
      </BrowserRouter>
      <Auth />
    </div>
  )
}

export default App;
