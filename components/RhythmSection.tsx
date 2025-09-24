import React from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon, LeafIcon, HeartIcon, SunIcon, MoonIcon } from 'lucide-react';

const RHYTHM_DATA = [
  {
    icon: <SunIcon className="text-green-700 w-6 h-6" />,
    title: 'Ease Into the Day',
    description: 'Gentle mornings with tea, movement, and breath — no alarms needed.',
  },
  {
    icon: <HeartIcon className="text-green-700 w-6 h-6" />,
    title: 'Sacred Sessions',
    description: 'Workshops, healing, and sisterhood circles to nourish your growth.',
  },
  {
    icon: <LeafIcon className="text-green-700 w-6 h-6" />,
    title: 'Nourishment & Rest',
    description: 'Delicious meals, cozy downtime, naps by the pool, time to just *be*.',
  },
  {
    icon: <CalendarIcon className="text-green-700 w-6 h-6" />,
    title: 'Exploration & Ceremony',
    description: 'Excursions, water blessings, fire rituals — all woven with intention.',
  },
  {
    icon: <MoonIcon className="text-green-700 w-6 h-6" />,
    title: 'Evening Connection',
    description: 'Journaling, soft conversation, music, or simply stars and stillness.',
  },
];

const RetreatRhythmSection: React.FC = () => {
  return (
    <section className="bg-[#FAF9F5] py-20 px-4">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm uppercase tracking-widest text-green-700 font-semibold">Flow, Not Force</p>
        <h2 className="text-4xl font-cursive text-green-900 mt-2 mb-4">The Rhythm of Your Day</h2>
        <p className="text-gray-600 text-lg">
          You don’t need a rigid schedule. You need a rhythm that lets you breathe, connect, and bloom.
          We designed this retreat to flow with ease — balancing structure and softness to rejuvenate your whole being.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Center timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-green-200"></div>

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
              {/* Timeline dot */}
              <motion.div
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                whileHover={{ scale: 1.2 }}
              >
                <div className="w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow animate-pulse"></div>
              </motion.div>

              {/* Card */}
              <motion.div
                className="w-1/2 px-6"
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="bg-white shadow-md rounded-lg p-6 transition duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-green-100 p-2 rounded-full">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold text-green-800">{item.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
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