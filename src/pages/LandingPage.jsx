import { Link } from 'react-router-dom'
import car from '../assets/hero-bg-car.jpg'
import  Appbar  from '../components/Appbar'
import Categories from '../components/Categories'
import Dealership from '../components/Dealership'
import Footer from '../components/Footer'

const LandingPage = () => {
  return (
    <div className='w-full'>
      
<Appbar />
<div
      className="relative w-full h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${car})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        overflowX: 'hidden', 
        
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex items-center justify-end h-full px-8 ">
        <div className="text-right text-white max-w-full ml-auto">
          <h1 className="md:text-5xl  text-4xl font-extrabold mb-4 font-Clash-bold">
            "Fueling your drive with Quality parts."
          </h1>
          <p className="md:text-xl text-md mb-6">
            Discover the world of quality auto parts. Explore our auto parts today.
          </p>
          <Link to={'/contact'}> 
          <button
  type="button"
  class="bg-white text-center w-48 rounded-2xl h-14 relative font-sans text-black text-xl font-semibold group"
>
  <div
    class="bg-yellow-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500"
  >
   <svg height="45px" width="45px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 17.485 17.485" xmlSpace="preserve" fill="#000000">
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.06994"></g>
    <g id="SVGRepo_iconCarrier">
      <g>
        <g>
          <path style={{ fill: '#000000' }} d="M17.477,8.149c-0.079-0.739-3.976-0.581-3.976-0.581L11.853,5.23H4.275L3.168,7.567H0v2.404 l2.029,0.682c0.123-0.836,0.843-1.48,1.711-1.48c0.939,0,1.704,0.751,1.73,1.685l6.62,0.041c0.004-0.951,0.779-1.726,1.733-1.726 c0.854,0,1.563,0.623,1.704,1.439l1.479-0.17C17.006,10.442,17.556,8.887,17.477,8.149z M4.007,7.568l0.746-1.771h2.864 l0.471,1.771H4.007z M8.484,7.568L8.01,5.797h3.67l1.137,1.771H8.484z"></path>
          <circle style={{ fill: '#000000' }} cx="3.759" cy="10.966" r="1.289"></circle>
          <circle style={{ fill: '#000000' }} cx="13.827" cy="10.9" r="1.29"></circle>
        </g>
      </g>
    </g>
  </svg>
  </div>
  <p class="translate-x-2">Visit Us</p>
</button>
          </Link>
         
        </div>
      </div>
    </div>
    <Categories />
    
 <Dealership />
 <Footer />
    </div>
    
  );
};

export default LandingPage;
