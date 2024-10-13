"use client";

import Image from 'next/image'
import React from 'react'

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="border rounded- overflow-hidden shadow-lg">
        <Image src={restaurant.image} alt={restaurant.name} width={300} height={200} className="object-cover"/>
        <div className="p-4">
             <h2 className="text-xl font-bold">{restaurant.name}</h2>
                <p className="text-sm text-gray-500">{restaurant.type}</p>
                <p>{restaurant.description}</p>
        </div>
    </div>
  )
}

export default RestaurantCard