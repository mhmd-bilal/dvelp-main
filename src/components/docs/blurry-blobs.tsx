"use client";

import React, { useEffect, useRef } from "react";

function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

interface BlurryBlobBackgroundProps {
  className?: string;
  colors?: string[];
  enableMouseInteraction?: boolean;
  animationSpeed?: number;
}

interface BlobProps {
  firstBlobColor: string;
  secondBlobColor: string;
  className?: string;
  enableMouseInteraction: boolean;
  animationSpeed: number;
}

function BlurryBlob({
  firstBlobColor,
  secondBlobColor,
  className = "",
  enableMouseInteraction,
  animationSpeed
}: BlobProps) {
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);

  const offsetFactors = useRef({
    blob1X: Math.random() * 2 + 0.5,
    blob1Y: Math.random() * 2 + 0.5,
    blob2X: Math.random() * 2 + 0.5,
    blob2Y: Math.random() * 2 + 0.5,
  });

  useEffect(() => {
    if (!enableMouseInteraction) return;

    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      const start = performance.now();
      let animationId: number;

      const animate = (time: number) => {
        const progress = (time - start) / (1000 / animationSpeed);

        const x1 = Math.sin(progress * offsetFactors.current.blob1X) * 10;
        const y1 = Math.cos(progress * offsetFactors.current.blob1Y) * 10;

        const x2 = Math.cos(progress * offsetFactors.current.blob2X) * 10;
        const y2 = Math.sin(progress * offsetFactors.current.blob2Y) * 10;

        if (blob1Ref.current) {
          blob1Ref.current.style.transform = `translate(${x1}px, ${y1}px)`;
        }
        if (blob2Ref.current) {
          blob2Ref.current.style.transform = `translate(${x2}px, ${y2}px)`;
        }

        animationId = requestAnimationFrame(animate);
      };

      animationId = requestAnimationFrame(animate);
      
      return () => {
        if (animationId) {
          cancelAnimationFrame(animationId);
        }
      };
    } else {
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const baseX = (clientX - centerX) * 0.1;
        const baseY = (clientY - centerY) * 0.1;

        if (blob1Ref.current) {
          blob1Ref.current.style.transform = `translate(${
            baseX * offsetFactors.current.blob1X
          }px, ${baseY * offsetFactors.current.blob1Y}px)`;
        }
        if (blob2Ref.current) {
          blob2Ref.current.style.transform = `translate(${
            baseX * -offsetFactors.current.blob2X
          }px, ${baseY * -offsetFactors.current.blob2Y}px)`;
        }
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [enableMouseInteraction, animationSpeed]);

  return (
    <div className="absolute inset-0 pointer-events-none">
      <div
        ref={blob1Ref}
        className={cn(
          "absolute h-64 w-64 md:h-96 md:w-96 rounded-full blur-3xl",
          "mix-blend-multiply dark:mix-blend-screen",
          "transition-transform duration-700 ease-out will-change-transform",
          "opacity-45",
          firstBlobColor,
          className
        )}
      />
      <div
        ref={blob2Ref}
        className={cn(
          "absolute h-64 w-64 md:h-96 md:w-96 rounded-full blur-3xl",
          "mix-blend-multiply dark:mix-blend-screen", 
          "transition-transform duration-700 ease-out will-change-transform",
          "opacity-45",
          secondBlobColor,
          className
        )}
      />
    </div>
  );
}

const defaultColors = [
  "bg-yellow-400 dark:bg-yellow-600",
  "bg-red-200 dark:bg-red-400",
  "bg-purple-300 dark:bg-purple-600",
  "bg-pink-200 dark:bg-pink-400",
  "bg-green-300 dark:bg-green-500",
  "bg-yellow-200 dark:bg-yellow-400",
  "bg-blue-300 dark:bg-blue-600",
  "bg-indigo-200 dark:bg-indigo-400",
  "bg-orange-300 dark:bg-orange-500",
  "bg-red-100 dark:bg-red-300"
];

export default function BlurryBlobBackground({
  className = "",
  colors = defaultColors,
  enableMouseInteraction = true,
  animationSpeed = 1
}: BlurryBlobBackgroundProps) {
  const blobConfigs = [
    {
      position: "absolute top-10 left-10 dark:opacity-5",
      firstColorIndex: 0,
      secondColorIndex: 1
    },
    {
      position: "absolute top-20 right-16 dark:opacity-7",
      firstColorIndex: 2,
      secondColorIndex: 3
    },
    {
      position: "absolute top-1/2 left-0 -translate-y-1/2 dark:opacity-2",
      firstColorIndex: 4,
      secondColorIndex: 5
    },
    {
      position: "absolute bottom-12 right-12 opacity-15",
      firstColorIndex: 6,
      secondColorIndex: 7
    },
    {
      position: "absolute bottom-1/3 left-1/3 opacity-5",
      firstColorIndex: 8,
      secondColorIndex: 9
    }
  ];

  return (
    <div className={cn("fixed inset-0 z-10", className)}>
      {blobConfigs.map((config, index) => (
        <div
          key={index}
          className={config.position}
        >
          <BlurryBlob
            firstBlobColor={colors[config.firstColorIndex] || colors[0]}
            secondBlobColor={colors[config.secondColorIndex] || colors[1]}
            enableMouseInteraction={enableMouseInteraction}
            animationSpeed={animationSpeed}
          />
        </div>
      ))}
    </div>
  );
}

export function BlurryBlobsPreview() {
  return (
    <div className="w-full h-[200px] relative rounded-md bg-white dark:bg-black">
      <BlurryBlobBackground />
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-xl opacity-20 text-white">clearly visible in the background of this page</h2>
      </div>
    </div>
  );
}