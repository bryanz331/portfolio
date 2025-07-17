import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import Activities from './components/Activities';
import ArtMedia from './components/ArtMedia';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  // Apply dark mode to body
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero darkMode={darkMode} />
      <Achievements darkMode={darkMode} />
      <Activities darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <ArtMedia darkMode={darkMode} />
      
      {/* Footer */}
      <motion.footer 
        className={`py-12 text-center ${
          darkMode ? 'bg-gray-900 text-gray-400' : 'bg-gray-50 text-gray-600'
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg mb-4">
            © 2024 Bryan Zhou. All rights reserved.
          </p>
          <p className="text-sm">
            Built with React, TypeScript, Tailwind CSS, and Framer Motion
          </p>
        </div>
      </motion.footer>
    </div>
  );
}

export default App;
