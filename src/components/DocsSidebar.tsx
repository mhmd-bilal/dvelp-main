"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { componentsData } from "@/data/components";

type DocsSidebarProps = {
    selected: string;
    onSelect: (id: string) => void;
};

export default function DocsSidebar({ selected, onSelect }: DocsSidebarProps) {
    const [activeCategory, setActiveCategory] = useState<'all' | 'ui' | 'animation' | 'layout'>('all');
    
    const categories = ['all', 'ui', 'animation', 'layout'];
    const filteredComponents = activeCategory === 'all' 
        ? componentsData 
        : componentsData.filter(comp => comp.category === activeCategory);

    return (
        <nav className="sticky top-16 h-full overflow-y-auto w-full bg-black/5 dark:bg-black/20 border-1 border-accent rounded-lg p-8 flex flex-col gap-8">
            <h2 className="text-xl font-light">Categories</h2>
            <div className="flex flex-wrap gap-4 max-w-full">
                {categories.map((category) => (
                    <Button
                        key={category}
                        variant="default"
                        onClick={() => setActiveCategory(category as 'all' | 'ui' | 'animation' | 'layout')}
                        className={`rounded-md transition-colors flex items-center justify-center text-center
                            ${activeCategory === category
                                ? "text-black dark:text-black font-semibold bg-black/20 dark:bg-white/80"
                                : "text-muted-foreground hover:bg-white/10 hover:text-white"
                            }`}
                    >
                        <span className="relative z-10 text-sm md:text-base capitalize">
                            {category}
                        </span>
                    </Button>
                ))}
            </div>

            <h2 className="text-xl font-light">Components</h2>
            <div className="flex flex-wrap gap-4 max-w-full">
                {filteredComponents.map((comp) => (
                    <Button
                        key={comp.id}
                        variant="default"
                        onClick={() => onSelect(comp.id)}
                        className={`rounded-md transition-colors flex items-center justify-center text-center
                            ${selected === comp.id
                                ? "text-black dark:text-black font-semibold bg-black/20 dark:bg-white/80"
                                : "text-muted-foreground hover:bg-white/10 hover:text-white"
                            }`}
                    >
                        <span className="relative z-10 text-sm md:text-base">
                            {comp.name}
                        </span>
                    </Button>
                ))}
            </div>
        </nav>
    );
}
