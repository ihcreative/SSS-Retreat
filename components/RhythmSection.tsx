import React from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon, LeafIcon, HeartIcon, SunIcon, MoonIcon } from './Icons';
import { COLORS } from '../config';

const RHYTHM_DATA = [
  {
    icon: <SunIcon style={{ color: COLORS.plum }} className="w-6 h-6" />,
    title: 'Soft Opening of the Day',
    description: 'Gentle mornings with tea, movement, and breath — no alarms needed.',
  },
  {
    icon: <HeartIcon style={{ color: COLORS.plum }} className="w-6 h-6" />,
    title: 'Sacred Sessions',
    description: 'Nourish your growth with Yoga, Breathwork, Qigong and Sisterhood Circles to nourish your growth.',
  },
  {
    icon: <LeafIcon style={{ color: COLORS.plum }} className="w-6 h-6" />,
    title: 'Dedicated Time to Reset',
    description: 'You will focus on your needs and what is best for your ascension',
  },
  {
    icon: <CalendarIcon style={{ color: COLORS.plum }} className="w-6 h-6" />,
    title: 'Exploration & Ceremony',
    description: 'Excursions, water blessings, and sound healing – all woven with intention.',
  },
  {
    icon: <MoonIcon style={{ color: COLORS.plum }} className="w-6 h-6" />,
    title: 'Evening Connection',
    description: 'Journaling, soft conversation, music, or simply stars and stillness.',
  },
];

const EyebrowText: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <p
    className={`uppercase text-sm tracking-widest font-bold text-center ${className}`}
    style={{ color: COLORS.rose }}
  >
    {children}
  </p>
);

const SectionTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <h2
    className={`text-4xl sm:text-5xl md:text-6xl font-header-script font-semibold text-center ${className}`}
    style={{ color: COLORS.plum }}
  >
    {children}
  </h2>
);

const RetreatRhythmSection: React.FC = () => {
  return (
    <section
      style={{ backgroundColor: COLORS.warmBeige }}
      className="py-16 sm:py-20 px-4 sm:px-8"
    >
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <SectionTitle className="mb-4">The Rhythm of Your Day</SectionTitle>
        <p
          style={{ color: COLORS.primaryText }}
          className="text-base sm:text-lg leading-relaxed"
        >
          You need a rhythm that lets you breathe, connect, and bloom. We designed this retreat to flow with ease — balancing structure and softness to rejuvenate your whole being with The flow of each day lets you breathe, connect, and blossom. We designed this retreat with ease to balance structure and softness that rejuvenates your whole being.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Vertical timeline line (hidden on small screens) */}
        <div
          className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full border-l-2"
          style={{ borderColor: COLORS.warmGray }}
        ></div>

        <div className="flex flex-col gap-8 sm:gap-12">
          {RHYTHM_DATA.map((item, index) => (
            <motion.div
              key={index}
              className={`relative flex flex-col md:flex-row items-center md:items-stretch ${
                index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
              } w-full`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              {/* Timeline dot (centered for md+) */}
              <motion.div
                className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                whileHover={{ scale: 1.2 }}
              >
                <div
                  className="w-4 h-4 rounded-full border-4 border-white shadow animate-pulse"
                  style={{ backgroundColor: COLORS.plum }}
                ></div>
              </motion.div>

              {/* Card container */}
              <motion.div
                className={`w-full md:w-1/2 px-0 md:px-6 ${
                  index % 2 === 0 ? 'md:pr-10' : 'md:pl-10'
                }`}
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <div className="bg-white shadow-md rounded-2xl p-5 sm:p-6 hover:shadow-lg transition duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="p-2 sm:p-3 rounded-full flex-shrink-0"
                      style={{ backgroundColor: COLORS.warmBeige }}
                    >
                      {item.icon}
                    </div>
                    <h3
                      className="text-2xl sm:text-3xl font-header-script font-bold"
                      style={{ color: COLORS.plum }}
                    >
                      {item.title}
                    </h3>
                  </div>
                  <p
                    className="text-sm sm:text-base leading-relaxed"
                    style={{ color: COLORS.primaryText }}
                  >
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RetreatRhythmSection;
