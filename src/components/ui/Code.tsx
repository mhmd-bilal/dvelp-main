"use client";

import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Check, Copy, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

interface CodeProps {
  code: unknown;
  language?: string;
  className?: string;
}

export default function Code({
  code,
  language = "tsx",
  className = "",
}: CodeProps) {
  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(String(code));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  // Check if code has more than 5 lines
  const codeLines = String(code).split("\n");
  const hasMoreThan5Lines = codeLines.length > 5;

  return (
    <motion.div
      className={clsx(
        "relative group rounded-md overflow-hidden bg-black/80 dark:bg-black/60 w-full",
        className
      )}
      animate={copied ? { scale: 1.02 } : { scale: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <button
        onClick={copyToClipboard}
        className="absolute right-2 top-2 p-2 rounded-md bg-black/20 hover:bg-black/30 transition-colors z-10 cursor-pointer"
        aria-label="Copy code"
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-400" />
        ) : (
          <Copy className="h-4 w-4 text-gray-400" />
        )}
      </button>

      {/* Shimmer light effect */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ x: "-150%", rotate: -20 }}
            animate={{ x: "150%" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute inset-0 z-10 pointer-events-none -translate-y-32"
          >
            <div className="w-1/3 h-full bg-primary/20 blur-3xl rotate-12"></div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative overflow-hidden">
        <motion.div
          animate={{
            height: isExpanded || !hasMoreThan5Lines ? "auto" : "8rem",
          }}
          transition={{
            duration: 0.4,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="overflow-hidden"
        >
          <SyntaxHighlighter
            language={language}
            style={vscDarkPlus}
            wrapLongLines={true}
            customStyle={{
              margin: 0,
              borderRadius: "0.5rem",
              background: "transparent",
              padding: "1rem",
              paddingBottom: "1rem",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
            }}
          >
            {typeof code === "string" ? code : JSON.stringify(code)}
          </SyntaxHighlighter>
        </motion.div>

        {/* Enhanced gradient overlay when collapsed */}
        <AnimatePresence>
          {hasMoreThan5Lines && !isExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 30%, rgba(0,0,0,0.2) 60%, transparent 100%)",
              }}
            />
          )}
        </AnimatePresence>

        {/* Read more/less button */}
        {hasMoreThan5Lines && (
          <motion.button
            onClick={toggleExpanded}
            className="absolute bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1.5 rounded-md bg-black/40 hover:bg-black/60 border border-gray-600/50 text-gray-300 text-sm font-medium transition-all duration-200 flex items-center gap-1 backdrop-blur-sm z-20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              y: isExpanded ? 0 : -8,
            }}
            transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
          >
            <motion.span
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {isExpanded ? "Show less" : "Read more"}
            </motion.span>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
            >
              <ChevronDown className="h-3 w-3" />
            </motion.div>
          </motion.button>
        )}
      </div>
    </motion.div>
  );
}
