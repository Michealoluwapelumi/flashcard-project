import React from "react";
import { Hero } from "@/components/Hero";
import { SearchBar } from "@/components/SearchBar";
import { CategoryCard } from "@/components/CategoryCard";
import { StatsSection } from "@/components/StatsSection";
import { CTASection } from "@/components/CTASection";
import { categories } from "@/data/categories";
import { Layers } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex-1 w-full flex flex-col">
      {/* 1. Hero */}
      <Hero />

      {/* 2. Search Bar */}
      <section className="mx-auto w-full max-w-3xl px-4 sm:px-6 pb-10 -mt-2">
        <SearchBar placeholder="Search flashcards, React hooks, CSS Grid, closures..." />
      </section>

      {/* 3. Featured Categories */}
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-text flex items-center gap-2.5">
              <Layers className="h-6 w-6 text-primary" aria-hidden="true" />
              Browse Categories
            </h2>
            <p className="mt-1 text-sm text-muted">
              12 topics covering the full frontend developer roadmap
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </section>

      {/* 4. Stats Section */}
      <StatsSection />

      {/* 5. CTA Section */}
      <CTASection />
    </div>
  );
}
