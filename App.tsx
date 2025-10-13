import React from 'react';
import type { Experience, IncludedItem } from './types';
import RetreatRhythmSection from './components/RhythmSection';
import {
  CheckCircleIcon, SpaIcon, LeafIcon, MessageCircleIcon,
  SparklesIcon, InstagramIcon, MountainIcon
} from './components/Icons';
import NavBar from './components/NavBar'; 
import { COLORS } from './config';
import { Calendar1Icon } from 'lucide-react';

// --- CONFIG & DATA ---
const INCLUDED_DATA: IncludedItem[] = [
  {
    text: "Accommodations in a private jungle villa",
    subtext: "Wake up where the jungle sings your name.",
    featured: true,
  },
  {
    text: "Daily locally-sourced meals",
    subtext: "Nourish yourself with every bite.",
  },
  {
    text: "All workshops, ceremonies, and healing sessions",
    subtext: "Come home to the parts of you that feel forgotten.",
  },
  {
    text: "A guided water blessing at a local waterfall",
    subtext: "Walk the sacred paths of Bali with intention.",
  },
  {
    text: "Professional photographer to capture your glow",
    subtext: "Because your radiance deserves to be witnessed.",
  },
  {
    text: "A curated welcome gift to kick off your journey",
    subtext: "A blessing from the island to take home.",
  },
];

const EXPERIENCES_DATA: Experience[] = [
  {
    icon: SpaIcon,
    title: "Morning Rituals",
    description: "Start each day with movement, affirmations, and meditation to align your mind, body, and spirit.",
    image: "Morning Ritual.jpg",
  },
  {
    icon: LeafIcon,
    title: "Holistic Healings",
    description: "Restore balance with Balinese-led rituals, yoga, and sound healing.",
    image: "https://images.pexels.com/photos/8330352/pexels-photo-8330352.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: MessageCircleIcon,
    title: "Sisterhood Circles",
    description: "Reclaim your power through transformative workshops and deep conversations.",
    image: "https://images.pexels.com/photos/5890690/pexels-photo-5890690.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
   {
    icon: SparklesIcon,
    title: "Sacred Ceremonies",
    description: "Reconnect with your inner self through traditional Balinese blessings.",
    image: "Sacred.jpg",
  },
  {
    icon: MountainIcon,
    title: "Group Excursions",
    description: "Explore Bali's natural beauty with guided waterfall visits, the Bali swing, and optional beach clubs.",
    image: "Group excursion.jpg",
  },
  {
    icon: Calendar1Icon,
    title: "Self-Reflection with Journaling",
    description: "Document your warm and cool experiences. Learn and grow from your authoring.",
    image: "SSS Journal.jpg",
  },
];

// --- REUSABLE COMPONENTS ---

const CtaButton: React.FC<{
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  as?: 'a' | 'button';
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}> = ({
  children, variant = 'primary', as = 'button', href, type, className = ''
}) => {
  const baseClasses =
    "px-8 py-4 rounded-full font-bold tracking-wide shadow-lg transition-all duration-300 transform text-white";
  const hoverClasses = {
    primary: "hover:bg-[#4d2053] hover:scale-105 hover:shadow-2xl hover:-translate-y-1",
    secondary: "hover:bg-[#E68A54] hover:scale-105 hover:shadow-2xl hover:-translate-y-1",
  };
  const backgroundStyle = {
    backgroundColor: variant === 'primary' ? COLORS.plum : COLORS.rose,
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const id = href.replace('#', '');
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const combinedClassName = `${baseClasses} ${hoverClasses[variant]} ${className}`;

  if (as === 'a' && href) {
    return (
      <a
        href={href}
        onClick={href.startsWith('#') ? handleSmoothScroll : undefined}
        className={combinedClassName}
        style={backgroundStyle}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClassName}
      style={backgroundStyle}
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
    className={`text-5xl md:text-6xl font-header-script font-semibold ${className}`}
    style={{ color: COLORS.plum }}
  >
    {children}
  </h2>
);

const WhiteSectionTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <h2
    className={`text-5xl md:text-6xl font-header-script font-semibold text-white ${className}`}
  >
    {children}
  </h2>
);

const EyebrowText: React.FC<{ children: React.ReactNode; className?: string; color?: string }> = ({
  children,
  className = '',
  color = COLORS.rose,
}) => (
  <p
    className={`uppercase text-sm tracking-widest font-bold text-center ${className}`}
    style={{ color }}
  >
    {children}
  </p>
);

// --- PAGE SECTIONS ---

const App: React.FC = () => (
  <main style={{ backgroundColor: COLORS.warmBeige, color: COLORS.primaryText }} className="antialiased">
    <NavBar />
    <HeroSection />
    <WelcomeSection />
    <WhyBaliSection />
    <WhoShouldAttendSection />
    <FlowSection />
    <RetreatRhythmSection />
    <IncludedSection />
    <RetreatGuideSection />
    <RegistrationSection />
    <Footer />
  </main>
);

// MainPageContainers
const HeroSection: React.FC = () => (
  <header className="relative h-screen min-h-[700px] w-full flex items-center justify-center text-white text-center bg-gray-800">
    <div className="absolute inset-0 bg-black/40 z-10"></div>
   <img
      src="https://images.pexels.com/photos/235648/pexels-photo-235648.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920"
      alt="Sunlit Bali rice terraces in Tegallalang – women’s healing retreat in Ubud"
      className="absolute inset-0 w-full h-full object-cover"
    />

    <div className="relative z-20 p-4 flex flex-col items-center max-w-4xl">
      {/* <img src="logo1.png" alt="Second Spring Sisterhood Logo" className="w-30 h-24 mb-6" /> */}
      <h1 className="font-header-script text-7xl md:text-9xl drop-shadow-lg">
        The Second Spring Sisterhood Retreat
      </h1>
      <p className="mt-4 text-2xl md:text-3xl font-light tracking-wide drop-shadow-md">
        Blossom into Full Bloom
      </p>
      <p className="mt-6 text-lg md:text-xl font-semibold tracking-wider drop-shadow">
        March 24–27, 2026 | Ubud, Bali | Hosted by Coach Melle
      </p>
      {/* <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <CtaButton as="a" href="#register" variant="primary">
          Save My Spot
        </CtaButton>
        <CtaButton as="a" href="#welcome" variant="secondary">
          Learn More
        </CtaButton>
      </div> */}
    </div>
  </header>
);

// WelcomeSection
const WelcomeSection: React.FC = () => (
  <section id="welcome" className="relative bg-white overflow-hidden py-20 px-4">
    <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
      <div
        className="absolute inset-0 opacity-60 rounded-full blur-3xl pointer-events-none -z-10"
        style={{ backgroundColor: COLORS.warmBeige }}
      />
      <div className="rounded-xl overflow-hidden shadow-lg w-full max-w-2xl mb-10 aspect-video">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/y_Sg0mpou3g" 
          

          title="A Message from Coach Melle"
          style={{ border: 0 }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <p className="italic text-lg mb-3" style={{ color: COLORS.plum }}>
        {/* “This is your second spring — and it’s right on time.” */}
      </p>
      <SectionTitle className="mb-4 text-center" >Come Home to Yourself in Bali</SectionTitle>
      <div className="text-lg max-w-3xl" style={{ color: COLORS.primaryText }}>
        <p>
            Imagine yourself in Bali, the Island of the Gods, surrounded by lush rice fields, healing waters, and the warmth of sisterhood. The Second Spring Sisterhood Retreat is your invitation to pause, reset, and rise into the radiant season of the authentic you. This sacred journey is curated for women ready to embrace joy, clarity, and courage in a space where they feel seen, heard, and celebrated.
        </p>
      </div>
      <p className="mt-6 text-sm md:text-base opacity-90" style={{ color: COLORS.plum }}>
        <strong>
        Led by Coach Melle, a transformational guide with 20+ years supporting women.
        To begin your journey,message Coach Melle at mel@melbyrdrocks.com.She will contact you directly on next steps
        </strong>
      </p>
    </div>
  </section>
);

// IncludedSection
const IncludedSection: React.FC = () => (
  <Section id="included">
    <div className="text-center mb-16">
      <SectionTitle>What’s Included</SectionTitle>
      <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: COLORS.primaryText }}>
        Your investment includes everything you need to feel nourished and inspired: accommodations in a private villa, daily meals, all workshops and healing sessions, excursions, and retreat materials.
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
              style={{ backgroundColor: COLORS.rose }}
            >
              Most Loved
            </span>
          )}
          <div className="flex items-start space-x-4">
            <div
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-inner group-hover:shadow-[0_0_10px_rgba(106,129,89,0.5)] transition duration-300"
              style={{ border: `1px solid ${COLORS.plum}` }}
            >
              <CheckCircleIcon className="w-5 h-5" style={{ color: COLORS.plum }} />
            </div>
            <div>
              <p className="text-lg font-semibold" style={{ color: COLORS.primaryText }}>
                {item.text}
              </p>
              {item.subtext && <p className="text-sm mt-1" style={{ color: COLORS.warmGray }}>{item.subtext}</p>}
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

// FlowSection
const FlowSection: React.FC = () => (
  <Section id="flow" className="bg-white">
    <div className="text-center mb-8">
      <SectionTitle className="text-center mb-4">The Vibe</SectionTitle>
      <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: COLORS.primaryText }}>
        Your time in Bali will be a journey of profound flow and connection.
      </p>
    </div>
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {EXPERIENCES_DATA.map((item) => (
        <div
          key={item.title}
          className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
          style={{ backgroundColor: COLORS.warmBeige }}
        >
          <img src={item.image} alt={item.title} className="w-full h-72 object-cover" />
          <div className="p-6 text-center flex-1 flex flex-col">
            <item.icon className="w-8 h-8 mx-auto mb-3" style={{ color: COLORS.plum }} />
            <h3 className="text-xl font-bold mb-2" style={{ color: COLORS.plum }}>
              {item.title}
            </h3>
            <p className="text-sm flex-1" style={{ color: COLORS.primaryText }}>
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

// WhoShouldAttendSection
const WhoShouldAttendSection: React.FC = () => (
  <Section id="who-attends" className="relative bg-white">
    <div className="text-center max-w-4xl mx-auto">
      <SectionTitle className="mb-6">This Retreat Is For You</SectionTitle>
      <p className="text-lg mb-10 max-w-3xl mx-auto" style={{ color: COLORS.primaryText }}>
        This retreat is for the woman who has walked through life’s storms, learned her lessons, and is now ready to rise into her power with grace and joy. It’s for the woman who knows more is waiting after she releases old stories, silences limiting beliefs, and steps boldly into peace, purpose, and possibility. If your spirit longs to be poured into, if you’re ready to invest wholeheartedly in your mind, body, and spirit, and if you desire the embrace of a circle of sisters who see you, honor you, and celebrate your growth—this Retreat is for YOU.
      </p>
      
      <div className="mt-12">
        <CtaButton as="a" href="#register" variant="primary">
          Save My Spot
        </CtaButton>
      </div>
    </div>
  </Section>
);

// WhyBaliSection
const WhyBaliSection: React.FC = () => (
  <Section id="why-bali" className="relative text-white">
    {/* Background image with overlay */}
    <div className="absolute inset-0">
      <img
        src="Why Bali.jpg"
        alt="Balinese temple ritual at sunrise"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50"></div>
    </div>
    <div className="relative z-10 text-center max-w-5xl mx-auto">
      <EyebrowText className="mb-2" color="white">The Island That Celebrates You</EyebrowText>
      <WhiteSectionTitle className="mb-6">Why Bali?</WhiteSectionTitle>
      <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto">
        Bali is not just a destination; it's a living sanctuary. The island's serene landscapes and spiritual energy provide the perfect backdrop for healing and connection. Surrounded by lush rice terraces and the sacred rhythm of a slower life, you'll find your place to step out of the everyday and into the brand new you.
      </p>
      {/* <CtaButton as="a" href="#register" variant="primary">
        Save My Spot
      </CtaButton> */}
    </div>
  </Section>
);

// RetreatGuide (No component exists, inline in App.tsx)
const RetreatGuideSection: React.FC = () => (
  <Section id="retreat-guide" className="bg-white text-center py-20 px-4">
    <div className="max-w-2xl mx-auto">
      {/* <EyebrowText className="mb-2">Your Journey Begins Here</EyebrowText> */}
      <h2 className="text-5xl md:text-6xl font-header-script font-semibold mb-6" style={{ color: COLORS.plum }}>
        Your Second Spring<br/> 
        Retreat Guide
      </h2>
      <p className="mb-8 text-lg" style={{ color: COLORS.primaryText }}>
        We’ve prepared something special for you. The Second Spring Retreat Guide is more than an itinerary — it’s a taste of the journey awaiting you in Bali. Inside, you’ll find:
      </p>
      <ul className="mb-10 text-center text-lg max-w-lg mx-auto space-y-3">
        <li>🪷 A welcome letter from Coach Melle</li>
        <li>🪷 A day-in-the-life retreat rhythm</li>
        <li>🪷 Reflection prompts to begin your transformation now</li>
        <li>🪷 A soulful Bali packing list</li>
      </ul>
      <p>Begin now — your journey starts the moment you open it.</p>
      <div className="mt-8">
        <a
          href="/The-Second-Spring-Retreat-Guide.pdf" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#4d2053] transition-colors"
          style={{ backgroundColor: COLORS.plum }}
        >
          👉 Download the Retreat Guide
        </a>
      </div>
    </div>
  </Section>
);

// RegistrationSaveMySpot
const RegistrationSection: React.FC = () => {
  return (
<Section id="register" className="text-center relative">
  <div
    className="absolute inset-0"
    style={{
      background: `linear-gradient(to bottom right, ${COLORS.warmBeige}, #FEFBF6)`,
    }}
  ></div>
  <div className="relative z-10 p-16 rounded-3xl shadow-2xl max-w-screen-lg mx-auto bg-white/90 backdrop-blur">
    <SectionTitle className="mb-4 text-center">
      How to Join the Sisterhood 
    </SectionTitle>

    <p className="text-lg max-w-3xl mx-auto mb-10" style={{ color: COLORS.primaryText }}>
      Registration opens late October 2025. Spaces are limited to only 20 women. 
      This is your moment to step into renewal, community, and your Second Spring.
    </p>

    <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
      <a
        href="https://forms.gle/utvALEbGc1ihbFiZA"
        target="_blank"
        rel="noopener noreferrer"
        className="px-10 py-5 rounded-full text-white font-extrabold text-xl shadow-lg hover:bg-[#4d2053] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:-translate-y-1"
        style={{ backgroundColor: COLORS.plum }}
      >
        Save My Spot
      </a>
    </div>
  </div>
</Section>
  );
};

// Footer
const Footer: React.FC = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = [
    { name: 'About', href: '#welcome', id: 'welcome' },
    { name: 'The Vibe', href: '#flow', id: 'flow' },
    { name: 'What\'s Included', href: '#included', id: 'included' },
    { name: 'Retreat Guide', href: '#retreat-guide', id: 'retreat-guide' },
  ];

  return (
    <footer style={{ backgroundColor: COLORS.warmBeige, color: COLORS.primaryText }} className="pt-20 pb-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          {/* Column 1: Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start">
            <img src="logo1.png" alt="Second Spring Sisterhood Logo" className="h-20 w-auto mb-4" />
            <p className="font-header-script text-3xl mb-4" style={{ color: COLORS.plum }}>
              Your second spring awaits.
            </p>
            <p className="text-sm">
              A sacred space for women to rest, renew, and rise into their full bloom.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wider mb-4" style={{ color: COLORS.plum }}>Explore</h3>
            <ul className="space-y-3">
              {footerLinks.map(link => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    onClick={(e) => handleSmoothScroll(e, link.id)}
                    className="hover:underline transition-colors duration-300"
                    style={{ color: 'inherit' }} // Use parent color
                    onMouseOver={e => (e.currentTarget.style.color = COLORS.plum)}
                    onMouseOut={e => (e.currentTarget.style.color = 'inherit')}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect & CTA */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wider mb-4" style={{ color: COLORS.plum }}>Connect</h3>
            <div className="flex justify-center md:justify-start items-center gap-5 mb-6">
              <a
                // href="https://instagram.com/melbyrdrocks/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="transition-transform duration-300 hover:scale-110"
                style={{ color: 'inherit' }}
                onMouseOver={e => (e.currentTarget.style.color = COLORS.plum)}
                onMouseOut={e => (e.currentTarget.style.color = 'inherit')}
              >
                <InstagramIcon className="w-7 h-7" />
              </a>
              <a
                //  href="https://instagram.com/melbyrdrocks/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold uppercase tracking-wider hover:underline transition-colors duration-300"
                style={{ color: 'inherit' }}
                onMouseOver={e => (e.currentTarget.style.color = COLORS.plum)}
                onMouseOut={e => (e.currentTarget.style.color = 'inherit')}
              >
                Coach Melle
              </a>
            </div>
            <CtaButton as="a" href="#register" variant="primary" className="w-full md:w-auto">
              Save My Spot
            </CtaButton>
          </div>

        </div>
        
        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t text-center text-xs opacity-80" style={{ borderColor: COLORS.warmGray, color: COLORS.primaryText }}>
          <p className="mb-2">
             © 2026 Second Spring Sisterhood Retreat • Ubud, Bali, Indonesia
          </p>
          <p>
            Site designed with love by Nafasi Connection.
          </p>
        </div>
      </div>
    </footer>
  );
};


export default App;