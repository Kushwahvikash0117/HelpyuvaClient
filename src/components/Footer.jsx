import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-[#3D7072] text-white py-8 px-6 sm:px-12 text-center"
    >
      <h4 className="text-xl font-semibold mb-2">Helpyuva Foundation</h4>
      <p className="text-sm mb-4">
        © {new Date().getFullYear()} All rights reserved.
      </p>
      <div className="flex justify-center space-x-6">
        <a href="#" className="hover:text-[#C9E3E0]">
          <FaFacebook size={22} />
        </a>
        <a href="#" className="hover:text-[#C9E3E0]">
          <FaInstagram size={22} />
        </a>
        <a href="#" className="hover:text-[#C9E3E0]">
          <FaTwitter size={22} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
