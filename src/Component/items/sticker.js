import React from 'react';
import 'tailwindcss/tailwind.css';
import { useState } from 'react';
import './ImageRadioGroup.css';
import { getDatabase, ref, push } from 'firebase/database';
import Navbar from '../common/navbar';

const Sticker = () => {
    // Implementation of RollUpBanner component
    const [selectedOption, setSelectedOption] = useState(null);
    const [quantity, setQuantity] = useState(0);
    const [selectedDropDownOption, setSelectedDropDownOption] = useState('');

    const handleSelectChange = (event) => {
        setSelectedDropDownOption(event.target.value);
    };

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
                    productName:"Roll Up(Wide Base) Banner",
                    productImage:"https://www.laboratory424.com/files/projects/ppstr/ppstr-small.jpg",
                    productDetails: `${selectedOption}, ${selectedDropDownOption}`,
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
        { value: 'A4', label: 'A4', imageUrl: 'https://us.123rf.com/450wm/daboost/daboost1803/daboost180300021/97500228-blank-white-a4-paper-sheet-mockup-template-isolated-on-dark-grey-background.jpg?ver=6' },
        { value: 'A5', label: 'A5', imageUrl: 'https://us.123rf.com/450wm/daboost/daboost1803/daboost180300021/97500228-blank-white-a4-paper-sheet-mockup-template-isolated-on-dark-grey-background.jpg?ver=6' },
        { value: 'A6', label: 'A6', imageUrl: 'https://us.123rf.com/450wm/daboost/daboost1803/daboost180300021/97500228-blank-white-a4-paper-sheet-mockup-template-isolated-on-dark-grey-background.jpg?ver=6' },
    ];

    return (
        <>
            <Navbar />
            <div className='min-h-screen w-screen flex flex-col items-center justify-center bg-slate-100'>
                <div className='grid grid-cols-2 p-10 m-36 rounded-md bg-white'>
                    <img
                        src="https://www.laboratory424.com/files/projects/ppstr/ppstr-small.jpg"
                        className="w-auto h-96 mb-2 p-10"
                    />
                    <div className='p-10'>
                        <h2 className='text-3xl font-semibold text-neutral-700 mb-8'>Sticker</h2>
                        <p className='text-justify text-sm text-gray-800 mb-5'>A small, adhesive-backed piece of paper, plastic, or other materials,
                            often printed with colorful designs, images, or messages. These versatile and easily transferable decorations find widespread
                            use in personal expression, marketing, and branding. Stickers come in various shapes and sizes, ranging from playful and
                            whimsical designs to informative labels. They are commonly applied to surfaces such as laptops, water bottles, notebooks,
                            and other personal items, serving as a popular means of customization and self-expression. Businesses utilize stickers for
                            promotional purposes, and they are also frequently employed in art projects, scrapbooking, and as a fun and accessible way to
                            add flair to everyday items.</p>
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
                        <h2 className='text-2xl font-semibold text-neutral-700 mb-3 mt-3'>Select Paper Type: </h2>
                        <div className='flex items-center'>
                            <h2 className='text-sm font-semibold text-neutral-700 mb-3 mt-3 p-2'>Type: </h2>
                            <select
                                className="p-2 border rounded text-sm"
                                value={selectedDropDownOption}
                                onChange={handleSelectChange}
                            >
                                <option value="">Choose an option</option>
                                <option value="Glossy">Glossy</option>
                                <option value="Paper">Paper</option>
                                <option value="Plastic">Plastic</option>
                            </select>
                        </div>

                        <h2 className='text-2xl font-semibold text-neutral-700 mb-3 mt-3'>Select the Quantity</h2>
                        <div className="flex items-center p-5">
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
                                className="bg-red-500 text-white p-2 px-20 rounded ml-20 text-sm"
                                onClick={handleOrder}
                            >
                                Order
                            </button>
                        </div>
                    </div>

                </div>


            </div>
        </>

    );
};

export default Sticker;
