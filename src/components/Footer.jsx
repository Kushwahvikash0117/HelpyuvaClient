import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#3D7072] text-white py-10 px-6 sm:px-12 text-center">
      <h4 className="text-xl font-semibold mb-2">
        Helpyuva Foundation
      </h4>

      <p className="text-sm mb-6 opacity-90">
        © {new Date().getFullYear()} All rights reserved.
      </p>

      <div className="flex justify-center space-x-6">
        <a href="#" aria-label="Facebook" className="hover:text-[#C9E3E0]">
          <FaFacebook size={22} />
        </a>
        <a href="#" aria-label="Instagram" className="hover:text-[#C9E3E0]">
          <FaInstagram size={22} />
        </a>
        <a href="#" aria-label="Twitter" className="hover:text-[#C9E3E0]">
          <FaTwitter size={22} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
