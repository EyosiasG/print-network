import '../index.css'
import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';
import Navbar from './common/navbar';
import 'tailwindcss/tailwind.css';
import Footer from './common/footer';
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

// ... (other imports)

const ItemsList = () => {
  const [items, setItems] = useState({});
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState(0);

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

    const fetchFilteredData = async () => {
      try {
        const itemsRef = ref(db, 'Items');
        const snapshot = await get(itemsRef);

        if (snapshot.exists()) {
          setItems(Object.fromEntries(
            Object.entries(snapshot.val()).filter(([itemName, _]) =>
              filter === 0 || (filter === 1 && itemName === 'Mug')
            )
          ));
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error.message);
        setLoading(false);
      }
    };

    if (filter === 0) {
      fetchData();
    } else if (filter === 1) {
      fetchFilteredData();
    }
  }, [db, filter]);

  const handleFilter = (e) => {
    setFilter(e);
  }

  return (
    <div className="container mx-auto ">
      <section id="product">
        <div className="col-12">
          <div className="Dtit text-center" >
            <p className="mb-3 pt-4" style={{ fontSize: '38px', fontFamily: 'Montserrat' }}>Exclusive Products</p>
          </div>
          <div className="productHeading text-center" style={{ fontSize: '18px', marginBottom: '20px' }}>
            <ul className="list-unstyled d-flex justify-content-center">
              <li><button className="text-decoration-none text-danger fw-semibold" onClick={() => handleFilter(0)}>All</button></li>
              <li><button className="text-decoration-none fw-semibold text-black" onClick={() => handleFilter(1)}>Paper</button></li>
              <li><a href="#" className="text-decoration-none fw-semibold text-black" onClick={() => handleFilter(0)}>LargeForm</a></li>
              <li><a href="#" className="text-decoration-none fw-semibold text-black">GiveWay</a></li>
            </ul>
          </div>
        </div>
      </section>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10 mx-10">
          {Object.entries(items).map(([itemName, imageLink]) => (
            <div
              key={itemName}
              to={`/item-details/${itemName}`}
              className="bg-white rounded-lg shadow-md flex flex-col items-start justify-center transition duration-300 transform hover:scale-105 "
            >
              {/* Clickable item with details */}
              <img
                src={imageLink}
                alt={`${itemName} Image`}
                className="w-full h-48 object-cover mb-4"
              />
              <Link
                key={itemName}
                to={`/item-details/${itemName}`}
              >
                <h1 className="text-xl mb-2">{itemName}</h1>
                <h1 className="font-bold text-gray-500">
                  SHOP NOW
                </h1>
              </Link>
            </div>
          ))}

        </div>
      )}
    </div>
  );
}

// ... (rest of the code)

const HeroSection = () => {
  return (
    <section className="hero p-10">
      <p className='pt-4' style={{ fontWeight: 'bold', fontSize: '38px', marginBottom: '20px' }}>Welcome to Print Network</p>
      <p style={{ fontSize: '18px', marginBottom: '3rem' }}>Your Creative Hub for Graphic Design and Prepress Services And Printing Services In Many Options.</p>
      <a href="Login" className="hero-button">Get Started</a>
    </section>
  );
};

/*const ProductSection = () => {
  return (
    <section id="product">
      <div className="col-12">
        <div className="Dtit text-center" >
          <p className="mb-3 pt-4" style={{ fontSize: '38px', fontFamily: 'Montserrat' }}>Exclusive Products</p>
        </div>
        <div className="productHeading text-center" style={{ fontSize: '18px', marginBottom: '20px' }}>
          <ul className="list-unstyled d-flex justify-content-center">
            <li><button className="text-decoration-none text-danger fw-semibold" onClick={handleFilter(0)}>All</button></li>
            <li><button className="text-decoration-none fw-semibold text-black" onClick={handleFilter(1)}>Paper</button></li>
            <li><a href="#" className="text-decoration-none fw-semibold text-black">LargeForm</a></li>
            <li><a href="#" className="text-decoration-none fw-semibold text-black">GiveWay</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
};*/

export { HeroSection };



export const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="bg-gray-100 p-10">

        
      
        <ItemsList />
      
      </div>  
      <Footer />
    </>

  );
};

export default Home;
