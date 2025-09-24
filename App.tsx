import React from 'react';
import type { Experience, IncludedItem } from './types';
import RetreatRhythmSection from './components/RhythmSection';
import {
  BrandLogo, CheckCircleIcon, SpaIcon, LeafIcon, MessageCircleIcon,
  FlameIcon, MountainIcon, HeartIcon, SparklesIcon, RecycleIcon,
  DownloadIcon, InstagramIcon, FacebookIcon
} from './components/Icons';

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
    image: "https://images.pexels.com/photos/4909331/pexels-photo-4909331.jpeg?auto=compress&cs=tinysrgb&w=800",
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

const RETREAT_RHYTHM_DATA = [
  { title: "Ease Into the Day", subtitle: "Gentle mornings with tea, movement, and breath — no alarms needed." },
  { title: "Sacred Sessions", subtitle: "Workshops, healing, and sisterhood circles to nourish your growth." },
  { title: "Nourishment & Rest", subtitle: "Delicious meals, cozy downtime, naps by the pool, time to just *be*." },
  { title: "Exploration & Ceremony", subtitle: "Excursions, water blessings, fire rituals — all woven with intention." },
  { title: "Evening Connection", subtitle: "Journaling, soft conversation, music, or simply stars and stillness." },
];

const WHO_ATTENDS_DATA = [
  { icon: HeartIcon, title: "Connection" },
  { icon: SparklesIcon, title: "Transformation" },
  { icon: RecycleIcon, title: "Rebirth" },
];

// --- REUSABLE COMPONENTS ---

const CtaButton: React.FC<{
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  as?: 'a' | 'button';
  href?: string;
  type?: string;
}> = ({ children, variant = 'primary', className = '', as = 'button', href, type }) => {
  const baseClasses =
    "font-semibold text-sm tracking-wider uppercase py-4 px-10 rounded-full transform hover:scale-105 transition-all duration-300 ease-in-out shadow-lg";

  const Component = as;

  const variantStyles =
    variant === 'primary'
      ? { backgroundColor: COLORS.peach, color: 'white' }
      : { border: '2px solid white', color: 'white', backgroundColor: 'transparent' };

  return (
    <Component
      href={href}
      type={type}
      className={`${baseClasses} ${className}`}
      style={variantStyles}
    >
      {children}
    </Component>
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

const HeroSection: React.FC = () => (
  <header className="relative h-screen min-h-[700px] w-full flex items-center justify-center text-white text-center bg-gray-800">
    <div className="absolute inset-0 bg-black/40 z-10"></div>
    <img
      src="https://image.pollinations.ai/prompt/serene%20Black%20woman%20meditating%20in%20lush%20Bali%20jungle,%20sunrise,%20soft%20light,%20calm%20aura"
      alt="Serene Black woman meditating in a Bali jungle at sunrise"
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

export {
  COLORS,
  INCLUDED_DATA,
  EXPERIENCES_DATA,
  RETREAT_RHYTHM_DATA,
  WHO_ATTENDS_DATA,
  CtaButton,
  Section,
  SectionTitle,
  HeroSection,
};

const WelcomeSection: React.FC = () => (
  <Section id="welcome" className="relative bg-white overflow-hidden">
    <div className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
      {/* Background shape / glow */}
      <div
        className="absolute inset-0 opacity-60 rounded-full blur-3xl pointer-events-none -z-10"
        style={{ backgroundColor: COLORS.cream }}
      ></div>

      {/* Video placeholder */}
      <div className="rounded-xl overflow-hidden shadow-lg w-full max-w-2xl mb-10 aspect-video">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/VIDEO_ID_HERE"
          title="A Message from Coach Melle"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Quote + title */}
      <p className="italic text-lg mb-3" style={{ color: COLORS.green }}>
        “This is your second spring — and it’s right on time.”
      </p>
      <SectionTitle className="mb-4">A Personal Invitation</SectionTitle>

      {/* Body text */}
      <p className="text-lg leading-relaxed max-w-3xl" style={{ color: COLORS.text }}>
        I created this retreat because I know what it’s like to give, and give, and forget yourself.
        I’ve coached women for over 20 years — CEOs, mothers, healers — and we all hit a point where the mask no longer fits.
        <br /><br />
        The Second Spring is more than a retreat. It’s a <em>reunion</em> with your truth. A sacred space to exhale, laugh, cry, and rise with other women who get it. You don’t need fixing. You need remembering.
        <br /><br />
        <strong>This is your moment. Come home to yourself in Bali.</strong> Bring the parts of you that the world told to be quiet — they’re the loudest ones calling you back.
      </p>

      {/* Signature */}
      <p className="mt-6 font-header-script text-xl" style={{ color: COLORS.green }}>
        — Coach Melle
      </p>
    </div>
  </Section>
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

const RegistrationSection: React.FC = () => (
  <Section id="register" className="text-center relative">
    {/* Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#FDF8F0] to-[#F8F6F2]"></div>

    <div className="relative z-10 p-10 md:p-16 rounded-3xl shadow-2xl max-w-3xl mx-auto bg-white/90 backdrop-blur">
      {/* Headline */}
      <h3 className="text-3xl md:text-4xl font-header-script text-[${COLORS.green}] mb-4">
        Step Into Your Second Spring 🌸
      </h3>
      <p className="text-lg md:text-xl text-[${COLORS.text}] max-w-2xl mx-auto mb-6 leading-relaxed">
        Registration opens <strong>October 2025</strong>.  
        <span className="block mt-1 font-semibold text-[${COLORS.green}]">
          Only 20 spots available. Early-bird pricing ends soon.
        </span>
      </p>

      {/* Countdown (optional dynamic element) */}
      <div className="mb-6 text-sm text-[${COLORS.text}] italic">
        ⏳ 38 days left to claim early-bird pricing
      </div>

      {/* Form */}
      <form className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <input
          type="email"
          placeholder="Your email address"
          className="px-6 py-4 rounded-full border border-[${COLORS.green}] bg-[#FDF8F0] focus:ring-2 focus:ring-[${COLORS.peach}] outline-none w-full sm:w-auto"
        />
        <CtaButton
          as="button"
          type="submit"
          variant="primary"
          className="animate-pulse hover:animate-none"
        >
          Save My Spot
        </CtaButton>
      </form>

      <p className="mt-3 text-sm text-[#948B88]">
        No payment today — just reserve your place.
      </p>

      {/* Secondary CTA */}
      <div className="mt-8">
        <p className="text-sm mb-2 text-[${COLORS.text}]">
          Still deciding? Get the full retreat guide:
        </p>
        <CtaButton
          as="a"
          href="/retreat-info.pdf"
          variant="secondary"
          className="inline-flex items-center gap-2"
        >
          <DownloadIcon className="w-5 h-5" />
          Download Info Sheet
        </CtaButton>
      </div>
    </div>
  </Section>
);

const Footer: React.FC = () => (
  <footer style={{ backgroundColor: COLORS.green }} className="text-white/80 py-16">
    <div className="container mx-auto px-6 md:px-8 text-center">
      <div className="flex items-center justify-center space-x-3">
        <BrandLogo className="w-10 h-10" />
        <span className="text-2xl font-semibold tracking-wider uppercase">Second Spring Sisterhood</span>
      </div>
      <div className="flex justify-center space-x-6 my-8">
        <a href="#" aria-label="Instagram" className="hover:text-white transition-colors">
          <InstagramIcon className="w-6 h-6" />
        </a>
        <a href="#" aria-label="Facebook" className="hover:text-white transition-colors">
          <FacebookIcon className="w-6 h-6" />
        </a>
      </div>
      <p>
        <a href="mailto:mel@melbyrdrocks.com" className="hover:text-white transition-colors">
          mel@melbyrdrocks.com
        </a>
      </p>
      <p className="mt-8 text-sm text-white/50">Site designed with love in Bali.</p>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <main className="antialiased" style={{ backgroundColor: COLORS.cream, color: COLORS.text }}>
      <HeroSection />
      <WelcomeSection />
      <IncludedSection />
      <FlowSection />
      <RetreatRhythmSection />
      <WhoShouldAttendSection />
      <WhyBaliSection />
      <RegistrationSection />
      <Footer />
    </main>
  );
};

export default App;