import React from 'react';


const COLORS = {
  deepGreen: '#6A8159',
  sunriseOrange: '#F9A870',
  lightGray: '#D9D9D9',
  warmBeige: '#FDF8F0',
  primaryText: '#948680',
};

const HomePage: React.FC = () => {
  return (
    <main style={{ backgroundColor: COLORS.warmBeige, color: COLORS.primaryText, fontFamily: "'Poppins', sans-serif", lineHeight: 1.6 }}>
      <header
        style={{
          backgroundColor: 'white',
          padding: '20px',
          textAlign: 'center',
          borderBottom: `1px solid ${COLORS.lightGray}`,
        }}
      >
        <h1 style={{ fontFamily: "'Dancing Script', cursive", color: COLORS.deepGreen, margin: 0, fontSize: '2.5em' }}>
          Coach Mel Byrd
        </h1>
        <nav style={{ marginTop: '10px' }}>
          <a href="#about" style={{ margin: '0 15px', textDecoration: 'none', color: COLORS.primaryText, fontWeight: 500 }}>
            About
          </a>
          <a href="#services" style={{ margin: '0 15px', textDecoration: 'none', color: COLORS.primaryText, fontWeight: 500 }}>
            Speaking
          </a>
          <a href="#events" style={{ margin: '0 15px', textDecoration: 'none', color: COLORS.primaryText, fontWeight: 500 }}>
            Events
          </a>
          <a href="#contact" style={{ margin: '0 15px', textDecoration: 'none', color: COLORS.primaryText, fontWeight: 500 }}>
            Contact
          </a>
        </nav>
      </header>

      <div
        className="hero"
        style={{
          textAlign: 'center',
          padding: '50px 20px',
          backgroundColor: 'white',
        }}
      >
        <img
          src="/mel-headshot.jpg" // Assume the image is in the public folder
          alt="Coach Mel Byrd"
          style={{
            maxWidth: '200px',
            borderRadius: '50%',
            marginBottom: '20px',
          }}
        />
        <h2 style={{ fontFamily: "'Dancing Script', cursive", fontSize: '1.8em', color: COLORS.deepGreen }}>
          Speaker • Trainer • Life Coach • Author
        </h2>
        <p>Helping people step into leadership, communication, and confidence worldwide.</p>
        <a
          href="#contact"
          style={{
            display: 'inline-block',
            margin: '10px',
            padding: '12px 24px',
            borderRadius: '25px',
            textDecoration: 'none',
            fontWeight: 'bold',
            backgroundColor: COLORS.sunriseOrange,
            color: 'white',
          }}
        >
          Book Coach Mel
        </a>
        <a
          href="#about"
          style={{
            display: 'inline-block',
            margin: '10px',
            padding: '12px 24px',
            borderRadius: '25px',
            textDecoration: 'none',
            fontWeight: 'bold',
            backgroundColor: COLORS.lightGray,
            color: COLORS.primaryText,
          }}
        >
          Learn More
        </a>
      </div>

      <section id="about" style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
        <h3 style={{ fontFamily: "'Dancing Script', cursive", color: COLORS.deepGreen, fontSize: '1.6em', marginBottom: '15px' }}>
          About Coach Mel
        </h3>
        <p>
          Coach Mel Byrd is an award-winning trainer, coach, and speaker with 20+ years of experience in corporate training,
          leadership development, and motivational speaking. She has led programs across the U.S. and Singapore,
          empowering hundreds to graduate, grow, and succeed.
        </p>
        <p>
          She’s the President of Black in Singapore, an active member of Zeta Phi Beta Sorority,
          and a decorated Toastmaster recognized for leadership and communication excellence.
        </p>
      </section>

      <section id="services" style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
        <h3 style={{ fontFamily: "'Dancing Script', cursive", color: COLORS.deepGreen, fontSize: '1.6em', marginBottom: '15px' }}>
          What Mel Offers
        </h3>
        <ul style={{ paddingLeft: '20px' }}>
          <li><strong>Speaking Engagements</strong> – Keynotes on leadership, communication, and confidence.</li>
          <li><strong>Training & Workshops</strong> – Corporate and community sessions on power skills.</li>
          <li><strong>Coaching</strong> – One-on-one and group coaching to unlock your potential.</li>
        </ul>
        <a
          href="#contact"
          style={{
            display: 'inline-block',
            marginTop: '10px',
            padding: '12px 24px',
            borderRadius: '25px',
            textDecoration: 'none',
            fontWeight: 'bold',
            backgroundColor: COLORS.sunriseOrange,
            color: 'white',
          }}
        >
          Invite Coach Mel
        </a>
      </section>

      <section id="events" style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
        <h3 style={{ fontFamily: "'Dancing Script', cursive", color: COLORS.deepGreen, fontSize: '1.6em', marginBottom: '15px' }}>
          Upcoming Events
        </h3>
        <p>
          <strong>Second Spring Sisterhood Retreat</strong> – March 24–27, 2025 • Ubud, Bali{' '}
          <a href="https://sss-retreat.vercel.app" target="_blank" rel="noopener noreferrer" style={{ color: COLORS.deepGreen, textDecoration: 'underline' }}>
            Learn More
          </a>
        </p>
      </section>

      <section id="contact" style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
        <h3 style={{ fontFamily: "'Dancing Script', cursive", color: COLORS.deepGreen, fontSize: '1.6em', marginBottom: '15px' }}>
          Contact Coach Mel
        </h3>
        <p>Email: <a href="mailto:mel@melbyrdrocks.com" style={{ color: COLORS.deepGreen, textDecoration: 'underline' }}>mel@melbyrdrocks.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/melbyrd/" target="_blank" rel="noopener noreferrer" style={{ color: COLORS.deepGreen, textDecoration: 'underline' }}>linkedin.com/in/melbyrd</a></p>
        <p>Instagram: <a href="https://instagram.com/[handle]" target="_blank" rel="noopener noreferrer" style={{ color: COLORS.deepGreen, textDecoration: 'underline' }}>@handle</a></p>
      </section>

      <footer
        style={{
          backgroundColor: 'white',
          padding: '20px',
          textAlign: 'center',
          borderTop: `1px solid ${COLORS.lightGray}`,
          fontSize: '0.9em',
        }}
      >
        <p>© 2025 Mel Byrd. All Rights Reserved.</p>
      </footer>
    </main>
  );
};

export default HomePage;
