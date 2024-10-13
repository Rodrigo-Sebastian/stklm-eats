import Image from "next/image"
import Logo from "../../public/images/logo.png"
import SearchInput from "./SearchInput"
import ThemeToggle from "./ThemeToggle"
import ShoppingCar from "./ShoppingCar"
import Account from "./Account"
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

const Header = ({ categories, setFilteredCategories }) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
      const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
      setIsLoggedIn(!!loggedInUser);
  }, []);

  const handleLogout = () => {
      localStorage.removeItem("loggedInUser");
      setIsLoggedIn(false);
      router.push("/login"); 
  };

    const handleSearch = (query) => {
        const LowerCaseQuery = query.toLowerCase();
        const newFilteredCategories = categories.filter((category) => 
        category.name.toLowerCase().includes(LowerCaseQuery)
        );
        setFilteredCategories(newFilteredCategories);
      };

  return (
    <div className="hidden lg:flex flex-row items-center mx-40 gap-4 h-[80px]">
        <Image src={Logo}
            alt="Stklm|EATS logo"
            width={150}
            height={150}
        />
      <SearchInput onSearch={handleSearch}/>
      <ThemeToggle/>
      <div className="flex flex-row gap-2 ml-auto">
      <ShoppingCar/>
      <Account  isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      </div>
    </div>
  )
}

export default Header