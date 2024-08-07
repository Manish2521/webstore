import React from 'react';
import furnitureImg from './mFurniture.jpg'; // Replace with a valid image URL

const furnitureStores = [
  {
    title: 'Modern Living Room',
    description: 'Contemporary furniture designs for a stylish living room.',
    imgSrc: furnitureImg, // Replace with a valid image URL
  },
  {
    title: 'Comfortable Bedroom',
    description: 'High-quality beds and bedroom furniture for a restful sleep.',
    imgSrc: furnitureImg, // Replace with a valid image URL
  },
  {
    title: 'Office Essentials',
    description: 'Functional and ergonomic furniture for a productive workspace.',
    imgSrc: furnitureImg, // Replace with a valid image URL
  },
  {
    title: 'Outdoor Furniture',
    description: 'Durable and stylish furniture for your outdoor spaces.',
    imgSrc: furnitureImg, // Replace with a valid image URL
  },
  {
    title: 'Vintage Finds',
    description: 'Unique vintage furniture pieces with character and charm.',
    imgSrc: furnitureImg, // Replace with a valid image URL
  },
  {
    title: 'Kids Room Décor',
    description: 'Fun and safe furniture options for children’s rooms.',
    imgSrc: furnitureImg, // Replace with a valid image URL
  },
];

export default function FurnitureStore() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Welcome Message */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome to Furniture Store</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {furnitureStores.map((store, index) => (
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
