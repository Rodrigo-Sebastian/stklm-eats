"use client";

import React from 'react'
import Register from '../components/Register'
import RegisterBg from '@/public/images/registerbg.png'
import Image from 'next/image'

const RegisterPage = () => {
  return (
    <div className='flex flex-col items-center h-screen justify-evenly gap-4 lg:flex-row'>
      <div className='p-10 bg-violet-500 rounded-3xl'>
          <Image src={RegisterBg} 
                  alt='bg-img'
                  width={300}
                  height={400}
                  className="w-full h-auto lg:w-[600px] lg:h-[500px]" // Responsiv bildstorlek
          />
      </div>
        <Register/>
    </div>
  )
}

export default RegisterPage