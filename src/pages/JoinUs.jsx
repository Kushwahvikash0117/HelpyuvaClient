import React from "react";
import logo from "../assets/Help.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const JoinUs = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F0F9F8] text-[#2E5658]">


      <section className="py-16 sm:py-20 px-6 max-w-6xl mx-auto text-center">

        {/* Hero Section */}
        <div className="mb-20">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Join Us in Making a Difference
          </h1>

          <p className="text-sm sm:text-lg lg:text-xl text-[#4f7f84] leading-relaxed max-w-3xl mx-auto mb-10">
            Whether you want to volunteer, donate, or collaborate — every effort
            counts. Be a part of our growing family of changemakers.
          </p>

          <button className="bg-[#2E5658] text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-lg hover:scale-105 transition-transform">
            Get Involved Now
          </button>
        </div>

        {/* Ways to Help */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 text-left">

          {/* Volunteer */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-md hover:shadow-xl transition-all flex flex-col">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[#2E5658]">
              Volunteer
            </h3>
            <p className="text-sm sm:text-base text-[#4f7f84] leading-relaxed mb-8 flex-grow">
              Lend your time and skills to our on-ground campaigns, donation
              drives, and community initiatives.
            </p>
            <button className="text-[#2E5658] font-semibold hover:translate-x-1 transition">
              Apply Now →
            </button>
          </div>

          {/* Donate */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-md hover:shadow-xl transition-all flex flex-col">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[#2E5658]">
              Donate
            </h3>
            <p className="text-sm sm:text-base text-[#4f7f84] leading-relaxed mb-8 flex-grow">
              Your support helps us provide food, clothing, education, and
              healthcare to those in need.
            </p>
            <button className="text-[#2E5658] font-semibold hover:translate-x-1 transition">
              Support Us →
            </button>
          </div>

          {/* Collaborate */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-md hover:shadow-xl transition-all flex flex-col md:col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[#2E5658]">
              Collaborate
            </h3>
            <p className="text-sm sm:text-base text-[#4f7f84] leading-relaxed mb-8 flex-grow">
              Partner with us as an institution, brand, or organization to
              expand social impact together.
            </p>
            <button className="text-[#2E5658] font-semibold hover:translate-x-1 transition">
              Partner Today →
            </button>
          </div>

        </div>

        {/* Invitation Section */}
        <div className="bg-white border border-dashed border-[#2E5658] rounded-3xl px-8 sm:px-16 py-12 sm:py-16">
          <div className="text-3xl sm:text-4xl mb-6">❤️</div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
            Become Part of the Family
          </h2>

          <p className="text-sm sm:text-lg text-[#4f7f84] leading-relaxed max-w-4xl mx-auto">
            Our mission is powered by people like you. By joining the{" "}
            <span className="inline-flex items-center gap-2 font-semibold text-[#2E5658]">
              <img
                src={logo}
                alt="HelpYuva"
                className="h-7 w-7 rounded-full"
              />
              Helpयुवा
            </span>{" "}
            family, you help us restore dignity, spread compassion, and build a
            stronger tomorrow for everyone.
          </p>
        </div>

      </section>


    </div>
  );
};

export default JoinUs;
