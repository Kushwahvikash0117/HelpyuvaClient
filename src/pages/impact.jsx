import React from 'react';

const Impact = ({ onNavigate }) => {
  // Function to handle smooth scrolling within the page
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="impact-wrapper">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');

          .impact-wrapper {
            background: linear-gradient(to bottom, #f0f9f8 0%, #ffffff 100%);
            padding: 80px 24px;
            font-family: 'Inter', sans-serif;
            color: #334155;
          }

          .impact-hero {
            text-align: center;
            max-width: 850px;
            margin: 0 auto 80px;
          }

          .impact-title {
            font-size: clamp(2.5rem, 5vw, 3.5rem);
            font-weight: 800;
            color: #2f5d62;
            margin-bottom: 24px;
            letter-spacing: -0.02em;
          }

          .impact-subtitle {
            font-size: 1.25rem;
            color: #4f7f84;
            line-height: 1.7;
          }

          /* --- PREMIUM STATS CARDS --- */
          .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 30px;
            max-width: 1100px;
            margin: 0 auto 100px;
          }

          .stat-card {
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(10px);
            padding: 45px 25px;
            border-radius: 28px;
            text-align: center;
            border: 1px solid rgba(47, 93, 98, 0.1);
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
            cursor: pointer;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            position: relative;
          }

          .stat-card:hover {
            transform: translateY(-15px) scale(1.02);
            border-color: #2f5d62;
            background: #ffffff;
            box-shadow: 0 25px 50px -12px rgba(47, 93, 98, 0.25);
          }

          .stat-number {
            font-size: 3rem;
            font-weight: 800;
            color: #2f5d62;
            display: block;
            transition: transform 0.3s ease;
          }

          .stat-card:hover .stat-number {
            transform: scale(1.1);
          }

          .stat-label {
            font-size: 0.95rem;
            font-weight: 700;
            color: #64748b;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            transition: all 0.3s ease;
          }

          .stat-card:hover .stat-label {
            color: #2f5d62;
            letter-spacing: 0.1em;
          }

          /* --- CONTENT BLOCKS --- */
          .impact-block {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 48px;
            max-width: 1100px;
            margin: 0 auto 80px;
            background: white;
            padding: 40px;
            border-radius: 32px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.02);
            border: 1px solid #f1f5f9;
            scroll-margin-top: 100px;
          }

          @media (min-width: 768px) {
            .impact-block { flex-direction: row; padding: 60px; }
            .impact-block:nth-child(even) { flex-direction: row-reverse; }
          }

          .impact-image-container {
            flex: 1;
            width: 100%;
            height: 400px;
            overflow: hidden;
            border-radius: 24px;
          }

          .impact-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }

          .impact-content {
            flex: 1;
          }

          .impact-point {
            font-size: 2.2rem;
            font-weight: 700;
            color: #2f5d62;
            margin-bottom: 20px;
          }

          .impact-desc p {
            font-size: 1.15rem;
            line-height: 1.8;
            color: #4f7f84;
            margin-bottom: 16px;
          }

          /* --- FOOTER CTA (Matches image_87c854.png) --- */
          .impact-cta {
            background: #2f5d62;
            color: white;
            border-radius: 35px;
            padding: 80px 30px;
            text-align: center;
            max-width: 1100px;
            margin: 100px auto 0;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .cta-title { font-size: 2.8rem; font-weight: 700; margin-bottom: 15px; }
          .cta-text { font-size: 1.2rem; margin-bottom: 35px; opacity: 0.9; max-width: 600px; }

          .cta-btn {
            background: white;
            color: #2f5d62;
            padding: 18px 50px;
            border-radius: 100px;
            font-weight: 700;
            font-size: 1.2rem;
            border: none;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .cta-btn:hover {
            transform: scale(1.05);
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
          }
        `}
      </style>

      <header className="impact-hero">
        <h1 className="impact-title">Our Growing Impact</h1>
        <p className="impact-subtitle">
          Small actions lead to massive change. Through our dedicated community, 
          we are building a more equitable and sustainable world.
        </p>
      </header>

      {/* Stats Grid with Scrolling Logic and Premium Hover */}
      <div className="stats-grid">
        <div className="stat-card" onClick={() => scrollToSection('lives')}>
          <span className="stat-number">5k+</span>
          <span className="stat-label">Lives Impacted</span>
        </div>
        <div className="stat-card" onClick={() => scrollToSection('volunteers')}>
          <span className="stat-number">300+</span>
          <span className="stat-label">Volunteers</span>
        </div>
        <div className="stat-card" onClick={() => scrollToSection('campaigns')}>
          <span className="stat-number">120+</span>
          <span className="stat-label">Campaigns</span>
        </div>
        <div className="stat-card" onClick={() => scrollToSection('sustainability')}>
          <span className="stat-number">15+</span>
          <span className="stat-label">Cities Reached</span>
        </div>
      </div>

      <section>
        {/* Lives Touched */}
        <div className="impact-block" id="lives">
          <div className="impact-image-container">
            <img src="https://images.unsplash.com/photo-1593113630400-ea4288922497" className="impact-image" alt="Lives Touched" />
          </div>
          <div className="impact-content">
            <h3 className="impact-point">5000+ Lives Touched</h3>
            <div className="impact-desc">
              <p>We have positively impacted thousands of individuals by providing clothing, essential supplies, and access to education.</p>
              <p>Our work focuses on restoring dignity, building confidence, and supporting families in need through consistent outreach programs.</p>
            </div>
          </div>
        </div>

        {/* Volunteering */}
        <div className="impact-block" id="volunteers">
          <div className="impact-image-container">
            <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d" className="impact-image" alt="Volunteers" />
          </div>
          <div className="impact-content">
            <h3 className="impact-point">The Power of Volunteering</h3>
            <div className="impact-desc">
              <p>With over 300+ dedicated volunteers, we are more than just an organization; we are a movement. Our team brings diverse skills and heart to every project.</p>
              <p>From logistical planning to on-ground distribution, our volunteers ensure that help reaches the right people at the right time.</p>
            </div>
          </div>
        </div>

        {/* Campaigns */}
        <div className="impact-block" id="campaigns">
          <div className="impact-image-container">
            <img src="https://images.unsplash.com/photo-1509099836639-18ba1795216d" className="impact-image" alt="Social Campaigns" />
          </div>
          <div className="impact-content">
            <h3 className="impact-point">120+ Social Campaigns</h3>
            <div className="impact-desc">
              <p>Beyond physical donations, we advocate for systemic change. Our campaigns tackle mental health, menstrual hygiene, and literacy.</p>
              <p>Each campaign is a step toward breaking taboos and fostering a society that is informed, compassionate, and ready to act.</p>
            </div>
          </div>
        </div>

        {/* Sustainability */}
        <div className="impact-block" id="sustainability">
          <div className="impact-image-container">
            <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" className="impact-image" alt="Sustainability" />
          </div>
          <div className="impact-content">
            <h3 className="impact-point">Sustainability & Future</h3>
            <div className="impact-desc">
              <p>Our "Circular Hope" initiative ensures that resources are reused and recycled, minimizing waste while maximizing community benefit.</p>
              <p>We are building a future that is inclusive and environmentally conscious, ensuring the next generation inherits a better world.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="impact-cta">
        <h2 className="cta-title">Be Part of the Change</h2>
        <p className="cta-text">Join our community of volunteers and help us double our impact next year.</p>
        <button className="cta-btn" onClick={() => onNavigate('join_us')}>
          Join Us Today
        </button>
      </footer>
    </div>
  );
};

export default Impact;
