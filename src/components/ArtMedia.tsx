import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ArtMediaProps {
  darkMode: boolean;
}

const ArtMedia: React.FC<ArtMediaProps> = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const artCategories = [
    {
      category: "Digital Art",
      description: "Creative digital illustrations and designs",
      items: [
        { title: "VSBA Promotional Graphics", type: "Digital Design", year: "2023" },
        { title: "SATDuel Marketing Materials", type: "UI/UX Design", year: "2023" },
        { title: "Social Media Content", type: "Digital Art", year: "2023" },
        { title: "Logo Designs", type: "Brand Identity", year: "2023" }
      ]
    },
    {
      category: "Traditional Art",
      description: "Paintings and pencil sketches",
      items: [
        { title: "Landscape Paintings", type: "Oil on Canvas", year: "2023" },
        { title: "Portrait Sketches", type: "Pencil Drawing", year: "2023" },
        { title: "Abstract Compositions", type: "Mixed Media", year: "2023" },
        { title: "Still Life Studies", type: "Watercolor", year: "2023" }
      ]
    },
    {
      category: "Media Production",
      description: "Video editing and animation work",
      items: [
        { title: "Poptastic Commercial", type: "Video Production", year: "2023" },
        { title: "SATDuel Promotional Reels", type: "Video Editing", year: "2023" },
        { title: "VSBA Event Videos", type: "Documentary", year: "2023" },
        { title: "Animation Projects", type: "Digital Animation", year: "2023" }
      ]
    }
  ];

  const placeholderImages = [
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
  ];

  return (
    <section 
      id="art"
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
              Art & Media
            </span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            A showcase of creative expression through digital art, traditional media, and multimedia production
          </p>
        </motion.div>

        {/* Art Categories */}
        <div className="space-y-16">
          {artCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.3 }}
            >
              <div className="text-center mb-8">
                <h3 className={`text-3xl font-bold mb-4 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {category.category}
                </h3>
                <p className={`text-lg ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {category.description}
                </p>
              </div>

              {/* Gallery Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.title}
                    className={`group relative overflow-hidden rounded-xl border ${
                      darkMode 
                        ? 'bg-gray-900/50 border-gray-700 hover:border-blue-500' 
                        : 'bg-white border-gray-200 hover:border-blue-500'
                    } transition-all duration-300`}
                    whileHover={{ scale: 1.05, y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.3 + itemIndex * 0.1 }}
                  >
                    {/* Placeholder Image */}
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={placeholderImages[(categoryIndex * 4 + itemIndex) % placeholderImages.length]}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    
                    {/* Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4`}>
                      <div className="text-white">
                        <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                        <p className="text-xs opacity-80">{item.type} • {item.year}</p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <h4 className={`font-semibold mb-2 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {item.title}
                      </h4>
                      <div className="flex items-center justify-between">
                        <span className={`text-sm ${
                          darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {item.type}
                        </span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          darkMode ? 'bg-blue-600/20 text-blue-400' : 'bg-blue-100 text-blue-700'
                        }`}>
                          {item.year}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Showcase */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h3 className={`text-3xl font-bold text-center mb-12 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Creative Skills
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Digital Art", icon: "🎨", level: "Advanced" },
              { name: "Traditional Painting", icon: "🖼️", level: "Intermediate" },
              { name: "Pencil Sketching", icon: "✏️", level: "Advanced" },
              { name: "Video Editing", icon: "🎬", level: "Advanced" },
              { name: "Sound Design", icon: "🎵", level: "Intermediate" },
              { name: "Animation", icon: "🎭", level: "Intermediate" },
              { name: "UI/UX Design", icon: "💻", level: "Advanced" },
              { name: "Social Media Content", icon: "📱", level: "Advanced" }
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                className={`p-6 rounded-xl border text-center transition-all duration-300 hover:scale-105 ${
                  darkMode 
                    ? 'bg-gray-800/50 border-gray-700 hover:border-blue-500' 
                    : 'bg-white border-gray-200 hover:border-blue-500'
                }`}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
              >
                <div className="text-3xl mb-3">{skill.icon}</div>
                <h4 className={`font-semibold mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {skill.name}
                </h4>
                <span className={`text-sm px-3 py-1 rounded-full ${
                  darkMode ? 'bg-blue-600/20 text-blue-400' : 'bg-blue-100 text-blue-700'
                }`}>
                  {skill.level}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <p className={`text-lg mb-6 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Interested in commissioning artwork or collaborating on creative projects?
          </p>
          <motion.button
            className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 ${
              darkMode
                ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/25'
                : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/25'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ArtMedia; 