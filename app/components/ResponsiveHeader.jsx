import React, { useState } from 'react';
import Image from 'next/image';
import Logo from "../../public/images/logo.png";
import SearchInput from './SearchInput';
import ThemeToggle from './ThemeToggle';
import ShoppingCar from './ShoppingCar';
import Account from './Account';
import { GiHamburgerMenu } from "react-icons/gi";
import { RiMenu3Fill } from "react-icons/ri";


const ResponsiveHeader = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleSearch = (query) => {
        //om kategorierna och setFilteredCategories är definerad i komponenter eller i contexts
        const newFilteredCategories = categories.filter((category) => 
            category.name.toLowerCase().includes(loweCaseQuery)
        );
        setFilteredCategories(newFilteredCategories);
    };

  return (
    <div className="sm:hidden">
        {/* Header */}
        <header className=" flex items-center justify-between p-4 bg-white shadow-md">
            <Image src={Logo} alt="Stklm|EATS logo" width={150} height={150}/>
            <button onClick={handleSidebarToggle} className="text-2xl md:hidden text-black">
                <RiMenu3Fill />
            </button>
            <div className="hidden flex-row items-center gap-4 h-[80px]">
                <SearchInput onSeach={handleSearch}/>
                <ThemeToggle/>
                <div className="hidden md:flex flex-row gap-2 ml-auto">
                    <ShoppingCar/>
                    <Account/>
                </div>
            </div>
        </header>
        {/* SideBar */}
        <div className={`fixed top-[70px] right-0 w-full h-full bg-gray-800 text-white transition-transform transform
             ${ isSidebarOpen ? "translate-x-0" : "translate-x-full" }`}>
                <button onClick={handleSidebarToggle} className='absolute top-4 left-4 text2xl'>
                    &times;
                </button>
                <div className="flex flex-col items-center mt-10 p-4 space-y-4">
                    <SearchInput onSearch={handleSearch} />
                    <ThemeToggle />
                    <ShoppingCar />
                    <Account />
                </div>
        </div>
    </div>
  )
}

export default ResponsiveHeader