"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  question: string;
  answer: string;
}

const ScrollAccordion = ({
  items = [] as AccordionItem[],
  className = "",
  colors = [
    "from-blue-600 to-purple-700",
    "from-purple-600 to-pink-700",
    "from-pink-600 to-red-700",
    "from-red-600 to-orange-700",
    "from-orange-600 to-yellow-700",
    "from-yellow-600 to-green-700",
    "from-green-600 to-teal-700",
    "from-teal-600 to-blue-700",
  ],
  animationDuration = 0.6,
  staggerDelay = 0.1,
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [activeColorIndex, setActiveColorIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isScrolling = useRef(false);
  // const scrollTimeout = useRef<NodeJS.Timeout | undefined>(undefined);

  // Initialize refs array
  useEffect(() => {
    itemRefs.current = itemRefs.current.slice(0, items.length);
  }, [items.length]);

  // Update color when activeIndex changes
  useEffect(() => {
    if (activeIndex !== null) {
      setActiveColorIndex(activeIndex % colors.length);
    }
  }, [activeIndex, colors.length]);

  // Enhanced scroll handler for sequential reveal
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || isScrolling.current) return;

      const viewportHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      const itemHeight = viewportHeight;
      const currentIndex = Math.floor(scrollPosition / itemHeight);

      if (
        currentIndex >= 0 &&
        currentIndex < items.length &&
        currentIndex !== activeIndex
      ) {
        setActiveIndex(currentIndex);

        // Add fade-up class to previous items
        itemRefs.current.forEach((ref, index) => {
          if (ref && index < currentIndex) {
            ref.classList.add("fade-up");
            ref.classList.remove("fade-in");
          } else if (ref && index === currentIndex) {
            ref.classList.add("fade-in");
            ref.classList.remove("fade-up");
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeIndex, items.length]);

  // Enhanced manual toggle function with focus management
  const toggleItem = (index: number) => {
    setActiveIndex(prevIndex => {
      const newIndex = prevIndex === index ? null : index;

      // If opening an item, scroll it into view
      if (newIndex !== null) {
        const ref = itemRefs.current[newIndex];
        if (ref) {
          ref.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }

      return newIndex;
    });
  };

  const accordionVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * staggerDelay,
        duration: animationDuration,
        ease: "easeOut",
      },
    }),
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 },
    },
  };

  const contentVariants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        height: { duration: animationDuration, ease: "easeInOut" },
        opacity: { duration: animationDuration * 0.5, ease: "easeOut" },
      },
    },
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        height: { duration: animationDuration, ease: "easeInOut" },
        opacity: {
          duration: animationDuration * 0.5,
          delay: animationDuration * 0.3,
          ease: "easeIn",
        },
      },
    },
  };

  const iconVariants = {
    closed: { rotate: 0 },
    open: { rotate: 180 },
  };

  return (
    <div className={`relative ${className}`}>
      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none; /* Chrome, Safari and Opera */
        }
        .mask-fade {
          -webkit-mask-image: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(0, 0, 0, 0.1) 5%,
            rgba(0, 0, 0, 0.3) 10%,
            rgba(0, 0, 0, 0.5) 15%,
            black 20%,
            black 80%,
            rgba(0, 0, 0, 0.5) 85%,
            rgba(0, 0, 0, 0.3) 90%,
            rgba(0, 0, 0, 0.1) 95%,
            transparent 100%
          );
          mask-image: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(0, 0, 0, 0.1) 5%,
            rgba(0, 0, 0, 0.3) 10%,
            rgba(0, 0, 0, 0.5) 15%,
            black 20%,
            black 80%,
            rgba(0, 0, 0, 0.5) 85%,
            rgba(0, 0, 0, 0.3) 90%,
            rgba(0, 0, 0, 0.1) 95%,
            transparent 100%
          );
        }
        .blur-fade {
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }
        .accordion-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 100vh;
          padding: 2rem 0;
        }
        .accordion-item {
          transition: transform 0.5s ease-out, opacity 0.5s ease-out;
        }
        .accordion-item.fade-up {
          transform: translateY(-100vh);
          opacity: 0;
        }
        .accordion-item.fade-in {
          transform: translateY(0);
          opacity: 1;
        }
      `}</style>
      {/* Dynamic Background */}
      <motion.div
        className={`fixed inset-0 bg-gradient-to-br ${colors[activeColorIndex]} -z-10`}
        key={activeColorIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-56">
        <motion.div className="space-y-6" initial="hidden" animate="visible">
          {items.map((item, index) => (
            <motion.div
              key={index}
              ref={(el: HTMLDivElement | null) => {
                itemRefs.current[index] = el;
              }}
              custom={index}
              variants={accordionVariants}
              whileHover="hover"
              className={`group accordion-item ${
                index === activeIndex ? "fade-in" : ""
              }`}
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl overflow-hidden">
                <motion.button
                  onClick={() => toggleItem(index)}
                  className="w-full px-8 py-6 text-left focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-between">
                    <motion.h3
                      className="text-xl md:text-2xl font-bold text-white group-hover:text-white/90 transition-colors duration-300"
                      layout
                    >
                      {item.question}
                    </motion.h3>
                    <motion.div
                      variants={iconVariants}
                      animate={activeIndex === index ? "open" : "closed"}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="flex-shrink-0 ml-4"
                    >
                      <ChevronDown className="w-6 h-6 text-white/80" />
                    </motion.div>
                  </div>
                </motion.button>

                <AnimatePresence initial={false}>
                  {activeIndex === index && (
                    <motion.div
                      variants={contentVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6">
                        <motion.div
                          className="pt-4 border-t border-white/20"
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.2, duration: 0.4 }}
                        >
                          <p className="text-white/90 text-lg leading-relaxed">
                            {item.answer}
                          </p>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

// Example usage with sample data
const ExampleAccordion = () => {
  const sampleItems = [
    {
      question: "What makes it unique?",
      answer:
        "It auto-opens on scroll with smooth background transitions, creating an engaging, animated experience.",
    },
    {
      question: "How does it work?",
      answer:
        "It uses Intersection Observer to detect scroll position and trigger animations as items reach the center.",
    },
    {
      question: "Can I customize it?",
      answer:
        "Yes — pass in your own questions and answers, and set custom gradient colors for background transitions.",
    },
    {
      question: "Is it responsive?",
      answer:
        "Absolutely. It’s touch-friendly, mobile-optimized, and buttery-smooth across all screen sizes.",
    },
  ];

  return (
    <div className="relative">
      <div className="h-screen w-full overflow-auto scrollbar-hide scroll-smooth relative bg-transparent">
        <div className="mask-fade blur-fade">
          <div className="flex flex-col items-center justify-center pt-8">
            <p className="text-white/90 text-xl font-medium mb- text-center">
              Click and read through with focus
            </p>
          </div>
          <div className="accordion-container">
            <ScrollAccordion items={sampleItems} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExampleAccordion;
