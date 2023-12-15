// SearchResults.js

import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { db } from './config/firebase';
import { ref, get } from 'firebase/database';
import Navbar from './Component/common/navbar';

const SearchResults = () => {
    const { search } = useLocation();
    const query = new URLSearchParams(search).get('query');
    const [items, setItems] = useState({});
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const itemsRef = ref(db, 'Items');
                const snapshot = await get(itemsRef);

                if (snapshot.exists()) {
                    setItems(snapshot.val());

                    // Filter items based on the search query
                    const filteredResults = Object.entries(snapshot.val()).filter(([itemName, imageLink]) =>
                        itemName.toLowerCase().includes(query.toLowerCase())
                    );

                    setSearchResults(filteredResults);
                }
            } catch (error) {
                console.error('Error fetching data from Firebase:', error);
            }
        };

        if (query) {
            fetchItems();
        }
    }, [search]);

    return (
        <>
            <Navbar />
            <div className="container mx-auto">
                <h1 className='text-gray-500 text-xl font-semibold mt-5 p-10 mx-10'>Search Results: </h1>
                
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10 mx-10">
        {searchResults.map((item) => (
          <div className="card" >
          <img className="img-fluid" style={{height: '75%'}} src={item.Image} alt="..."/>
          <div className="card-body">
            <p className="text-center " style={{ fontFamily : 'Montserrat', fontSize: '15px' }}>{item.name}</p>
            <div className="text-center pt-2">
            <div className='card-footer'>
            <Link
                key={item.name}
                to={`/item-details/${item.name}`}
                className="btn btn-m btn-success"
                style={{width : '200px'}}
              >
              Details
              </Link>
                   </div>
    
  
        ))}

      </div>
            </div>
        </>

    );
};

export default SearchResults;
