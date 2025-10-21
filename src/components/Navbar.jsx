import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Help.png";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-6 sm:px-12 py-4 bg-white shadow-md sticky top-0 z-50">
      <div className="flex items-center space-x-3">
        <img
          src={logo}
          alt="Helpyuva Logo"
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-md"
        />
        <h1 className="text-xl sm:text-2xl font-bold text-[#3D7072]">
          Helpyuva Foundation
        </h1>
      </div>
      <nav className="hidden md:flex space-x-6 text-[#3D7072] font-medium">
        <Link to="/" className="hover:text-[#2E5658]">Home</Link>
        <Link to="/about" className="hover:text-[#2E5658]">About</Link>
        <a href="#impact" className="hover:text-[#2E5658]">Impact</a>
        <a href="#join" className="hover:text-[#2E5658]">Join Us</a>
        <a href="#contact" className="hover:text-[#2E5658]">Contact</a>
      </nav>
    </header>
  );
};

export default Navbar;
