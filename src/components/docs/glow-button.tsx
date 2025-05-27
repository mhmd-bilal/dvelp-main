import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-trasparent text-foreground border-1 border-accent shadow-xs hover:bg-black/90",
        destructiveGlow: `
          relative z-10 overflow-hidden
          text-white dark:text-white
          bg-gradient-to-br from-red-800 via-red-600 to-red-400
          dark:from-red-700 dark:via-red-500 dark:to-red-300
          px-6 py-3 rounded-lg cursor-pointer
        
          before:absolute before:inset-[1px] before:bg-zinc-900 dark:before:bg-zinc-800
          before:rounded-[9px] before:transition-opacity before:duration-500 before:z-0
          hover:before:opacity-70
        
          after:absolute after:inset-0
          after:bg-gradient-to-br after:from-red-800 after:via-red-600 after:to-red-400
          dark:after:from-red-700 dark:via-red-500 dark:to-red-300
          after:rounded-[9px] after:blur-[20px] after:opacity-60
          after:transition-opacity after:duration-500 hover:after:opacity-100
        `,
        successGlow: `
        relative z-10 overflow-hidden
        text-white dark:text-white
        bg-gradient-to-br from-green-800 via-emerald-600 to-green-300
        dark:from-green-700 dark:via-emerald-500 dark:to-green-300
        px-6 py-3 rounded-lg cursor-pointer
      
        before:absolute before:inset-[1px] before:bg-zinc-900 dark:before:bg-zinc-800
        before:rounded-[9px] before:transition-opacity before:duration-500 before:z-0
        hover:before:opacity-70
      
        after:absolute after:inset-0
        after:bg-gradient-to-br after:from-green-800 after:via-emerald-600 after:to-green-300
        dark:after:from-green-700 dark:via-emerald-500 dark:to-green-300
        after:rounded-[9px] after:blur-[20px] after:opacity-60
        after:transition-opacity after:duration-500 hover:after:opacity-100
      `,
        outlineGlow: `
          relative z-10 overflow-hidden
          text-black dark:text-white
          border border-border dark:border-zinc-700
          px-6 py-3 rounded-lg cursor-pointer bg-transparent
        
          before:absolute before:inset-[1px] before:rounded-[9px] before:transition-opacity before:duration-500 before:z-0
          before:bg-background dark:before:bg-zinc-900 hover:before:opacity-70
        
          after:absolute after:inset-0
          after:rounded-[9px] after:blur-[20px] after:opacity-40
          after:bg-gradient-to-br after:from-yellow-700/30 after:via-amber-600/20 after:to-yellow-300/10
          dark:after:from-yellow-800/30 dark:via-amber-500/20 dark:to-yellow-400/10
          after:transition-opacity after:duration-500 hover:after:opacity-70
        `,
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        linkGlow: `
          relative z-10 overflow-hidden
          text-blue-600 dark:text-blue-400
          px-0 py-1 rounded cursor-pointer bg-transparent underline underline-offset-4
        
          before:absolute before:inset-[1px] before:bg-transparent
          before:rounded-[9px] before:transition-opacity before:duration-500 before:z-0
        
          after:absolute after:inset-0
          after:bg-blue-400/20 dark:after:bg-blue-500/30
          after:rounded-[9px] after:blur-[10px] after:opacity-0
          after:transition-opacity after:duration-500 hover:after:opacity-80
        `,
        glow: `
  relative z-10 overflow-hidden
  text-primary dark:text-gray-50
  bg-gradient-to-br from-yellow-900 via-amber-700 to-yellow-300
  dark:from-yellow-800 dark:via-amber-600 dark:to-yellow-400
  px-6 py-3 rounded-lg cursor-pointer

  before:absolute before:inset-[1px] before:bg-zinc-900 dark:before:bg-zinc-800
  before:rounded-[9px] before:transition-opacity before:duration-500 before:z-0
  hover:before:opacity-70

  after:absolute after:inset-0
  after:bg-gradient-to-br after:from-yellow-900 after:via-amber-700 after:to-yellow-300
  dark:after:from-yellow-800 dark:after:via-amber-600 dark:after:to-yellow-400
  after:rounded-[9px] after:blur-[20px] after:opacity-70
  after:transition-opacity after:duration-500 hover:after:opacity-100
`,
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };

interface GlowButtonProps extends React.ComponentProps<typeof Button> {
  variant?:
    | "glow"
    | "outlineGlow"
    | "destructiveGlow"
    | "successGlow"
    | "linkGlow"; // restrict to your glow variants only
  className?: string;
}

export function GlowButton({
  variant = "glow",
  className,
  children,
  ...props
}: GlowButtonProps) {
  return (
    <Button
      variant={variant}
      className={cn("relative z-10", className)}
      {...props}
    >
      <span
        className={`relative z-10 flex items-center gap-2 dark:text-white ${
          (variant === "outlineGlow" || variant === "linkGlow" ) ? "text-black" : "text-white"
        }`}
      >
        {children}
      </span>
    </Button>
  );
}

export function GlowButtonPreview() {
  return (
    <div className="flex flex-row gap-4 items-center justify-center p-8">
      <GlowButton variant="glow">Glow Button</GlowButton>
      <GlowButton variant="outlineGlow">Outline</GlowButton>
      <GlowButton variant="successGlow">Success</GlowButton>
      <GlowButton variant="destructiveGlow">Destructive</GlowButton>
      <GlowButton variant="linkGlow">Link</GlowButton>
    </div>
  );
}
