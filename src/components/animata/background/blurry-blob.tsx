"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";

interface BlobProps extends React.HTMLAttributes<HTMLDivElement> {
    firstBlobColor: string;
    secondBlobColor: string;
}

export default function BlurryBlob({
    className = "",
    firstBlobColor = "bg-purple-400",
    secondBlobColor = "bg-purple-200",
}: BlobProps) {
    const blob1Ref = useRef<HTMLDivElement>(null);
    const blob2Ref = useRef<HTMLDivElement>(null);

    // Random offset factors per blob – fixed after mount

    const offsetFactors = useRef({
        blob1X: Math.random() * 2 + 0.5,
        blob1Y: Math.random() * 2 + 0.5,
        blob2X: Math.random() * 2 + 0.5,
        blob2Y: Math.random() * 2 + 0.5,
    });

    useEffect(() => {
        const isMobile = window.innerWidth < 768;

        if (isMobile) {
            // Subtle ambient animation
            let start = performance.now();

            const animate = (time: number) => {
                const progress = (time - start) / 1000;

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

                requestAnimationFrame(animate);
            };
            const handleMouseMove = (e: MouseEvent) => {
                const { clientX, clientY } = e;
                const centerX = window.innerWidth / 2;
                const centerY = window.innerHeight / 2;

                const baseX = (clientX - centerX) * 2;
                const baseY = (clientY - centerY) * 2;

                if (blob1Ref.current) {
                    blob1Ref.current.style.transform = `translate(${baseX * offsetFactors.current.blob1X
                        }px, ${baseY * offsetFactors.current.blob1Y}px)`;
                }
                if (blob2Ref.current) {
                    blob2Ref.current.style.transform = `translate(${baseX * -offsetFactors.current.blob2X
                        }px, ${baseY * -offsetFactors.current.blob2Y}px)`;
                }
            };

            window.addEventListener("mousemove", handleMouseMove);
            return () => window.removeEventListener("mousemove", handleMouseMove);
        } else {
            // Mouse-following behavior
            const handleMouseMove = (e: MouseEvent) => {
                const { clientX, clientY } = e;
                const centerX = window.innerWidth / 2;
                const centerY = window.innerHeight / 2;

                const baseX = (clientX - centerX) * 2;
                const baseY = (clientY - centerY) * 2;

                if (blob1Ref.current) {
                    blob1Ref.current.style.transform = `translate(${baseX * offsetFactors.current.blob1X
                        }px, ${baseY * offsetFactors.current.blob1Y}px)`;
                }
                if (blob2Ref.current) {
                    blob2Ref.current.style.transform = `translate(${baseX * -offsetFactors.current.blob2X
                        }px, ${baseY * -offsetFactors.current.blob2Y}px)`;
                }
            };

            window.addEventListener("mousemove", handleMouseMove);
            return () => window.removeEventListener("mousemove", handleMouseMove);
        }
    }, []);
    return (
        <div className="min-h-52 min-w-52 w-full h-full items-center justify-center">
            <div className="relative w-full max-w-lg">
                <div
                    ref={blob1Ref}
                    className={cn(
                        "absolute -right-100 -top-100 h-400 w-400 animate-pop-blob rounded-full p-8 opacity-45 blur-3xl filter will-change-transform",
                        "mix-blend-multiply dark:mix-blend-screen",
                        "transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]", // smoother easing
                        className,
                        firstBlobColor
                    )}
                />
                <div
                    ref={blob2Ref}
                    className={cn(
                        "absolute -left-100 -top-100 h-400 w-400 animate-pop-blob rounded-full p-8 opacity-45 blur-3xl filter will-change-transform",
                        "mix-blend-multiply dark:mix-blend-screen",
                        "transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
                        className,
                        secondBlobColor
                    )}
                />
            </div>
        </div>
    );
}
