import React from 'react';
import type { Experience, IncludedItem } from './types';
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
  { icon: SpaIcon, title: "Morning Rituals", description: "Greet the day with gentle yoga, meditation, and intention setting." },
  { icon: LeafIcon, title: "Holistic Healing", description: "Experience traditional Balinese healing modalities and workshops." },
  { icon: MessageCircleIcon, title: "Sisterhood Circles", description: "Connect deeply in sacred circles of sharing and listening." },
  { icon: FlameIcon, title: "Sacred Ceremony", description: "Participate in powerful fire ceremonies and water blessings." },
  { icon: MountainIcon, title: "Excursions", description: "Explore the natural beauty and spiritual sites of Ubud." },
];

const WHO_ATTENDS_DATA = [
    { icon: HeartIcon, title: "Connection" },
    { icon: SparklesIcon, title: "Transformation" },
    { icon: RecycleIcon, title: "Rebirth" },
]

// --- REUSABLE COMPONENTS ---

const CtaButton: React.FC<{ children: React.ReactNode; variant?: 'primary' | 'secondary'; className?: string, as?: 'a' | 'button', href?: string }> = ({ children, variant = 'primary', className = '', as = 'button', href }) => {
  const baseClasses = "font-semibold text-sm tracking-wider uppercase py-4 px-10 rounded-full transform hover:scale-105 transition-all duration-300 ease-in-out shadow-lg";
  const styles = {
    primary: `bg-[${COLORS.peach}] text-white hover:bg-opacity-90`,
    secondary: `bg-transparent border-2 border-white text-white hover:bg-white hover:text-[${COLORS.text}]`
  };
  
  const Component = as;

  return <Component href={href} className={`${baseClasses} ${styles[variant]} ${className}`}>{children}</Component>;
};

const Section: React.FC<{ id: string; children: React.ReactNode; className?: string }> = ({ id, children, className = '' }) => (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
            {children}
        </div>
    </section>
);

const SectionTitle: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className= "" }) => (
  <h2 className={`text-5xl md:text-6xl font-header-script text-[${COLORS.green}] ${className}`}>{children}</h2>
);

// --- PAGE SECTIONS ---

const HeroSection: React.FC = () => (
    <header className="relative h-screen min-h-[700px] w-full flex items-center justify-center text-white text-center bg-gray-800">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img src="https://image.pollinations.ai/prompt/serene%20Black%20woman%20meditating%20in%20lush%20Bali%20jungle,%20sunrise,%20soft%20light,%20calm%20aura" alt="Serene Black woman meditating in a Bali jungle at sunrise" className="absolute inset-0 w-full h-full object-cover"
/>
        
        <div className="relative z-20 p-4 flex flex-col items-center max-w-4xl">
            <BrandLogo className="w-20 h-20 mb-6 text-white" />
            <h1 className="font-header-script text-7xl md:text-9xl drop-shadow-lg">The Second Spring Sisterhood Retreat</h1>
            <p className="mt-4 text-2xl md:text-3xl font-light tracking-wide drop-shadow-md">Blossom into Full Bloom</p>
            <p className="mt-6 text-lg md:text-xl font-semibold tracking-wider drop-shadow">March 24–27, 2026 | Ubud, Bali | Hosted by Coach Melle</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <CtaButton variant="primary">Join the Interest List</CtaButton>
                <CtaButton variant="secondary">Learn More</CtaButton>
            </div>
        </div>
    </header>
);

const WelcomeSection: React.FC = () => (
  <Section id="welcome" className="relative bg-white overflow-hidden">
    <div className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
      {/* Background shape / glow */}
      <div className="absolute inset-0 bg-[${COLORS.cream}] opacity-60 rounded-full blur-3xl pointer-events-none -z-10"></div>

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
      <p className="italic text-lg text-[${COLORS.green}] mb-3">“This is your second spring — and it’s right on time.”</p>
      <SectionTitle className="mb-4">A Personal Invitation</SectionTitle>

      {/* Body text */}
      <p className={`text-lg text-[${COLORS.text}] leading-relaxed max-w-3xl`}>
        I created this retreat because I know what it’s like to give, and give, and forget yourself.
        I’ve coached women for over 20 years — CEOs, mothers, healers — and we all hit a point where the mask no longer fits.
        <br/><br/>
        The Second Spring is more than a retreat. It’s a <em>reunion</em> with your truth. A sacred space to exhale, laugh, cry, and rise with other women who get it. You don’t need fixing. You need remembering.
        <br/><br/>
        <strong>This is your moment. Come home to yourself in Bali.</strong> Bring the parts of you that the world told to be quiet — they’re the loudest ones calling you back.
      </p>

      {/* Signature */}
      <p className={`mt-6 font-header-script text-xl text-[${COLORS.green}]`}>— Coach Melle</p>
    </div>
  </Section>
);

const IncludedSection: React.FC = () => (
  <Section id="included">
    <div className="text-center mb-16">
      <p className="uppercase text-sm tracking-widest text-[${COLORS.green}] font-bold">All-Inclusive Care</p>
      <SectionTitle>What’s Included</SectionTitle>
      <p className={`mt-4 text-[${COLORS.text}] text-lg max-w-2xl mx-auto`}>
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
            <span className="absolute top-0 right-0 bg-[${COLORS.peach}] text-white text-xs px-2 py-1 rounded-bl-lg font-semibold shadow">
              Most Loved
            </span>
          )}
          <div className="flex items-start space-x-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-[${COLORS.green}] shadow-inner group-hover:shadow-[0_0_10px_rgba(106,129,89,0.5)] transition duration-300">
              <CheckCircleIcon className={`w-5 h-5 text-[${COLORS.green}]`} />
            </div>
            <div>
              <p className={`text-[${COLORS.text}] text-lg font-semibold`}>{item.text}</p>
              {item.subtext && (
                <p className="text-sm text-[#948B88] mt-1">{item.subtext}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-16 text-center">
      <CtaButton variant="primary">Join the Interest List</CtaButton>
    </div>
  </Section>
);

const FlowSection: React.FC = () => (
    <Section id="flow" className="bg-white">
        <SectionTitle className="text-center mb-16">What is the Flow?</SectionTitle>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {EXPERIENCES_DATA.map(item => (
                <div key={item.title} className={`bg-[${COLORS.cream}] p-8 rounded-lg text-center flex flex-col items-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300`}>
                    <item.icon className={`w-12 h-12 text-[${COLORS.green}] mb-4`} />
                    <h3 className={`text-xl font-bold text-[${COLORS.green}] mb-2`}>{item.title}</h3>
                    <p className={`text-[${COLORS.text}] text-sm`}>{item.description}</p>
                </div>
            ))}
        </div>
    </Section>
);

const WhoShouldAttendSection: React.FC = () => (
    <Section id="who-attends">
        <div className="text-center max-w-3xl mx-auto">
            <SectionTitle className="mb-6">Who Should Attend?</SectionTitle>
            <p className={`text-lg text-[${COLORS.text}] leading-relaxed`}>
                This retreat is a sacred call to the woman who is navigating a new chapter of life. The woman who feels the stirrings of change and is ready to embrace her "second spring" with grace, power, and clarity. She is ready to shed old layers, reclaim her joy, and step into her most radiant, authentic self.
            </p>
             <div className="flex justify-center space-x-12 mt-12">
                {WHO_ATTENDS_DATA.map(item => (
                    <div key={item.title} className="flex flex-col items-center group">
                        <item.icon className={`w-12 h-12 text-[${COLORS.green}] transition-transform duration-300 group-hover:scale-110`} />
                        <span className={`mt-3 font-semibold text-[${COLORS.text}]`}>{item.title}</span>
                    </div>
                ))}
            </div>
        </div>
    </Section>
);

const WhyBaliSection: React.FC = () => (
     <Section id="why-bali" className="bg-white">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="grid grid-cols-2 gap-4">
                <img src="https://images.pexels.com/photos/1579038/pexels-photo-1579038.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Lush Bali rice terraces" className="rounded-lg shadow-lg w-full h-full object-cover aspect-[4/5]"/>
                <img src="https://images.pexels.com/photos/3225528/pexels-photo-3225528.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Tropical jungle waterfall in Bali" className="rounded-lg shadow-lg w-full h-full object-cover aspect-[4/5] mt-8"/>
            </div>
            <div>
                <SectionTitle className="mb-6">Why Bali?</SectionTitle>
                <p className={`text-lg text-[${COLORS.text}] leading-relaxed`}>
                   Known as the "Island of the Gods," Bali is a land where spirituality is woven into the fabric of daily life. Its powerful energy, vibrant culture, and breathtaking landscapes create the perfect container for deep healing and transformation. From the sacred waters of Tirta Empul to the verdant rice terraces, every corner of this island invites you to come home to yourself.
                </p>
            </div>
        </div>
    </Section>
);

const RegistrationSection: React.FC = () => (
    <Section id="register" className="text-center">
         <div className={`bg-[${COLORS.pink}]/30 p-10 md:p-16 rounded-lg max-w-4xl mx-auto`}>
            <h3 className="text-2xl font-semibold text-[${COLORS.green}] tracking-wider">✨ Registration opens October 2025. Spaces are limited. ✨</h3>
            <p className={`mt-4 text-lg text-[${COLORS.text}] max-w-xl mx-auto`}>Be the first to know when doors open and receive early bird pricing.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
                 <CtaButton variant="primary" className="bg-[#F9A870] text-white">Get Notified Early</CtaButton>
                 <a href="#" className={`inline-flex items-center justify-center gap-2 text-[${COLORS.green}] font-bold hover:opacity-80 transition-opacity`}>
                    <DownloadIcon className="w-5 h-5" />
                    Download Info Sheet
                 </a>
            </div>
        </div>
    </Section>
);

const Footer: React.FC = () => (
    <footer className={`bg-[${COLORS.green}] text-white/80 py-16`}>
        <div className="container mx-auto px-6 md:px-8 text-center">
            <div className="flex items-center justify-center space-x-3">
                 <BrandLogo className="w-10 h-10"/>
                 <span className="text-2xl font-semibold tracking-wider uppercase">Second Spring Sisterhood</span>
            </div>
            <div className="flex justify-center space-x-6 my-8">
                <a href="#" aria-label="Instagram" className="hover:text-white transition-colors"><InstagramIcon className="w-6 h-6" /></a>
                <a href="#" aria-label="Facebook" className="hover:text-white transition-colors"><FacebookIcon className="w-6 h-6" /></a>
            </div>
            <p><a href="mailto:mel@melbyrdrocks.com" className="hover:text-white transition-colors">mel@melbyrdrocks.com</a></p>
            <p className="mt-8 text-sm text-white/50">Site designed with love in Bali.</p>
        </div>
    </footer>
);

const App: React.FC = () => {
    return (
        <main className={`bg-[${COLORS.cream}] text-[${COLORS.text}] antialiased`}>
            <HeroSection />
            <WelcomeSection />
            <IncludedSection />
            <FlowSection />
            <WhoShouldAttendSection />
            <WhyBaliSection />
            <RegistrationSection />
            <Footer />
        </main>
    );
};

export default App;
