"use client";

import React, { useEffect, useRef, useState } from "react";
import { BookOpen, Layers, Trophy, Zap } from "lucide-react";
import { motion, useInView } from "framer-motion";

interface Stat {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  color: string;
}

const stats: Stat[] = [
  {
    icon: BookOpen,
    value: 61,
    suffix: "+",
    label: "Flashcards",
    color: "text-primary",
  },
  {
    icon: Layers,
    value: 12,
    suffix: "",
    label: "Categories",
    color: "text-secondary",
  },
  {
    icon: Trophy,
    value: 100,
    suffix: "%",
    label: "Free to use",
    color: "text-accent",
  },
  {
    icon: Zap,
    value: 300,
    suffix: "ms",
    label: "Avg. flip speed",
    color: "text-orange-400",
  },
];

function AnimatedCount({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1200;
    const step = Math.ceil(target / (duration / 16));

    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="py-16 border-y border-border/30 bg-surface/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl font-bold tracking-tight text-text">
            Built for developers, by developers
          </h2>
          <p className="mt-2 text-sm text-muted">
            Concise, accurate, and constantly growing
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col items-center gap-3 rounded-2xl bg-surface border border-border/50 p-6 text-center hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-surface to-surface-hover border border-border/50 ${stat.color}`}
              >
                <stat.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className={`text-3xl font-extrabold tracking-tight ${stat.color}`}>
                  <AnimatedCount target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-sm text-muted mt-0.5">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
