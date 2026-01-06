import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/Help.png";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // 🔑 login status
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

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
      <nav className="hidden md:flex space-x-6 font-medium items-center">
        <NavLink to="/" end className={linkClass}>Home</NavLink>
        <NavLink to="/about" className={linkClass}>About</NavLink>
        <NavLink to="/impact" className={linkClass}>Impact</NavLink>
        <NavLink
  to="/donate"
  onClick={() => setIsOpen(false)}
  className="px-4 py-2 bg-[#2f5d62] text-white rounded-lg"
>
  Donate
</NavLink>

        <NavLink to="/join-us" className={linkClass}>Join Us</NavLink>
        <NavLink to="/contact" className={linkClass}>Contact</NavLink>

        {/* 🔐 Login / Logout */}
        {!isLoggedIn ? (
          <NavLink to="/login" className={linkClass}>Login</NavLink>
        ) : (
          <button
            onClick={handleLogout}
            className="text-[#3D7072] hover:text-[#2E5658] font-medium"
          >
            Logout
          </button>
        )}
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
          <NavLink to="/" end onClick={() => setIsOpen(false)} className={linkClass}>Home</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)} className={linkClass}>About</NavLink>
          <NavLink to="/impact" onClick={() => setIsOpen(false)} className={linkClass}>Impact</NavLink>
          <NavLink
  to="/donate"
  className="px-3 py-1 bg-[#2f5d62] text-white rounded-lg hover:bg-[#1f3e41] transition"
></NavLink>
          <NavLink to="/join-us" onClick={() => setIsOpen(false)} className={linkClass}>Join Us</NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)} className={linkClass}>Contact</NavLink>
          
  



          {!isLoggedIn ? (
            <NavLink
              to="/login"
              onClick={() => setIsOpen(false)}
              className={linkClass}
            >
              Login
            </NavLink>
          ) : (
            <button
              onClick={() => {
                localStorage.removeItem("isLoggedIn");
                setIsOpen(false);
                navigate("/");
              }}
              className="text-[#3D7072] font-medium"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
