import Link from 'next/link';
import React from 'react'
import { AiOutlineUser } from "react-icons/ai";


const Account = ({ isLoggedIn, onLogout }) => {
  return (
    <>
     {isLoggedIn ? (
       <button 
       onClick={onLogout} 
       className='flex items-center justify-center border w-[150px] bg-gray-700 gap-2 p-2 lg:p-2 rounded-full px-5 text-white'>
       <AiOutlineUser />
       <h1 className='font-light'>Logga ut</h1>
     </button>
   ) : (
    <Link href="/login" className='flex items-center justify-center border w-[150px] bg-gray-700 gap-2 p-2 lg:p-2 rounded-full px-5 text-white'>
        <AiOutlineUser />
        <h1 className='font-light'>Logga in</h1>
    </Link>
    )}
    </>
  )
}

export default Account