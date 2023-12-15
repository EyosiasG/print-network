import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './Component/Home';
import ItemDetails from './Component/itemDetails'; 
import MyBasket from './Component/mybasket';
import { Login } from './Component/login';
import SearchResults from './SearchResults';

function App() {
  return (
    <div className="App font-montserrat">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item-details/:itemName" element={<ItemDetails />} />
          <Route path="/search-results" element={<SearchResults />} />
          <Route path="/cart" element={<MyBasket />} />
    

        </Routes>
      </Router>
    </div>
  );
}

export default App;
