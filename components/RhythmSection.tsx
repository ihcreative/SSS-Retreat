import React from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon, LeafIcon, HeartIcon, SunIcon, MoonIcon } from './Icons';

const COLORS = {
  plum: "#6A8159",
  rose: "#F9A870",
  warmBeige: "#FDF8F0",
  softLavender: "#D8C7E5",
  primaryText: "#99725F",
  warmGray: "#C3BCAF",
};

const RHYTHM_DATA = [
  {
    icon: <SunIcon style={{ color: COLORS.plum }} className="w-6 h-6" />,
    title: 'Ease Into the Day',
    description: 'Gentle mornings with tea, movement, and breath — no alarms needed.',
  },
  {
    icon: <HeartIcon style={{ color: COLORS.plum }} className="w-6 h-6" />,
    title: 'Sacred Sessions',
    description: 'Workshops, healing, and sisterhood circles to nourish your growth.',
  },
  {
    icon: <LeafIcon style={{ color: COLORS.plum }} className="w-6 h-6" />,
    title: 'Nourishment & Rest',
    description: 'Delicious meals, cozy downtime, naps by the pool, time to just *be*.',
  },
  {
    icon: <CalendarIcon style={{ color: COLORS.plum }} className="w-6 h-6" />,
    title: 'Exploration & Ceremony',
    description: 'Excursions, water blessings, fire rituals — all woven with intention.',
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
    className={`text-5xl md:text-6xl font-header-script font-semibold text-center ${className}`}
    style={{ color: COLORS.plum }}
  >
    {children}
  </h2>
);

const RetreatRhythmSection: React.FC = () => {
  return (
    <section style={{ backgroundColor: COLORS.warmBeige }} className="py-20 px-4">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <EyebrowText className="mb-2">Flow, Not Force</EyebrowText>
        <SectionTitle className="mb-4">The Rhythm of Your Day</SectionTitle>
        <p style={{ color: COLORS.primaryText }} className="text-lg">
          You don’t need a rigid schedule. You need a rhythm that lets you breathe, connect, and bloom.
          We designed this retreat to flow with ease — balancing structure and softness to rejuvenate your whole being.
        </p>
      </div>
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2" style={{ borderColor: COLORS.warmGray }}></div>
        <div className="flex flex-col gap-0">
          {RHYTHM_DATA.map((item, index) => (
            <motion.div
              key={index}
              className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} w-full -mt-10`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                whileHover={{ scale: 1.2 }}
              >
                <div className="w-4 h-4 rounded-full border-4 border-white shadow animate-pulse" style={{ backgroundColor: COLORS.plum }}></div>
              </motion.div>
              <motion.div
                className="w-1/2 px-6"
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="bg-white shadow-md rounded-lg p-6 transition duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-full" style={{ backgroundColor: COLORS.warmBeige }}>
                      {item.icon}
                    </div>
                    <h3 className="text-3xl font-header-script font-bold mb-2" style={{ color: COLORS.plum }}>{item.title}</h3>
                  </div>
                  <p className="text-sm" style={{ color: COLORS.primaryText }}>{item.description}</p>
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