"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { componentsData, ComponentDoc } from "@/data/components";
import Code from "./ui/Code";
import dynamic from "next/dynamic";
import { useMotionValue, useSpring } from 'framer-motion';
import { 
  Code as Coding, 
  Layers, 
  Zap, 
  Heart, 
  Sparkles, 
  Palette, 
  Globe, 
  Rocket,
  ArrowRight,
  LucideIcon
} from 'lucide-react';


type DocsContentProps = {
  selectedComponent: string;
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
  "custom-cursor": dynamic(() => import("./docs/blurry-blobs")),
  "scroll-select": dynamic(() => import("./docs/blurry-blobs")),
  "sentence-form": dynamic(() => import("./docs/blurry-blobs")),
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
    scale: 1.02,
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

type FloatingIcon = {
  Icon: LucideIcon;
  delay: number;
  x: number;
  y: number;
  size: number;
};

export default function DocsContent({ selectedComponent }: DocsContentProps) {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 700 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  // Floating icons data
  const floatingIcons: FloatingIcon[] = [
    { Icon: Coding, delay: 0, x: 10, y: 20, size: 20 },
    { Icon: Layers, delay: 1, x: 85, y: 15, size: 24 },
    { Icon: Zap, delay: 2, x: 15, y: 70, size: 18 },
    { Icon: Palette, delay: 1.5, x: 80, y: 75, size: 22 },
    { Icon: Globe, delay: 3, x: 90, y: 40, size: 26 },
    { Icon: Sparkles, delay: 0.5, x: 25, y: 45, size: 16 },
  ];

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
      {/* Floating tech icons */}
      {floatingIcons.map(
        ({ Icon, delay, x: iconX, y: iconY, size }, index) => (
          <motion.div
            key={index}
            className="absolute text-muted-foreground/20 pointer-events-none z-0"
            style={{
              left: `${iconX}%`,
              top: `${iconY}%`,
            }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 3, -3, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2 + delay,
              repeat: Infinity,
              delay: delay,
              ease: "easeInOut",
            }}
          >
            <Icon size={size} />
          </motion.div>
        )
      )}

      {/* Interactive cursor follower */}
      <motion.div
        className="absolute pointer-events-none w-32 h-32 rounded-full opacity-30 z-0"
        style={{
          x,
          y,
          background:
            "radial-gradient(circle, rgba(147, 51, 234, 0.1) 0%, transparent 70%)",
        }}
      />

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
              whileHover={{ scale: 1.02 }}
            >
              About{" "}
              <motion.span
                className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                dvelp
              </motion.span>
              <motion.span
                className="text-purple-500"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                .
              </motion.span>
            </motion.h2>

            <motion.div
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20"
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
            className="text-muted-foreground mb-6 leading-relaxed"
          >
            Welcome to{" "}
            <motion.span
              className="font-semibold text-foreground cursor-pointer"
              whileHover={{ scale: 1.05, color: "#8b5cf6" }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              dvelp
            </motion.span>
            , a collection of aesthetically pleasing and functional components
            created with love for the web development community. This project
            is maintained with a focus on creating beautiful, reusable
            components that enhance user experience while maintaining high
            performance and accessibility standards.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-muted-foreground mb-8"
          >
            Each component is carefully crafted to provide both visual appeal
            and practical functionality, making it easier for developers to
            create stunning web applications without compromising on quality
            or user experience.
          </motion.p>

          {/* Feature highlights */}
          <motion.div className="grid gap-4 mb-6" variants={itemVariants}>
            {/* Components feature */}
            <motion.div
              className="p-4 rounded-lg bg-gradient-to-r from-purple-500/5 to-transparent border border-purple-500/20 cursor-pointer group"
              onHoverStart={() => setHoveredFeature("components")}
              onHoverEnd={() => setHoveredFeature(null)}
              whileHover={{ scale: 1.02, x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  animate={
                    hoveredFeature === "components" ? { rotate: 360 } : {}
                  }
                  transition={{ duration: 0.5 }}
                >
                  <Layers className="w-5 h-5 text-purple-500" />
                </motion.div>
                <div className="flex-1">
                  <h4 className="font-semibold text-sm">
                    Component Resources
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    Custom animated components with Next.js, Shadcn, Tailwind
                    & Framer Motion
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
              onHoverEnd={() => setHoveredFeature(null)}
              whileHover={{ scale: 1.02, x: 5 }}
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
                    Get tech stack suggestions, error solutions, boilerplates
                    & docs
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
          <motion.div
            className="flex gap-3 flex-wrap"
            variants={itemVariants}
          >
            {[
              "Open Source",
              "TypeScript",
              "Tailwind CSS",
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

      {/* Subtle animated background pattern */}
      <motion.div
        className="absolute inset-0 opacity-5 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(circle at 20% 20%, #8b5cf6 0%, transparent 50%)",
            "radial-gradient(circle at 80% 80%, #3b82f6 0%, transparent 50%)",
            "radial-gradient(circle at 20% 20%, #8b5cf6 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
    </motion.section>
  );

  const renderInstallation = () => (
    <motion.section
      key="installation"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="sticky top-16 h-full overflow-y-auto w-full bg-black/5 dark:bg-black/20 border-1 border-accent rounded-lg p-8 flex flex-col gap-8"
    >
      <motion.div variants={itemVariants} className="flex flex-col gap-8">
        <motion.div variants={itemVariants}>
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold mb-4"
          >
            Installation
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-muted-foreground mb-4"
          >
            This UI uses components from <code>shadcn/ui</code>. To get started,
            install it in your project. CLI installation for dvelp is coming
            soon!
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="border border-border rounded-lg p-6"
          >
            <motion.h3
              variants={itemVariants}
              className="text-xl font-semibold mb-4"
            >
              Quick Start
            </motion.h3>
            <motion.ol
              variants={itemVariants}
              className="list-decimal list-inside space-y-2 text-muted-foreground"
            >
              <motion.li variants={itemVariants}>
                Follow the{" "}
                <a
                  href="https://ui.shadcn.com/docs/installation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-primary"
                >
                  shadcn/ui installation guide
                </a>
              </motion.li>
              <motion.li variants={itemVariants}>
                Copy the component code from the documentation
              </motion.li>
              <motion.li variants={itemVariants}>
                Paste it into your project
              </motion.li>
              <motion.li variants={itemVariants}>
                Import any required dependencies
              </motion.li>
              <motion.li variants={itemVariants}>
                Customize the component as needed
              </motion.li>
            </motion.ol>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );

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
            className="border border-border rounded-lg p-6 bg-black/40 cursor-context-menu"
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
            className="border border-border rounded-lg bg-black/40"
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
