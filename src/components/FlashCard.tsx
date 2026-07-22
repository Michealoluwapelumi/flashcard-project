"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Bookmark, CheckCircle2, RotateCw, Sparkles } from "lucide-react";
import type { Flashcard as FlashcardType } from "@/types";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

interface FlashCardProps {
  flashcard: FlashcardType;
  onNext: () => void;
  onPrevious: () => void;
  canGoNext: boolean;
  canGoPrevious: boolean;
  showCategory?: boolean;
  isBookmarked: boolean;
  isCompleted: boolean;
  onToggleBookmark: () => void;
  onToggleComplete: () => void;
}

export function FlashCard({
  flashcard,
  onNext,
  onPrevious,
  canGoNext,
  canGoPrevious,
  showCategory = false,
  isBookmarked,
  isCompleted,
  onToggleBookmark,
  onToggleComplete,
}: FlashCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const categoryLabel = flashcard.category.replace(/-/g, " ");

  return (
    <div className="w-full">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-primary">Study mode</p>
          <h2 className="text-xl font-semibold text-text">Tap to reveal the answer</h2>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-muted">
          <Sparkles className="h-4 w-4 text-accent" />
          {showCategory ? categoryLabel : "Interactive deck"}
        </div>
      </div>

      <div className="relative h-90 w-full max-w-3xl perspective-distant sm:h-107.5">
        <motion.div
          className="h-full w-full cursor-pointer transform-3d"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          onClick={() => setIsFlipped((previous) => !previous)}
        >
          <div className="absolute inset-0 h-full w-full backface-hidden">
            <Card className="flex h-full flex-col justify-between border-primary/20 bg-linear-to-br from-primary/10 via-surface to-secondary/10 p-6 shadow-xl sm:p-8">
              <div className="space-y-4">
                <span className="inline-flex w-fit rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  Question
                </span>
                <h3 className="text-2xl font-semibold leading-tight text-text sm:text-3xl">
                  {flashcard.question}
                </h3>
              </div>

              <div className="flex items-center justify-between border-t border-border/60 pt-4 text-sm text-muted">
                <span>Click card to reveal answer</span>
                <span className="font-medium text-primary">{flashcard.keywords?.slice(0, 2).join(" • ")}</span>
              </div>
            </Card>
          </div>

          <div className="absolute inset-0 h-full w-full backface-hidden transform-[rotateY(180deg)]">
            <Card className="flex h-full flex-col justify-between border-accent/20 bg-linear-to-br from-accent/10 via-surface to-primary/10 p-6 shadow-xl sm:p-8">
              <div className="space-y-4">
                <span className="inline-flex w-fit rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                  Answer
                </span>
                <p className="text-lg leading-relaxed text-text sm:text-xl">
                  {flashcard.answer}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-border/60 pt-4 text-sm text-muted">
                <span>Tap again to see the question</span>
                <span className="font-medium text-accent">Ready to review</span>
              </div>
            </Card>
          </div>
        </motion.div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-3">
          <Button
            onClick={onPrevious}
            disabled={!canGoPrevious}
            variant="outline"
            leftIcon={<ArrowLeft className="h-4 w-4" />}
          >
            Previous
          </Button>
          <Button
            onClick={onNext}
            disabled={!canGoNext}
            variant="primary"
            rightIcon={<ArrowRight className="h-4 w-4" />}
          >
            Next
          </Button>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button
            onClick={onToggleBookmark}
            variant={isBookmarked ? "accent" : "outline"}
            leftIcon={<Bookmark className="h-4 w-4" />}
          >
            {isBookmarked ? "Saved" : "Save"}
          </Button>
          <Button
            onClick={onToggleComplete}
            variant={isCompleted ? "accent" : "outline"}
            leftIcon={<CheckCircle2 className="h-4 w-4" />}
          >
            {isCompleted ? "Completed" : "Mark done"}
          </Button>
          <Button
            onClick={() => setIsFlipped((previous) => !previous)}
            variant="secondary"
            leftIcon={<RotateCw className="h-4 w-4" />}
          >
            {isFlipped ? "Show question" : "Flip card"}
          </Button>
        </div>
      </div>
    </div>
  );
}
