import '../index.css'
import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';
import { Navbar } from './navbar';
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
            <Link
              key={itemName}
              to={`/item-details/${itemName}`}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center transition duration-300 transform hover:scale-105"
             >
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4">
             Click me
             </button>
          </Link>
            </div>
          ))}
 <navbar />
        </div>
      )}
    </div>
      )}
      const HeroSection = () => {
        return (
          <section className="hero">
            <p className='pt-4' style={{ fontWeight: 'bold',fontSize: '38px', marginBottom: '20px'  }}>Welcome to Print Network</p>
            <p style={{ fontSize: '18px', marginBottom: '3rem'  }}>Your Creative Hub for Graphic Design and Prepress Services And Printing Services In Many Options.</p>
            <a href="Login" className="hero-button">Get Started</a>
          </section>
        );
      };
    
      const ProductSection = () => {
        return (
          <section id="product">
            <div className="col-12">
              <div className="Dtit text-center" >
                <p className="mb-3 pt-4" style={{ fontSize: '38px', fontFamily:'Montserrat'  }}>Exclusive Products</p>
              </div>
              <div className="productHeading text-center" style={{ fontSize: '18px', marginBottom: '20px' }}>
                <ul className="list-unstyled d-flex justify-content-center">
                  <li><a href="#" className="text-decoration-none text-danger fw-semibold">All</a></li>
                  <li><a href="#" className="text-decoration-none fw-semibold text-black">Paper</a></li>
                  <li><a href="#" className="text-decoration-none fw-semibold text-black">LargeForm</a></li>
                  <li><a href="#" className="text-decoration-none fw-semibold text-black">GiveWay</a></li>
                </ul>
              </div>
            </div>
          </section>
        );
      };
      
      export { HeroSection, ProductSection };
  


export const Home = () => {
  return (
    <div>
      
    
      <HeroSection />
      <ProductSection />
      <ItemsList />
    </div>
  );
};

export default Home;
