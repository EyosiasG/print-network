import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './Component/Home';
import ItemDetails from './Component/itemDetails'; 
import MyBasket from './Component/mybasket';
import { Login } from './Component/login';
<<<<<<< HEAD
import SearchResults from './SearchResults';
=======
import SearchComponent from './Component/searchcomponent';
>>>>>>> 9502e32148f9a9cac3669d69030c8f1a66c94ee9

function App() {
  return (
    <div className="App font-montserrat">
      <Router>
        <Routes>
<<<<<<< HEAD
          <Route path="/" element={<Home />} />
=======
          <Route path="/" element={<SearchComponent />} />
>>>>>>> 9502e32148f9a9cac3669d69030c8f1a66c94ee9
          <Route path="/item-details/:itemName" element={<ItemDetails />} />
          <Route path="/search-results" element={<SearchResults />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
