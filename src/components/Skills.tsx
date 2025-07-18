import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import htmlLogo from '../images/html-logo.png';
import jsLogo from '../images/javascript-logo.png';
import reactLogo from '../images/React-Logo.png';
import pythonLogo from '../images/python-logo.png';
import figmaLogo from '../images/figma-logo.png';
import numpyLogo from '../images/numpy-logo.png';
import pandasLogo from '../images/pandas-logo.png';
import loggerProLogo from '../images/loggerpro-logo.png';

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      category: "Programming & Development",
      icon: "💻",
      color: "blue",
      skills: [
        {
          name: "HTML/CSS",
          icon: "🌐",
          logo: htmlLogo,
          description: "Proficient in creating responsive and modern web layouts with semantic HTML and advanced CSS techniques including Flexbox, Grid, and animations."
        },
        {
          name: "React",
          icon: "⚛️",
          logo: reactLogo,
          description: "Experienced in building dynamic user interfaces with React hooks, state management, and component-based architecture."
        },
        {
          name: "JavaScript",
          icon: "📜",
          logo: jsLogo,
          description: "Strong foundation in modern JavaScript ES6+, async programming, and DOM manipulation for interactive web applications."
        },
        {
          name: "Python",
          icon: "🐍",
          logo: pythonLogo,
          description: "Skilled in Python programming for data analysis, automation, and backend development with clean, readable code."
        },
        {
          name: "Figma",
          icon: "🎨",
          logo: figmaLogo,
          description: "Proficient in UI/UX design using Figma for creating wireframes, prototypes, and design systems."
        }
      ]
    },
    {
      category: "Data Analysis",
      icon: "📊",
      color: "purple",
      skills: [
        {
          name: "NumPy",
          icon: "🔢",
          logo: numpyLogo,
          description: "Experienced in numerical computing and array operations for scientific computing and data manipulation."
        },
        {
          name: "Pandas",
          icon: "📈",
          logo: pandasLogo,
          description: "Skilled in data manipulation and analysis using Pandas for cleaning, transforming, and analyzing structured data."
        },
        {
          name: "Data Visualization",
          icon: "📉",
          description: "Capable of creating insightful visualizations and charts to communicate complex data effectively."
        }
      ]
    },
    {
      category: "Art & Media",
      icon: "🎨",
      color: "green",
      skills: [
        {
          name: "Digital Art",
          icon: "🖼️",
          description: "Creative digital illustrator with experience in creating promotional graphics, logos, and social media content."
        },
        {
          name: "Traditional Painting",
          icon: "🎨",
          description: "Skilled in oil painting and watercolor techniques with a focus on landscapes and abstract compositions."
        },
        {
          name: "Pencil Sketching",
          icon: "✏️",
          description: "Advanced pencil drawing skills with expertise in portraits, still life, and architectural sketches."
        },
        {
          name: "Video Editing",
          icon: "🎬",
          description: "Proficient in Final Cut Pro and Adobe Premiere for creating engaging video content and promotional materials."
        },
        {
          name: "Sound Design",
          icon: "🎵",
          description: "Experienced in audio editing, mixing, and creating sound effects for multimedia projects."
        },
        {
          name: "Animation",
          icon: "🎭",
          description: "Skilled in creating digital animations and motion graphics for various media projects."
        }
      ]
    },
    {
      category: "Physics & Lab",
      icon: "⚡",
      color: "yellow",
      skills: [
        {
          name: "PASCAL Devices",
          icon: "🔬",
          description: "Experienced in using PASCAL laboratory equipment for conducting physics experiments and data collection."
        },
        {
          name: "Logger Pro",
          icon: "📊",
          logo: loggerProLogo,
          description: "Proficient in Logger Pro software for real-time data analysis and visualization of experimental results."
        },
        {
          name: "Physics Experiments",
          icon: "⚛️",
          description: "Skilled in designing and conducting physics experiments with proper methodology and analysis."
        },
        {
          name: "Data Analysis",
          icon: "📈",
          description: "Capable of analyzing experimental data, creating graphs, and drawing scientific conclusions."
        }
      ]
    },
    {
      category: "Music",
      icon: "🎹",
      color: "red",
      skills: [
        {
          name: "Piano",
          icon: "🎹",
          description: "5 years of piano experience with proficiency in classical and contemporary music performance."
        },
        {
          name: "Music Theory",
          icon: "🎼",
          description: "Strong understanding of music theory, composition, and musical notation for various genres."
        }
      ]
    }
  ];

  const softwareTools = [
    { name: "Final Cut Pro", icon: "🎬", category: "Video Editing", description: "Professional video editing software for creating high-quality content" },
    { name: "Adobe Creative Suite", icon: "🎨", category: "Design", description: "Comprehensive design tools for graphics, video, and web design" },
    { name: "Figma", icon: "🎨", logo: figmaLogo, category: "UI/UX Design", description: "Collaborative design platform for creating user interfaces and prototypes" },
    { name: "Logger Pro", icon: "📊", logo: loggerProLogo, category: "Data Analysis", description: "Scientific data collection and analysis software for laboratory experiments" },
    { name: "PASCAL", icon: "🔬", category: "Physics Lab", description: "Laboratory equipment for conducting physics experiments and measurements" },
    { name: "NumPy", icon: "🐍", logo: numpyLogo, category: "Python Libraries", description: "Numerical computing library for scientific calculations and data manipulation" },
    { name: "Pandas", icon: "📈", logo: pandasLogo, category: "Data Analysis", description: "Data manipulation and analysis library for structured data processing" },
    { name: "React", icon: "⚛️", logo: reactLogo, category: "Frontend Framework", description: "JavaScript library for building user interfaces" },
    { name: "JavaScript", icon: "📜", logo: jsLogo, category: "Programming Language", description: "High-level, versatile programming language for web development" },
    { name: "HTML/CSS", icon: "🌐", logo: htmlLogo, category: "Web Markup", description: "Standard markup languages for creating web pages" },
    { name: "Python", icon: "🐍", logo: pythonLogo, category: "Programming Language", description: "Popular language for data science, automation, and web development" }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: darkMode ? 'border-blue-500 bg-blue-600/10' : 'border-blue-500 bg-blue-50',
      purple: darkMode ? 'border-purple-500 bg-purple-600/10' : 'border-purple-500 bg-purple-50',
      green: darkMode ? 'border-green-500 bg-green-600/10' : 'border-green-500 bg-green-50',
      yellow: darkMode ? 'border-yellow-500 bg-yellow-600/10' : 'border-yellow-500 bg-yellow-50',
      red: darkMode ? 'border-red-500 bg-red-600/10' : 'border-red-500 bg-red-50'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section 
      id="skills"
      className={`py-20 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
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
              Skills & Expertise
            </span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            A diverse skill set spanning technology, arts, sciences, and creative disciplines
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className={`p-8 rounded-2xl border-2 ${getColorClasses(category.color)}`}
            >
              <div className="flex items-center mb-8">
                <span className="text-4xl mr-4">{category.icon}</span>
                <h3 className={`text-3xl font-bold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {category.category}
                </h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className={`p-6 rounded-xl border ${
                      darkMode 
                        ? 'bg-gray-900/50 border-gray-700 hover:border-blue-500' 
                        : 'bg-white border-gray-200 hover:border-blue-500'
                    } transition-all duration-300 hover:scale-105`}
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className={`w-16 h-16 rounded-xl flex items-center justify-center shadow-md transition-colors duration-300 ${
                          darkMode ? 'bg-gray-900' : 'bg-gray-100'
                        }`}>
                          {skill.logo ? (
                            <img
                              src={skill.logo}
                              alt={skill.name + ' logo'}
                              className="max-w-12 max-h-12 object-contain"
                              style={{ borderRadius: 8 }}
                            />
                          ) : (
                            <span className="text-2xl">{skill.icon}</span>
                          )}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className={`text-xl font-bold mb-2 ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          {skill.name}
                        </h4>
                        <p className={`text-sm leading-relaxed ${
                          darkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Software & Tools */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h3 className={`text-3xl font-bold text-center mb-12 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Software & Tools
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {softwareTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                className={`flex flex-col items-center p-4 rounded-xl shadow-md border transition-all duration-300 hover:scale-105 cursor-pointer ${
                  darkMode ? 'bg-gray-900 border-gray-700 hover:border-blue-500' : 'bg-white border-gray-200 hover:border-blue-500'
                }`}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.07 }}
              >
                <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-3 shadow-sm transition-colors duration-300 ${
                  darkMode ? 'bg-gray-800' : 'bg-gray-100'
                }`}>
                  {tool.logo ? (
                    <img
                      src={tool.logo}
                      alt={tool.name + ' logo'}
                      className="max-w-10 max-h-10 object-contain"
                      style={{ borderRadius: 6 }}
                    />
                  ) : (
                    <span className="text-xl">{tool.icon}</span>
                  )}
                </div>
                <span className={`text-sm font-semibold text-center mt-1 ${
                  darkMode ? 'text-gray-100' : 'text-gray-800'
                }`}>
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <h3 className={`text-2xl font-bold mb-8 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Additional Expertise
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Media Production", "Camera Operations", "Social Media Management",
              "Event Organization", "Volunteer Coordination", "Financial Management",
              "Chess Strategy", "Physical Fitness", "Rock Climbing", "Skiing"
            ].map((skill, index) => (
              <motion.span
                key={skill}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  darkMode 
                    ? 'bg-gray-700 text-gray-300 hover:bg-blue-600' 
                    : 'bg-gray-100 text-gray-700 hover:bg-blue-100'
                } transition-all duration-300`}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.8 + index * 0.05 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 
