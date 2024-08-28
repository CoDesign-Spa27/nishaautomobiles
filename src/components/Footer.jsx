// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#242424] sticky top-full text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div >
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p className="mb-2 text-gray-400">Plot no.82 Navjeevan Vihar, Gandhipath Road</p>
            <p className="mb-2 text-gray-400">Jaipur, Rajasthan</p>
            <p className="mb-2 text-gray-400">Phone: 9314773000,</p>
            <p className="mb-2 text-gray-400">Email: 
            nishaautomobilejpr@gmail.com</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul>
              <li className="mb-2"><Link to={'/'}> <a className="hover:underline">Home</a> </Link></li>
              <li className="mb-2"><Link to={'/contact'}> <a className="hover:underline">Contact Us</a></Link> </li>
              <li className="mb-2"><Link to={'/about'}>  <a className="hover:underline">About Us</a></Link></li>

            </ul>
          </div>
          <div className='flex flex-col items-center justify-center  '>
          <p className="md:text-3xl hidden sm:block sm:text-2xl text-xl font-Clash-bold">
                Nisha Automobile
             
              </p>
      <p className=' tracking-widest text-gray-300 space-x-1'> 
      "Fueling your drive with Quality parts."

      </p>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500">
          &copy; 2024 Nisha Automobile. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
