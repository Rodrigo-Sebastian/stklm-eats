"use client";

import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchInput = ({ onSearch } ) => {

        const [query, setQuery] = useState('');

        const handleChange = (event) => {
            setQuery(event.target.value);
            onSearch(event.target.value);
        }

    return (
    <div className='flex items-center border gap-2 w-[400px] rounded-full p-1.5 bg-gray-300 shadow-md'>
        <div>
            <FaSearch className='w-5 h-5 text-gray-400'/>
        </div>
        <input
            className='w-full bg-transparent placeholder:text-gray font-light outline-none'
            type='text'
            value={query}
            onChange={handleChange}
            placeholder='vad är du sugen på? hamburgare, pizza m.m..'
        />
    </div>
  )
}

export default SearchInput