"use client";

import React from "react";

const RestaurantList = ({ filteredRestaurants }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 sm:justify-center items-center md:grid-cols-3 lg:grid-cols-4 gap-10 lg:gap-6 mt-4 lg:mx-40">
      {filteredRestaurants.map((restaurant) => (
        <div
          key={restaurant.id}
          className="border rounded-3xl overflow-hidden shadow-lg w-[350px]"
        >
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-40 object-cover"
          />
          <div className="p-4 bg-slate-200">
            <h2 className="text-xl font-bold ">{restaurant.name}</h2>
            <p className="text-sm text-gray-500">{restaurant.type}</p>
            <p>{restaurant.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantList;
