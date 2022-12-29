import React from 'react';
import ReactDOM from "react-dom";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
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
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/preferences" element={<Preferences />}/>
          <Route path="/menu" element={<Menu />}>
            <Route path="" element={<Products />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>, document.getElementById('root'))



