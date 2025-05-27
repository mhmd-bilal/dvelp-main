"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { categories, componentsData } from "@/data/components";

type DocsSidebarProps = {
  selected: string;
  onSelect: (id: string) => void;
};

// Animation variants
const containerVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.1
    }
  }
};

const sectionVariants = {
  initial: {
    opacity: 0,
    y: 15
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.05
    }
  }
};

const buttonVariants = {
  initial: {
    opacity: 0,
    x: -20,
    scale: 0.95
  },
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  },
  hover: {
    scale: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1
    }
  }
};

const glowVariants = {
  inactive: {
    opacity: 0.2,
    scale: 0.8,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  active: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const categoryHeaderVariants = {
  initial: {
    opacity: 0,
    x: -10
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const dividerVariants = {
  initial: {
    scaleX: 0,
    opacity: 0
  },
  animate: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.1
    }
  }
};

export default function DocsSidebar({ selected, onSelect }: DocsSidebarProps) {
  return (
    <motion.nav
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="sticky top-16 h-full overflow-y-auto w-full bg-black/5 dark:bg-black/20 border-1 border-accent rounded-lg p-8 flex flex-col gap-8"
    >
      {/* Top Section: Intro + Installation as 2-column buttons */}
      <motion.div 
        variants={sectionVariants}
        className="grid md:grid-cols-2 grid-cols-1 gap-4"
      >
        {[
          { id: "introduction", label: "Whats dvelp?" },
          { id: "installation", label: "Installation" },
        ].map(({ id, label }) => (
          <motion.button
            key={id}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => onSelect(id)}
            className={`relative flex items-center justify-center gap-4 rounded-lg text-sm md:text-base transition-colors border flex-row cursor-pointer py-6
        ${
          selected === id
            ? "text-foreground border-primary/30 font-medium"
            : "text-muted-foreground hover:text-foreground border-accent"
        }`}
          >
            <motion.span
              variants={glowVariants}
              animate={selected === id ? "active" : "inactive"}
              className="flex h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_2px_rgba(255,215,0,0.5)]"
            />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {label}
            </motion.span>
          </motion.button>
        ))}
      </motion.div>

      {/* Components Section */}
      <motion.div 
        variants={sectionVariants}
        className="flex flex-col gap-2"
      >
        <motion.h2 
          variants={categoryHeaderVariants}
          className="text-lg font-light"
        >
          Components
        </motion.h2>
        <motion.div 
          variants={dividerVariants}
          className="border-b border-accent"
          style={{ transformOrigin: "left" }}
        />
        <motion.div 
          variants={sectionVariants}
          className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]"
        >
          <AnimatePresence>
            {categories.map(category =>
              componentsData
                .filter(comp => comp.category === category)
                .map((comp, index) => (
                  <motion.button
                    key={comp.id}
                    variants={{
                      ...buttonVariants,
                      initial: {
                        ...buttonVariants.initial,
                        transition: {
                          delay: index * 0.05
                        }
                      }
                    }}
                    whileHover={comp.active ? "hover" : undefined}
                    whileTap={comp.active ? "tap" : undefined}
                    onClick={() => {
                      if (comp.active) {
                        onSelect(comp.id);
                      }
                    }}
                    className={`relative flex items-center justify-start gap-4 rounded-lg text-sm md:text-base transition-colors border flex-row py-6 px-6
              ${
                selected === comp.id
                  ? "text-foreground font-medium border-primary/30"
                  : "text-muted-foreground hover:text-foreground border-accent"
                  
              } ${
                comp.active ? "border-accent cursor-pointer hover:border-primary/10": "text-muted-foreground/50 hover:text-muted-foreground/50 border-accent/20 cursor-not-allowed"
              }`}
                  >
                    <motion.span
                      variants={glowVariants}
                      animate={selected === comp.id ? "active" : "inactive"}
                      className="flex h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_2px_rgba(255,215,0,0.5)]"
                    />
                    <motion.span 
                      className="text-left"
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.15 }}
                    >
                      <motion.span 
                        className="block text-xs font-light uppercase opacity-60"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                      >
                        {category}
                      </motion.span>
                      <motion.span 
                        className="block"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.25 }}
                      >
                        {comp.name}
                      </motion.span>
                    </motion.span>
                  </motion.button>
                ))
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </motion.nav>
  );
}