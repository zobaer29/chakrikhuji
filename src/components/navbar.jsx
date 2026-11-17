"use client";
import Link from "next/link";
import { useState, useSyncExternalStore } from "react";
import { subscribeTheme, getTheme, getServerTheme, toggleTheme } from "./theme";

const links = [
  ["The process", "/#how-it-works"],
  ["Who it’s for", "/#features"],
  ["Fairness", "/#fairness"],
  ["Pricing", "/#pricing"],
  ["Questions", "/#faq"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const theme = useSyncExternalStore(subscribeTheme, getTheme, getServerTheme);

  return (
    <header
      className="sticky top-0 z-50 bg-[var(--paper)]/95 backdrop-blur-md border-b border-[var(--line)] transition-colors"
      onKeyDown={(event) => {
        if (event.key === "Escape") setOpen(false);
      }}
    >
      <div className="w-[min(1200px,calc(100%-36px))] sm:w-[min(1200px,calc(100%-48px))] mx-auto flex items-center justify-between gap-3 h-18 sm:h-20">
        {/* Brand */}
        <Link
          href="/#home"
          className="text-xl sm:text-2xl font-black tracking-tight text-[var(--ink)] select-none whitespace-nowrap"
          aria-label="ChakriKhuji home"
          onClick={() => setOpen(false)}
        >
          Chakri<span className="text-[var(--green)]">Khuji</span>
          <span className="text-[var(--green)]">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden lg:flex items-center gap-7 text-[13.5px] font-medium text-[var(--ink)]"
        >
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="text-[var(--muted)] hover:text-[var(--green)] transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/#scanner"
            className="hidden md:inline-flex items-center text-[13px] font-semibold text-[var(--ink)] border-b border-current pb-0.5 hover:text-[var(--green)] transition-colors whitespace-nowrap mr-2"
          >
            Try the preview <span aria-hidden="true" className="ml-1">↗</span>
          </Link>

          <Link
            href="/Login"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-[13px] font-semibold rounded-lg bg-[var(--ink)] text-[var(--paper)] hover:opacity-90 transition-opacity whitespace-nowrap"
            onClick={() => setOpen(false)}
          >
            Login
          </Link>

          {/* Theme Toggle */}
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 px-2.5 py-2 sm:px-3 text-xs font-medium rounded-lg border border-[var(--line)] bg-[var(--surface)] text-[var(--ink)] hover:border-[var(--green)] transition-colors"
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
            aria-pressed={theme === "dark"}
            title={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {theme === "dark" ? (
              <svg
                className="w-4 h-4 text-[var(--green)]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
              </svg>
            ) : (
              <svg
                className="w-4 h-4 text-[var(--ink)]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20.5 14A8.5 8.5 0 0 1 10 3.5 8.5 8.5 0 1 0 20.5 14Z" />
              </svg>
            )}
            <span className="hidden sm:inline">
              {theme === "dark" ? "Light" : "Dark"}
            </span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg border border-[var(--line)] bg-[var(--surface)] text-[var(--ink)] hover:border-[var(--green)] transition-colors"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="lg:hidden border-t border-[var(--line)] bg-[var(--surface)] px-5 py-6 shadow-xl animate-in fade-in duration-200"
        >
          <div className="flex flex-col gap-1">
            {links.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-[var(--ink)] hover:bg-[var(--paper)] hover:text-[var(--green)] transition-colors"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/#scanner"
              onClick={() => setOpen(false)}
              className="px-3 py-2.5 rounded-lg text-sm font-semibold text-[var(--green)] hover:bg-[var(--paper)] transition-colors flex items-center justify-between"
            >
              <span>Try the preview</span>
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="mt-4 pt-4 border-t border-[var(--line)] flex flex-col gap-2">
            <Link
              href="/Login"
              onClick={() => setOpen(false)}
              className="w-full flex items-center justify-center py-3 text-sm font-semibold rounded-lg bg-[var(--ink)] text-[var(--paper)] hover:opacity-90 transition-opacity"
            >
              Login / Sign up
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
