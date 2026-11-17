"use client";
import { useState } from "react";

const links = [["The process", "#how-it-works"], ["What’s inside", "#features"], ["Questions", "#faq"]];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleTheme = () => {
    const root = document.documentElement;
    const theme = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = theme;
    try { localStorage.setItem("chakrikhuji-theme", theme); } catch {}
  };
  return (
    <header className="site-header">
      <div className="home-container navigation">
        <a href="#home" className="wordmark" aria-label="ChakriKhuji home">chakri<span>khuji</span><span className="brand-period">.</span></a>
        <nav aria-label="Main navigation" className="desktop-navigation">{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
        <a href="#scanner" className="nav-action">Try the preview ↗</a>
        <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label="Toggle light and dark theme">
          <svg className="theme-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" /></svg>
          <svg className="theme-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M20.5 14A8.5 8.5 0 0 1 10 3.5 8.5 8.5 0 1 0 20.5 14Z" /></svg>
          <span className="theme-dark-label">Dark</span><span className="theme-light-label">Light</span>
        </button>
        <button className="menu-toggle" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button>
      </div>
      {open && <nav id="mobile-navigation" aria-label="Mobile navigation" className="mobile-navigation">{[...links, ["Try the preview", "#scanner"]].map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}</nav>}
    </header>
  );
}
