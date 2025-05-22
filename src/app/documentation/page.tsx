"use client";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/theme-toggle";
import BlurryBlob from "@/components/animata/background/blurry-blob";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div>
      <div className="flex min-h-screen max-h-screen overflow-hidden bg-background text-foreground relative">
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


        {/* Theme Toggle */}
        <div className="absolute top-4 right-4 z-10">
          <ModeToggle />
        </div>

        {/* Main Content */}
        <main className="flex z-10 h-full w-full">
          {/* Left Bottom Corner Content */}
          <div className="absolute bottom-14 p-0 left-8 right-0 clear-both max-w-md flex flex-col gap-8 rounded-lg md:left-24 md:right-0 md:bottom-24 md:max-w-full md:px-4">
            <div className="flex flex-col items-start gap-1">
              <h1 className="text-5xl font-light font-serif -tracking-normal md:text-7xl">dvlep's <span className="font-black">doucmentation.</span></h1>
              <p className="text-sm md:text-md text-muted-foreground w-60 md:w-lg">
                built by <u>bilal</u> to help developers and designers to create beautiful websites and applications.
              </p></div>
            <div className="absolute blur-3xl opacity-90 items-start gap-1">
              <h1 className="text-5xl font-light font-serif -tracking-normal md:text-7xl">this is <span className="font-black">dvelp.</span></h1>
              <p className="text-sm md:text-md text-muted-foreground w-60 md:w-lg">
                built by <u>bilal</u> to help developers and designers to create beautiful websites and applications.
              </p></div>
            <div className="flex gap-4">
              <Button variant="glow">
                <span className="relative z-10 flex items-center gap-2 dark:text-white">
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
        </main>
      </div></motion.div>
  );
}
