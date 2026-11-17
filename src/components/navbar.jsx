"use client";
import Link from "next/link";
import { useState, useSyncExternalStore } from "react";
import { subscribeTheme, getTheme, getServerTheme, toggleTheme } from "./theme";

const links = [
  ["The process", "/#how-it-works"],
  ["What’s inside", "/#features"],
  ["Questions", "/#faq"],
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const theme = useSyncExternalStore(subscribeTheme, getTheme, getServerTheme);
  return (
    <header className="site-header" onKeyDown={(event) => { if (event.key === "Escape") setOpen(false); }}>
      <div className="home-container navigation">
        <Link href="/#home" className="wordmark" aria-label="ChakriKhuji home">
          Chakri<span>Khuji</span>
          <span className="brand-period">.</span>
        </Link>
        <nav aria-label="Main navigation" className="desktop-navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>
        <Link href="/#scanner" className="nav-action">
          Try the preview ↗
        </Link>
        <Link
          href="/Login"
          className="login-button"
          onClick={() => setOpen(false)}
        >
          Login
        </Link>
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={
            theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
          }
          aria-pressed={theme === "dark"}
          title={
            theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
          }
        >
          <svg
            className="theme-sun"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
          </svg>
          <svg
            className="theme-moon"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path d="M20.5 14A8.5 8.5 0 0 1 10 3.5 8.5 8.5 0 1 0 20.5 14Z" />
          </svg>
          <span className="theme-label">
            {theme === "dark" ? "Light" : "Dark"}
          </span>
        </button>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
          onKeyDown={(event) => {
            if (event.key === "Escape") setOpen(false);
          }}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="mobile-navigation"
        >
          {[...links, ["Try the preview", "/#scanner"]].map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
