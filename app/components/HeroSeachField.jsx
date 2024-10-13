import React from 'react'
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';


const HeroSeachField = ({ onSearch }) => {

    const [query, setQuery] = useState('');

        const handleChange = (event) => {
            setQuery(event.target.value);
            onSearch(event.target.value);
        }


  return (
    <div className='flex flex-col lg:flex-row items-center gap-4 mt-10 mb-5 lg:gap-10 lg:mx-40 lg:mt-20 lg:mb-20'>
        <div className='flex items-center border gap-2 w-[300px] lg:w-[500px] rounded-md p-4 bg-gray-300 shadow-md'>
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
        <button className='p-4 w-[300px] lg:w-[180px] lg:p-4 rounded-md text-sm lg:text-lg bg-black text-white shadow-xl'>Hitta Restaurang</button>
    </div>
  )
}

export default HeroSeachField