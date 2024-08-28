import React from 'react';
import accessories from '../assets/accessories-category.svg';
import engine from '../assets/pistons-icon.svg';
import carParts from '../assets/engine-parts-category.svg';
import lubricant from '../assets/lubricant-oil-icon.svg';
import './styles/Categories.css';

const Categories = () => {
  const categories = [
    { img: accessories, label: 'Car Accessories' },
    { img: carParts, label: 'Car Body Parts' },
    { img: lubricant, label: 'Lubricants' },
    { img: engine, label: 'Engine Parts' },
  ];

  return (
    <div className="py-16 w-full">
      <div className="flex items-center justify-center pb-6">
        <div className='pb-10'>
  <div className="flex items-center justify-center">
    <div className="font-Clash-bold text-center mb-2 text-3xl mx-4">
      Categories
    </div>
  </div>
  <div className="flex justify-center">
    <div className="w-full h-[4px] bg-yellow-300"></div>
  </div>
</div>

      </div>

      <div className="flex flex-wrap gap-6 justify-center items-center">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white p-4 md:p-6 shadow-md rounded-lg w-56 sm:w-80 transition-all duration-300 hover:scale-110 hover:shadow-lg mx-4 sm:mx-0"
          >
            <img src={category.img} className="w-14 h-14 mb-4" alt={category.label} />
            <p className="font-bold text-lg text-center">{category.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
