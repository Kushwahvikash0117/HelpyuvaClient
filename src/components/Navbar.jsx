import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Help.png";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="flex justify-between items-center px-6 sm:px-12 py-4 bg-white shadow-md sticky top-0 z-50">
      {/* Logo */}
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

      {/* Desktop Menu */}
      <nav className="hidden md:flex space-x-6 text-[#3D7072] font-medium">
        <Link to="/" className="hover:text-[#2E5658]">
          Home
        </Link>
        <Link to="/about" className="hover:text-[#2E5658]">
          About
        </Link>
        <a href="#impact" className="hover:text-[#2E5658]">
          Impact
        </a>
        <a href="#join" className="hover:text-[#2E5658]">
          Join Us
        </a>
        <a href="#contact" className="hover:text-[#2E5658]">
          Contact
        </a>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-3xl text-[#3D7072]">
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center md:hidden py-4 space-y-4 z-40">
          <Link
            to="/"
            onClick={toggleMenu}
            className="hover:text-[#2E5658] text-lg font-medium"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={toggleMenu}
            className="hover:text-[#2E5658] text-lg font-medium"
          >
            About
          </Link>
          <a
            href="#impact"
            onClick={toggleMenu}
            className="hover:text-[#2E5658] text-lg font-medium"
          >
            Impact
          </a>
          <a
            href="#join"
            onClick={toggleMenu}
            className="hover:text-[#2E5658] text-lg font-medium"
          >
            Join Us
          </a>
          <a
            href="#contact"
            onClick={toggleMenu}
            className="hover:text-[#2E5658] text-lg font-medium"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
