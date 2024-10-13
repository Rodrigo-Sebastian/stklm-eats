"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react'
import Logo from '@/public/images/logo.png'
import Image from 'next/image'
import Link from 'next/link'


const Register = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = (e) => {
        console.log("Submitting form..."); // Lägg till denna rad
        e.preventDefault();

        if (username && email && password) {
            // Hämta existerande användare
            const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
            // Lägg till ny användare
            const newUser = { username, email, password };
            storedUsers.push(newUser);
            // Spara uppdaterade användare i localStorage
            localStorage.setItem("users", JSON.stringify(storedUsers));
            router.push('/login'); // Navigera till inloggningssidan
        } else {
            setError("Alla fält måste fyllas i.");
        }
    };
    
  return (
    <div className="flex flex-col items-center">
        <div className='flex flex-row items-center gap-2'>
            <h1 className='text-xl lg:text-2xl'>Välkomen till</h1>
            <Image src={Logo}
                    alt='bg-logo'
                    width={200}
                    height={200}
                    className='mb-4 lg:w-[150px] lg:h-[50px]' />
        </div>
        <h1 className='text-4xl font-bold'>Skapa ett konto</h1>
        <p className='text-xl ml-20 mb-6'>Det är helt grattis!</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col">
                <label>Användarnamn:</label>
                <input type="text"
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)}
                        className="border rounded-md p-2 w-[300px] lg:w-[400px]"
                />
            </div>
            <div className="flex flex-col">
                <label>Email:</label>
                <input type="email"
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        className="border rounded-md p-2 w-[300px] lg:w-[400px]"
                />
            </div>
            <div className="flex flex-col">
                <label>Lösenord:</label>
                <input type="password"
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        className="border rounded-md p-2 w-[300px] lg:w-[400px]"
                />
            </div>
                <button type='submit' className="p-4 bg-slate-600 text-white font-light rounded-md mt-4">Registrera dig</button>
                {error && <p>{error}</p>}
        </form>
        <p className='mt-6'>Har du redan ett konto? <Link href="/login" className='text-blue-500'>Logga in här</Link></p>
    </div>
  )
}

export default Register