import React from 'react';
import Navbar from "../components/Navbar"; // Path based on your App.js structure
import Footer from "../components/Footer"; // Path based on your App.js structure
import logo from '../assets/Help.png';

const JoinUs = ({ onNavigate, currentPage }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Added Navbar at the top */}
      <Navbar onNavigate={onNavigate} currentPage={currentPage} />

      <main className="flex-grow">
        <section className="join-container py-12 md:py-20 px-4 md:px-6 max-w-[1100px] mx-auto text-center font-['Inter',_sans-serif] bg-[radial-gradient(circle_at_top_right,_#f0f9f8_0%,_transparent_40%)]">
          
          {/* Hero Section */}
          <div className="join-hero mb-16 md:mb-20 animate-[fadeInDown_0.8s_ease-out]">
            <h1 className="join-hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#2f5d62] font-extrabold mb-6 tracking-tight leading-tight">
              Join Us in Making a Difference
            </h1>
            <p className="join-hero-text text-base md:text-xl text-[#4f7f84] leading-relaxed max-w-[750px] mx-auto mb-10 md:mb-12">
              Whether you want to volunteer, donate, or collaborate — every effort counts. 
              Be a part of our growing family of changemakers.
            </p>
            <button 
              onClick={() => onNavigate('donate')}
              className="cta-button bg-gradient-to-br from-[#436d6d] to-[#2f5d62] text-white px-8 md:px-12 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold shadow-[0_10px_20px_rgba(47,93,98,0.2)] hover:shadow-[0_15px_30px_rgba(47,93,98,0.3)] hover:-translate-y-1 transition-all duration-300"
            >
              Get Involved Now
            </button>
          </div>

          {/* Ways to Help Grid */}
          <div className="ways-to-help grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20 md:mb-24">
            {/* Volunteer Card */}
            <div className="help-card group relative bg-white p-8 md:p-12 rounded-[24px] border border-[#eef7f6] transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-[#d1e8e6] text-left flex flex-col overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#436d6d] scale-x-0 group-hover:scale-x-100 transition-transform duration-400" />
              <h3 className="text-[#2f5d62] text-xl md:text-[1.75rem] font-bold mb-4">Volunteer</h3>
              <p className="text-[#64748b] text-sm md:text-base leading-relaxed mb-8 flex-grow">Lend your time and skills to our ground-level campaigns and donation drives across the city.</p>
              <button className="card-action text-[#436d6d] font-bold flex items-center gap-2 hover:gap-3 transition-all text-sm md:text-base">
                Apply Now <span>→</span>
              </button>
            </div>

            {/* Donate Card */}
            <div className="help-card group relative bg-white p-8 md:p-12 rounded-[24px] border border-[#eef7f6] transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-[#d1e8e6] text-left flex flex-col overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#436d6d] scale-x-0 group-hover:scale-x-100 transition-transform duration-400" />
              <h3 className="text-[#2f5d62] text-xl md:text-[1.75rem] font-bold mb-4">Donate</h3>
              <p className="text-[#64748b] text-sm md:text-base leading-relaxed mb-8 flex-grow">Your contributions help us purchase essential supplies, food, and fund education for children.</p>
              <button 
                onClick={() => onNavigate('donate')}
                className="card-action text-[#436d6d] font-bold flex items-center gap-2 hover:gap-3 transition-all text-sm md:text-base"
              >
                Support Us <span>→</span>
              </button>
            </div>

            {/* Collaborate Card */}
            <div className="help-card group relative bg-white p-8 md:p-12 rounded-[24px] border border-[#eef7f6] transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-[#d1e8e6] text-left flex flex-col overflow-hidden md:col-span-2 lg:col-span-1">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#436d6d] scale-x-0 group-hover:scale-x-100 transition-transform duration-400" />
              <h3 className="text-[#2f5d62] text-xl md:text-[1.75rem] font-bold mb-4">Collaborate</h3>
              <p className="text-[#64748b] text-sm md:text-base leading-relaxed mb-8 flex-grow">Partner with us as a corporate entity or school to scale our social impact and reach more lives.</p>
              <button className="card-action text-[#436d6d] font-bold flex items-center gap-2 hover:gap-3 transition-all text-sm md:text-base">
                Partner Today <span>→</span>
              </button>
            </div>
          </div>

          {/* Invitation Section */}
          <div className="invitation-note p-8 md:p-16 bg-gradient-to-b from-white to-[#f1f8f7] rounded-[32px] md:rounded-[40px] border border-dashed border-[#436d6d] hover:border-solid transition-all duration-300">
            <div className="heart-pulse text-3xl md:text-[2.5rem] mb-5 inline-block animate-[heartBeat_1.5s_ease-in-out_infinite] text-[#436d6d]">❤</div>
            <h2 className="note-title text-2xl md:text-[2.2rem] text-[#2f5d62] font-bold mb-5 leading-tight">Become Part of the Family</h2>
            <div className="note-text text-sm md:text-[1.15rem] text-[#4f7f84] leading-relaxed md:leading-[1.8] max-w-[800px] mx-auto">
              <p className="inline">Our mission is powered by the kindness of people like you. By joining the </p>
              <div className="inline-flex items-center gap-2 mx-1 align-middle translate-y-[-2px]">
                <img src={logo} alt="HelpYuva" className="h-6 w-6 md:h-8 md:w-8 rounded-full object-cover border border-gray-100" />
                <strong className="text-[#2f5d62]">Helpयुवा</strong>
              </div>
              <p className="inline"> family, you help us continue our journey of <strong>restoring dignity and building confidence</strong> in every life we touch. We invite you to step forward and help us weave more threads of love into a better tomorrow for everyone.</p>
            </div>
          </div>
        </section>
      </main>

      {/* 2. Added Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default JoinUs;
