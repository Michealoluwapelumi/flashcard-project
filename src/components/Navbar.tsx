"use client";

import React, { useState } from "react";
import Link from "next/link";
import type { Route } from "next";
import { usePathname } from "next/navigation";
import { useTheme } from "@/contexts/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sun,
  Moon,
  Menu,
  X,
  Layers,
  Search,
  Bookmark,
  User,
  Settings,
  BookOpen,
} from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks: Array<{ href: Route; label: string; icon: typeof BookOpen }> = [
    { href: "/", label: "Home", icon: BookOpen },
    { href: "/categories", label: "Categories", icon: Layers },
    { href: "/bookmarks", label: "Bookmarks", icon: Bookmark },
    { href: "/profile", label: "Profile", icon: User },
    { href: "/settings", label: "Settings", icon: Settings },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-surface/80 backdrop-blur-md transition-colors duration-300">
      <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-tr from-primary to-secondary text-white shadow-md shadow-primary/20 group-hover:scale-105 transition-transform duration-200">
            <Layers className="h-5 w-5" />
          </div>
          <span className="text-xl font-bold tracking-tight bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
            DevCards
          </span>
        </Link>

        {/* Search Bar Placeholder */}
        <div className="relative hidden md:block max-w-xs w-full mx-4">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="h-4 w-4 text-muted" />
          </span>
          <input
            type="search"
            placeholder="Search flashcards..."
            className="w-full pl-9 pr-4 py-1.5 text-xs bg-background/50 border border-border/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-text placeholder-muted"
            disabled
          />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5" aria-label="Desktop navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3.5 py-2 text-sm font-medium rounded-xl transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? "text-primary bg-primary/10 dark:bg-primary/15"
                    : "text-muted hover:text-text hover:bg-surface-hover hover:shadow-sm"
                }`}
              >
                <link.icon className="h-4 w-4 shrink-0" />
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/50 bg-background/30 text-text hover:bg-surface hover:text-primary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/40"
            aria-label="Toggle visual theme"
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5 transition-transform duration-300 hover:rotate-12" />
            ) : (
              <Sun className="h-5 w-5 transition-transform duration-300 hover:rotate-45" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/50 bg-background/30 text-text hover:bg-surface md:hidden focus:outline-none focus:ring-2 focus:ring-primary/40"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Framer Motion) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 top-16 z-40 bg-black/30 backdrop-blur-sm md:hidden"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0.1, duration: 0.35 }}
              className="fixed inset-y-0 right-0 top-16 z-40 w-72 bg-surface border-l border-border/50 p-6 md:hidden shadow-2xl flex flex-col"
            >
              {/* Search Bar Mobile */}
              <div className="relative mb-6">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="h-4 w-4 text-muted" />
                </span>
                <input
                  type="search"
                  placeholder="Search flashcards..."
                  className="w-full pl-9 pr-4 py-2 text-sm bg-background border border-border/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-text placeholder-muted"
                  disabled
                />
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                        isActive
                          ? "text-primary bg-primary/10 dark:bg-primary/15"
                          : "text-muted hover:text-text hover:bg-background"
                      }`}
                    >
                      <link.icon className="h-5 w-5 shrink-0" />
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              {/* Footer info in Menu */}
              <div className="mt-auto pt-6 border-t border-border/40 text-center text-xs text-muted">
                <p>DevCards v1.0 • Study & Learn</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
