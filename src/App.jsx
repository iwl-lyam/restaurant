import React, { useState } from 'react';
import ReactDOM from "react-dom";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Order from './components/Order/Order';
import Confirm from './components/Order/Submit';
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Menu from './components/Menu/Menu';
import Products from './components/Menu/Products';
import Login from './components/Login/Login';
import Signup from './components/Login/Signup';


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
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/confirm" element={<Confirm />} />
      </Routes>
      <Footer />
    </Router>
  </div>, document.getElementById('root')
)



