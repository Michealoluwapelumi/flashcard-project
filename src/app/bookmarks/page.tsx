"use client";

import Link from "next/link";
import { ArrowRight, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { flashcards } from "@/data/flashcards";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export default function BookmarksPage() {
  const [bookmarks] = useLocalStorage<string[]>("devcards-bookmarks", []);
  const savedCards = flashcards.filter((card) => bookmarks.includes(card.id));

  return (
    <main className="flex-1 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Phase 6</p>
            <h1 className="text-3xl font-semibold text-text">Saved flashcards</h1>
            <p className="mt-2 max-w-2xl text-sm text-muted sm:text-base">
              Keep your favorite concepts handy and return to them whenever you want a quick review.
            </p>
          </div>

          <Button variant="outline" leftIcon={<Bookmark className="h-4 w-4" />}>
            <Link href="/flashcards">Back to deck</Link>
          </Button>
        </div>

        {savedCards.length === 0 ? (
          <Card className="border-dashed border-border bg-surface/70 p-8 text-center">
            <p className="text-lg font-medium text-text">No cards have been bookmarked yet.</p>
            <p className="mt-2 text-sm text-muted">Save a card from the deck to build your personal study stack.</p>
          </Card>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {savedCards.map((card) => (
              <Card key={card.id} className="border-border/70 bg-surface/80 p-5">
                <CardHeader className="px-0 pb-3">
                  <CardTitle className="text-lg">{card.question}</CardTitle>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <p className="text-sm leading-relaxed text-muted">{card.answer}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="rounded-full border border-border bg-surface-hover px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-muted">
                      {card.category}
                    </span>
                    <Link href={`/flashcards?category=${card.category}&id=${card.id}`} className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                      Review card <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
