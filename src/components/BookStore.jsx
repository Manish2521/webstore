import React from 'react';
import book1Img from './mBook.jpg'; // Replace with a valid image URL

const books = [
  {
    title: 'Science Fiction Masterpieces',
    description: 'A collection of the greatest science fiction novels of all time.',
    imgSrc: book1Img, // Replace with a valid image URL
  },
  {
    title: 'Modern Classics',
    description: 'Essential modern literature that has shaped contemporary thought.',
    imgSrc: book1Img, // Replace with a valid image URL
  },
  {
    title: 'Mystery Thrillers',
    description: 'Gripping mysteries and thrillers to keep you on the edge of your seat.',
    imgSrc: book1Img, // Replace with a valid image URL
  },
  {
    title: 'Historical Fiction',
    description: 'Immersive historical novels set in various periods and locations.',
    imgSrc: book1Img, // Replace with a valid image URL
  },
  {
    title: 'Self-Help Books',
    description: 'Books designed to help you improve various aspects of your life.',
    imgSrc: book1Img, // Replace with a valid image URL
  },
  {
    title: 'Fantasy Worlds',
    description: 'Dive into magical and fantastical worlds with these exciting reads.',
    imgSrc: book1Img, // Replace with a valid image URL
  },
];

export default function BookStore() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Welcome Message */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome to Book Store</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {books.map((book, index) => (
            <div
              key={index}
              className="max-w-md mx-auto bg-white border border-gray-200 rounded-lg shadow-md"
            >
              <a href="#">
                <img className="w-full h-48 object-cover rounded-t-lg" src={book.imgSrc} alt={book.title} />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="text-xl font-bold tracking-tight text-gray-900">{book.title}</h5>
                </a>
                <p className="mt-2 text-gray-600">{book.description}</p>
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
