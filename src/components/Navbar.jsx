import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Help.png";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const linkClass = ({ isActive }) =>
    `hover:text-[#2E5658] transition-all ${
      isActive
        ? "text-[#2E5658] border-b-2 border-[#2E5658]"
        : "text-[#3D7072]"
    }`;

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
          Helpयुवा
        </h1>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex space-x-6 font-medium">
        <NavLink to="/" end className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={linkClass}>
          About
        </NavLink>
        <NavLink to="/impact" className={linkClass}>
          Impact
        </NavLink>
        <NavLink to="/join-us" className={linkClass}>
          Join Us
        </NavLink>
        <a href="#contact" className="text-[#3D7072] hover:text-[#2E5658]">
          Contact
        </a>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-3xl text-[#3D7072]">
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center md:hidden py-4 space-y-4 z-40">
          <NavLink
            to="/"
            end
            onClick={toggleMenu}
            className={linkClass}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={toggleMenu}
            className={linkClass}
          >
            About
          </NavLink>
          <NavLink
            to="/impact"
            onClick={toggleMenu}
            className={linkClass}
          >
            Impact
          </NavLink>
          <NavLink
            to="/join-us"
            onClick={toggleMenu}
            className={linkClass}
          >
            Join Us
          </NavLink>
          <a
            href="#contact"
            onClick={toggleMenu}
            className="text-[#3D7072] hover:text-[#2E5658] text-lg font-medium"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
