"use client";

import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import Logo from '@/public/images/logo.png'
import Image from 'next/image'
import Link from 'next/link'

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();

    //hämta användardata från localstorage
     // Hämta användardata från localStorage
     const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
     const user = storedUsers.find(user => user.username === username && user.password === password);

     if (user) {
         localStorage.setItem("loggedInUser", JSON.stringify(user));
         router.push("/");
     } else {
         setError("Fel användarnamn eller lösenord.");
     }
 };

  return (
    <div className="relative w-full h-screen">
      {/* Grid container for images */}
      <div className="grid grid-cols-3 gap-1 grid-rows-2 w-full h-full absolute top-0 left-0">
        <img
          src="/images/grid-img-1.jpg"
          alt="Background Image 1"
          className="w-full h-full object-cover"
        />
        <img
          src="/images/grid-img-2.jpg"
          alt="Background Image 2"
          className="w-full h-full object-cover"
        />
        <img
          src="/images/grid-img-3.jpg"
          alt="Background Image 3"
          className="w-full h-full object-cover"
        />
        <img
          src="/images/grid-img-4.jpg"
          alt="Background Image 4"
          className="w-full h-full object-cover"
        />
        <img
          src="/images/grid-img-5.jpg"
          alt="Background Image 5"
          className="w-full h-full object-cover"
        />
        <img
          src="/images/grid-img-6.jpg"
          alt="Background Image 6"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Login form container */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
        <div className='flex flex-row items-center gap-2'>
        <h1 className='text-xls'>Välkomen till</h1>
        <Image src={Logo}
                alt='bg-login'
                width={200}
                height={200}
                className='mb-4' />
        </div>
          <div className="flex flex-col items-center">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col">
                <label className="font-bold text-2xl mb-2">Användarnamn:</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="border rounded-md p-2 w-[300px]"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-bold text-2xl mb-2">Lösenord:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border rounded-md p-2 w-[300px]"
                />
              </div>
              <button type="submit" className="p-4 bg-slate-600 text-white font-light rounded-md mt-4">
                Logga in
              </button>
              <div className="text-red-900 text-center">
                {error && <p>{error}</p>}
              </div>
              <p className='text-center'>har du inget konto än? <Link href="/register" className=' text-blue-500'>Registrera dig här!</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
   
  )

}

export default Login