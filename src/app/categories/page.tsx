"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FolderOpen } from "lucide-react";
import { CategoryCard } from "@/components/CategoryCard";
import { SearchBar } from "@/components/SearchBar";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { categories } from "@/data/categories";

export default function CategoriesPage() {
  const searchParams = useSearchParams();
  const selectedCategoryId = searchParams.get("category");
  const selectedCategory = categories.find((category) => category.id === selectedCategoryId);

  return (
    <main className="flex-1 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Phase 5</p>
            <h1 className="text-3xl font-semibold text-text">Study by category</h1>
            <p className="mt-2 max-w-2xl text-sm text-muted sm:text-base">
              Explore topics such as HTML, CSS, React, and interview prep, then jump into a focused study set.
            </p>
          </div>

          <Button variant="outline" leftIcon={<FolderOpen className="h-4 w-4" />}>
            <Link href="/flashcards">Open flashcard deck</Link>
          </Button>
        </div>

        <div className="max-w-2xl">
          <SearchBar placeholder="Search by topic or skill..." />
        </div>

        {selectedCategory && (
          <Card className="border-primary/20 bg-linear-to-br from-primary/10 via-surface to-secondary/10 p-4 sm:p-6">
            <CardHeader className="px-0 pb-3">
              <CardTitle className="text-lg">{selectedCategory.name}</CardTitle>
            </CardHeader>
            <CardContent className="px-0 pb-0">
              <p className="text-sm text-muted">{selectedCategory.description}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button variant="primary">
                  <Link href={`/flashcards?category=${selectedCategory.id}`}>Start this category</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        <Card className="border-border/70 bg-surface/80 p-4 sm:p-6">
          <CardHeader className="px-0 pb-4">
            <CardTitle className="flex items-center gap-2 text-lg">Available categories</CardTitle>
          </CardHeader>
          <CardContent className="px-0 pb-0">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {categories.map((category, index) => (
                <CategoryCard key={category.id} category={category} index={index} />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
