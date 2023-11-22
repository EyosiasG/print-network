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
    <div>
      <h2 className="mb-12">Items List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-3 gap-2">
        {Object.entries(items).map(([itemName, imageLink]) => (
          <Link key={itemName} to={`/item-details/${itemName}`} className="mb-4 p-4">
            {/* Clickable item with details */}
            <img
              src={imageLink}
              alt={`${itemName} Image`}
              className="w-72 h-80 max-w-20 max-h-80 mb-2"
            />
            <strong className="block">{itemName}:</strong>
          </Link>
        ))}
      </div>
      )}
    </div>
  );
};

export const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">React Firebase Realtime Database Example</h1>
      <ItemsList />
    </div>
  );
};

export default Home;
