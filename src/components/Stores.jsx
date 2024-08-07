import React from 'react';
import { Link } from 'react-router-dom';

// Local image imports
import foodDeliveryImg from './food.jpg';
import furnitureImg from './furniture.jpg';
import laptopImg from './laptop.jpg';
import electronicsImg from './electronic.jpg';
import clothingImg from './clothing.jpg';
import bookImg from './book.jpg';

const stores = [
  {
    title: 'Food Delivery Service',
    description: 'Quick and reliable food delivery from your favorite restaurants.',
    imgSrc: foodDeliveryImg,
    link: '/foodstore' // Updated link
  },
  {
    title: 'Furniture Store',
    description: 'Stylish and affordable furniture for every room in your home.',
    imgSrc: furnitureImg,
    link: '/furniturestore' // Updated link
  },
  {
    title: 'Laptop Store',
    description: 'Latest laptops and accessories for all your computing needs.',
    imgSrc: laptopImg,
    link: '/laptopstore' // Correct link
  },
  {
    title: 'Electronics Store',
    description: 'Top-notch electronics and gadgets for tech enthusiasts.',
    imgSrc: electronicsImg,
    link: '/electronicstore' // Updated link
  },
  {
    title: 'Clothing Store',
    description: 'Trendy and fashionable clothing for every occasion.',
    imgSrc: clothingImg,
    link: '/clothingstore' // Updated link
  },
  {
    title: 'Book Store',
    description: 'A wide selection of books for every reader and genre.',
    imgSrc: bookImg,
    link: '/bookstore' // Correct link
  },
];

export default function Stores() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Welcome Message */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome to Ustaad</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {stores.map((store, index) => (
            <div
              key={index}
              className="max-w-md mx-auto bg-white border border-gray-200 rounded-lg shadow-md" // Changed from max-w-xs to max-w-md
            >
              <Link to={store.link}>
                <img className="w-full h-48 object-cover rounded-t-lg" src={store.imgSrc} alt={store.title} />
              </Link>
              <div className="p-5">
                <Link to={store.link}>
                  <h5 className="text-xl font-bold tracking-tight text-gray-900">{store.title}</h5>
                </Link>
                <p className="mt-2 text-gray-600">{store.description}</p>
                <Link
                  to={store.link}
                  className="inline-flex items-center px-3 py-2 mt-4 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  Visit Store
                  <svg className="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
