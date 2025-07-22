import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import vsbaGroup1 from '../images/vsba-group-photo-1.jpg';
import vsbaGroup2 from '../images/vsba-group-photo-2.jpg';
import vsbaGroup3 from '../images/vsba-group-photo-3.jpg';
import vsbaPoster1 from '../images/vsba-poster1.jpg';
import vsbaPoster2 from '../images/vsba-poster2.jpg';
import vsbaPoster3 from '../images/vsba-poster3.jpg';

interface ActivitiesProps {
  darkMode: boolean;
}

const Activities: React.FC<ActivitiesProps> = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const vsbaGalleryRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!vsbaGalleryRef.current) return;
    const handleWheel = (e: WheelEvent) => {
      if (!galleryActive) return;
      e.preventDefault();
      const gallery = vsbaGalleryRef.current;
      if (gallery) {
        gallery.scrollLeft += e.deltaY * 1.5;
      }
    };
    if (galleryActive) {
      window.addEventListener('wheel', handleWheel, { passive: false });
    } else {
      window.removeEventListener('wheel', handleWheel);
    }
    return () => window.removeEventListener('wheel', handleWheel);
  }, [galleryActive]);

  const activities = [
    {
      title: "Vancouver Student Business Association (VSBA)",
      role: "Co-founder & Financial Director",
      period: "2023 - Present",
      description: "Co-founded a non-profit organization - a student-led organization dedicated to connecting youth with their local community through entrepreneurship and service. Since creation, it has raised over $10,000 for Peace Arch Hospital, a cause that means a lot to our orginazation. Responsible for organizing volunteers, managing finances, and creating promotional content.",
      achievements: [
        "Raised $10,000+ for local hospital",
        "Organized 2 annual events for 2 consecutive years",
        "Managed volunteer coordination",
        "Created promotional graphics and social media content"
      ],
      skills: ["Leadership", "Event Planning", "Financial Management", "Graphic Design", "Social Media"],
      icon: "🏥",
      color: "blue"
    },
    {
      title: "SATDuel Development",
      role: "Frontend Developer & Marketing",
      period: "2023 - Present",
      description: "Participated in the development and advertisement of SATDuel, a competitive SAT preparation platform designed to help students improve through gamified activities. Contributed to the design and implementation of user-friendly frontend pages using tools such as HTML, CSS, and Figma, focusing on clean layouts and engaging user experience. ",
      achievements: [
        "Designed frontend user interface",
        "Managed Instagram marketing campaigns",
        "Created promotional posters and reels",
        "Increased user engagement and signups"
      ],
      skills: ["React", "UI/UX Design", "Social Media Marketing", "Content Creation"],
      icon: "🎯",
      color: "purple"
    },
    {
      title: "Chess Master",
      role: "Competitive Player",
      period: "Ongoing",
      description: "Extremely passionate about chess with years of experience. Achieved high ratings across multiple platforms such as Chess.com and Lichess, consistently ranking among the top players in regional age categories. Qualified for and competed in several prestigious tournaments, both online and in person, showcasing the ability to perform under immense pressure. Demonstrates strategic thinking and competitive excellence.",
      achievements: [
        "Lichess 2200 rating (Bullet & Rapid)",
        "CFC 1500 rating",
        "Qualified for Canadian Youth Chess Championship",
        "Participated in various tournaments"
      ],
      skills: ["Strategic Thinking", "Competitive Analysis", "Mental Discipline", "Problem Solving"],
      icon: "♟️",
      color: "green"
    },
    {
      title: "Varsity Sports",
      role: "Team Member",
      period: "2023 - 2024",
      description: "Active member of school varsity teams, building discipline with consistent practices. Demonstrating athleticism, teamwork, leadership skills and commitment to physical excellence.",
      achievements: [
        "Varsity Soccer Team Member",
        "Varsity Badminton Team Member",
        "Demonstrated leadership and teamwork",
        "Maintained high athletic standards"
      ],
      skills: ["Teamwork", "Leadership", "Physical Fitness", "Sports Strategy"],
      icon: "⚽",
      color: "yellow"
    },
    {
      title: "Personal Fitness & Adventure",
      role: "Enthusiast",
      period: "Ongoing",
      description: "Maintains a consistent personal fitness routine focused on strength, endurance, and overall wellness, reflecting a strong commitment to physical and mental health. Actively envolved in adventure sports such as hiking, biking, and skiing, overcoeme challenges that require discipline, resilience, and adaptability.",
      achievements: [
        "Consistent personal fitness training",
        "Passionate skier and rock climber",
        "Maintains high physical standards",
        "Balances academics with physical activities"
      ],
      skills: ["Physical Fitness", "Adventure Sports", "Discipline", "Risk Management"],
      icon: "🏔️",
      color: "red"
    }
  ];

  const vsbaImages: string[] = [vsbaGroup1, vsbaGroup2, vsbaGroup3, vsbaPoster1, vsbaPoster2, vsbaPoster3];

  // Helper for soft, comfortable backgrounds by activity color (light and dark mode)
  const pastelBg = (color: string) => {
    if (darkMode) {
      switch (color) {
        case 'blue': return 'bg-[#232946]/80';
        case 'purple': return 'bg-[#2d223a]/80';
        case 'green': return 'bg-[#223a36]/80';
        case 'yellow': return 'bg-[#3a3922]/80';
        case 'red': return 'bg-[#3a2222]/80';
        default: return 'bg-gray-900/80';
      }
    }
    switch (color) {
      case 'blue': return 'bg-blue-50';
      case 'purple': return 'bg-purple-50';
      case 'green': return 'bg-green-50';
      case 'yellow': return 'bg-yellow-50';
      case 'red': return 'bg-pink-50';
      default: return 'bg-white';
    }
  };
  // Helper for tag color: dimmer, more comfortable blue
  const accentTag = (darkMode: boolean) =>
    darkMode
      ? 'bg-blue-800/80 text-blue-300 border border-blue-700/60'
      : 'bg-blue-200 text-blue-800 border border-blue-400';

  return (
    <section
      id="activities"
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
          <h2 className="text-4xl md:text-5xl font-bold artistic-heading mb-6">
            <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
              Activities & Projects
            </span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Leadership, innovation, and community impact through diverse activities and initiatives
          </p>
        </motion.div>

        {/* VSBA Special Section - Open, Immersive, with Scroll-to-Flash Gallery */}
        {activities.map((activity, index) => {
          if (activity.title === 'Vancouver Student Business Association (VSBA)') {
            // VSBA Card with box and all images at the bottom, left-aligned text, bigger photos, no special z-index
            return (
              <motion.div
                key={activity.title}
                className={`p-10 rounded-3xl border-2 artistic-shadow mb-12 ${pastelBg(activity.color)} text-left`}
                style={{ fontFamily: 'Raleway, Arial, sans-serif', color: darkMode ? undefined : '#222' }}
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, type: 'spring', bounce: 0.18 }}
              >
                <div className="flex flex-col gap-10 items-start">
                  {/* VSBA Text Content */}
                  <div className="w-full max-w-3xl text-left">
                    <div className="flex items-center gap-4 mb-3 text-left">
                      <div className="text-5xl">{activity.icon}</div>
                      <h3 className="text-3xl font-extrabold text-blue-700 dark:text-blue-200" style={{ fontFamily: 'Raleway, Arial, sans-serif', letterSpacing: '0.5px', textAlign: 'left' }}>{activity.title}</h3>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 mb-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${accentTag(darkMode)}`}>{activity.role}</span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${accentTag(darkMode)}`}>{activity.period}</span>
                    </div>
                    <p className={`text-lg mb-6 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{activity.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="text-lg font-semibold mb-2 text-blue-700 dark:text-blue-200" style={{ fontFamily: 'Raleway, Arial, sans-serif' }}>Key Achievements</h4>
                        <ul className="space-y-2">
                          {activity.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className={`flex items-start space-x-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Raleway, Arial, sans-serif' }}>
                              <span className="text-blue-500 mt-1">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2 text-blue-700 dark:text-blue-200" style={{ fontFamily: 'Raleway, Arial, sans-serif' }}>Skills Developed</h4>
                        <div className="flex flex-wrap gap-2">
                          {activity.skills.map((skill, skillIndex) => (
                            <span key={skillIndex} className={`px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 dark:bg-blue-700 dark:text-blue-100`} style={{ fontFamily: 'Raleway, Arial, sans-serif' }}>{skill}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* VSBA Gallery - All images visible in a row, bigger */}
                  <div className="w-full flex flex-wrap justify-center gap-8 pt-6 border-t border-blue-100 dark:border-blue-700">
                    {vsbaImages.map((img: string, i: number) => (
                      <motion.div
                        key={i}
                        className="rounded-2xl shadow-lg border-2 border-blue-100 dark:border-blue-700 bg-white dark:bg-gray-900 w-[340px] h-[240px] flex-shrink-0 flex flex-col items-center justify-center overflow-hidden"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, delay: 0.1 + i * 0.08, type: 'spring', bounce: 0.18 }}
                      >
                        <img
                          src={img}
                          alt={`VSBA ${i + 1}`}
                          className="object-cover w-full h-full rounded-xl"
                          style={{ objectFit: 'cover', objectPosition: 'center' }}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
                <motion.div
                  className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  <div className={`text-center p-6 rounded-xl border ${
                    darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'
                  }`}>
                    <div className={`text-4xl font-bold mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                      $10,000+
                    </div>
                    <div className={`text-lg font-semibold mb-2 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      Raised for Charity
                    </div>
                    <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Through VSBA initiatives
                    </div>
                  </div>

                  <div className={`text-center p-6 rounded-xl border ${
                    darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'
                  }`}>
                    <div className={`text-4xl font-bold mb-2 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                      100+
                    </div>
                    <div className={`text-lg font-semibold mb-2 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      Volunteers
                    </div>
                    <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Participated in VSBA events
                    </div>
                  </div>

                  <div className={`text-center p-6 rounded-xl border ${
                    darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'
                  }`}>
                    <div className={`text-4xl font-bold mb-2 ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                      4
                    </div>
                    <div className={`text-lg font-semibold mb-2 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      Annual Events
                    </div>
                    <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Organized through VSBA
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          }
          // For all other activities, use a soft pastel background and vibrant accent tags
          return (
            <motion.div
              key={activity.title}
              className={`p-8 rounded-2xl border-2 artistic-shadow mb-8 ${pastelBg(activity.color)}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.09, type: 'spring', bounce: 0.18 }}
              style={{ fontFamily: 'Raleway, Arial, sans-serif', color: darkMode ? undefined : '#222' }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Icon and Header */}
                <div className="flex items-center lg:items-start space-x-4">
                  <div className="text-4xl">{activity.icon}</div>
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'Raleway, Arial, sans-serif', letterSpacing: '0.5px' }}>{activity.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 mb-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${accentTag(darkMode)}`}>{activity.role}</span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${accentTag(darkMode)}`}>{activity.period}</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Description */}
              <p className={`text-lg mb-6 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{activity.description}</p>
              {/* Achievements and Skills */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Achievements */}
                <div>
                  <h4 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'Raleway, Arial, sans-serif' }}>Key Achievements</h4>
                  <ul className="space-y-2">
                    {activity.achievements.map((achievement, achievementIndex) => (
                      <motion.li
                        key={achievementIndex}
                        className={`flex items-start space-x-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: index * 0.09 + achievementIndex * 0.04 }}
                        style={{ fontFamily: 'Raleway, Arial, sans-serif' }}
                      >
                        <span className="text-blue-500 mt-1">•</span>
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                {/* Skills */}
                <div>
                  <h4 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'Raleway, Arial, sans-serif' }}>Skills Developed</h4>
                  <div className="flex flex-wrap gap-2">
                    {activity.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${accentTag(darkMode)} transition-all duration-300`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: index * 0.09 + skillIndex * 0.03 }}
                        style={{ fontFamily: 'Raleway, Arial, sans-serif' }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* Impact Stats */}
        
      </div>
    </section>
  );
};

export default Activities; 
