"use client";

import React from "react";
import Link from "next/link";
import { Layers, Github, Twitter, Mail, ExternalLink } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border/40 bg-surface/30 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Logo & Tagline */}
          <div className="md:col-span-2 flex flex-col space-y-4">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-primary to-secondary text-white shadow-sm shadow-primary/20">
                <Layers className="h-4.5 w-4.5" />
              </div>
              <span className="text-lg font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                DevCards
              </span>
            </Link>
            <p className="text-sm text-muted max-w-xs leading-relaxed">
              Master modern frontend development. Revision flashcards designed specifically for JavaScript, React, CSS, and frontend interviews.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-text/80">
              Platform
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-muted hover:text-primary transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/bookmarks" className="text-muted hover:text-primary transition-colors">
                  Bookmarks
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Help */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-text/80">
              Resources
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/settings" className="text-muted hover:text-primary transition-colors">
                  Settings
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-primary transition-colors flex items-center gap-1"
                >
                  GitHub Project <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </li>
              <li>
                <span className="text-muted/60 cursor-not-allowed">
                  Privacy Policy
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Social Links / Copyright */}
        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; {currentYear} DevCards. All rights reserved. Created for developers by Antigravity.
          </p>

          <div className="flex items-center space-x-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-text transition-colors"
              aria-label="GitHub repository"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-text transition-colors"
              aria-label="Twitter profile"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="mailto:support@devcards.io"
              className="text-muted hover:text-text transition-colors"
              aria-label="Contact Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
