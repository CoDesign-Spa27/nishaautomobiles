import React from "react";
import "./styles/Appbar.css";
import { Mail, Menu, Phone, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import carLogo from "../assets/car.png"
const Appbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="fixed top-0 w-full z-20 bg-[#E0E0E0] shadow-lg">
      <div className="max-w-7xl md:block flex items-center justify-between gap-4  py-2 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 gap-3 flex justify-center items-center">
              <img src={carLogo} className="object-contain sm:w-24 w-14 h-14 sm:h-24 " alt="" />
              <p className="md:text-3xl sm:text-2xl text-xl font-Clash-bold">
                Nisha Automobile
             
              </p>
            </div>
          </div>
          <div className="hidden md:block text-center">
            <div className="font-Clash-semibold text-2xl">
              Call{" "}
              <a
                href="tel:9314773000"
                className="font-Clash-semibold text-2xl text-gray-700 hover:text-gray-900 hover:underline transition ease-in-out duration-300"
              >
               9314773000
              </a>{" "}
            </div>
            <div className="font-Clash-medium text-xl">
              or email us{" "}
              <a
                href="mailto:nishaautomobilejpr@gmail.com"
                className="font-Clash-medium text-2xl text-gray-700 hover:text-gray-900 hover:underline transition ease-in-out duration-300"
              >
                nishaautomobilejpr@gmail.com
              </a>{" "}
            </div>
          </div>
        </div>
        <div onClick={handleNav} className="md:hidden gap-4 pr-4 flex">
          {!nav ? <X size={23} /> : <Menu size={23} />}
        </div>
      </div>

      <div className="hidden bg-yellow-300 md:flex justify-center mt-1">
        <div className="flex items-baseline font-Clash-medium space-x-4">
          <Link to={"/home"}>
            <div className="nav-item">Home</div>
          </Link>
          <Link to={"/about"}>
            <div className="nav-item">About</div>
          </Link>
          {/* <Link to={"/services"}>
            <div className="nav-item">Services</div>
          </Link> */}
          <Link to={"/contact"}>
            <div className="nav-item">Contact Us</div>
          </Link>
        </div>
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 md:hidden top-0 z-50 w-[60%] h-[100%] bg-black border-r-gray-900 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <div className="flex-col py-10 px-5 text-xl justify-center font-Clash-bold space-x-4">
          <Link to={"/home"}>
            <div className="text-yellow-300 border-b border-[#E0E0E0]">Home</div>
          </Link>
          <Link to={"/about"}>
            <div className="text-[#E0E0E0] border-b  border-[#E0E0E0]">About</div>
          </Link>
          {/* <Link to={"/services"}>
            <div className="text-[#E0E0E0] border-b border-[#E0E0E0]">Services</div>
          </Link> */}
          <Link to={"/contact"}>
            <div className="text-[#E0E0E0] border-b border-[#E0E0E0]">Contact Us</div>
          </Link>
        </div>

        <div className="flex gap-5 text-center px-5">
            <div className="font-Clash-semibold flex gap-2  text-lg">
              <a href="tel:9314773000">
              <Phone className="text-[#E0E0E0]"/>
              </a>
             
               
            </div>
            <div className="font-Clash-medium flex gap-2 text-lg">
              <a   href="mailto:nishaautomobilejpr@gmail.com">
              <Mail className="text-[#E0E0E0] "/>
              </a>
            
          
            </div>
          </div>
      </div>
    </nav>
  );
};

export default Appbar;
