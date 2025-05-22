"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

const themes = ["light", "dark"] as const

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  // Helper to cycle to next theme in the array
  const toggleTheme = React.useCallback(() => {
    const currentIndex = themes.indexOf(theme as typeof themes[number])
    const nextIndex = (currentIndex + 1) % themes.length
    setTheme(themes[nextIndex])
  }, [theme, setTheme])

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
      <Sun
        className={`h-[1.2rem] w-[1.2rem] transition-all ${theme === "light" ? "rotate-0 scale-100" : "rotate-90 scale-0"
          }`}
      />
      <Moon
        className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${theme === "dark" ? "rotate-0 scale-100" : "rotate-90 scale-0"
          }`}
      />
      {/* Optional: show some indicator for system */}
    </Button>
  )
}
