import Navbar from "./common/navbar"
import { db } from "../config/firebase"
import React, { useState, useEffect } from 'react';
import { ref, onValue, remove } from 'firebase/database';
import 'tailwindcss/tailwind.css';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const ItemsList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const tableRef = ref(db, 'Sales');
        const unsubscribe = onValue(tableRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const dataArray = Object.entries(data).map(([key, value]) => ({
                    id: key,
                    ...value,
                }));
                setData(dataArray);
            } else {
                setData([]);
            }
        });

        return () => unsubscribe();
    }, []);
    const Toast = () => {
        toast.success('Order placed successfully');
      };

    const deleteItem = (id) => {
        const itemRef = ref(db, `Sales/${id}`);
        remove(itemRef);
    };
    return (
        <div className="container mx-auto p-1">
            {data.map((item) => (
                <div key={item.id} className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center bg-white shadow-md rounded-lg overflow-hidden my-2">
                    <img className="w-full md:w-64 h-auto object-cover rounded" src={item.productImage} alt={item.productName} />
    
                    <div className="p-4">
                        <p className="text-gray-900 font-bold text-xl mb-4">Product Details</p>
                        <p className="text-gray-500 font-semibold">{item.productName}</p>
                        <p className="text-gray-500">{item.productDetails}</p>
                    </div>
    
                    <div className="p-4 flex flex-col items-center">
                        <p className="text-gray-700 font-semibold">Quantity</p>
                        <p className="font-semibold text-lg p-2">{item.quantity}</p>
                        
                        <div className="flex flex-row items-center space-x-2">
                            <button onClick={() => deleteItem(item.id)} className="text-white bg-red-900 hover:bg-red-600 transition duration-300 ease-in-out mt-2 px-2 py-1 rounded">
                                remove
                            </button>
                      
                        </div>
                    </div>
                </div>
            ))}
           <div className="flex justify-end w-full">

    <button className="text-white bg-green-700 hover:bg-green-600 transition duration-300 ease-in-out mt-2 px-4 py-2 rounded"  onClick={() => Toast()}>
   
        Place Order 
    </button>
</div>
</div>
    );
    
}

const MyBasket = () => {
    return (
        <>
            <Navbar />
            <div className='min-h-screen w-screen flex flex-col bg-slate-100'>
                <div className="flex flex-col mx-28 my-12 w-auto">
                    <h1 className="text-2xl text-black-500 font-semibold mb-1">Your Basket</h1>
                    <ItemsList />
                </div>
            </div>
        </>
    )
}

export default MyBasket