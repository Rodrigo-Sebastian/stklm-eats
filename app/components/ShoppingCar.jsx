import Link from 'next/link';
import React from 'react'
import { PiShoppingCartLight } from "react-icons/pi";


const ShoppingCar = () => {
  return (
    <>
        <Link href="/cart" className='flex items-center gap-2 bg-slate-400 p-2 rounded-full px-5 text-white shadow-xl'> 
            <PiShoppingCartLight />
            <h1 className='font-light'>Varukorg</h1>
        </Link>
    </>
  )
}

export default ShoppingCar