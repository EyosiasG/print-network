import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './Component/Home';
import ItemDetails from './Component/itemDetails'; 
import MyBasket from './Component/mybasket';

function App() {
  return (
    <div className="App font-montserrat">
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
