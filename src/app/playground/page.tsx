"use client"

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';

const HalftoneBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = (containerRef.current as HTMLElement).getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const container = containerRef.current as unknown as HTMLElement;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseenter', () => setIsHovering(true));
      container.addEventListener('mouseleave', () => setIsHovering(false));
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseenter', () => setIsHovering(true));
        container.removeEventListener('mouseleave', () => setIsHovering(false));
      }
    };
  }, []);

  // Generate optimized dot grid
  const dots = useMemo(() => {
    const dotsArray = [];
    const spacing = 25; // Larger spacing for better performance
    const cols = Math.ceil(1200 / spacing); // Fixed width for consistency
    const rows = Math.ceil(800 / spacing); // Fixed height for consistency

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        dotsArray.push({
          id: `${i}-${j}`,
          x: j * spacing + 10,
          y: i * spacing + 10,
        });
      }
    }
    return dotsArray;
  }, []);

  const getDotSize = (dotX: number, dotY: number) => {
    const distance = Math.sqrt(
      Math.pow(mousePosition.x - dotX, 2) + Math.pow(mousePosition.y - dotY, 2)
    );
    const maxDistance = 120;
    const minSize = 2;
    const maxSize = 8;
    
    if (distance > maxDistance) return minSize;
    
    const influence = 1 - (distance / maxDistance);
    return minSize + (maxSize - minSize) * influence;
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black cursor-none">
      <style jsx global>{`
        * { cursor: none !important; }
      `}</style>

      <div ref={containerRef} className="relative w-full h-full">
        
        {/* Responsive halftone dots */}
        <div className="absolute inset-0">
          {dots.map((dot) => {
            const size = getDotSize(dot.x, dot.y);
            const distance = Math.sqrt(
              Math.pow(mousePosition.x - dot.x, 2) + Math.pow(mousePosition.y - dot.y, 2)
            );
            const opacity = distance < 120 ? 0.9 : 0.4;
            
            return (
              <motion.div
                key={dot.id}
                className="absolute bg-white rounded-full"
                style={{
                  left: dot.x - size / 2,
                  top: dot.y - size / 2,
                  width: size,
                  height: size,
                }}
                animate={{
                  opacity,
                  scale: distance < 60 ? 1.2 : 1,
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeOut"
                }}
              />
            );
          })}
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <motion.div
            className="text-center text-white mix-blend-difference"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-6xl font-bold mb-4 tracking-wider"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              HALFTONE
            </motion.h1>
            <p className="text-xl opacity-80 max-w-md mx-auto">
              Interactive responsive halftone dots
            </p>
          </motion.div>
        </div>

        {/* Custom cursor */}
        <motion.div
          className="fixed pointer-events-none z-50 w-4 h-4 bg-white rounded-full mix-blend-difference"
          style={{
            left: mousePosition.x - 8,
            top: mousePosition.y - 8,
          }}
          animate={{
            scale: isHovering ? 1.5 : 1,
          }}
          transition={{ duration: 0.2 }}
        />

        {/* Cursor ring */}
        <motion.div
          className="fixed pointer-events-none z-40 w-12 h-12 border border-white rounded-full mix-blend-difference opacity-50"
          style={{
            left: mousePosition.x - 24,
            top: mousePosition.y - 24,
          }}
          animate={{
            scale: isHovering ? 0.8 : 1,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Hover effect indicator */}
        <motion.div
          className="fixed pointer-events-none z-30 rounded-full bg-white mix-blend-difference"
          style={{
            left: mousePosition.x - 60,
            top: mousePosition.y - 60,
            width: 120,
            height: 120,
          }}
          animate={{
            opacity: isHovering ? 0.1 : 0.05,
            scale: isHovering ? 1.1 : 1,
          }}
          transition={{ duration: 0.4 }}
        />
      </div>
    </div>
  );
};

export default HalftoneBackground;