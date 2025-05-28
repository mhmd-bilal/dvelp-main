import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  AlertCircle,
  AlertTriangle,
  BookOpen,
  Brain,
  Check,
  CheckCircle,
  Copy,
  Database,
  ExternalLink,
  Layers,
  Monitor,
  Server,
  Sparkles,
  Target,
  Wrench,
} from "lucide-react";
import { useState } from "react";
import { stackRecommendations } from "@/data/stackdata";

// This would typically come from a database or API
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
interface StackologyContentProps {
  selectedTechs: string[];
  selectedProject: string;
}

export default function StackologyContent({
  selectedTechs,
  selectedProject,
}: StackologyContentProps) {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [copiedResource, setCopiedResource] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projectData =
    stackRecommendations[selectedProject as keyof typeof stackRecommendations];

  const handleCopyResource = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopiedResource(url);
      setTimeout(() => setCopiedResource(null), 2000);
    } catch (err) {
      console.error("Failed to copy URL:", err);
    }
  };

  if (!projectData) {
    return (
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="sticky top-16 h-full overflow-y-auto w-full bg-black/5 dark:bg-black/20 border-1 border-accent rounded-lg p-8 flex flex-col gap-8 relative overflow-hidden"
      >
        <motion.div className="absolute inset-0 opacity-20" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold mb-4"
          >
            Select Your Project Vision
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground text-lg max-w-md"
          >
            Choose a project type from the sidebar to unlock personalized stack
            recommendations, pitfall solutions, and curated resources.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, type: "spring" }}
            className="mt-8 flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
            </motion.div>
            <span className="text-sm text-muted-foreground">
              AI-Curated Recommendations
            </span>
          </motion.div>
        </div>
      </motion.section>
    );
  }

  // Filter recommendations based on selected technologies
  const filteredRecommendations = {
    ...projectData,
    recommended: {
      ...projectData.recommended,
      frontend:
        "frontend" in projectData.recommended
          ? projectData.recommended.frontend?.filter(
              (tech: string) =>
                selectedTechs.length === 0 ||
                selectedTechs.includes(tech.toLowerCase())
            )
          : [],
      backend: projectData.recommended.backend.filter(
        tech =>
          selectedTechs.length === 0 ||
          selectedTechs.includes(tech.toLowerCase())
      ),
      database: projectData.recommended.database.filter(
        tech =>
          selectedTechs.length === 0 ||
          selectedTechs.includes(tech.toLowerCase())
      ),
    },
  };

  const techCategories = [
    {
      id: "frontend",
      label: "Frontend",
      icon: <Monitor className="w-4 h-4" />,
      color: "from-blue-500/10 to-cyan-500/10",
      border: "border-blue-500/20",
    },
    {
      id: "backend",
      label: "Backend",
      icon: <Server className="w-4 h-4" />,
      color: "from-green-500/10 to-emerald-500/10",
      border: "border-green-500/20",
    },
    {
      id: "database",
      label: "Database",
      icon: <Database className="w-4 h-4" />,
      color: "from-purple-500/10 to-violet-500/10",
      border: "border-purple-500/20",
    },
    {
      id: "tools",
      label: "Tools",
      icon: <Wrench className="w-4 h-4" />,
      color: "from-orange-500/10 to-yellow-500/10",
      border: "border-orange-500/20",
    },
  ];

  return (
    <motion.section
      key={selectedProject}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-16 h-full overflow-y-auto w-full bg-black/5 dark:bg-black/20 border-1 border-accent rounded-lg p-8 flex flex-col gap-8 relative overflow-hidden"
      // onMouseMove={handleMouseMove}
    >
      <div className="flex flex-col gap-8 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          variants={itemVariants}
          initial="initial"
          animate="animate"
          className="flex flex-col gap-4"
        >
          <motion.div className="flex items-center gap-4">
            <motion.h2
              className="text-3xl font-bold flex items-center gap-3"
              whileHover={{ scale: 1 }}
            >
              {selectedProject}
            </motion.h2>

            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20"
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, type: "spring" }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Brain className="w-3 h-3 text-primary" />
              </motion.div>
              <span className="text-xs text-muted-foreground">AI Curated</span>
            </motion.div>
          </motion.div>

          <motion.p
            className="text-muted-foreground text-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Comprehensive tech stack recommendations and best practices for
            building a{" "}
            <motion.span
              className="font-semibold text-foreground cursor-pointer"
              whileHover={{ scale: 1.05, color: "#8b5cf6" }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {selectedProject.toLowerCase()}
            </motion.span>
            .
          </motion.p>
        </motion.div>

        {/* Enhanced Recommended Stack Section */}
        <motion.div
          className="border border-border/50 rounded-xl bg-gradient-to-br from-background/50 to-muted/20 backdrop-blur-sm overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <motion.div className="flex md:flex-row flex-col justify-center md:items-center items-start gap-3 p-6 border-b border-border/50">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              <Layers className="w-6 h-6 text-primary" />
            </motion.div>
            <h3 className="text-xl font-semibold">Recommended Stack</h3>
            <motion.div
              className="ml-auto px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-medium"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Optimized
            </motion.div>
          </motion.div>

          {/* Category Filter */}
          <div className="p-6 border-b border-border/50">
            <div className="flex gap-2 flex-wrap">
              <motion.button
                onClick={() => setSelectedCategory("all")}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  selectedCategory === "all"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                All Categories
              </motion.button>
              {techCategories.map(category => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all flex items-center gap-1 ${
                    selectedCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted/50 text-muted-foreground hover:bg-muted"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.icon}
                  {category.label}
                </motion.button>
              ))}
            </div>
          </div>

          <div className="p-6 space-y-6">
            {techCategories
              .filter(
                category =>
                  selectedCategory === "all" || selectedCategory === category.id
              )
              .map((category, categoryIndex) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + categoryIndex * 0.1 }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <motion.div
                      className="text-primary"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {category.icon}
                    </motion.div>
                    <h4 className="text-sm font-medium text-muted-foreground">
                      {category.label}
                    </h4>
                    <div className="h-px bg-border/50 flex-1 ml-2" />
                  </div>

                  <div className="flex gap-2 flex-wrap">
                    {filteredRecommendations.recommended[
                      category.id as keyof typeof filteredRecommendations.recommended
                    ]?.map((tech: string, techIndex: number) => (
                      <motion.span
                        key={tech}
                        className={`px-3 py-1 rounded-full text-sm cursor-pointer bg-gradient-to-r ${category.color} border ${category.border} hover:scale-105 transition-all`}
                        onHoverStart={() => setHoveredTech(tech)}
                        onHoverEnd={() => setHoveredTech(null)}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 + techIndex * 0.05 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        {tech}
                        {hoveredTech === tech && (
                          <motion.div
                            className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-background border border-border rounded text-xs whitespace-nowrap"
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                          >
                            Recommended for {selectedProject}
                          </motion.div>
                        )}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>

        {/* Enhanced Pitfalls Section */}
        <motion.div
          className="border border-border/50 rounded-xl bg-gradient-to-br from-background/50 to-muted/20 backdrop-blur-sm overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <motion.div className="flex md:flex-row flex-col justify-center items-center gap-3 p-6 border-b border-border/50">
            <motion.div
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <AlertTriangle className="w-6 h-6 text-yellow-500" />
            </motion.div>
            <h3 className="text-xl font-semibold">
              Common Pitfalls & Solutions
            </h3>
            <motion.div
              className="ml-auto px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400 text-xs font-medium"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Learn & Avoid
            </motion.div>
          </motion.div>

          <div className="p-6">
            <Accordion type="single" collapsible className="w-full space-y-2">
              {filteredRecommendations.pitfalls.map((pitfall, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="border border-border/50 rounded-lg px-4 bg-gradient-to-r from-background/50 to-transparent"
                  >
                    <AccordionTrigger
                      className="hover:no-underline"
                      onClick={() =>
                        setActiveAccordion(
                          activeAccordion === index ? null : index
                        )
                      }
                    >
                      <div className="flex md:flex-row flex-col justify-center md:items-center items-start gap-3">
                        <motion.div
                          animate={
                            activeAccordion === index
                              ? { rotate: 180 }
                              : { rotate: 0 }
                          }
                          transition={{ duration: 0.2 }}
                        >
                          <AlertCircle className="w-4 h-4 text-red-400" />
                        </motion.div>
                        <span className="text-left">{pitfall.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <motion.div
                        className="space-y-3 pt-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="p-3 rounded-lg bg-red-500/5 border border-red-500/20">
                          <p className="text-sm text-muted-foreground">
                            {pitfall.description}
                          </p>
                        </div>
                        <div className="p-3 rounded-lg bg-green-500/5 border border-green-500/20">
                          <div className="flex md:flex-row flex-col justify-center md:items-center items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium text-sm text-green-400 mb-1">
                                Solution:
                              </p>
                              <p className="text-sm">{pitfall.solution}</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </motion.div>

        {/* Enhanced Resources Section */}
        <motion.div
          className="border border-border/50 rounded-xl bg-gradient-to-br from-background/50 to-muted/20 backdrop-blur-sm overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div className="flex md:flex-row flex-col justify-center items-center  gap-3 p-6 border-b border-border/50">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <BookOpen className="w-6 h-6 text-blue-500" />
            </motion.div>
            <h3 className="text-xl font-semibold">Curated Resources</h3>
            <motion.div
              className="ml-auto px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Hand-picked
            </motion.div>
          </motion.div>

          <div className="p-6">
            <div className="grid gap-3">
              {filteredRecommendations.resources.map((resource, index) => (
                <motion.a
                  key={index}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-4 rounded-lg border border-border/50 hover:border-primary/50 bg-gradient-to-r from-background/50 to-transparent transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 + index * 0.1 }}
                  whileHover={{ scale: 1, x: 5 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex md:flex-row flex-col justify-center md:items-center items-start gap-3">
                      <motion.div
                        className="p-2 rounded-lg bg-primary/10"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <ExternalLink className="w-4 h-4 text-primary" />
                      </motion.div>
                      <div>
                        <span className="font-medium group-hover:text-primary transition-colors">
                          {resource.title}
                        </span>
                        <p className="text-xs text-muted-foreground">
                          Click to explore this resource
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground px-2 py-1 rounded-full bg-muted/50">
                        {resource.type}
                      </span>
                      <motion.button
                        onClick={e => {
                          e.preventDefault();
                          handleCopyResource(resource.url);
                        }}
                        className="p-1 rounded opacity-0 group-hover:opacity-100 hover:bg-muted transition-all"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {copiedResource === resource.url ? (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="text-green-500"
                          >
                            <Check className="w-4 h-4" />
                          </motion.div>
                        ) : (
                          <Copy className="w-4 h-4 text-muted-foreground" />
                        )}
                      </motion.button>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tech Stack Summary */}
        <motion.div
          className="border border-border/50 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 backdrop-blur-sm p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <div className="flex md:flex-row flex-col justify-center md:items-center items-start gap-3 mb-4">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <Target className="w-5 h-5 text-primary" />
            </motion.div>
            <h4 className="font-semibold">Stack Summary</h4>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:text-center text-left">
            {techCategories.map((category, index) => (
              <motion.div
                key={category.id}
                className="p-3 rounded-lg bg-background/50 border border-border/50"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-primary mb-1">{category.icon}</div>
                <div className="text-sm font-medium">{category.label}</div>
                <div className="text-xs text-muted-foreground">
                  {filteredRecommendations.recommended[
                    category.id as keyof typeof filteredRecommendations.recommended
                  ]?.length || 0}{" "}
                  options
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
