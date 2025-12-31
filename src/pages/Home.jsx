import React from "react";
import { Link } from "react-router-dom";
import { FaHandsHelping } from "react-icons/fa";
import { MdVolunteerActivism } from "react-icons/md";
import { GiHeartKey } from "react-icons/gi";
import logo from "../assets/Help.png";

const FOUNDATION_NAME = "Helpयुवा";
const TAG_LINE = "threads of love";

const Home = () => {
  return (
    <div className="bg-[#C9E3E0] text-[#2E5658]">

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 sm:px-12 py-12 sm:py-20 bg-[#E9F3F2]">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">

          <h2 className="font-['Montserrat'] text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
            Empowering Youth, <br />
            Enriching Humanity
          </h2>

          <p className="text-lg sm:text-xl text-[#3D7072] mb-6 font-normal">
            {FOUNDATION_NAME} is a youth-driven NGO dedicated to helping
            underprivileged communities through education, healthcare, and
            empowerment.
          </p>

          <Link
            to="/join-us"
            className="inline-block bg-[#3D7072] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#2E5658] transition duration-300 font-medium"
          >
            Join the Movement
          </Link>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src={logo}
            alt="Helpyuva Logo"
            className="w-48 sm:w-64 lg:w-80 rounded-full shadow-2xl hover:scale-105 transition duration-500"
          />
        </div>
      </section>

      {/* Impact Section */}
      <section className="px-6 sm:px-12 py-16 bg-[#E9F3F2]">
        <h3 className="font-['Montserrat'] text-3xl sm:text-4xl font-bold text-center text-[#3D7072] mb-10">
          Our Impact
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <FaHandsHelping className="text-4xl text-[#3D7072]" />,
              title: "5000+ Lives Touched",
              desc: "Helping communities with essentials, education, and care.",
            },
            {
              icon: <GiHeartKey className="text-4xl text-[#3D7072]" />,
              title: "300+ Volunteers",
              desc: "Dedicated youth volunteers contributing their time & skills.",
            },
            {
              icon: <MdVolunteerActivism className="text-4xl text-[#3D7072]" />,
              title: "120+ Campaigns",
              desc: "From cleanliness drives to mental health awareness events.",
            },
            {
              icon: <FaHandsHelping className="text-4xl text-[#3D7072]" />,
              title: "Sustainable Future",
              desc: "Empowering society through knowledge & equality.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition"
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>

              <h4 className="font-['Montserrat'] text-xl font-semibold mb-2">
                {item.title}
              </h4>

              <p className="text-sm font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 sm:px-12 py-16 bg-white text-center">
        <h3 className="font-['Montserrat'] text-3xl sm:text-4xl font-bold text-[#3D7072] mb-6">
          Join Us in Making a Difference
        </h3>

        <p className="max-w-2xl mx-auto mb-8 font-normal">
          Whether you want to volunteer, donate, or collaborate — every effort
          counts. Be a part of Helpyuva.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/events"
            className="bg-[#3D7072] text-white px-6 py-3 rounded-full hover:bg-[#2E5658] transition font-medium"
          >
            Our Events
          </Link>

          <Link
            to="/faq"
            className="border border-[#3D7072] text-[#3D7072] px-6 py-3 rounded-full hover:bg-[#E9F3F2] transition font-medium"
          >
            FAQs
          </Link>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 p-4 bg-[#3D7072] text-white rounded-full shadow-xl hover:scale-110 transition"
      >
        <FaHandsHelping size={26} />
      </a>
    </div>
  );
};

export default Home;
