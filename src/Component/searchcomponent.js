import React from 'react'
import { useState } from 'react'
import Navbar from './common/navbar';
const SearchComponent = () => {
    const [searchText, setSearchText] = useState(JSON.parse(localStorage.getItem("searchText")) || "");
    
    return (
        <>
            <Navbar />
            <div>{searchText}</div>
        </>
    )
}
export default SearchComponent