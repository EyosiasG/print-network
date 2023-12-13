import Navbar from "./common/navbar"
import { db } from "../config/firebase"
import React, { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import 'tailwindcss/tailwind.css';

import { Link } from 'react-router-dom';

const ItemsList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {

        // Reference to your specific table or collection
        const tableRef = ref(db, 'Items');

        // Use onValue to listen for changes and get initial data
        const unsubscribe = onValue(tableRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                // Convert the data object to an array if needed
                const dataArray = Object.entries(data).map(([key, value]) => ({
                    id: key,
                    ...value,
                }));
                setData(dataArray);
            } else {
                setData([]);
            }
        });

        // Clean up the subscription when the component unmounts
        return () => unsubscribe();
    }, []);
    //// Include db as a dependency to avoid useEffect warnings
    return (
        <div>

            {data.map((item) => (
                <>
                    <div className="grid grid-cols-3 mt-5 mb-3 px-36">
                        <img className="w-64 h-auto col-span-1" src={item.Image} />
                        <div className="flex flex-col col-span-1">
                            <p className="text-gray-700 font-semibold">Product Details</p>
                            <p>{item.name}</p>
                            <p>{item.Type}</p>
                        </div>
                        <div className="flex flex-col col-span-1">
                            <p className="text-gray-700 font-semibold">Quantity</p>
                            <p className="font-semibold p-2">{item.name}</p>
                        </div>
                    </div>
                    <hr />
                </>

            ))}

        </div>
    );
}

const MyBasket = () => {
    return (
        <>
            <Navbar />
            <div className='min-h-screen w-screen flex flex-col bg-slate-100'>
                <div className="flex flex-col mx-28 my-20 w-auto">
                    <h1 className="text-2xl text-gray-500 font-semibold mb-5">Your Basket</h1>
                    <ItemsList />
                </div>
            </div>
        </>
    )
}

export default MyBasket