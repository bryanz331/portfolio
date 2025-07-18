import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, MotionValue } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import bryanImage from '../images/bryan-image2.jpg';

const placeholderPhoto = bryanImage;
const placeholderQuote = '“Creativity is intelligence having fun.” — Albert Einstein';

// Clip‑paths for geometric shapes
const CLIP_PATHS: Record<string, string> = {
  circle:   'circle(50% at 50% 50%)',
  square:   'inset(0%)',
  triangle: 'polygon(50% 0%, 0% 100%, 100% 100%)',
  diamond:  'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
  hexagon:  'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
};

interface ShapeDef {
  type: keyof typeof CLIP_PATHS;
  color: string;
  left: string;            // percentage
  top: string;             // percentage
  size: number;            // px
  floatRange: [number,number];
  delay: number;
  duration: number;
  isMain: boolean;
}

const mainShapes: Omit<ShapeDef,'isMain'>[] = [
  { type: 'circle',   color: 'from-purple-500 to-pink-500',   left: '8%',  top: '12%', size: 100, floatRange: [-20,20], delay: 0.1, duration: 6 },
  { type: 'diamond',  color: 'from-blue-500 to-teal-400',     left: '82%', top: '15%', size: 120, floatRange: [-18,18], delay: 0.2, duration: 5.5 },
  { type: 'triangle', color: 'from-pink-500 to-yellow-300',   left: '10%', top: '72%', size:  90, floatRange: [-16,16], delay: 0.3, duration: 6.2 },
  { type: 'hexagon',  color: 'from-indigo-500 to-purple-400', left: '80%', top: '75%', size: 100, floatRange: [-14,14], delay: 0.4, duration: 5.8 },
  { type: 'circle',   color: 'from-yellow-400 to-orange-400', left: '50%', top: '90%', size: 130, floatRange: [-22,22], delay: 0.5, duration: 6.5 },
];

const fillerShapes: Omit<ShapeDef,'isMain'>[] = [
  { type: 'square',   color: 'from-green-300 to-green-500',   left: '5%',  top: '50%', size:  60, floatRange: [-10,10], delay: 0.2, duration: 4.5 },
  { type: 'circle',   color: 'from-cyan-400 to-cyan-600',     left: '20%', top: '10%', size:  50, floatRange: [-12,12], delay: 0.3, duration: 5.2 },
  { type: 'triangle', color: 'from-pink-400 to-pink-600',     left: '30%', top: '80%', size:  70, floatRange: [-14,14], delay: 0.15, duration: 4.8 },
  { type: 'diamond',  color: 'from-yellow-300 to-yellow-500', left: '90%', top: '20%', size:  55, floatRange: [-11,11], delay: 0.25, duration: 5.0 },
  { type: 'hexagon',  color: 'from-purple-400 to-purple-600', left: '85%', top: '75%', size:  65, floatRange: [-13,13], delay: 0.18, duration: 4.7 },
  { type: 'square',   color: 'from-orange-300 to-orange-500', left: '50%', top: '5%',  size:  80, floatRange: [-15,15], delay: 0.22, duration: 5.3 },
  { type: 'circle',   color: 'from-red-400 to-red-600',       left: '75%', top: '50%', size:  45, floatRange: [-12,12], delay: 0.12, duration: 4.9 },
  { type: 'diamond',  color: 'from-blue-300 to-blue-500',     left: '25%', top: '60%', size:  50, floatRange: [-10,10], delay: 0.28, duration: 5.1 },
];

const allShapes: ShapeDef[] = [
  ...mainShapes.map(s => ({ ...s, isMain: true })),
  ...fillerShapes.map(s => ({ ...s, isMain: false })),
];

interface InteractiveShapeProps {
  shape: ShapeDef;
  pointerX: MotionValue<number>;
  pointerY: MotionValue<number>;
  inView: boolean;
}

const InteractiveShape: React.FC<InteractiveShapeProps> = ({ shape, pointerX, pointerY, inView }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [center, setCenter] = useState({ x: 0, y: 0 });

  // Measure element center on mount & resize
  useEffect(() => {
    const update = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setCenter({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
      }
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // Proximity‑based scale (1 → 1.3 within 200px)
  const scale = useTransform(
    [pointerX, pointerY],
    (input: number[]) => {
      const[px, py] = input;
      const dx = px - center.x;
      const dy = py - center.y;
      const dist = Math.hypot(dx, dy);
      const R = 200;
      const ratio = Math.max(0, Math.min(1, (R - dist) / R));
      return 1 + ratio * 0.3;
    }
  );

  return (
    <motion.div
      ref={ref}
      className={`absolute bg-gradient-to-br ${shape.color}`}
      style={{
        left:       shape.left,
        top:        shape.top,
        width:      shape.size,
        height:     shape.size,
        clipPath:   CLIP_PATHS[shape.type],
        pointerEvents: 'none',
        transform:  'translate(-50%, -50%)',
        zIndex:     shape.isMain ? 60 : 50,
        scale,
      }}
      initial={{ opacity: shape.isMain ? 1 : 0.6 }}
      animate={
        inView
          ? { y: [shape.floatRange[0], shape.floatRange[1], shape.floatRange[0]] }
          : {}
      }
      transition={{
        delay:      shape.delay,
        duration:   shape.duration,
        repeat:     Infinity,
        repeatType: 'reverse',
        ease:       'easeInOut',
      }}
    />
  );
};

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const heroRef = useRef<HTMLElement | null>(null);

  // track pointer globally
  const pointerX = useMotionValue(-10000);
  const pointerY = useMotionValue(-10000);

  const handleMouseMove = (e: React.MouseEvent) => {
    pointerX.set(e.clientX);
    pointerY.set(e.clientY);
  };
  const handleMouseLeave = () => {
    pointerX.set(-10000);
    pointerY.set(-10000);
  };

  return (
    <section
      id="home"
      ref={(node) => { heroRef.current = node; ref(node as any); }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`
        w-full min-h-screen relative overflow-hidden select-none flex items-center justify-center
        ${darkMode
          ? 'bg-gradient-to-br from-[#181c2f] to-[#2d225a]'
          : 'bg-gradient-to-br from-[#f8fafc] to-[#e0e7ff]'}
      `}
    >
      {/* animated shapes */}
      {allShapes.map((shape, i) => (
        <InteractiveShape
          key={i}
          shape={shape}
          pointerX={pointerX}
          pointerY={pointerY}
          inView={inView}
        />
      ))}

      {/* center content */}
      <div
        className="relative z-[70] w-full max-w-3xl px-4 sm:px-6 lg:px-8 text-center"
        style={{ pointerEvents: 'auto' }}
      >
        <motion.div
          className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-blue-400 shadow-lg mb-6 bg-white/80 dark:bg-gray-900/80"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <img
            src={placeholderPhoto}
            alt="Bryan Zhou profile"
            className="w-full h-full object-cover object-top"
            style={{ objectFit: 'cover', objectPosition: 'top center', width: '100%', height: '100%' }}
          />
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold artistic-heading mb-8 text-blue-700 dark:text-blue-300"
          style={{ fontFamily: 'Pacifico, cursive' }}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Bryan Zhou
        </motion.h1>

        <motion.blockquote
          className="italic text-xl md:text-2xl text-purple-700 dark:text-purple-300 mb-8"
          style={{ fontFamily: 'Raleway, Arial, sans-serif' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {placeholderQuote}
        </motion.blockquote>

        <motion.p
          className={`text-lg mb-10 mx-auto leading-relaxed ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}
          style={{ fontFamily: 'Raleway, Arial, sans-serif' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          I am a 16‑year‑old IBDP student with exceptional academic achievements,
          chess mastery, and a drive to make a difference through technology and
          community service.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
