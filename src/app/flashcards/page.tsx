"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { BookOpen, Bookmark, Layers } from "lucide-react";
import { FlashCard } from "@/components/FlashCard";
import { ProgressBar } from "@/components/ProgressBar";
import { SearchBar } from "@/components/SearchBar";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { categories } from "@/data/categories";
import { flashcards } from "@/data/flashcards";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import type { Progress } from "@/types";

const availableCategories = categories.filter((category) =>
  flashcards.some((card) => card.category === category.id),
);

export default function FlashcardsPage() {
  const searchParams = useSearchParams();
  const requestedCategory = searchParams.get("category") ?? "all";
  const requestedCardId = searchParams.get("id");

  const [activeCategory, setActiveCategory] = useState(requestedCategory);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bookmarks, setBookmarks] = useLocalStorage<string[]>("devcards-bookmarks", []);
  const [progress, setProgress] = useLocalStorage<Progress>("devcards-progress", {
    completedCardIds: [],
    totalCards: flashcards.length,
  });

  useEffect(() => {
    setActiveCategory(requestedCategory);
  }, [requestedCategory]);

  const visibleCards = useMemo(() => {
    if (activeCategory === "all") {
      return flashcards;
    }

    return flashcards.filter((card) => card.category === activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    if (!visibleCards.length) {
      setCurrentIndex(0);
      return;
    }

    const targetIndex = requestedCardId
      ? visibleCards.findIndex((card) => card.id === requestedCardId)
      : -1;

    setCurrentIndex(targetIndex >= 0 ? targetIndex : 0);
  }, [visibleCards, requestedCardId]);

  const currentCard = visibleCards[currentIndex];
  const completedCount = progress.completedCardIds.length;
  const progressPercent = Math.round((completedCount / Math.max(flashcards.length, 1)) * 100);

  const goToNext = () => {
    setCurrentIndex((previous) => Math.min(previous + 1, visibleCards.length - 1));
  };

  const goToPrevious = () => {
    setCurrentIndex((previous) => Math.max(previous - 1, 0));
  };

  const toggleBookmark = () => {
    if (!currentCard) return;
    setBookmarks((previous) =>
      previous.includes(currentCard.id)
        ? previous.filter((id) => id !== currentCard.id)
        : [...previous, currentCard.id],
    );
  };

  const toggleComplete = () => {
    if (!currentCard) return;
    setProgress((previous) => ({
      ...previous,
      completedCardIds: previous.completedCardIds.includes(currentCard.id)
        ? previous.completedCardIds.filter((cardId) => cardId !== currentCard.id)
        : [...previous.completedCardIds, currentCard.id],
    }));
  };

  return (
    <main className="flex-1 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Phase 4</p>
            <h1 className="text-3xl font-semibold text-text">Interactive flashcards</h1>
            <p className="mt-2 max-w-2xl text-sm text-muted sm:text-base">
              Review frontend concepts one card at a time with animated flips, saved cards, and progress tracking.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button variant="outline" leftIcon={<Bookmark className="h-4 w-4" />}>
              <Link href="/bookmarks">Bookmarks</Link>
            </Button>
            <Button variant="secondary" leftIcon={<BookOpen className="h-4 w-4" />}>
              <Link href="/categories">Browse categories</Link>
            </Button>
          </div>
        </div>

        <div className="max-w-2xl">
          <SearchBar placeholder="Search cards, topics, or concepts..." />
        </div>

        <Card className="border-border/70 bg-surface/80 p-4 sm:p-6">
          <CardHeader className="px-0 pb-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Layers className="h-5 w-5 text-primary" />
                Filter by topic
              </CardTitle>
              <span className="text-sm text-muted">{completedCount}/{flashcards.length} cards completed</span>
            </div>
          </CardHeader>
          <CardContent className="px-0 pb-0">
            <div className="flex flex-wrap gap-2">
              <Button
                variant={activeCategory === "all" ? "primary" : "outline"}
                size="sm"
                onClick={() => setActiveCategory("all")}
              >
                All cards
              </Button>
              {availableCategories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "primary" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/70 bg-surface/80 p-4 sm:p-6">
          <CardHeader className="px-0 pb-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <CardTitle className="text-lg">Learning progress</CardTitle>
              <span className="text-sm font-medium text-primary">{progressPercent}% complete</span>
            </div>
          </CardHeader>
          <CardContent className="px-0 pb-0">
            <ProgressBar value={progressPercent} label="Study progress" />
            <p className="mt-3 text-sm text-muted">
              {bookmarks.length} saved cards • {completedCount} marked complete
            </p>
          </CardContent>
        </Card>

        {visibleCards.length === 0 ? (
          <Card className="border-dashed border-border bg-surface/70 p-8 text-center">
            <p className="text-lg font-medium text-text">No flashcards are available for this topic yet.</p>
            <p className="mt-2 text-sm text-muted">Try another category to continue studying.</p>
          </Card>
        ) : (
          <Card className="border-border/70 bg-surface/80 p-6 sm:p-8">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-muted">
                  Card {Math.min(currentIndex + 1, visibleCards.length)} of {visibleCards.length}
                </p>
                <p className="text-sm text-muted">{currentCard?.question}</p>
              </div>
            </div>
            {currentCard && (
              <FlashCard
                flashcard={currentCard}
                onNext={goToNext}
                onPrevious={goToPrevious}
                canGoNext={currentIndex < visibleCards.length - 1}
                canGoPrevious={currentIndex > 0}
                showCategory={activeCategory !== "all"}
                isBookmarked={bookmarks.includes(currentCard.id)}
                isCompleted={progress.completedCardIds.includes(currentCard.id)}
                onToggleBookmark={toggleBookmark}
                onToggleComplete={toggleComplete}
              />
            )}
          </Card>
        )}
      </div>
    </main>
  );
}
