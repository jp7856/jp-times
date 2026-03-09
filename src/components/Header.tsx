"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="font-headline text-2xl font-bold tracking-tight text-ink hover:text-ink-light transition-colors"
          >
            JP 타임즈
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-ink-light hover:text-ink transition-colors"
            >
              오늘의 신문
            </Link>
            <Link
              href="/archive"
              className="text-sm font-medium text-ink-light hover:text-ink transition-colors"
            >
              과월호
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-ink-light hover:text-ink transition-colors"
            >
              소개
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 -mr-2 text-ink"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="메뉴 열기"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <nav className="md:hidden py-4 border-t border-ink/10">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-ink hover:text-ink-light"
                onClick={() => setMenuOpen(false)}
              >
                오늘의 신문
              </Link>
              <Link
                href="/archive"
                className="text-ink hover:text-ink-light"
                onClick={() => setMenuOpen(false)}
              >
                과월호
              </Link>
              <Link
                href="/about"
                className="text-ink hover:text-ink-light"
                onClick={() => setMenuOpen(false)}
              >
                소개
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
