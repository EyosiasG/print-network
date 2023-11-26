import React from 'react';
import 'tailwindcss/tailwind.css';
import { useState } from 'react';
import './ImageRadioGroup.css';
import { getDatabase, ref, push } from 'firebase/database';
import Navbar from '../common/navbar';

const Panel = () => {
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


    const [length, setLength] = useState('');
    const [width, setWidth] = useState('');

    const handleOrder = async () => {
        try {
            if (quantity > 0) {
                const db = getDatabase();
                const ordersRef = ref(db, 'Sales');

                // Push new order to the database
                await push(ordersRef, {
                    productName:"Panel",
                    productImage:"https://www.laboratory424.com/files/projects/ppstr/ppstr-small.jpg",
                    productDetails: `${length} x ${width}`,
                    quantity: quantity,
                });

                // Reset state after placing order
                setSelectedOption(null);
                setQuantity(0);
                setLength('');
                setWidth('');

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
        <>
            <Navbar />
            <div className='min-h-screen w-screen flex flex-col items-center justify-center bg-slate-100 font-montserrat'>
                <div className='grid grid-cols-2 p-10 mx-36 my-14  rounded-md bg-white'>
                    <img
                        src="https://www.laboratory424.com/files/projects/ppstr/ppstr-small.jpg"
                        className="w-auto h-96 mb-2 p-10 m-20"
                    />
                    <div className='p-2'>
                        <h2 className='text-3xl font-semibold text-neutral-700 mb-8 font-montserrat'>Panel</h2>
                        <p className='text-justify text-gray-500 mb-5 font-montserrat'>A flat and often rectangular surface, typically
                            made of materials like wood, metal, or plastic, that serves various purposes across different contexts.
                            In the context of events, conferences, or exhibitions, panels can refer to large displays featuring
                            informational content, graphics, or presentations. These can be standalone units or part of a modular system.
                            Panels are commonly used to showcase visual elements such as charts, graphs, and images, providing an organized
                            and visually appealing way to convey information. In the realm of interior design, panels can also refer to
                            decorative elements on walls or ceilings, adding texture, style, and functionality to a space. Versatile and
                            customizable, panels are valuable tools for communication, decoration, and structural enhancement in a variety
                            of settings.</p>
                        <hr></hr>
                        <h2 className='text-2xl font-semibold text-neutral-700 mb-3 mt-3'>Select the Size</h2>
                        <div>
                            <div className='flex'>
                                <input className="mb-4 text-xs shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                                    id="username"
                                    type="text"
                                    placeholder="Length"
                                    value={length}
                                    onChange={(e) => setLength(e.target.value)}
                                />
                                <label className='p-2 text-sm'>mm</label>
                            </div>
                            <div className='flex'>
                                <input className="mb-4 text-xs shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                                    id="username"
                                    type="text"
                                    placeholder="Width"
                                    value={width}
                                    onChange={(e) => setWidth(e.target.value)}
                                />
                                <label className='p-2 text-sm'>mm</label>
                            </div>
                        </div>
                        <h2 className='text-2xl font-semibold text-neutral-700 mb-3 mt-3'>Select the Quantity</h2>
                        <div className="flex items-center p-2">
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

export default Panel;
