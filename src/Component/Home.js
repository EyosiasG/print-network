import '../index.css'
import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';
import 'tailwindcss/tailwind.css';
import { Link } from 'react-router-dom';


// Initialize your Firebase app
const firebaseConfig = {
  apiKey: "AIzaSyA8vpmxi2faijmiMQ1nlLacZAnhKOd2eFo",
  authDomain: "reactfirebase-88afa.firebaseapp.com",
  projectId: "reactfirebase-88afa",
  storageBucket: "reactfirebase-88afa.appspot.com",
  messagingSenderId: "775374705272",
  appId: "1:775374705272:web:9672250fa1a0689f86938d",
  measurementId: "G-Z85M07NPLL"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);

const ItemsList = () => {
  const [items, setItems] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const itemsRef = ref(db, 'Items');
        const snapshot = await get(itemsRef);

        if (snapshot.exists()) {
          setItems(snapshot.val());
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [db]); // Include db as a dependency to avoid useEffect warnings

  return (

    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-8">Items List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Object.entries(items).map(([itemName, imageLink]) => (
            <div
              key={itemName}
              to={`/item-details/${itemName}`}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center transition duration-300 transform hover:scale-105"
            >
              {/* Clickable item with details */}
              <img
                src={imageLink}
                alt={`${itemName} Image`}
                className="w-64 h-64 object-cover mb-4"
              />
              <strong className="text-xl text-center">{itemName}</strong>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4">
            Click me
          </button>
            </div>
          ))}

        </div>
      )}
    </div>
      )}
    
  


export const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">React Firebase Realtime Database Example</h1>
      <ItemsList />
    </div>
  );
};

export default Home;
