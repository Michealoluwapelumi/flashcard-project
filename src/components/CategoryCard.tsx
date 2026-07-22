"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Wind,
  Braces,
  FileCode2,
  Atom,
  Triangle,
  GitBranch,
  Plug,
  Accessibility,
  Gauge,
  MessageCircle,
  LucideIcon,
} from "lucide-react";
import type { CategoryInfo } from "@/types";

const iconMap: Record<string, LucideIcon> = {
  "code-2": Code2,
  palette: Palette,
  wind: Wind,
  braces: Braces,
  "file-code-2": FileCode2,
  atom: Atom,
  triangle: Triangle,
  "git-branch": GitBranch,
  plug: Plug,
  accessibility: Accessibility,
  gauge: Gauge,
  "message-circle": MessageCircle,
};

interface CategoryCardProps {
  category: CategoryInfo;
  index?: number;
}

export function CategoryCard({ category, index = 0 }: CategoryCardProps) {
  const Icon = iconMap[category.icon] ?? Code2;
  const gradient = category.color ?? "from-primary to-secondary";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
    >
      <Link
        href={`/categories?category=${category.id}`}
        className="group flex flex-col h-full rounded-(--radius-card) bg-surface border border-border/60 p-5 transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
        aria-label={`Browse ${category.name} flashcards`}
      >
        {/* Icon Container */}
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br ${gradient} mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="h-5 w-5 text-white" aria-hidden="true" />
        </div>

        {/* Name & Count */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-text text-sm leading-tight">
            {category.name}
          </h3>
          <span className="shrink-0 text-xs font-medium text-muted bg-surface-hover px-2 py-0.5 rounded-full border border-border/40">
            {category.cardCount}
          </span>
        </div>

        {/* Description */}
        {category.description && (
          <p className="text-xs text-muted leading-relaxed line-clamp-2 flex-1">
            {category.description}
          </p>
        )}

        {/* Footer CTA */}
        <div className="mt-4 flex items-center gap-1 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <span>Study now</span>
          <span className="translate-x-0 group-hover:translate-x-1 transition-transform duration-200">→</span>
        </div>
      </Link>
    </motion.div>
  );
}
