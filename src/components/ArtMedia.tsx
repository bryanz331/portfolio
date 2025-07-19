import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import painting1 from '../images/painting-1.jpg';
import painting2 from '../images/painting-2.jpg';
import painting3 from '../images/painting-3.jpg';
import painting4 from '../images/painting-4.jpg';
import painting5 from '../images/painting-5.jpg';
import painting6 from '../images/painting-6.jpg';
import painting7 from '../images/painting-7.jpg';
import painting8 from '../images/painting-8.jpg';
import painting9 from '../images/painting-9.jpg';
import sketching1 from '../images/sketching-1.jpg';
import sketching2 from '../images/sketching-2.jpg';

const artworks = [
  { src: painting1, title: 'Painting 1', type: 'Painting' },
  { src: painting2, title: 'Painting 2', type: 'Painting' },
  { src: painting3, title: 'Painting 3', type: 'Painting' },
  { src: painting4, title: 'Painting 4', type: 'Painting' },
  { src: painting5, title: 'Painting 5', type: 'Painting' },
  { src: painting6, title: 'Painting 6', type: 'Painting' },
  { src: painting7, title: 'Painting 7', type: 'Painting' },
  { src: painting8, title: 'Painting 8', type: 'Painting' },
  { src: painting9, title: 'Painting 9', type: 'Painting' },
  { src: sketching1, title: 'Sketching 1', type: 'Sketching' },
  { src: sketching2, title: 'Sketching 2', type: 'Sketching' },
];

interface ArtMediaProps {
  darkMode: boolean;
}

const polaroidAngles = [
  -8, 6, -4, 10, -6, 8, -10, 5, -7, 7, -5
];

const ArtMedia: React.FC<ArtMediaProps> = ({ darkMode }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="art"
      className={`py-20 min-h-screen flex flex-col items-center justify-center relative overflow-x-hidden ${
        darkMode ? 'bg-gradient-to-br from-[#23243a] to-[#3a2d5a]' : 'bg-gradient-to-br from-[#f8fafc] to-[#e0e7ff]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold artistic-heading mb-6 text-blue-700 dark:text-blue-300">
            Art & Media
          </h2>
          <span className="brush-accent" />
          <p className={`text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            A creative showcase of Bryan's paintings and sketchings, presented in a playful, immersive, and memorable way.
          </p>
        </motion.div>

        {/* Polaroid/Overlapping Artworks with Scroll Animation */}
        <div className="relative flex flex-wrap justify-center items-center min-h-[60vh]" style={{ gap: '2.5rem 1.5rem' }}>
          {artworks.map((art, i) => (
            <motion.div
              key={art.title}
              className={`relative z-10 shadow-xl rounded-2xl bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 p-2 flex flex-col items-center polaroid-card`}
              style={{
                width: 240,
                minHeight: 320,
                rotate: `${polaroidAngles[i % polaroidAngles.length]}deg`,
                marginTop: i % 2 === 0 ? 0 : 40,
                marginBottom: i % 2 === 1 ? 0 : 40,
                boxShadow: darkMode
                  ? '0 8px 32px 0 rgba(80,60,180,0.18), 0 2px 8px 0 rgba(80,60,180,0.12)'
                  : '0 8px 32px 0 rgba(80,60,180,0.10), 0 2px 8px 0 rgba(80,60,180,0.08)'
              }}
              initial={{ opacity: 0, y: 80, scale: 0.85 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.09, type: 'spring', bounce: 0.18 }}
            >
              <img
                src={art.src}
                alt={art.title}
                className="rounded-xl object-cover w-full h-64 mb-3 shadow-md"
                style={{ objectFit: 'cover', objectPosition: 'center', background: '#f3f4f6' }}
              />
              <div className="w-full text-center">
                {/* <span className="block text-base font-bold text-blue-700 dark:text-blue-300" style={{ fontFamily: 'Raleway, Arial, sans-serif' }}>{art.title}</span> */}
                <span className="block text-xs font-medium text-gray-500 dark:text-gray-300 mt-1" style={{ fontFamily: 'Raleway, Arial, sans-serif' }}>{art.type}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtMedia; 