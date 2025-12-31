import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Help.png";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `px-1 transition-all ${
      isActive
        ? "text-[#2E5658] border-b-2 border-[#2E5658]"
        : "text-[#3D7072] hover:text-[#2E5658]"
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
        <NavLink to="/" end className={linkClass}>Home</NavLink>
        <NavLink to="/about" className={linkClass}>About</NavLink>
        <NavLink to="/impact" className={linkClass}>Impact</NavLink>
        <NavLink to="/join-us" className={linkClass}>Join Us</NavLink>
        <NavLink to="/contact" className={linkClass}>Contact</NavLink>
      </nav>

      {/* Mobile Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-3xl text-[#3D7072]"
      >
        {isOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-6 space-y-4 md:hidden">
          {["/", "/about", "/impact", "/join-us", "/contact"].map(
            (path, i) => (
              <NavLink
                key={i}
                to={path}
                end={path === "/"}
                onClick={() => setIsOpen(false)}
                className={linkClass}
              >
                {path === "/"
                  ? "Home"
                  : path.replace("/", "").replace("-", " ")}
              </NavLink>
            )
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
