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
                    const data = snapshot.val();

                    // Filter items based on the search query
                    const filteredResults = Object.entries(data).filter(([key, value]) =>
                        value.name.toLowerCase().includes(query.toLowerCase())
                    ).map(([key, value]) => ({
                        id: key,
                        ...value,
                      }));

                    setSearchResults(filteredResults);
                    console.log(filteredResults);
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
                        <div
                            key={item.name}
                            className="bg-white rounded-lg shadow-md flex flex-col items-start justify-center transition duration-300 transform hover:scale-105 "
                        >
                            <img
                                src={item.Image}
                                alt={`${item.name} Image`}
                                className="w-full h-48 object-cover mb-4"
                            />
                            <Link to={`/item-details/${item.name}`}>
                                <h1 className="text-xl mb-2">{item.name}</h1>
                                <h1 className="font-bold text-gray-500">SHOP NOW</h1>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>

    );
};

export default SearchResults;
