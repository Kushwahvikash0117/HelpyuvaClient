import React from 'react';
import { useNavigate } from 'react-router-dom';

const Impact = () => {
  const navigate = useNavigate(); // ✅ hook INSIDE component

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { id: 'lives', num: '5k+', label: 'Lives Impacted' },
    { id: 'volunteers', num: '300+', label: 'Volunteers' },
    { id: 'campaigns', num: '120+', label: 'Campaigns' },
    { id: 'sustainability', num: '15+', label: 'Cities Reached' },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-[#f0f9f8] to-white py-12 md:py-20 px-4 md:px-6 font-['Inter',_sans-serif] text-[#334155]">

      {/* Header Section */}
      <header className="text-center max-w-[850px] mx-auto mb-12 md:mb-20 animate-[fadeInDown_0.8s_ease-out]">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#2f5d62] mb-4 md:mb-6 tracking-tight">
          Our Growing Impact
        </h1>
        <p className="text-base md:text-xl text-[#4f7f84] leading-relaxed px-2">
          Small actions lead to massive change. Through our dedicated community,
          we are building a more equitable and sustainable world.
        </p>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-[1100px] mx-auto mb-16 md:mb-24">
        {stats.map((stat) => (
          <div
            key={stat.id}
            onClick={() => scrollToSection(stat.id)}
            className="group bg-white/80 backdrop-blur-md p-6 md:p-10 rounded-2xl md:rounded-[28px] text-center border border-[#2f5d62]/10 shadow-sm cursor-pointer transition-all duration-400 hover:-translate-y-2 hover:border-[#2f5d62] hover:shadow-xl"
          >
            <span className="block text-3xl md:text-5xl font-extrabold text-[#2f5d62] mb-1">
              {stat.num}
            </span>
            <span className="text-[0.7rem] md:text-sm font-bold text-[#64748b] uppercase tracking-wider">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* Content Blocks */}
      <section className="space-y-12 md:space-y-20">
        {[
          { id: 'lives', title: '5000+ Lives Touched', img: 'https://images.unsplash.com/photo-1593113630400-ea4288922497' },
          { id: 'volunteers', title: 'The Power of Volunteering', img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d' },
          { id: 'campaigns', title: '120+ Social Campaigns', img: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d' },
          { id: 'sustainability', title: 'Sustainability & Future', img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee' }
        ].map((block, index) => (
          <div
            key={block.id}
            id={block.id}
            className={`flex flex-col gap-8 md:gap-12 max-w-[1100px] mx-auto bg-white p-6 md:p-12 rounded-3xl border border-slate-100 scroll-mt-24 md:flex-row ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className="w-full md:w-1/2 h-64 md:h-[400px] overflow-hidden rounded-2xl">
              <img src={block.img} className="w-full h-full object-cover" alt={block.title} />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center text-left">
              <h3 className="text-2xl md:text-4xl font-bold text-[#2f5d62] mb-4">
                {block.title}
              </h3>
              <p className="text-sm md:text-lg text-[#4f7f84] leading-relaxed">
                Our work focuses on restoring dignity, building confidence, and supporting families in need through consistent outreach programs and resources.
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Footer CTA */}
      <footer className="bg-[#2f5d62] text-white rounded-[32px] py-12 md:py-20 px-6 text-center max-w-[1100px] mx-auto mt-20">
        <h2 className="text-2xl md:text-5xl font-bold mb-4">
          Be Part of the Change
        </h2>
        <p className="text-sm md:text-xl mb-8 opacity-90 max-w-xl mx-auto">
          Join our community of volunteers and help us double our impact next year.
        </p>
        <button
          className="bg-white text-[#2f5d62] px-8 md:px-12 py-3 md:py-4 rounded-full font-bold text-base md:text-xl hover:scale-105 transition-transform"
          onClick={() => navigate('/join-us')} // ✅ WORKING
        >
          Join Us Today
        </button>
      </footer>

    </div>
  );
};

export default Impact;
