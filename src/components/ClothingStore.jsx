import React from 'react';
import clothingImg from './mCloth.jpg'; // Replace with a valid image URL

const clothingStores = [
  {
    title: 'Casual Wear',
    description: 'Trendy and comfortable casual clothing for everyday wear.',
    imgSrc: clothingImg, // Replace with a valid image URL
  },
  {
    title: 'Formal Attire',
    description: 'Elegant and stylish formal wear for special occasions.',
    imgSrc: clothingImg, // Replace with a valid image URL
  },
  {
    title: 'Sportswear',
    description: 'High-performance sports clothing for active individuals.',
    imgSrc: clothingImg, // Replace with a valid image URL
  },
  {
    title: 'Summer Collection',
    description: 'Light and breezy clothing for the hot summer months.',
    imgSrc: clothingImg, // Replace with a valid image URL
  },
  {
    title: 'Winter Gear',
    description: 'Warm and cozy clothing to keep you comfortable during winter.',
    imgSrc: clothingImg, // Replace with a valid image URL
  },
  {
    title: 'Accessories',
    description: 'Fashionable accessories to complement your outfits.',
    imgSrc: clothingImg, // Replace with a valid image URL
  },
];

export default function ClothingStore() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Welcome Message */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome to Clothing Store</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {clothingStores.map((store, index) => (
            <div
              key={index}
              className="max-w-md mx-auto bg-white border border-gray-200 rounded-lg shadow-md"
            >
              <a href="#">
                <img className="w-full h-48 object-cover rounded-t-lg" src={store.imgSrc} alt={store.title} />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="text-xl font-bold tracking-tight text-gray-900">{store.title}</h5>
                </a>
                <p className="mt-2 text-gray-600">{store.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 mt-4 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  View More
                  <svg className="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
