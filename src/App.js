import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './Component/Home';
import { navbar } from './Component/navbar';
import ItemDetails from './Component/itemDetails'; // Corrected import



function App() {
  return ( 
    <div className="App">
   <nav className="navbar navbar-expand-lg navbar-light bg-white border-b border-t">
      <div className="container">
        <a className="navbar-brand text-2xl font-bold" href="/">
          <i className="fa fa-cart-shopping text-2xl" style={{ color: '#f54242' }}></i>
          <span className="textBlur">Print </span> <span className="textBlur">Network</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Nav Items */}
        <div >
          <div className="Search" style={{ width: '45rem', paddingLeft: '0px' }}>
            <form className="flex">
              <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1" />
              <button className="btn btn-outline-success" type="button">Search</button>
            </form>
          </div>
          {/* Home Dropdown */}
       
          {/* New Item */}
        </div>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown" style={{ alignItems: 'flex-end', paddingRight: '1rem' }}>
            <a className="nav-link dropdown-toggle font-semibold text-uppercase me-1 text-red-500" href="#" id="homeDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Home
            </a>
            <ul className="dropdown-menu" aria-labelledby="homeDropdown">
              <li><a className="dropdown-item" href="Details">Option 1</a></li>
              <li><a className="dropdown-item" href="Login">Option 2</a></li>
              <li><a className="dropdown-item" href="Registration">Option 3</a></li>
            </ul>
          </li>
          <li>
            <a className="cart-link" href="Cart">
              <i className="fa fa-shopping-cart"></i> Cart
            </a>
          </li>
          {/* New Item */}
        </ul>
      </div>
    </nav>
  
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item-details/:itemName" element={<ItemDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
