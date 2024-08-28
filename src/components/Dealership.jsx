import React from 'react';
import './styles/Dealership.css';
import Tata from '../assets/Tata.png';
import Mahindra from '../assets/mahindra.png';
import Hyundai from '../assets/hyundai.png';
import Suzuki from '../assets/suzuki.png';

const companies = [
  { img: Tata, name: 'Tata' },
  { img: Mahindra, name: 'Mahindra' },
  { img: Suzuki, name: 'Suzuki' },
  { img: Hyundai, name: 'Hyundai' },
];

const Dealership = () => {
  return (
    <div className="py-10 bg-white">
      <div className="flex items-center justify-center pb-6">
      <div className='pb-10'>
  <div className="flex items-center justify-center">
    <div className="font-Clash-bold text-center mb-2 text-3xl mx-4">
Dealership
    </div>
  </div>
  <div className="flex justify-center">
    <div className="w-full h-[4px] bg-yellow-300"></div>
  </div>
</div>
      </div>

      <div className="grid md:grid-cols-4 grid-cols-2 gap-6 justify-center items-center">
        {companies.map((company, index) => (
          <div key={index} className="p-6 rounded-lg w-full sm:w-64 flex flex-col items-center">
            <img
              src={company.img}
              alt={company.name}
              className="sm:w-44 sm:h-44 w-28 h-28 object-contain mb-4"
            />
            <p className="font-bold text-lg text-center">{company.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dealership;
