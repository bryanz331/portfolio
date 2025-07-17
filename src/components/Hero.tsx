import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    { icon: '🏆', text: 'Exceptional Scholar (95%+ Average)' },
    { icon: '♟️', text: 'Lichess 2200 Rating' },
    { icon: '💻', text: 'ACSL Finalist' },
    { icon: '🏥', text: 'VSBA Co-founder' },
  ];

  return (
    <section 
      id="home"
      className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className={`absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl opacity-20 ${
            darkMode ? 'bg-blue-600' : 'bg-blue-400'
          }`}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl opacity-20 ${
            darkMode ? 'bg-purple-600' : 'bg-purple-400'
          }`}
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Main Title */}
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
              Bryan Zhou
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            IBDP Student • Chess Master • Tech Enthusiast • Artist
          </motion.p>

          {/* Bio */}
          <motion.p 
            className={`text-lg mb-12 max-w-4xl mx-auto leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            A passionate 16-year-old IBDP student with exceptional academic achievements, 
            chess mastery, and a drive to make a difference through technology and community service. 
            Currently pursuing Math AA HL, Physics HL, and Chemistry HL with a 95%+ academic average.
          </motion.p>

          {/* Achievement Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-xl backdrop-blur-sm border ${
                  darkMode 
                    ? 'bg-gray-800/50 border-gray-700 hover:border-blue-500' 
                    : 'bg-white/50 border-gray-200 hover:border-blue-500'
                } transition-all duration-300 hover:scale-105`}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              >
                <div className="text-3xl mb-3">{achievement.icon}</div>
                <p className={`text-sm font-medium ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {achievement.text}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <motion.a
              href="#achievements"
              className={`inline-flex items-center px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 ${
                darkMode
                  ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/25'
                  : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/25'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore My Journey
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className={`w-6 h-10 border-2 rounded-full flex justify-center ${
          darkMode ? 'border-gray-400' : 'border-gray-600'
        }`}>
          <motion.div
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 