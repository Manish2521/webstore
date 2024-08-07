


import laptop1Img from './mLaptop.jpg';
// import laptop2Img from './laptop2.jpg';
// import laptop3Img from './laptop3.jpg';
// import laptop4Img from './laptop4.jpg';
// import laptop5Img from './laptop5.jpg';
// import laptop6Img from './laptop6.jpg';
import React from 'react';

const laptops = [
  {
    title: 'Gaming Laptop X1',
    description: 'High performance gaming laptop with a powerful GPU and fast processor.',
    imgSrc: laptop1Img, // Replace with a valid image URL
  },
  {
    title: 'Ultrabook Pro',
    description: 'Slim and lightweight ultrabook perfect for professionals on the go.',
    imgSrc: laptop1Img, // Replace with a valid image URL
  },
  {
    title: '2-in-1 Convertible',
    description: 'Versatile 2-in-1 laptop that can be used as a tablet or traditional laptop.',
    imgSrc: laptop1Img, // Replace with a valid image URL
  },
  {
    title: 'Business Laptop X',
    description: 'Reliable business laptop with enhanced security features and long battery life.',
    imgSrc: laptop1Img, // Replace with a valid image URL
  },
  {
    title: 'Creative Studio Laptop',
    description: 'Ideal for content creators with high-resolution display and powerful specs.',
    imgSrc: laptop1Img, // Replace with a valid image URL
  },
  {
    title: 'Affordable Everyday Laptop',
    description: 'Great for everyday tasks with a balance of performance and affordability.',
    imgSrc: laptop1Img, // Replace with a valid image URL
  },
];

export default function LaptopStore() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Welcome Message */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome to Laptop Store</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {laptops.map((laptop, index) => (
            <div
              key={index}
              className="max-w-md mx-auto bg-white border border-gray-200 rounded-lg shadow-md"
            >
              <a href="#">
                <img className="w-full h-48 object-cover rounded-t-lg" src={laptop.imgSrc} alt={laptop.title} />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="text-xl font-bold tracking-tight text-gray-900">{laptop.title}</h5>
                </a>
                <p className="mt-2 text-gray-600">{laptop.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 mt-4 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  View Product
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
