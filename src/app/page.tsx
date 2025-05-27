"use client";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/theme-toggle";
import BlurryBlob from "@/components/animata/background/blurry-blob";
import DocsSidebar from "@/components/DocsSidebar";
import DocsContent from "@/components/DocsContent";
import StackologySidebar from "@/components/StackologySidebar";
import StackologyContent from "@/components/StackologyContent";
import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

export default function Home() {
  const [selected, setSelected] = useState("introduction");
  const [selectedTab, setSelectedTab] = useState("home");
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
  const [selectedProject, setSelectedProject] = useState("");
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 700 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleSelect = (name: string) => {
    setSelectedTab(name);
  };

  return (
    <div className="flex flex-row md:min-h-screen md:max-h-screen md:overflow-hidden overflow-x-hidden h-screen bg-background text-foreground relative items-center justify-center">
      <>
        {/* Top Left */}
        <BlurryBlob
          className="absolute top-10 left-10 dark:opacity-5"
          firstBlobColor="bg-yellow-400 dark:bg-yellow-600"
          secondBlobColor="bg-red-200 dark:bg-red-400"
        />

        {/* Top Right */}
        <BlurryBlob
          className="absolute top-20 right-16 dark:opacity-7"
          firstBlobColor="bg-purple-300 dark:bg-purple-600"
          secondBlobColor="bg-pink-200 dark:bg-pink-400"
        />

        {/* Center Left */}
        <BlurryBlob
          className="absolute top-1/2 left-0 -translate-y-1/2 dark:opacity-2"
          firstBlobColor="bg-green-300 dark:bg-green-500"
          secondBlobColor="bg-yellow-200 dark:bg-yellow-400"
        />

        {/* Bottom Right */}
        <BlurryBlob
          className="absolute bottom-12 right-12 opacity-15"
          firstBlobColor="bg-blue-300 dark:bg-blue-600"
          secondBlobColor="bg-indigo-200 dark:bg-indigo-400"
        />

        {/* Center Background */}
        <BlurryBlob
          className="absolute bottom-1/3 left-1/3 opacity-5"
          firstBlobColor="bg-orange-300 dark:bg-orange-500"
          secondBlobColor="bg-red-100 dark:bg-red-300"
        />
      </>

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

      {/* Main Content */}
      <main className="flex z-10 h-full w-full">
        <motion.div
          initial={{ opacity: 0, x: 0, y: 200 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:grid-rows-4 md:grid-cols-5 md:grid-rows-7 md:min-h-screen md:max-h-screen min-w-screen max-w-screen absolute top-0 left-0 md:p-20 p-10 pt-20"
        >
          <div className="sm:col-span-2 sm:row-span-1 md:col-span-2 md:row-span-2 md:col-start-1 md:row-start-6 flex flex-col justify-end items-start gap-7">
            <div className="flex flex-col items-start gap-4">
              <div className="relative w-fit">
                <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-light font-serif -tracking-normal relative z-10">
                  this is <span className="font-black">dvelp.</span>
                </h1>
                <h1
                  className="absolute inset-0 text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-light font-serif -tracking-normal blur-3xl opacity-20 text-white"
                  aria-hidden="true"
                >
                  this is <span className="font-black">dvelp.</span>
                </h1>
                <h1
                  className="absolute inset-0 text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-light font-serif -tracking-normal blur-xl opacity-30 dark:text-white text-black"
                  aria-hidden="true"
                >
                  this is <span className="font-black">dvelp.</span>
                </h1>
              </div>

              <div className="relative w-fit">
                <p className="text-sm md:text-md text-black dark:text-muted-foreground w-60 md:w-md">
                  a unconcetional dev help site, built by <u>bilal</u> just to
                  help people create beautiful websites and applications.
                </p>
                <p className="absolute inset-0  text-sm md:text-md w-60 md:w-md blur-2xl opacity-30 dark:text-white text-black">
                  a unconcetional dev help site, built by <u>bilal</u> just to
                  help people create beautiful websites and applications.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Button
                variant="glow"
                onClick={() =>
                  handleSelect(selectedTab === "docs" ? "home" : "docs")
                }
              >
                <span className="relative z-10 flex items-center gap-2 dark:text-white text-white">
                  ⚡ <span>Explore</span>
                </span>
              </Button>
              <Button variant="outlineGlow" className="h-full">
                <span className="relative z-10 flex items-center gap-2">
                  Visit Creator
                </span>
              </Button>
            </div>
          </div>
          <div className="sm:col-span-2 sm:row-span-1 md:col-span-3 md:col-start-3 md:row-start-7 flex md:flex-row flex-wrap gap-6 md:justify-end items-end justify-start">
            <a
              onClick={() => handleSelect("home")}
              className={`cursor-pointer hover:text-foreground transition-colors ${
                selectedTab === "home"
                  ? "text-foreground"
                  : "text-muted-foreground "
              }`}
            >
              home
            </a>
            <a
              onClick={() => handleSelect("stackology")}
              className={`cursor-pointer hover:text-foreground transition-colors ${
                selectedTab === "stackology"
                  ? "text-foreground"
                  : "text-muted-foreground "
              }`}
            >
              stackology
            </a>
            <a
              onClick={() => handleSelect("docs")}
              className={`cursor-pointer hover:text-foreground transition-colors ${
                selectedTab === "docs"
                  ? "text-foreground"
                  : "text-muted-foreground "
              }`}
            >
              components
            </a>
            <a
              href="https://github.com/mhmd-bilal/dvelp-main"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
            >
              github
            </a>
            <div className="flex flex-row gap-6 items-center bg-amber-">
              <ModeToggle />
            </div>
          </div>
          {/* Docs Tab */}
          <div className="sm:col-span-2 sm:row-span-2 md:col-span-2 md:row-span-5 flex flex-col justify-start items-start">
            <AnimatePresence mode="wait">
              {selectedTab === "docs" && (
                <motion.div
                  initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                  key="docs"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="w-full h-full"
                >
                  <div
                    className={`w-full h-full  ${
                      selectedTab === "docs" ? "block" : "hidden"
                    }`}
                  >
                    <DocsSidebar selected={selected} onSelect={setSelected} />
                  </div>
                </motion.div>
              )}
              {selectedTab === "stackology" && (
                <motion.div
                  initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                  key="stackology"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="w-full h-full"
                >
                  <div
                    className={`w-full h-full  ${
                      selectedTab === "stackology" ? "block" : "hidden"
                    }`}
                  >
                    <StackologySidebar
                      selectedTechs={selectedTechs}
                      onTechSelect={setSelectedTechs}
                      selectedProject={selectedProject}
                      onProjectSelect={setSelectedProject}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="sm:col-span-2 sm:row-span-2 md:col-span-3 md:row-span-6 md:col-start-3 md:row-start-1 flex flex-col justify-start items-end ">
            <AnimatePresence mode="wait">
              {selectedTab === "docs" && (
                <motion.div
                  initial={{ opacity: 0, y: 25, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: 25, filter: "blur(8px)" }}
                  key="docs"
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-full h-full"
                >
                  <div
                    className={`w-full h-full  ${
                      selectedTab === "docs" ? "block" : "hidden"
                    }`}
                  >
                    {" "}
                    <DocsContent selectedComponent={selected} handleSelect={handleSelect} />
                  </div>
                </motion.div>
              )}
              {selectedTab === "stackology" && (
                <motion.div
                  initial={{ opacity: 0, y: 25, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: 25, filter: "blur(8px)" }}
                  key="stackology"
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-full h-full"
                >
                  <div
                    className={`w-full h-full  ${
                      selectedTab === "stackology" ? "block" : "hidden"
                    }`}
                  >
                    <StackologyContent
                      selectedTechs={selectedTechs}
                      selectedProject={selectedProject}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
