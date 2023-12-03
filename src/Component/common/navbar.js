<<<<<<< HEAD
import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';

const Navbar = () => {
    const [searchInput, setSearchInput] = useState('');
    const navigate = useNavigate();

    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    const handleSearchButtonClick = () => {
        // Redirect to SearchResults component with the search input as a query parameter
        navigate(`/search-results?query=${encodeURIComponent(searchInput)}`);
    };
=======
import { useState } from "react";

const Navbar = () => {
    const [searchText,setSearchText]= useState([]);
    localStorage.setItem('searchText',JSON.stringify(searchText))
>>>>>>> 9502e32148f9a9cac3669d69030c8f1a66c94ee9
    return (
        <div class="flex justify-between items-center border-b border-gray-300 flex-wrap bg-white p-4">
            <div class="flex items-center">
                <h2 class="font-bold text-2xl text-blue-600">PrintNetwork</h2>
            </div>
            <div class="relative flex items-center w-auto">
<<<<<<< HEAD
                <input type="text"
                    placeholder="Search"
                    value={searchInput}
                    onChange={handleSearchInputChange}
                    className="border border-gray-200 rounded-md py-1 px-2 w-auto" />
                <button
                    onClick={handleSearchButtonClick}
                    className="ml-2 p-2 bg-blue-500 text-white rounded"
                >
                    Search
                </button>
=======
                <input type="text" placeholder="Search" class="border border-gray-200 rounded-md py-1 px-2 w-auto " 
                              value={searchText}
                              onChange={(e) => setSearchText(e.target.value)} />
                <svg class="absolute right-2 h-6 w-6 text-gray-400 hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
>>>>>>> 9502e32148f9a9cac3669d69030c8f1a66c94ee9
            </div>
            <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                <ul class="flex flex-col font-medium md:p-0 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;