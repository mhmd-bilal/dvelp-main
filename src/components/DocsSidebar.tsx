"use client";

import React from "react";
import { Button } from "./ui/button";

type DocsSidebarProps = {
    components: string[];
    selected: string;
    onSelect: (name: string) => void;
};

export default function DocsSidebar({ components, selected, onSelect }: DocsSidebarProps) {
    return (
        <nav className="sticky top-16 h-[calc(100vh-28rem)] overflow-y-auto w-[calc(100vw-93rem)] bg-black/5 dark:bg-black/20 border-1 border-accent rounded-lg p-8 flex flex-col gap-8">
            <h2 className="text-xl font-light ">Documentation</h2>
            <div className="flex flex-wrap gap-4 max-w-full ">
                <Button
                    variant="default"
                    onClick={() => onSelect("")}
                    className={`rounded-md transition-colors flex items-center justify-center text-center
        ${selected === "docs"
                            ? "text-black dark:text-black font-semibold bg-black/20 dark:bg-white/80"
                            : "text-muted-foreground hover:bg-white/10 hover:text-white"
                        }`}
                >
                    <span className="relative z-10 text-sm md:text-base">
                        Introduction
                    </span>
                </Button>
                <Button
                    variant="default"
                    onClick={() => onSelect("")}
                    className={`rounded-md transition-colors flex items-center justify-center text-center
        ${selected === "docs"
                            ? "text-black dark:text-black font-semibold bg-black/20 dark:bg-white/80"
                            : "text-muted-foreground hover:bg-white/10 hover:text-white"
                        }`}
                >
                    <span className="relative z-10 text-sm md:text-base">
                        Installation
                    </span>
                </Button>
            </div>
            <h2 className="text-xl font-light ">Components</h2>
            <div className="flex flex-wrap gap-4 max-w-full ">
                {components.map((comp) => (
                    <Button
                        key={comp}
                        variant="default"
                        onClick={() => onSelect(comp)}
                        className={`rounded-md transition-colors flex items-center justify-center text-center
        ${selected === comp
                                ? "text-black dark:text-black font-semibold bg-black/20 dark:bg-white/80"
                                : "text-muted-foreground hover:bg-black/10 hover:text-black"
                            }`}
                    >
                        <span className="relative z-10 text-sm md:text-base">
                            {comp}
                        </span>
                    </Button>
                ))}
            </div>
        </nav>

    );
}
