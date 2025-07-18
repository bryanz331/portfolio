import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AchievementsProps {
  darkMode: boolean;
}

const Achievements: React.FC<AchievementsProps> = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const academicExcellence = [
    {
      title: "Exceptional Scholar",
      description: "Awarded for achieving 95%+ average in all courses",
      year: "2025",
      icon: "🏆",
      categories: ["Academic Excellence"]
    }
  ];

  const advancedPlacement = [
    {
      title: "AP Calculus AB",
      description: "Scored 5/5 - Highest possible score",
      year: "2024",
      icon: "📊",
      categories: ["Advanced Placement", "Mathematics"]
    },
    {
      title: "AP Physics 1",
      description: "Scored 5/5 - Highest possible score",
      year: "2025",
      icon: "⚡",
      categories: ["Advanced Placement"]
    },
    {
      title: "AP Physics 2",
      description: "Scored 4/5 - Excellent performance",
      year: "2025",
      icon: "🔬",
      categories: ["Advanced Placement"]
    },
    {
      title: "AP Computer Science Principles",
      description: "Scored 4/5 - Strong programming foundation",
      year: "2024",
      icon: "💻",
      categories: ["Advanced Placement", "Computer Science"]
    }
  ];

  const mathematics = [
    {
      title: "Gauss Math Contest",
      description: "School winner & Honor Roll - Top 10% in Canada",
      year: "2023",
      icon: "🧮",
      categories: ["Mathematics"]
    },
    {
      title: "Pascal Math Contest",
      description: "School winner & Honor Roll - Top 10% in Canada",
      year: "2024",
      icon: "��",
      categories: ["Mathematics"]
    },
    {
      title: "Cayley Math Contest",
      description: "School winner & Honor Roll - Top 10% in Canada",
      year: "2025",
      icon: "🔢",
      categories: ["Mathematics"]
    },
    {
      title: "Purple Comet Team Competition",
      description: "2nd place in Canada - Junior Division",
      year: "2024",
      icon: "🏅",
      categories: ["Mathematics"]
    }
  ];

  const computerScience = [
    {
      title: "ACSL Finalist",
      description: "Qualified for American Computer Science League Finals",
      year: "2024",
      icon: "💻",
      categories: ["Computer Science"]
    }
  ];

  const chess = [
    {
      title: "Lichess Rating",
      description: "2200 rating in Bullet and Rapid formats",
      year: "2025",
      icon: "♟️",
      categories: ["Chess"]
    },
    {
      title: "CFC Rating",
      description: "1500 rating in Canadian Chess Federation",
      year: "2025",
      icon: "🏆",
      categories: ["Chess"]
    },
    {
      title: "Canadian Youth Chess Championship",
      description: "Qualified for prestigious national tournament",
      year: "2025",
      icon: "👑",
      categories: ["Chess"]
    }
  ];

  const allAchievements = [
    ...academicExcellence,
    ...advancedPlacement,
    ...mathematics,
    ...computerScience,
    ...chess
  ];

  const categories = [
    { name: "All", color: "blue", count: allAchievements.length },
    { name: "Academic Excellence", color: "purple", count: academicExcellence.length },
    { name: "Advanced Placement", color: "green", count: advancedPlacement.length },
    { name: "Mathematics", color: "yellow", count: mathematics.length },
    { name: "Computer Science", color: "red", count: computerScience.length },
    { name: "Chess", color: "indigo", count: chess.length }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: darkMode ? 'bg-blue-600/20 border-blue-500' : 'bg-blue-50 border-blue-200',
      purple: darkMode ? 'bg-purple-600/20 border-purple-500' : 'bg-purple-50 border-purple-200',
      green: darkMode ? 'bg-green-600/20 border-green-500' : 'bg-green-50 border-green-200',
      yellow: darkMode ? 'bg-yellow-600/20 border-yellow-500' : 'bg-yellow-50 border-yellow-200',
      red: darkMode ? 'bg-red-600/20 border-red-500' : 'bg-red-50 border-red-200',
      indigo: darkMode ? 'bg-indigo-600/20 border-indigo-500' : 'bg-indigo-50 border-indigo-200'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getFilteredAchievements = () => {
    if (selectedCategory === 'all') {
      return allAchievements;
    }
    return allAchievements.filter(achievement => achievement.categories.includes(selectedCategory));
  };

  // Helper for pastel backgrounds by category
  const pastelBg = (category: string) => {
    if (darkMode) return 'bg-gray-900/80';
    switch (category) {
      case 'Academic Excellence': return 'bg-blue-50';
      case 'Advanced Placement': return 'bg-cyan-50';
      case 'Mathematics': return 'bg-purple-50';
      case 'Computer Science': return 'bg-pink-50';
      case 'Chess': return 'bg-yellow-50';
      default: return 'bg-white';
    }
  };
  const pastelTag = (category: string) => {
    if (darkMode) return 'bg-gray-700 text-gray-200';
    switch (category) {
      case 'Academic Excellence': return 'bg-blue-100 text-blue-700';
      case 'Advanced Placement': return 'bg-cyan-100 text-cyan-700';
      case 'Mathematics': return 'bg-purple-100 text-purple-700';
      case 'Computer Science': return 'bg-pink-100 text-pink-700';
      case 'Chess': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <section 
      id="achievements"
      className={`py-20 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
              Achievements
            </span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            A comprehensive showcase of academic excellence, competition success, and personal growth
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.name}
              onClick={() => setSelectedCategory(category.name === 'All' ? 'all' : category.name)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === (category.name === 'All' ? 'all' : category.name)
                  ? getColorClasses(category.color)
                  : darkMode 
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              {category.name} ({category.count})
            </motion.button>
          ))}
        </motion.div>

        {/* Achievement Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          key={selectedCategory} // Force re-render when category changes
        >
          {getFilteredAchievements().map((achievement, index) => (
            <motion.div
              key={`${achievement.title}-${index}`}
              className={`p-6 rounded-xl border artistic-shadow transition-all duration-300 mb-4 ${pastelBg(achievement.categories[0])}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.08, type: 'spring', bounce: 0.18 }}
              style={{ fontFamily: 'Raleway, Arial, sans-serif', color: darkMode ? undefined : '#222' }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl">{achievement.icon}</div>
                <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                  darkMode ? 'bg-blue-600/20 text-blue-400' : 'bg-blue-100 text-blue-700'
                }`}>
                  {achievement.year}
                </span>
              </div>
              
              <h3 className={`text-xl font-bold mb-2 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`} style={{ fontFamily: 'Raleway, Arial, sans-serif', letterSpacing: '0.5px' }}>
                {achievement.title}
              </h3>
              
              <p className={`text-sm mb-3 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {achievement.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-2">
                {achievement.categories.map((cat: string, i: number) => (
                  <span
                    key={cat + i}
                    className={`inline-block text-xs font-medium px-2 py-1 rounded ${pastelTag(cat)}`}
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements; 