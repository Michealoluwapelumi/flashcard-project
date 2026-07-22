"use client";

import React from "react";
import Link from "next/link";
import { Button } from "./ui/Button";
import { ArrowRight, Layers, Sparkles, BookOpen, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { categories } from "@/data/categories";
import { flashcards } from "@/data/flashcards";

const codeLines = [
  { text: "const useFlashcard = () => {", color: "text-violet-400" },
  { text: '  const [flipped, setFlipped]', color: "text-blue-300" },
  { text: '    = useState(false);', color: "text-blue-300" },
  { text: '  return { flipped, flip };', color: "text-emerald-400" },
  { text: "};", color: "text-violet-400" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      {/* Background glows */}
      <div className="absolute -top-20 left-1/4 -z-10 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute top-20 right-1/4 -z-10 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text Content */}
          <div className="flex flex-col items-start">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-4 py-1.5 text-xs font-semibold text-primary"
            >
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{flashcards.length} Flashcards · {categories.length} Categories · Free Forever</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-text leading-[1.1]"
            >
              Master Frontend
              <span className="block mt-1 bg-linear-to-r from-primary via-secondary to-violet-500 bg-clip-text text-transparent">
                One Card At A Time
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 max-w-lg text-base sm:text-lg text-muted leading-relaxed"
            >
              Stop re-reading documentation. DevCards condenses HTML, CSS, JavaScript, React, TypeScript, Git, and interview prep into bite-sized, interactive flashcards.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Link href="/flashcards">
                <Button
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRight className="h-4 w-4" />}
                  id="hero-start-btn"
                >
                  Start Learning
                </Button>
              </Link>
              <Link href="/categories">
                <Button
                  variant="outline"
                  size="lg"
                  leftIcon={<Layers className="h-4 w-4" />}
                  id="hero-browse-btn"
                >
                  Browse Categories
                </Button>
              </Link>
            </motion.div>

            {/* Social proof pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              {[
                { icon: BookOpen, label: "61 Flashcards" },
                { icon: Layers, label: "12 Topics" },
                { icon: Zap, label: "Interview Ready" },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-muted border border-border/50 rounded-full px-3 py-1"
                >
                  <Icon className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                  {label}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — Animated Code Card Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative hidden lg:flex justify-center items-center"
          >
            {/* Floating card behind */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-52 h-32 rounded-2xl bg-linear-to-br from-secondary/20 to-violet-500/10 border border-secondary/20 backdrop-blur-sm"
            />

            {/* Main code card */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="relative z-10 w-full max-w-md rounded-2xl bg-surface border border-border/60 shadow-2xl overflow-hidden"
            >
              {/* Card header */}
              <div className="flex items-center gap-2 px-5 py-3.5 border-b border-border/40 bg-surface-hover/30">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <span className="text-xs text-muted ml-2 font-mono">useFlashcard.ts</span>
              </div>

              {/* Code content */}
              <div className="p-5 font-mono text-sm space-y-1">
                {codeLines.map((line, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                    className={`${line.color} leading-relaxed`}
                  >
                    {line.text}
                  </motion.p>
                ))}
              </div>

              {/* Question preview */}
              <div className="mx-5 mb-5 p-4 rounded-xl bg-primary/8 border border-primary/20">
                <p className="text-xs font-semibold text-primary mb-1.5">Question</p>
                <p className="text-sm text-text font-medium">What is a closure in JavaScript?</p>
              </div>
            </motion.div>

            {/* Small floating badge */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-3 -left-4 z-20 flex items-center gap-2 rounded-xl bg-accent/15 border border-accent/25 px-4 py-2.5 shadow-lg backdrop-blur-sm"
            >
              <Zap className="h-4 w-4 text-accent" />
              <span className="text-xs font-semibold text-accent">Interview ready!</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
