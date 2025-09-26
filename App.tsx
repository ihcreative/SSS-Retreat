import React from 'react';
import type { Experience, IncludedItem } from './types';
import RetreatRhythmSection from './components/RhythmSection';
import {
  BrandLogo, CheckCircleIcon, SpaIcon, LeafIcon, MessageCircleIcon,
  FlameIcon, HeartIcon, SparklesIcon, RecycleIcon, InstagramIcon, FacebookIcon
} from './components/Icons';
import RetreatGuide from './components/RetreatGuide';
import NavBar from './components/NavBar'; 

// --- CONFIG & DATA ---

const COLORS = {
  cream: '#F8F6F2',
  green: '#6A8159',
  peach: '#F9A870',
  pink: '#DD9D9D',
  text: '#5c5552',
};

const INCLUDED_DATA: IncludedItem[] = [
  {
    text: "Luxury accommodations in a private jungle villa",
    subtext: "Wake up where the jungle sings your name.",
    featured: true,
  },
  {
    text: "Daily organic, locally-sourced meals",
    subtext: "Nourish yourself with every bite.",
  },
  {
    text: "All workshops, ceremonies, and healing sessions",
    subtext: "Come home to the parts of you that feel forgotten.",
  },
  {
    text: "A guided temple excursion and nature hike",
    subtext: "Walk the sacred paths of Bali with intention.",
  },
  {
    text: "Professional photoshoot to capture your glow",
    subtext: "Because your radiance deserves to be witnessed.",
  },
  {
    text: "A curated welcome gift with local artisan crafts",
    subtext: "A blessing from the island to take home.",
  },
];

const EXPERIENCES_DATA: Experience[] = [
  {
    icon: SpaIcon,
    title: "Morning Rituals",
    description: "Greet the day with gentle yoga, meditation, and intention setting.",
    image: "https://image.pollinations.ai/prompt/serene%20Black%20woman%20meditating%20in%20lush%20Bali%20jungle,%20sunrise,%20soft%20light,%20calm%20aura",
  },
  {
    icon: LeafIcon,
    title: "Holistic Healing",
    description: "Experience traditional Balinese healing modalities and workshops.",
    image: "https://images.pexels.com/photos/8330352/pexels-photo-8330352.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: MessageCircleIcon,
    title: "Sisterhood Circles",
    description: "Connect deeply in sacred circles of sharing and listening.",
    image: "https://images.pexels.com/photos/5890690/pexels-photo-5890690.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

// --- REUSABLE COMPONENTS ---

const CtaButton: React.FC<{
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  as?: 'a' | 'button';
  href?: string;
  type?: string;
  className?: string;
}> = ({
  children, variant = 'primary', as = 'button', href, type, className = ''
}) => {
  const baseClasses =
    "px-8 py-4 rounded-full font-semibold tracking-wide shadow-lg transition-transform duration-300";
  const styles = {
    primary: "bg-[#6A8159] text-white hover:scale-105 hover:shadow-xl",
    secondary:
      "bg-white border-2 border-[#6A8159] text-[#6A8159] hover:bg-[#6A8159] hover:text-white",
  };
  // Conditional rendering depending on 'as' prop:
  if (as === 'a') {
    return (
      <a
        href={href}
        className={`${baseClasses} ${styles[variant]} ${className}`}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      type={type}
      className={`${baseClasses} ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

const Section: React.FC<{ id: string; children: React.ReactNode; className?: string }> = ({
  id,
  children,
  className = '',
}) => (
  <section id={id} className={`py-20 md:py-28 ${className}`}>
    <div className="container mx-auto px-6 md:px-8 max-w-6xl">{children}</div>
  </section>
);

const SectionTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <h2
    className={`text-5xl md:text-6xl font-header-script ${className}`}
    style={{ color: COLORS.green }}
  >
    {children}
  </h2>
);

// --- PAGE SECTIONS ---

const App: React.FC = () => (
  <main style={{ backgroundColor: COLORS.cream, color: COLORS.text }} className="antialiased">
    <NavBar />
    <HeroSection />
    <WelcomeSection />
    <IncludedSection />
    <FlowSection />
    <RetreatRhythmSection />
    <WhoShouldAttendSection />
    <WhyBaliSection />
    <RetreatGuide />
    <RegistrationSection />
    <Footer />
  </main>
);

// continue…
const HeroSection: React.FC = () => (
  <header className="relative h-screen min-h-[700px] w-full flex items-center justify-center text-white text-center bg-gray-800">
    <div className="absolute inset-0 bg-black/40 z-10"></div>
   <img
      src="https://images.pexels.com/photos/235648/pexels-photo-235648.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920"
      alt="Sunlit Bali rice terraces in Tegallalang – women’s healing retreat in Ubud"
      className="absolute inset-0 w-full h-full object-cover"
    />

    <div className="relative z-20 p-4 flex flex-col items-center max-w-4xl">
      <BrandLogo className="w-20 h-20 mb-6 text-white" />
      <h1 className="font-header-script text-7xl md:text-9xl drop-shadow-lg">
        The Second Spring Sisterhood Retreat
      </h1>
      <p className="mt-4 text-2xl md:text-3xl font-light tracking-wide drop-shadow-md">
        Blossom into Full Bloom
      </p>
      <p className="mt-6 text-lg md:text-xl font-semibold tracking-wider drop-shadow">
        March 24–27, 2026 | Ubud, Bali | Hosted by Coach Melle
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <CtaButton as="a" href="#register" variant="primary">
          Save My Spot
        </CtaButton>
        <CtaButton as="a" href="#welcome" variant="secondary">
          Learn More
        </CtaButton>
      </div>
    </div>
  </header>
);

const WelcomeSection: React.FC = () => (
  <section id="welcome" className="relative bg-white overflow-hidden py-20 px-4">
    <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
      {/* background glow */}
      <div
        className="absolute inset-0 opacity-60 rounded-full blur-3xl pointer-events-none -z-10"
        style={{ backgroundColor: '#F8F6F2' }}
      />

      {/* Video */}
      <div className="rounded-xl overflow-hidden shadow-lg w-full max-w-2xl mb-10 aspect-video">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/ysz5S6PUM-U"
          title="A Message from Coach Melle"
          style={{ border: 0 }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Quote */}
      <p className="italic text-lg mb-3" style={{ color: '#6A8159' }}>
        “This is your second spring — and it’s right on time.”
      </p>

      {/* Header */}
      <h2 className="font-header-script text-5xl md:text-6xl mb-4" style={{ color: '#6A8159' }}>
        A Personal Invitation
      </h2>

      {/* Body */}
      <div className="text-lg leading-relaxed max-w-3xl" style={{ color: '#5c5552' }}>
        <p>
          I created this retreat because I know what it’s like to give, and give, and forget yourself.
          I’ve coached women for over 20 years — CEOs, mothers, healers — and we all hit a point where
          the mask no longer fits.
        </p>
        <br />
        <p>
          The Second Spring is more than a retreat. It’s a <em>reunion</em> with your truth — a sacred
          space to exhale, laugh, cry, and rise with other women who get it. You don’t need fixing.
          You need remembering.
        </p>
        <br />
        <p>
          <strong>This is your moment. Come home to yourself in Bali.</strong> Bring the parts of you
          that the world told to be quiet — they’re the loudest ones calling you back.
        </p>
      </div>

      {/* Trust blurb (no links here) */}
      <p className="mt-6 text-sm md:text-base opacity-90" style={{ color: '#6A8159' }}>
        Led by Coach Melle, a transformational guide with 20+ years supporting women.
      </p>
    </div>
  </section>
);

const IncludedSection: React.FC = () => (
  <Section id="included">
    <div className="text-center mb-16">
      <p className="uppercase text-sm tracking-widest font-bold" style={{ color: COLORS.green }}>
        All-Inclusive Care
      </p>
      <SectionTitle>What’s Included</SectionTitle>
      <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: COLORS.text }}>
        Everything you need to feel nourished, seen, and held — from the moment you arrive to the final hug goodbye.
      </p>
    </div>

    <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10 max-w-5xl mx-auto">
      {INCLUDED_DATA.map((item) => (
        <div
          key={item.text}
          className="relative bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:-translate-y-1 group"
        >
          {item.featured && (
            <span
              className="absolute top-0 right-0 text-white text-xs px-2 py-1 rounded-bl-lg font-semibold shadow"
              style={{ backgroundColor: COLORS.peach }}
            >
              Most Loved
            </span>
          )}
          <div className="flex items-start space-x-4">
            <div
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-inner group-hover:shadow-[0_0_10px_rgba(106,129,89,0.5)] transition duration-300"
              style={{ border: `1px solid ${COLORS.green}` }}
            >
              <CheckCircleIcon className="w-5 h-5" style={{ color: COLORS.green }} />
            </div>
            <div>
              <p className="text-lg font-semibold" style={{ color: COLORS.text }}>
                {item.text}
              </p>
              {item.subtext && <p className="text-sm text-[#948B88] mt-1">{item.subtext}</p>}
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-16 text-center">
      <CtaButton as="a" href="#register" variant="primary">
        Save My Spot
      </CtaButton>
    </div>
  </Section>
);

const FlowSection: React.FC = () => (
  <Section id="flow" className="bg-white">
    <SectionTitle className="text-center mb-12">The Vibe</SectionTitle>
    <p className="text-center text-lg max-w-2xl mx-auto mb-12" style={{ color: COLORS.text }}>
      This isn’t a retreat you watch from the sidelines. It’s one you <em>feel</em> — in your breath, your body, and your spirit. These moments will hold you.
    </p>

    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {EXPERIENCES_DATA.slice(0, 3).map((item) => (
        <div
          key={item.title}
          className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
          style={{ backgroundColor: COLORS.cream }}
        >
          <img src={item.image} alt={item.title} className="w-full h-72 object-cover" />
          <div className="p-6 text-center flex-1 flex flex-col">
            <item.icon className="w-8 h-8 mx-auto mb-3" style={{ color: COLORS.green }} />
            <h3 className="text-xl font-bold mb-2" style={{ color: COLORS.green }}>
              {item.title}
            </h3>
            <p className="text-sm flex-1" style={{ color: COLORS.text }}>
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

const WhoShouldAttendSection: React.FC = () => (
  <Section id="who-attends" className="relative bg-white">
    <div className="text-center max-w-4xl mx-auto">
      <SectionTitle className="mb-6">This Retreat is For You If…</SectionTitle>
      <p className="text-lg leading-relaxed mb-10" style={{ color: COLORS.text }}>
        You don’t need another to-do list. You need space to breathe, release, and remember yourself.  
        If any of these feel true, the Sisterhood is calling you:
      </p>

      <ul className="space-y-6 text-left mx-auto max-w-2xl">
        <li className="flex items-start gap-4 group transition-all duration-300 hover:translate-x-2">
          <HeartIcon className="w-7 h-7 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" style={{ color: COLORS.green }} />
          <span className="text-lg" style={{ color: COLORS.text }}>
            You’ve been giving so much that you’ve forgotten yourself.
          </span>
        </li>
        <li className="flex items-start gap-4 group transition-all duration-300 hover:translate-x-2">
          <SparklesIcon className="w-7 h-7 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" style={{ color: COLORS.green }} />
          <span className="text-lg" style={{ color: COLORS.text }}>
            You ache for deeper connection and true sisterhood.
          </span>
        </li>
        <li className="flex items-start gap-4 group transition-all duration-300 hover:translate-x-2">
          <RecycleIcon className="w-7 h-7 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" style={{ color: COLORS.green }} />
          <span className="text-lg" style={{ color: COLORS.text }}>
            You’re navigating a new season of life and long for renewal.
          </span>
        </li>
        <li className="flex items-start gap-4 group transition-all duration-300 hover:translate-x-2">
          <LeafIcon className="w-7 h-7 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" style={{ color: COLORS.green }} />
          <span className="text-lg" style={{ color: COLORS.text }}>
            You crave rituals, beauty, and a sacred pause to breathe again.
          </span>
        </li>
        <li className="flex items-start gap-4 group transition-all duration-300 hover:translate-x-2">
          <FlameIcon className="w-7 h-7 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" style={{ color: COLORS.green }} />
          <span className="text-lg" style={{ color: COLORS.text }}>
            You know it’s time to soften, release, and rise into your full bloom.
          </span>
        </li>
      </ul>

      <div className="mt-12">
        <CtaButton as="a" href="#register" variant="primary">
          Save My Spot
        </CtaButton>
      </div>
    </div>
  </Section>
);

const WhyBaliSection: React.FC = () => (
  <Section id="why-bali" className="relative text-white">
    {/* Background image with overlay */}
    <div className="absolute inset-0">
      <img
        src="https://images.pexels.com/photos/4909331/pexels-photo-4909331.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt="Balinese temple ritual at sunrise"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50"></div>
    </div>

    {/* Content */}
    <div className="relative z-10 text-center max-w-5xl mx-auto">
      <SectionTitle className="mb-6 text-white">Why Bali?</SectionTitle>
      <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
        Bali is more than a destination — it’s a portal. The island holds three gifts that make transformation inevitable:
      </p>

      {/* Three floating glass cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {[
          { title: "Energy", text: "Sacred waters, temple rituals, and a culture rooted in ceremony — Bali invites you to release and renew." },
          { title: "Beauty", text: "From emerald rice terraces to jungle waterfalls, every view reminds you of life’s abundance and your own." },
          { title: "Spirit", text: "Daily offerings, chants, and dances keep the divine close — and help you remember that you are, too." },
        ].map((item) => (
          <div
            key={item.title}
            className="backdrop-blur-md bg-white/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <h3 className="text-2xl font-bold mb-3" style={{ color: COLORS.cream }}>
              {item.title}
            </h3>
            <p className="text-base leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Consistent CTA */}
      <CtaButton as="a" href="#register" variant="primary">
        Save My Spot
      </CtaButton>
    </div>
  </Section>
);

const RetreatGuide: React.FC = () => (
  <Section id="retreat-guide" className="bg-white text-center py-20 px-4">
    <div className="max-w-2xl mx-auto">
      <h2 className="font-header-script text-5xl mb-6 text-[#6A8159]">
        ✨ Your Second Spring Retreat Guide
      </h2>
      <p className="mb-8 text-lg leading-relaxed text-[#5c5552]">
        We’ve prepared something special for you. The Second Spring Retreat Guide is more than an itinerary — it’s a taste of the journey awaiting you in Bali. Inside, you’ll find:
      </p>
      <ul className="mb-10 text-left text-lg max-w-md mx-auto space-y-3">
        <li>🌸 A welcome letter from Coach Melle</li>
        <li>🌸 A day-in-the-life retreat rhythm</li>
        <li>🌸 Reflection prompts to begin your transformation now</li>
        <li>🌸 A soulful Bali packing list</li>
      </ul>
      <div className="mt-8">
        <a
          href="/The-Second-Spring-Retreat-Guide.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#6A8159] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#5a6e4a] transition-colors"
        >
          👉 Download the Retreat Guide PDF
        </a>
      </div>
    </div>
  </Section>
);

const RegistrationSection: React.FC = () => (
  <Section id="register" className="text-center relative">
    <div
      className="absolute inset-0"
      style={{
        background: "linear-gradient(to bottom right, #FDF8F0, #F8F6F2)",
      }}
    ></div>

    <div className="relative z-10 p-10 md:p-16 rounded-3xl shadow-2xl max-w-3xl mx-auto bg-white/90 backdrop-blur">
      {/* Script headline */}
      <h3 className="text-5xl md:text-6xl font-header-script mb-4" style={{ color: COLORS.green }}>
        Step Into Your Second Spring 🌸
      </h3>

      {/* Bold sans-serif subhead */}
      <p className="text-2xl md:text-3xl font-bold mb-6 leading-relaxed" style={{ color: COLORS.text }}>
        Registration Now Open – October 2025.
      </p>

      {/* Urgency + bonus messages */}
      <p className="mb-4 text-lg md:text-xl font-semibold" style={{ color: COLORS.green }}>
        Register by [DATE] to save $500.
      </p>
      <p className="mb-6 text-lg md:text-xl font-semibold" style={{ color: COLORS.green }}>
        First 5 women receive a private 1:1 coaching session.
      </p>
      <p className="mb-12 text-lg md:text-xl font-semibold" style={{ color: COLORS.text }}>
        Only 20 spots total – don’t wait.
      </p>

      {/* Form */}
      <form className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <label htmlFor="email" className="sr-only">Email Address</label>
        <input
          id="email"
          type="email"
          placeholder="Your email address"
          required
          className="px-6 py-4 rounded-full border border-[#6A8159] bg-[#FDF8F0] focus:ring-2 focus:ring-[#F9A870] outline-none w-full sm:w-auto"
        />
        <CtaButton as="button" type="submit" variant="primary" className="text-xl font-bold px-10 py-5 hover:shadow-2xl transition-all">
          Save My Spot
        </CtaButton>
      </form>

      {/* Trust line */}
      <p className="mt-6 text-lg font-semibold text-[#948B88]">
        No payment today — just reserve your place.
      </p>
    </div>
  </Section>
);

const Footer: React.FC = () => (
  <footer style={{ backgroundColor: COLORS.green }} className="text-white py-16">
    <div className="container mx-auto px-6 md:px-8 grid md:grid-cols-3 gap-12">
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <BrandLogo className="w-14 h-14 mb-3" />
        <span className="text-2xl font-semibold tracking-wider uppercase">
          Second Spring Sisterhood
        </span>
        <a href="mailto:mel@melbyrdrocks.com" className="mt-4 hover:text-white/80 transition-colors">
          mel@melbyrdrocks.com
        </a>
        <div className="flex space-x-4 mt-4">
          <a href="https://instagram.com" aria-label="Instagram">
            <InstagramIcon className="w-6 h-6" />
          </a>
          <a href="https://facebook.com" aria-label="Facebook">
            <FacebookIcon className="w-6 h-6" />
          </a>
        </div>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-4">Explore</h4>
        <ul className="space-y-2">
          <li><a href="/" className="hover:text-white">Retreat Home</a></li>
          <li><a href="/retreat-guide" className="hover:text-white">Retreat Guide</a></li>
          <li><a href="https://melbyrdrocks.com" className="hover:text-white">Melle’s Coaching</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-4">Limited Spaces</h4>
        <p className="mb-6">🌸 Only 20 spots for March 2026 — join us in Bali.</p>
        <CtaButton as="a" href="#register" variant="secondary">
          Save My Spot
        </CtaButton>
      </div>
    </div>

    {/* Bottom bar with contained width */}
    <div className="mt-12 pt-8 border-t border-white/20 max-w-4xl mx-auto text-center text-sm text-white/60 px-4">
      <p className="max-w-2xl mx-auto">
        The Second Spring Sisterhood Retreat is a women’s retreat in Ubud, Bali — designed for rest, renewal, and reconnection.
      </p>
      <p className="mt-4">
        Site designed with love by{" "}
        <a href="https://nafasi.co" target="_blank" rel="noopener noreferrer" className="hover:text-white">
          Nafasi Connection
        </a>.
      </p>
    </div>
  </footer>
);

export default App;