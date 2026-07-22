"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Search, X, Layers, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { flashcards } from "@/data/flashcards";
import { categories } from "@/data/categories";

interface SearchResult {
  type: "flashcard" | "category";
  id: string;
  title: string;
  subtitle: string;
  href: string;
}

interface SearchBarProps {
  placeholder?: string;
  className?: string;
}

export function SearchBar({
  placeholder = "Search flashcards or categories...",
  className = "",
}: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const search = useCallback((q: string) => {
    if (q.trim().length < 2) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    const lower = q.toLowerCase();

    const cardResults: SearchResult[] = flashcards
      .filter(
        (f) =>
          f.question.toLowerCase().includes(lower) ||
          f.answer.toLowerCase().includes(lower) ||
          f.keywords?.some((k) => k.toLowerCase().includes(lower)),
      )
      .slice(0, 5)
      .map((f) => ({
        type: "flashcard",
        id: f.id,
        title: f.question,
        subtitle: f.category.replace("-", " "),
        href: `/flashcards?category=${f.category}&id=${f.id}`,
      }));

    const categoryResults: SearchResult[] = categories
      .filter(
        (c) =>
          c.name.toLowerCase().includes(lower) ||
          c.description?.toLowerCase().includes(lower),
      )
      .slice(0, 3)
      .map((c) => ({
        type: "category",
        id: c.id,
        title: c.name,
        subtitle: `${c.cardCount} cards`,
        href: `/categories?category=${c.id}`,
      }));

    const combined = [...categoryResults, ...cardResults].slice(0, 7);
    setResults(combined);
    setIsOpen(combined.length > 0);
    setActiveIndex(-1);
  }, []);

  useEffect(() => {
    search(query);
  }, [query, search]);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => Math.min(prev + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => Math.max(prev - 1, -1));
    } else if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault();
      router.push(results[activeIndex].href);
      setIsOpen(false);
      setQuery("");
    } else if (e.key === "Escape") {
      setIsOpen(false);
      inputRef.current?.blur();
    }
  };

  const clearSearch = () => {
    setQuery("");
    setResults([]);
    setIsOpen(false);
    inputRef.current?.focus();
  };

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      {/* Input */}
      <div className="relative flex items-center">
        <Search className="absolute left-4 h-5 w-5 text-muted pointer-events-none" aria-hidden="true" />
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => results.length > 0 && setIsOpen(true)}
          placeholder={placeholder}
          aria-label="Search flashcards and categories"
          aria-expanded={isOpen}
          aria-autocomplete="list"
          role="combobox"
          className="w-full pl-12 pr-12 py-3.5 text-sm bg-surface border border-border/80 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-text placeholder-muted"
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-4 text-muted hover:text-text transition-colors"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Dropdown Results */}
      <AnimatePresence>
        {isOpen && results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full mt-2 w-full z-50 bg-surface border border-border/70 rounded-2xl shadow-2xl shadow-black/10 overflow-hidden"
            role="listbox"
          >
            {results.map((result, i) => (
              <button
                key={result.id}
                role="option"
                aria-selected={i === activeIndex}
                onClick={() => {
                  router.push(result.href);
                  setIsOpen(false);
                  setQuery("");
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                  i === activeIndex
                    ? "bg-primary/10 text-primary"
                    : "hover:bg-surface-hover text-text"
                } ${i !== results.length - 1 ? "border-b border-border/30" : ""}`}
              >
                <div
                  className={`shrink-0 flex h-8 w-8 items-center justify-center rounded-lg ${
                    result.type === "category"
                      ? "bg-secondary/15 text-secondary"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  {result.type === "category" ? (
                    <Layers className="h-4 w-4" />
                  ) : (
                    <BookOpen className="h-4 w-4" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{result.title}</p>
                  <p className="text-xs text-muted capitalize">{result.subtitle}</p>
                </div>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
