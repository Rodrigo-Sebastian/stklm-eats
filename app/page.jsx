"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "./components/Header";
import FoodList from "./components/FoodList";
import Hero from "./components/Hero";
import HeroSeachField from "./components/HeroSeachField";
import ResponsiveHeader from "./components/ResponsiveHeader";
import restaurants from './data/restaurants';
import categories from './data/categories';
import RestaurantList from "./components/RestaurantList";

export default function Home() {
  const router = useRouter();
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!loggedInUser) {
      router.push("/login");
    }
  }, [router]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    filterRestaurants(query, selectedCategory);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    filterRestaurants(searchQuery, category);
  };

  const filterRestaurants = (query, category) => {
    const lowerCaseQuery = query.toLowerCase();
    const filtered = restaurants.filter(restaurant =>
      (category === '' || restaurant.type === category) &&
      restaurant.name.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredRestaurants(filtered);
  };

  return (
    <>
      <ResponsiveHeader />
      <Header categories={categories} setFilteredCategories={setFilteredRestaurants} />
      <FoodList categories={categories} onSelectCategory={(category) => handleCategorySelect(category.name)} />
      <hr className="mt-6 underline"></hr>
      <Hero />
      <div className="hidden lg:block">
        <HeroSeachField onSearch={handleSearch} />
      </div>
      <div>
        <h3 className="font-bold lg:mx-40 lg:text-4xl text-2xl text-center lg:text-start mt-10 mb-10">Restauranger</h3>
        <RestaurantList filteredRestaurants={filteredRestaurants}/>
      </div>
    </>
  );
}
