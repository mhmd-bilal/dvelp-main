import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Database,
  Globe,
  Sparkles,
  Server,
  X,
  Layers,
} from "lucide-react";
import { projectTypes, technologies } from "@/data/stackdata";

interface StackologySidebarProps {
  selectedTechs: string[];
  onTechSelect: (techs: string[]) => void;
  selectedProject: string;
  onProjectSelect: (project: string) => void;
}

const itemVariants = {
  initial: {
    opacity: 0,
    y: 15,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function StackologySidebar({
  selectedTechs,
  onTechSelect,
  selectedProject,
  onProjectSelect,
}: StackologySidebarProps) {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([
    "Frontend",
    "Backend",
    "Database",
    "Framework",
  ]);

  const handleTechToggle = (techId: string) => {
    const newTechs = selectedTechs.includes(techId)
      ? selectedTechs.filter(id => id !== techId)
      : [...selectedTechs, techId];
    onTechSelect(newTechs);
  };

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Frontend":
        return <Globe className="w-4 h-4" />;
      case "Backend":
        return <Server className="w-4 h-4" />;
      case "Database":
        return <Database className="w-4 h-4" />;
      case "Framework":
        return <Layers className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  const techsByCategory = technologies.reduce((acc, tech) => {
    if (!acc[tech.category]) acc[tech.category] = [];
    acc[tech.category].push(tech);
    return acc;
  }, {} as Record<string, typeof technologies>);

  const selectedTechsData = technologies.filter(tech =>
    selectedTechs.includes(tech.id)
  );

  return (
    <motion.section
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-16 h-full overflow-y-auto w-full bg-black/5 dark:bg-black/20 border-1 border-accent/50 rounded-lg p-6 flex flex-col gap-6 backdrop-blur-sm relative overflow-hidden"
    >
      {/* Header */}
      <motion.div
        variants={itemVariants}
        initial="initial"
        animate="animate"
        className="text-left border-b border-border/50 pb-4"
      >
        <motion.h1
          className="text-2xl font-bold text-white flex items-center justify-start gap-2"
          whileHover={{ scale: 1 }}
        >
          Stackology
        </motion.h1>
        <motion.p
          className="text-sm text-muted-foreground mt-1"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Build your perfect tech stack
        </motion.p>
      </motion.div>

      {/* Project Types */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <motion.h2
          className="text-lg font-semibold mb-4 flex items-center gap-2"
          whileHover={{ scale: 1 }}
        >
          Project Type
        </motion.h2>
        <div className="grid grid-cols-2 gap-2">
          {projectTypes.map((type, index) => {
            const IconComponent = type.icon;
            return (
              <motion.button
                key={type.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.05 }}
                whileHover={{ scale: 1, y: -1 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onProjectSelect(type.name)}
                className={`p-3 rounded-xl border transition-all duration-300 group flex flex-row justify-center items-center gap-2 ${
                  selectedProject === type.name
                    ? "bg-background/50 border-primary text-primary "
                    : "bg-background/50 border-border/50 hover:border-primary/50 hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5"
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <IconComponent
                    className={`w-4 h-4 mx-auto ${
                      selectedProject === type.name
                        ? "text-primary"
                        : "text-white"
                    }`}
                  />
                </motion.div>
                <div
                  className={`text-xs font-medium ${
                    selectedProject === type.name
                      ? "text-primary"
                      : "text-foreground"
                  }`}
                >
                  {type.name}
                </div>
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      {/* Technologies */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex-1"
      >
        <motion.h2
          className="text-lg font-semibold mb-4 flex items-center gap-2"
          whileHover={{ scale: 1 }}
        >
          Technologies
        </motion.h2>

        <div className="space-y-3">
          {Object.entries(techsByCategory).map(
            ([category, techs], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + categoryIndex * 0.1 }}
                className="border border-border/50 rounded-xl bg-gradient-to-br from-background/50 to-muted/20 backdrop-blur-sm overflow-hidden"
              >
                <motion.button
                  whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                  onClick={() => toggleCategory(category)}
                  className="w-full p-3 flex items-center justify-between text-left hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <motion.div
                      className="text-primary"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {getCategoryIcon(category)}
                    </motion.div>
                    <span className="font-medium">{category}</span>
                    <motion.span
                      className="text-xs bg-muted px-2 py-1 rounded-full"
                      whileHover={{ scale: 1.05 }}
                    >
                      {techs.length}
                    </motion.span>
                  </div>
                  <motion.div
                    animate={{
                      rotate: expandedCategories.includes(category) ? 180 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {expandedCategories.includes(category) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-border/50"
                    >
                      <div className="p-3 grid grid-cols-2 gap-2">
                        {techs.map((tech, techIndex) => {
                          const IconComponent = tech.icon;
                          return (
                            <motion.button
                              key={tech.id}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: techIndex * 0.05 }}
                              whileHover={{ scale: 1.05, y: -1 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => handleTechToggle(tech.id)}
                              className={`p-2 rounded-lg border transition-all duration-300 text-left ${
                                selectedTechs.includes(tech.id)
                                  ? `bg-gradient-to-r ${tech.color} border-current `
                                  : "bg-background/50 border-border/50 hover:border-primary/50 hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5"
                              }`}
                            >
                              <div className="flex items-center gap-2">
                                <motion.div
                                  whileHover={{ scale: 1.1, rotate: 5 }}
                                >
                                  <IconComponent className="w-4 h-4 text-primary" />
                                </motion.div>
                                <span className="text-sm font-medium">
                                  {tech.name}
                                </span>
                              </div>
                            </motion.button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          )}
        </div>
      </motion.div>

      {/* Selected Technologies Pills */}
      <AnimatePresence>
        {selectedTechsData.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="border-t border-border/50 pt-4"
          >
            <motion.h3
              className="text-sm font-semibold mb-3 flex items-center gap-2"
              whileHover={{ scale: 1 }}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-4 h-4 text-green-500" />
              </motion.div>
              Selected Stack ({selectedTechsData.length})
            </motion.h3>
            <div className="flex flex-wrap gap-2">
              <AnimatePresence>
                {selectedTechsData.map((tech, index) => {
                  const IconComponent = tech.icon;
                  return (
                    <motion.div
                      key={tech.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className={`px-3 py-1.5 rounded-full border text-xs font-medium flex items-center gap-1.5 bg-gradient-to-r ${tech.color} cursor-pointer`}
                      onClick={() => handleTechToggle(tech.id)}
                    >
                      <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
                        <IconComponent className="w-3 h-3" />
                      </motion.div>
                      <span>{tech.name}</span>
                      <motion.div
                        whileHover={{ rotate: 90, scale: 1.2 }}
                        className="text-muted-foreground hover:text-red-500 ml-1"
                      >
                        <X className="w-3 h-3" />
                      </motion.div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
            {selectedTechsData.length > 0 && (
              <motion.button
                whileHover={{ scale: 1 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onTechSelect([])}
                className="mt-3 w-full py-2 px-3 text-xs font-medium text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg hover:bg-red-500/20 transition-colors"
              >
                Clear All
              </motion.button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
