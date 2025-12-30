import React from 'react';

const JoinUs = () => {
  return (
    <section className="join-container">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');

          .join-container {
            padding: 80px 24px;
            max-width: 1100px;
            margin: 0 auto;
            text-align: center;
            font-family: 'Inter', sans-serif;
            background: radial-gradient(circle at top right, #f0f9f8 0%, transparent 40%);
          }

          /* Hero Section */
          .join-hero {
            animation: fadeInDown 0.8s ease-out;
            margin-bottom: 80px;
          }

          .join-hero-title {
            font-size: clamp(2.5rem, 5vw, 3.5rem);
            color: #2f5d62;
            font-weight: 800;
            margin-bottom: 24px;
            letter-spacing: -0.02em;
          }

          .join-hero-text {
            font-size: 1.25rem;
            color: #4f7f84;
            line-height: 1.7;
            max-width: 750px;
            margin: 0 auto 48px;
          }

          /* CTA Button */
          .cta-button {
            background: linear-gradient(135deg, #436d6d 0%, #2f5d62 100%);
            color: white;
            padding: 16px 48px;
            border-radius: 100px;
            font-size: 1.1rem;
            font-weight: 600;
            border: none;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 10px 20px rgba(47, 93, 98, 0.2);
          }

          .cta-button:hover {
            transform: translateY(-3px) scale(1.02);
            box-shadow: 0 15px 30px rgba(47, 93, 98, 0.3);
            filter: brightness(1.1);
          }

          /* Action Cards Grid */
          .ways-to-help {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 32px;
            margin-bottom: 100px;
          }

          .help-card {
            background: #ffffff;
            padding: 48px 32px;
            border-radius: 24px;
            border: 1px solid #eef7f6;
            transition: all 0.4s ease;
            text-align: left;
            display: flex;
            flex-direction: column;
            position: relative;
            overflow: hidden;
          }

          .help-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: #436d6d;
            transform: scaleX(0);
            transition: transform 0.4s ease;
          }

          .help-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.06);
            border-color: #d1e8e6;
          }

          .help-card:hover::before {
            transform: scaleX(1);
          }

          .help-card h3 {
            color: #2f5d62;
            font-size: 1.75rem;
            font-weight: 700;
            margin-bottom: 16px;
          }

          .help-card p {
            color: #64748b;
            line-height: 1.6;
            margin-bottom: 32px;
            flex-grow: 1;
          }

          .card-action {
            color: #436d6d;
            font-weight: 700;
            background: none;
            border: none;
            text-align: left;
            padding: 0;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 8px;
            transition: gap 0.2s ease;
          }

          .card-action:hover {
            gap: 12px;
            color: #2f5d62;
          }

          /* Aspirational Note Section */
          .invitation-note {
            margin-top: 40px;
            padding: 60px 40px;
            background: linear-gradient(to bottom, #ffffff, #f1f8f7);
            border-radius: 40px;
            border: 1px dashed #436d6d;
            position: relative;
            transition: all 0.3s ease;
          }

          .invitation-note:hover {
            border-style: solid;
            background: #f1f8f7;
          }

          .heart-pulse {
            color: #436d6d;
            font-size: 2.5rem;
            margin-bottom: 20px;
            display: inline-block;
            animation: heartBeat 1.5s ease-in-out infinite;
          }

          .note-title {
            color: #2f5d62;
            font-size: 2.2rem;
            font-weight: 700;
            margin-bottom: 20px;
          }

          .note-text {
            color: #4f7f84;
            font-size: 1.15rem;
            line-height: 1.8;
            max-width: 800px;
            margin: 0 auto;
          }

          /* Animations */
          @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes heartBeat {
            0% { transform: scale(1); }
            14% { transform: scale(1.1); }
            28% { transform: scale(1); }
            42% { transform: scale(1.1); }
            70% { transform: scale(1); }
          }

          @media (max-width: 768px) {
            .invitation-note { padding: 40px 20px; }
            .note-title { font-size: 1.8rem; }
            .join-hero-title { font-size: 2.25rem; }
          }
        `}
      </style>

      {/* Hero Section */}
      <div className="join-hero">
        <h1 className="join-hero-title">Join Us in Making a Difference</h1>
        <p className="join-hero-text">
          Whether you want to volunteer, donate, or collaborate — every effort counts. 
          Be a part of our growing family of changemakers.
        </p>
        <button className="cta-button">Get Involved Now</button>
      </div>

      {/* Ways to Help Grid */}
      <div className="ways-to-help">
        <div className="help-card">
          <h3>Volunteer</h3>
          <p>Lend your time and skills to our ground-level campaigns and donation drives across the city.</p>
          <button className="card-action">Apply Now <span>→</span></button>
        </div>

        <div className="help-card">
          <h3>Donate</h3>
          <p>Your contributions help us purchase essential supplies, food, and fund education for children.</p>
          <button className="card-action">Support Us <span>→</span></button>
        </div>

        <div className="help-card">
          <h3>Collaborate</h3>
          <p>Partner with us as a corporate entity or school to scale our social impact and reach more lives.</p>
          <button className="card-action">Partner Today <span>→</span></button>
        </div>
      </div>

      {/* Invitation Section */}
      <div className="invitation-note">
        <div className="heart-pulse">❤</div>
        <h2 className="note-title">Become Part of the Family</h2>
        <p className="note-text">
          Our mission is powered by the kindness of people like you. By joining the    Helpयुवा     family, 
          you help us continue our journey of <strong>restoring dignity and building confidence</strong> 
          in every life we touch. We invite you to step forward and help us weave more threads of love 
          into a better tomorrow for everyone.
        </p>
      </div>
    </section>
  );
};

export default JoinUs;
