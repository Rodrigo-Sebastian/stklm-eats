import Link from 'next/link'
import React from 'react'
import Favoriter from "../../public/images/favoriter.png"
import Rabat from "../../public/images/rabat.png"
import Image from "next/image"
import HeroSeachField from './HeroSeachField'

const Hero = () => {
  return (
    <section className='lg:mx-40 mt-20'>
        <div className='flex flex-col lg:flex-row justify-between items-center'>
            <div className='lg:w-1/2 mb-10'>
                <div className='flex flex-row items-center gap-2'>
                    <h3 className='text-md lg:text-xl'>Sugen på något gott?!</h3>
                    <span className='text-4xl lg:text-7xl font-bold'>Beställ här!</span>
                </div>
                    <p className='mt-2 text-md lg:text-3xl'>Sök efter en restaurang eller en typ av maträtt.</p>
                    <div className='w-full lg:hidden'>
                        <HeroSeachField />
                    </div>
            </div>
            <div className='lg:w-1/2 lg:ml-60 flex flex-col lg:flex-row items-center gap-6 lg:gap-14'>
                <Link href="/Favorites" className='p-4 w-[320px] h-[200px] rounded-3xl bg-orange-200 shadow-2xl'>
                    <h1 className='text-2xl font-bold'>Stockhols</h1>
                    <p className='text-4xl font-bold'>Favoriter!</p>
                    <Image src={Favoriter}
                            alt="Favoriter:s bild"
                            width={150}
                            height={50}
                            className='ml-auto'
                    />
                </Link>
                <Link href="/Sales" className='p-4 w-[320px] h-[200px] rounded-3xl bg-purple-300 shadow-2xl'>
                    <Image src={Rabat}
                            alt="Rabater:s bild"
                            width={100}
                            height={50}
                            className='ml-auto'
                    />
                    <h1 className='text-xl font-bold'>Dagens</h1>
                    <p className='text-3xl font-bold'>Erbjudande!</p>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Hero