import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import Navbar from './components/Navbar.jsx'
import Menu from './components/Menu/Menu';
import Products from './components/Menu/Products';
import Product from './components/Menu/Product';


function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}

export default function App() {
  return (
    <div className="wrapper">
      <Router>
        <Navbar /> 
        <h1>Application</h1>
        <Routes>
          <Route path="/" exact element={<></>}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/preferences" element={<Preferences />}/>
          <Route path="/menu" element={<Menu />}>
            <Route path="" element={<Products />} />
            <Route path=":postSlug" element={<Product />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}



