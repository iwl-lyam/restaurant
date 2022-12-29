import React from 'react';
import { Link, BrowserRouter } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark rounded-3">
            <div className="container-fluid text-white">
                <Link className="navbar-brand text-white" to="/">Lyam Restaurant</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto">
                        <Link className="nav-link text-white" to="/">Home</Link>
                        <Link className="nav-link text-white" to="/order">Order</Link>
                        <Link className="nav-link text-white" to="/menu">Menu</Link>
                </div>
                </div>
            </div>
            </nav>
    )
}