import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Impact = () => {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const stats = [
    { id: "lives", num: "5k+", label: "Lives Impacted" },
    { id: "volunteers", num: "300+", label: "Volunteers" },
    { id: "campaigns", num: "120+", label: "Campaigns" },
    { id: "cities", num: "15+", label: "Cities Reached" },
  ];

  const blocks = [
    {
      id: "lives",
      title: "5000+ Lives Touched",
      img: "https://images.unsplash.com/photo-1593113630400-ea4288922497",
    },
    {
      id: "volunteers",
      title: "The Power of Volunteering",
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    },
    {
      id: "campaigns",
      title: "120+ Social Campaigns",
      img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d",
    },
    {
      id: "cities",
      title: "Sustainability & Future",
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F0F9F8] text-[#2E5658]">


      {/* Header */}
      <header className="text-center max-w-4xl mx-auto px-6 py-16 sm:py-20">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight mb-6">
          Our Growing Impact
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-[#4f7f84] leading-relaxed">
          Small actions lead to massive change. Through our dedicated community,
          we are building a more equitable and sustainable world.
        </p>
      </header>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-6 mb-20 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.id}
            onClick={() => scrollToSection(stat.id)}
            className="cursor-pointer bg-white p-6 sm:p-8 rounded-2xl text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <span className="block text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2E5658]">
              {stat.num}
            </span>
            <span className="text-xs sm:text-sm font-semibold text-[#6b8e91] uppercase tracking-wider">
              {stat.label}
            </span>
          </div>
        ))}
      </section>

      {/* Impact Blocks */}
      <section className="space-y-16 px-6 mb-24">
        {blocks.map((block, index) => (
          <div
            key={block.id}
            id={block.id}
            className={`max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 bg-white p-6 sm:p-10 rounded-3xl shadow-sm scroll-mt-24 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="md:w-1/2 h-64 sm:h-80 overflow-hidden rounded-2xl">
              <img
                src={block.img}
                alt={block.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="md:w-1/2 flex flex-col justify-center">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                {block.title}
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-[#4f7f84] leading-relaxed">
                Our work focuses on restoring dignity, building confidence, and
                supporting families in need through consistent outreach,
                awareness programs, and sustainable initiatives.
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <div className="bg-[#2E5658] text-white rounded-3xl py-12 sm:py-16 text-center">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Be Part of the Change
          </h2>
          <p className="text-sm sm:text-lg lg:text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Join our community of volunteers and help us expand our impact
            across India.
          </p>
          <button
            onClick={() => navigate("/join-us")}
            className="bg-white text-[#2E5658] px-8 sm:px-12 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:scale-105 transition-transform"
          >
            Join Us Today
          </button>
        </div>
      </section>


    </div>
  );
};

export default Impact;
