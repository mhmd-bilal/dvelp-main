"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { componentsData, ComponentDoc } from "@/data/components";
import Code from "./ui/Code";
import dynamic from "next/dynamic";
import { useMotionValue } from "framer-motion";
import {
  Layers,
  Heart,
  Rocket,
  ArrowRight,
  Terminal,
  Copy,
  Check,
  Settings,
  CheckCircle,
  ExternalLink,
  Zap,
  Palette,
  Shield,
} from "lucide-react";

type DocsContentProps = {
  selectedComponent: string;
  handleSelect: (component: string) => void;
};

// Dynamically import component previews
const componentPreviews = {
  "blurry-blobs": dynamic(() =>
    import("./docs/blurry-blobs").then(mod => ({
      default: mod.BlurryBlobsPreview,
    }))
  ),
  "glow-button": dynamic(() =>
    import("./docs/glow-button").then(mod => ({
      default: mod.GlowButtonPreview,
    }))
  ),
  "halftone-bg": dynamic(() =>
    import("./docs/halftone-bg").then(mod => ({
      default: mod.HalftonePreview,
    }))
  ),
  "custom-cursor": dynamic(() =>
    import("./docs/custom-cursor").then(mod => ({
      default: mod.Preview,
    }))
  ),
  "scroll-select": dynamic(() => import("./docs/blurry-blobs")),
  "sentence-form": dynamic(() =>
    import("./docs/sentence-form").then(mod => ({
      default: mod.ExampleUsage,
    }))
  ),

};

// Animation variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

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

const previewVariants = {
  initial: {
    opacity: 0,
    scale: 0.95,
    y: 20,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.2,
    },
  },
};

const codeVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.3,
    },
  },
};

export default function DocsContent({
  selectedComponent,
  handleSelect,
}: DocsContentProps) {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [activeStep, setActiveStep] = useState<string | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);
  const [installHoveredFeature, setinstallHoveredFeature] = useState<
    string | null
  >(null);

  console.log(installHoveredFeature);
  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left - rect.width / 2) * 0.1);
    mouseY.set((event.clientY - rect.top - rect.height / 2) * 0.1);
  };

  const renderIntroduction = () => (
    <motion.section
      key="introduction"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="h-full overflow-y-auto w-full bg-black/5 dark:bg-black/20 border-1 border-accent rounded-lg p-8 flex flex-col gap-8 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        variants={itemVariants}
        className="flex flex-col gap-8 relative z-10"
      >
        <motion.div variants={itemVariants}>
          {/* Animated title with floating badge */}
          <motion.div className="flex items-center gap-4 mb-6">
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold flex items-center gap-2"
              whileHover={{ scale: 1 }}
            >
              About{" "}
              <motion.span
                className="bg-gradient-to-r from-primary/90 to-[#63440e] bg-clip-text font-serif -tracking-normal text-transparent text-4xl"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                dvelp
              </motion.span>
            </motion.h2>

            <motion.div
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-primary/10 to-[#493006]/10 border border-primary/20 cursor-pointer"
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.5, type: "spring" }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <Heart className="w-3 h-3 text-red-400" />
              <span className="text-xs text-muted-foreground">by Bilal</span>
            </motion.div>
          </motion.div>

          {/* Enhanced description with interactive highlights */}
          <motion.p
            variants={itemVariants}
            className="text-muted-foreground mb-4"
          >
            Welcome to{" "}
            <motion.span
              className="font-semibold text-foreground cursor-pointer"
              whileHover={{ scale: 1.05, color: "#8b5cf6" }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              dvelp
            </motion.span>
            — an open-source home for beautiful, functional components built
            with Next.js, ShadCN, Tailwind, and Framer Motion. Every component
            is designed to be visually unique, fully customizable, and
            developer-friendly, so you can build polished interfaces faster
            without compromising performance or accessibility.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-muted-foreground mb-8"
          >
            At the heart of dvelp is also{" "}
            <span className="font-medium text-foreground">Stackalogy</span> — a
            smart tool that helps you plan your web app stack based on your
            current skills and goals. Just plug in what you know and what you’re
            building, and Stackalogy will recommend the best tech combinations,
            highlight potential pitfalls, and even provide boilerplate templates
            to get you started.
          </motion.p>

          {/* Feature highlights */}
          <motion.div className="grid gap-4 mb-6" variants={itemVariants}>
            {/* Components feature */}
            <motion.div
              className="p-4 rounded-lg bg-gradient-to-r from-purple-500/5 to-transparent border border-purple-500/20 cursor-pointer group"
              onClick={() => handleSelect("docs")}
              onHoverStart={() => setHoveredFeature("components")}
              onHoverEnd={() => setHoveredFeature(null)}
              whileHover={{ scale: 1, x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center gap-3">
                <motion.div>
                  <Layers className="w-5 h-5 text-purple-500" />
                </motion.div>
                <div className="flex-1">
                  <h4 className="font-semibold text-sm">Component Resources</h4>
                  <p className="text-xs text-muted-foreground">
                    Custom animated components with Next.js, Shadcn, Tailwind &
                    Framer Motion
                  </p>
                </div>
                <motion.div
                  animate={
                    hoveredFeature === "components" ? { x: 3 } : { x: 0 }
                  }
                >
                  <ArrowRight className="w-4 h-4 text-purple-400" />
                </motion.div>
              </div>
            </motion.div>

            {/* Stackalogy feature */}
            <motion.div
              className="p-4 rounded-lg bg-gradient-to-r from-blue-500/5 to-transparent border border-blue-500/20 cursor-pointer group"
              onHoverStart={() => setHoveredFeature("stackalogy")}
              onClick={() => handleSelect("stackology")}
              onHoverEnd={() => setHoveredFeature(null)}
              whileHover={{ scale: 1, x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  animate={
                    hoveredFeature === "stackalogy" ? { scale: 1.1 } : {}
                  }
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Rocket className="w-5 h-5 text-blue-500" />
                </motion.div>
                <div className="flex-1">
                  <h4 className="font-semibold text-sm">Stackalogy Tool</h4>
                  <p className="text-xs text-muted-foreground">
                    Get tech stack suggestions, error solutions, boilerplates &
                    docs
                  </p>
                </div>
                <motion.div
                  animate={
                    hoveredFeature === "stackalogy" ? { x: 3 } : { x: 0 }
                  }
                >
                  <ArrowRight className="w-4 h-4 text-blue-400" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Animated stats or badges */}
          <motion.div className="flex gap-3 flex-wrap" variants={itemVariants}>
            {[
              "Open Source",
              "TypeScript",
              "Next JS",
              "React JS",
              "Tailwind CSS",
              "Shad CN",
              "Framer Motion",
            ].map((tech, index) => (
              <motion.span
                key={tech}
                className="px-3 py-1 text-xs rounded-full bg-muted/50 text-muted-foreground border border-muted"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -1 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );

  const renderInstallation = () => {
    const handleCopyCode = async (code: string) => {
      try {
        await navigator.clipboard.writeText(code);
        setCopiedCode(true);
        setTimeout(() => setCopiedCode(false), 2000);
      } catch (err) {
        console.error("Failed to copy code:", err);
      }
    };

    const installationSteps = [
      {
        id: "shadcn",
        title: "Install shadcn/ui",
        description: "Set up the foundation with shadcn/ui components",
        code: "npx shadcn-ui@latest init",
        icon: "⚡",
        gradient: "from-yellow-500/5 to-orange-500/5",
        border: "border-yellow-500/20",
        iconColor: "text-yellow-500",
      },
      {
        id: "copy",
        title: "Copy Component Code",
        description: "Grab the component from dvelp documentation",
        code: "// Copy from dvelp docs",
        icon: "📋",
        gradient: "from-blue-500/5 to-cyan-500/5",
        border: "border-blue-500/20",
        iconColor: "text-blue-500",
      },
      {
        id: "paste",
        title: "Add to Your Project",
        description: "Paste into your components directory",
        code: "./components/ui/your-component.tsx",
        icon: "📁",
        gradient: "from-green-500/5 to-emerald-500/5",
        border: "border-green-500/20",
        iconColor: "text-green-500",
      },
      {
        id: "dependencies",
        title: "Install Dependencies",
        description: "Add required packages for animations",
        code: "npm install framer-motion lucide-react",
        icon: "📦",
        gradient: "from-purple-500/5 to-violet-500/5",
        border: "border-purple-500/20",
        iconColor: "text-purple-500",
      },
      {
        id: "customize",
        title: "Customize & Use",
        description: "Tailor the component to fit your needs",
        code: '<YourComponent className="custom-styles" />',
        icon: "🎨",
        gradient: "from-pink-500/5 to-rose-500/5",
        border: "border-pink-500/20",
        iconColor: "text-pink-500",
      },
    ];

    const features = [
      {
        icon: <Zap className="w-5 h-5" />,
        title: "Lightning Fast Setup",
        description: "Get started in minutes, not hours",
        color: "text-yellow-500",
      },
      {
        icon: <Palette className="w-5 h-5" />,
        title: "Fully Customizable",
        description: "Every component adapts to your design system",
        color: "text-purple-500",
      },
      {
        icon: <Shield className="w-5 h-5" />,
        title: "Production Ready",
        description: "Built with TypeScript and best practices",
        color: "text-green-500",
      },
    ];

    return (
      <motion.section
        key="installation"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="sticky top-16 h-full overflow-y-auto w-full bg-black/5 dark:bg-black/20 border-1 border-accent rounded-lg p-8 flex flex-col gap-8 relative overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-col gap-8 relative z-10"
        >
          {/* Enhanced header */}
          <motion.div variants={itemVariants}>
            <motion.div className="flex items-center gap-4 mb-6">
              <motion.h2
                variants={itemVariants}
                className="text-3xl font-bold flex items-center gap-3"
                whileHover={{ scale: 1 }}
              >
                Installation
              </motion.h2>

              <motion.div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20"
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5, type: "spring" }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <CheckCircle className="w-3 h-3 text-green-400" />
                </motion.div>
                <span className="text-xs text-muted-foreground">
                  Easy Setup
                </span>
              </motion.div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-muted-foreground mb-6 text-lg"
            >
              Get up and running with{" "}
              <motion.span
                className="font-semibold text-foreground cursor-pointer"
                whileHover={{ scale: 1.05, color: "#8b5cf6" }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                dvelp
              </motion.span>{" "}
              components in just a few steps. Built on top of{" "}
              <span className="font-medium text-primary">shadcn/ui</span> for
              maximum compatibility and developer experience.
            </motion.p>

            {/* Feature highlights */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-4 "
              variants={itemVariants}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="p-4 rounded-lg bg-gradient-to-br from-muted/50 to-transparent border border-muted/50 cursor-pointer group"
                  onHoverStart={() => setinstallHoveredFeature(feature.title)}
                  onHoverEnd={() => setinstallHoveredFeature(null)}
                  whileHover={{ scale: 1, y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <div className="flex items-start gap-3">
                    <motion.div
                      className={feature.color}
                      animate={
                        hoveredFeature === feature.title
                          ? { scale: 1.1, rotate: 5 }
                          : {}
                      }
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Interactive installation steps */}
          <motion.div
            variants={itemVariants}
            className="border border-border/50 rounded-xl p-6 bg-gradient-to-br from-background/50 to-muted/20 backdrop-blur-sm"
          >
            <motion.div className="flex items-center gap-3 mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Settings className="w-6 h-6 text-primary" />
              </motion.div>
              <motion.h3
                variants={itemVariants}
                className="text-xl font-semibold"
              >
                Quick Start Guide
              </motion.h3>
            </motion.div>

            <motion.div className="space-y-4">
              {installationSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  className={`p-4 rounded-lg bg-gradient-to-r ${step.gradient} border ${step.border} cursor-pointer group transition-all duration-300`}
                  onHoverStart={() => setActiveStep(step.id)}
                  onHoverEnd={() => setActiveStep(null)}
                  whileHover={{ scale: 1, x: 5 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="flex items-center justify-center w-8 h-8 rounded-full bg-background/50 border border-border/50"
                      animate={activeStep === step.id ? { scale: 1.1 } : {}}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="text-sm">{index + 1}</span>
                    </motion.div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">{step.icon}</span>
                        <h4 className="font-semibold text-sm">{step.title}</h4>
                      </div>
                      <p className="text-xs text-muted-foreground mb-3">
                        {step.description}
                      </p>

                      {/* Code block with copy functionality */}
                      <motion.div
                        className="relative group"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: activeStep === step.id ? 1 : 0.7 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="flex items-center justify-between p-3 bg-background/80 border border-border/50 rounded-md font-mono text-xs">
                          <code className="text-foreground/90">
                            {step.code}
                          </code>
                          <motion.button
                            onClick={() => handleCopyCode(step.code)}
                            className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-muted rounded"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {copiedCode ? (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="text-green-500"
                              >
                                <Check className="w-3 h-3" />
                              </motion.div>
                            ) : (
                              <Copy className="w-3 h-3 text-muted-foreground" />
                            )}
                          </motion.button>
                        </div>
                      </motion.div>
                    </div>

                    <motion.div
                      animate={activeStep === step.id ? { x: 3 } : { x: 0 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <ArrowRight
                        className={`w-4 h-4 ${step.iconColor} opacity-50 group-hover:opacity-100`}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CLI Coming Soon Banner */}
            <motion.div
              className="mt-6 p-4 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Terminal className="w-5 h-5 text-primary" />
                </motion.div>
                <div>
                  <h4 className="font-semibold text-sm text-foreground">
                    CLI Tool Coming Soon!
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    One command to install any dvelp component directly into
                    your project
                  </p>
                </div>
                <motion.div
                  className="ml-auto px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Soon™
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Additional resources */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
            {[
              {
                label: "shadcn/ui docs",
                icon: <ExternalLink className="w-3 h-3" />,
                href: "https://ui.shadcn.com",
              },
              {
                label: "Framer Motion",
                icon: <Zap className="w-3 h-3" />,
                href: "https://framer.com/motion",
              },
              {
                label: "Tailwind CSS",
                icon: <Palette className="w-3 h-3" />,
                href: "https://tailwindcss.com",
              },
            ].map((resource, index) => (
              <motion.a
                key={resource.label}
                href={resource.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1 text-xs rounded-full bg-muted/50 text-muted-foreground border border-muted hover:bg-muted hover:text-foreground transition-colors"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -1 }}
              >
                {resource.icon}
                {resource.label}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>
    );
  };
  const renderComponentDocs = (component: ComponentDoc) => {
    const PreviewComponent =
      componentPreviews[component.id as keyof typeof componentPreviews];

    const importStatement = `import { ${component.name} } from "@/components/dvelp/${component.id}";`;

    return (
      <motion.section
        key={component.id}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="sticky top-16 h-full overflow-y-auto w-full bg-black/5 dark:bg-black/20 border-1 border-accent rounded-lg p-8 flex flex-col gap-8 overflow-x-hidden"
      >
        <motion.div variants={itemVariants} className="flex flex-col gap-8">
          {/* Header */}
          <motion.div variants={itemVariants}>
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold mb-2"
            >
              {component.name}
            </motion.h2>
            <motion.p variants={itemVariants} className="text-muted-foreground">
              {component.description}
            </motion.p>
          </motion.div>

          {/* Preview Section */}
          <motion.div
            variants={previewVariants}
            className="border border-border rounded-lg p-6 dark:bg-black/40 bg-white/40 cursor-context-menu"
          >
            <motion.h3
              variants={itemVariants}
              className="text-xl font-semibold mb-4"
            >
              Preview
            </motion.h3>
            <motion.div
              variants={previewVariants}
              className="w-full flex items-center justify-center"
            >
              <AnimatePresence mode="wait">
                {PreviewComponent && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="w-full"
                  >
                    <PreviewComponent />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>

          {/* Code Section */}
          <motion.div
            variants={codeVariants}
            className="border border-border rounded-lg dark:bg-black/40 bg-white/40"
          >
            <motion.h3
              variants={itemVariants}
              className="text-xl font-semibold p-6 border-b border-border"
            >
              Implement
            </motion.h3>
            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-4 p-6"
            >
              {/* Code Example */}
              <motion.div variants={itemVariants}>
                <motion.h4
                  variants={itemVariants}
                  className="text-sm font-medium mb-2 text-muted-foreground"
                >
                  Copy Code into your components folder
                </motion.h4>
                <motion.div
                  variants={itemVariants}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <Code code={component.code?.content} />
                </motion.div>
              </motion.div>

              {/* Import Statement */}
              <motion.div variants={itemVariants}>
                <motion.h4
                  variants={itemVariants}
                  className="text-sm font-medium mb-2 text-muted-foreground"
                >
                  Import
                </motion.h4>
                <motion.div
                  variants={itemVariants}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <Code code={importStatement} />
                </motion.div>
                <motion.h4
                  variants={itemVariants}
                  className="text-sm font-medium mb-2 mt-4 text-muted-foreground"
                >
                  Usage
                </motion.h4>
                <motion.div
                  variants={itemVariants}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <Code code={component.usage?.content} />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
    );
  };

  const renderNotFound = () => (
    <motion.section
      key="not-found"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="sticky top-16 h-full overflow-y-auto w-full bg-black/5 dark:bg-black/20 border-1 border-accent rounded-lg p-8 flex flex-col gap-8"
    >
      <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-4">
        Select a Component
      </motion.h2>
      <motion.p variants={itemVariants} className="text-muted-foreground">
        Choose a component from the sidebar to view its documentation.
      </motion.p>
    </motion.section>
  );

  return (
    <AnimatePresence mode="wait">
      {selectedComponent === "introduction" && renderIntroduction()}
      {selectedComponent === "installation" && renderInstallation()}
      {(() => {
        const component = componentsData.find(
          comp => comp.id === selectedComponent
        );
        if (component) {
          return renderComponentDocs(component);
        }
        if (
          selectedComponent !== "introduction" &&
          selectedComponent !== "installation"
        ) {
          return renderNotFound();
        }
        return null;
      })()}
    </AnimatePresence>
  );
}
