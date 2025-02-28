import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'
import 'tailwindcss/tailwind.css';
import { useState } from 'react';
import './ImageRadioGroup.css';
import { getDatabase, ref, push } from 'firebase/database';

const RollUpBanner = () => {
    // Implementation of RollUpBanner component

    const [quantity, setQuantity] = useState(0);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };



    const handleOrder = async () => {
        try {
            if (selectedOption && quantity > 0) {
                const db = getDatabase();
                const ordersRef = ref(db, 'Sales');

                // Push new order to the database
                await push(ordersRef, {
                    productDetails: selectedOption,
                    quantity: quantity,
                });

                // Reset state after placing order
                setSelectedOption(null);
                setQuantity(0);

                alert('Order placed successfully!');
            } else {
                alert('Please select an item and quantity before placing an order.');
            }
        } catch (error) {
            console.error('Error placing order:', error.message);
        }
    };

    // Rest of your component code...

    const options = [
        { value: 'image1', label: '3*4', imageUrl: 'https://us.123rf.com/450wm/daboost/daboost1803/daboost180300021/97500228-blank-white-a4-paper-sheet-mockup-template-isolated-on-dark-grey-background.jpg?ver=6' },
        { value: 'image2', label: '3*5', imageUrl: 'https://us.123rf.com/450wm/daboost/daboost1803/daboost180300021/97500228-blank-white-a4-paper-sheet-mockup-template-isolated-on-dark-grey-background.jpg?ver=6' },
        { value: 'image3', label: '4*4', imageUrl: 'https://us.123rf.com/450wm/daboost/daboost1803/daboost180300021/97500228-blank-white-a4-paper-sheet-mockup-template-isolated-on-dark-grey-background.jpg?ver=6' },
    ];

    return (
        <div>
            <div className='grid grid-cols-2 pt-4 pl-96 pr-80' style={{marginTop:'35px'}}>
                <img
                    src="https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Free-Editable-Photoshop-Roll-Up-Banner-Design-1180x664.jpg"
                    className="w-80 h-80 mb-2"
                />
                <div>
                    <h2>Roll Up Banner Component</h2>
                    <p>A portable and versatile display solution commonly used in marketing and promotional activities.
                        Typically consisting of a durable and lightweight material, the banner is designed to roll up into
                        a compact cassette for easy transportation and storage. When deployed, the banner stands upright,
                        supported by a retractable mechanism, and showcases vibrant graphics, text, or imagery.</p>
                    <hr></hr>
                    <h2>Select the Size</h2>
                    <div className="flex gap-4">
                        {options.map((option) => (
                            <label key={option.value} className="flex flex-col items-center radio-option">
                                
                                <img
                                    src={option.imageUrl}
                                    alt={option.label}
                                    className="w-24 h-24 mb-2 cursor-pointer image-option"
                                />
                                <p className="text-center">{option.label}</p>
                            </label>
                        ))}
                    </div>
                    <h2>Select the Quantity</h2>
                    <div className="flex items-center">
                        <button
                            className="bg-green-500 text-white px-4 py-2 rounded-l"
                            onClick={handleDecrement}
                        >
                            -
                        </button>
                        <span className="text-xl font-semibold px-4">{quantity}</span>
                        <button
                            className="bg-green-500 text-white px-4 py-2 rounded-r"
                            onClick={handleIncrement}
                        >
                            +
                        </button>
                        <button
                            className="bg-green-500 text-white p-2 px-4 rounded m-5"
                            onClick={handleOrder}
                        >
                        Order
                        </button>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default RollUpBanner;
