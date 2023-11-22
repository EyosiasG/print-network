import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './Component/Home';
import ItemDetails from './Component/itemDetails'; // Corrected import

function App() {
  return (
    <div className="App">
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
