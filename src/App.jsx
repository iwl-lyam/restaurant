import React, { useState } from 'react';
import ReactDOM from "react-dom";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Order from './components/Order/Order';
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Menu from './components/Menu/Menu';
import Products from './components/Menu/Products';

ReactDOM.render(
    <div className="wrapper">
      <Router>
        <Navbar /> 
        <Routes>
          <Route path="/" exact element={<></>}/>
          <Route path="/order" element={<Order />}/>
          <Route path="/menu" element={<Menu />}>
            <Route path="" element={<Products />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>, document.getElementById('root'))



