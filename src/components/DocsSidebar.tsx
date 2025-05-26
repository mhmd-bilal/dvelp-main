"use client";

import React from "react";
import { categories, componentsData } from "@/data/components";

type DocsSidebarProps = {
  selected: string;
  onSelect: (id: string) => void;
};

export default function DocsSidebar({ selected, onSelect }: DocsSidebarProps) {
  return (
    <nav className="sticky top-16 h-full overflow-y-auto w-full bg-black/5 dark:bg-black/20 border-1 border-accent rounded-lg p-8 flex flex-col gap-8">
      {/* Top Section: Intro + Installation as 2-column buttons */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 ">
        {[
          { id: "introduction", label: "Whats dvelp?" },
          { id: "installation", label: "Installation" },
        ].map(({ id, label }) => (
          <button
            key={id}
            onClick={() => onSelect(id)}
            className={`relative flex items-center justify-center gap-4 rounded-lg text-sm md:text-base transition-colors border flex-row cursor-pointer py-6
        ${
          selected === id
            ? "text-foreground border-primary/30 font-medium"
            : "text-muted-foreground hover:text-foreground border-accent"
        }`}
          >
            <span
              className={`flex h-2 w-2 rounded-full bg-primary transition-opacity
        shadow-[0_0_8px_2px_rgba(255,215,0,0.5)] 
        ${selected === id ? "opacity-100" : "opacity-20"}`}
            />
            <span>{label}</span>
          </button>
        ))}
      </div>

      {/* Components Section */}
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-light">Components</h2>
        <div className="border-b border-accent"></div>
        <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
          {categories.map(category =>
            componentsData
              .filter(comp => comp.category === category)
              .map(comp => (
                <button
                  key={comp.id}
                  onClick={() => {
                    if (comp.active) {
                      onSelect(comp.id);
                    }
                  }}
                  className={`relative flex items-center justify-start gap-4 rounded-lg text-sm md:text-base transition-colors border flex-row py-6 px-6
              ${
                selected === comp.id
                  ? "text-foreground font-medium border-primary/30"
                  : "text-muted-foreground hover:text-foreground border-accent"
                  
              } ${
                comp.active ? "border-accent cursor-pointer ": "text-muted-foreground/50 border-accent/20 cursor-not-allowed"
              }`}
                >
                  <span
                    className={`flex h-2 w-2 rounded-full bg-primary transition-opacity
              shadow-[0_0_8px_2px_rgba(255,215,0,0.5)] 
              ${selected === comp.id ? "opacity-100" : "opacity-20"}`}
                  />
                  <span className="text-left">
                    <span className="block text-xs font-light uppercase opacity-60">
                      {category}
                    </span>
                    <span className="block">{comp.name}</span>
                  </span>
                </button>
              ))
          )}
        </div>
      </div>
    </nav>
  );
}
