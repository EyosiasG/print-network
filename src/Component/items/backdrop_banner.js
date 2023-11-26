import React from 'react';
import 'tailwindcss/tailwind.css';
import { useState } from 'react';
import './ImageRadioGroup.css';
import { getDatabase, ref, push } from 'firebase/database';
import Navbar from '../common/navbar';

const BackdropBanner = () => {
    // Implementation of RollUpBanner component
    const [selectedOption, setSelectedOption] = useState(null);
    const [quantity, setQuantity] = useState(0);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };


    const handleRadioChange = (value) => {
        setSelectedOption(value);
    };

    const handleOrder = async () => {
        try {
            if (selectedOption && quantity > 0) {
                const db = getDatabase();
                const ordersRef = ref(db, 'Sales');

                // Push new order to the database
                await push(ordersRef, {
                    productName:"Backdrop Banner",
                    productImage:"https://www.laboratory424.com/files/projects/ppstr/ppstr-small.jpg",
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
        { value: '3x4', label: '3 x 4', imageUrl: 'https://us.123rf.com/450wm/daboost/daboost1803/daboost180300021/97500228-blank-white-a4-paper-sheet-mockup-template-isolated-on-dark-grey-background.jpg?ver=6' },
        { value: '3x5', label: '3 x 5', imageUrl: 'https://us.123rf.com/450wm/daboost/daboost1803/daboost180300021/97500228-blank-white-a4-paper-sheet-mockup-template-isolated-on-dark-grey-background.jpg?ver=6' },
        { value: '4x4', label: '4 x 4', imageUrl: 'https://us.123rf.com/450wm/daboost/daboost1803/daboost180300021/97500228-blank-white-a4-paper-sheet-mockup-template-isolated-on-dark-grey-background.jpg?ver=6' },
    ];

    return (
        <>
            <Navbar />
            <div className='min-h-screen w-screen flex flex-col items-center justify-center bg-slate-100'>
                <div className='grid grid-cols-2 p-10 mx-36 my-14 rounded-md bg-white'>
                    <img
                        src="https://www.laboratory424.com/files/projects/ppstr/ppstr-small.jpg"
                        className="w-auto h-96 mb-2 p-10 m-20"
                    />
                    <div className='p-10'>
                        <h2 className='text-3xl font-semibold text-neutral-700 mb-8'>Backdrop Banner</h2>
                        <p className='text-justify text-gray-500 mb-5'> Large, eye-catching display typically used as a background
                            in various settings, such as events, trade shows, conferences, or photo shoots. Crafted from durable materials like
                            vinyl or fabric, these banners showcase vivid graphics, logos, or promotional messages, instantly grabbing attention
                            and creating a visually appealing atmosphere. Whether used to enhance a brand presence, provide a professional backdrop
                            for interviews and presentations, or simply to add flair to an event space, backdrop banners serve as versatile and impactful
                            visual elements. Their portability and easy setup make them a practical choice for transforming any space into a branded or
                            thematic environment.</p>
                        <hr></hr>
                        <h2 className='text-2xl font-semibold text-neutral-700 mb-3 mt-3'>Select the Size</h2>
                        <div className="flex gap-4">
                            {options.map((option) => (
                                <label key={option.value} className="flex flex-col items-center radio-option font-semibold">
                                    <input
                                        type="radio"
                                        name="image"
                                        value={option.value}
                                        checked={selectedOption === option.value}
                                        onChange={() => handleRadioChange(option.value)}
                                        className="hidden"
                                    />
                                    <img
                                        src={option.imageUrl}
                                        alt={option.label}
                                        className="w-24 h-24 mb-2 cursor-pointer image-option"
                                    />
                                    <p className="text-center">{option.label}</p>
                                </label>
                            ))}
                        </div>
                        <h2 className='text-2xl font-semibold text-neutral-700 mb-3 mt-3'>Select the Quantity</h2>
                        <div className="flex items-center">
                            <button
                                className="bg-blue-300 text-white px-4 py-2 rounded-l"
                                onClick={handleDecrement}
                            >
                                -
                            </button>
                            <span className="text-xl font-semibold px-4">{quantity}</span>
                            <button
                                className="bg-blue-300 text-white px-4 py-2 rounded-r"
                                onClick={handleIncrement}
                            >
                                +
                            </button>
                            <button
                                className="bg-red-500 text-white py-2 px-20 rounded ml-20"
                                onClick={handleOrder}
                            >
                                ORDER
                            </button>
                        </div>
                    </div>

                </div>


            </div>
        </>

    );
};

export default BackdropBanner;
