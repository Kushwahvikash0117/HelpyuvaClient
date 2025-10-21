import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import logo from "../assets/Help.png";

const About = () => {
  return (
    <div className="bg-[#C9E3E0] text-[#2E5658] font-['Inter'] min-h-screen flex flex-col">

      <section className="flex flex-col md:flex-row items-center justify-center px-6 sm:px-12 py-16 bg-[#E9F3F2] flex-grow">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <img
            src={logo}
            alt="Helpyuva Logo"
            className="w-48 sm:w-64 lg:w-80 mx-auto md:mx-0 rounded-full shadow-2xl"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2E5658] mb-4">
            About Helpyuva Foundation
          </h2>
          <p className="text-[#3D7072] text-base sm:text-lg leading-relaxed mb-6">
            Helpyuva Foundation is a non-profit youth organization focused on
            driving meaningful change through education, awareness, and
            community engagement. Founded by young changemakers, our mission is
            to uplift underprivileged communities and inspire compassion-driven
            leadership among India’s youth.
          </p>
          <p className="text-[#3D7072] text-base sm:text-lg leading-relaxed">
            We believe in “Seva with Sensitivity” — empowering people with the
            right tools, education, and emotional support to create a
            self-sustaining, empathetic society.
          </p>
        </div>
      </section>

      <section className="px-6 sm:px-12 py-16 bg-white text-center">
        <h3 className="text-3xl sm:text-4xl font-bold text-[#3D7072] mb-6">
          Our Vision & Mission
        </h3>
        <div className="max-w-4xl mx-auto text-[#2E5658] text-base sm:text-lg leading-relaxed">
          <p className="mb-6">
            Our <strong>vision</strong> is to build a nation where every youth
            contributes towards social development, sustainability, and
            equality.
          </p>
          <p>
            Our <strong>mission</strong> is to provide platforms for young
            individuals to volunteer, innovate, and lead humanitarian projects
            — focusing on education, healthcare, environment, and emotional
            wellbeing.
          </p>
        </div>
      </section>

    </div>
  );
};

export default About;
