"use client";

import React from "react";
import Link from "next/link";
import { Button } from "./ui/Button";
import { ArrowRight, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-secondary to-violet-600 p-10 md:p-16 text-white text-center shadow-2xl shadow-primary/30"
        >
          {/* Background decoration */}
          <div className="absolute top-0 left-0 -z-0 h-full w-full">
            <div className="absolute -top-16 -left-16 h-64 w-64 rounded-full bg-white/5 blur-2xl" />
            <div className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-white/5 blur-2xl" />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold mb-6 backdrop-blur-sm">
              <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
              <span>No account needed · Start instantly</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Ready to level up your
              <span className="block text-white/80">frontend knowledge?</span>
            </h2>

            <p className="mt-4 max-w-xl mx-auto text-base text-white/75 leading-relaxed">
              Pick a category, flip through cards, bookmark the tricky ones, and track your progress — all in one focused, distraction-free interface.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/flashcards">
                <Button
                  variant="ghost"
                  size="lg"
                  rightIcon={<ArrowRight className="h-4 w-4" />}
                  className="bg-white text-primary hover:bg-white/90 font-semibold shadow-md"
                  id="cta-start-btn"
                >
                  Start Learning Now
                </Button>
              </Link>
              <Link href="/categories">
                <Button
                  variant="ghost"
                  size="lg"
                  className="bg-white/10 text-white hover:bg-white/20 border border-white/25 backdrop-blur-sm"
                  id="cta-browse-btn"
                >
                  Browse Categories
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
