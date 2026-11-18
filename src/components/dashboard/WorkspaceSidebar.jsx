"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { subscribeTheme, getTheme, getServerTheme, toggleTheme } from "@/components/theme";


function SidebarContent({ onNavigate, config }) {
  const pathname = usePathname();
  const theme = useSyncExternalStore(subscribeTheme, getTheme, getServerTheme);
  return (
    <div className="flex min-h-full flex-col p-6">
      <Link href="/" onClick={onNavigate} aria-label="ChakriKhuji home" className="text-2xl font-black tracking-tight">
        Chakri<span className="text-brand">Khuji</span><span className="text-orange">.</span>
      </Link>
      <div className="mt-7 rounded-xl border border-line bg-paper p-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted">Workspace</p>
        <p className="mt-1 text-sm font-semibold">{config.title}</p>
      </div>
      <p className="mt-7 mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">{config.group}</p>
      <nav aria-label={config.title} className="flex flex-col gap-2 pb-6">
        {config.sections.map(({ id, label, path }) => {
          const href = `${config.basePath}/${id}`;
          const active = pathname === href || pathname?.startsWith(`${href}/`);
          return (
          <Link
            key={id}
            href={href}
            onClick={onNavigate}
            aria-current={active ? "page" : undefined}
            className={`flex shrink-0 items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-medium transition-colors ${active ? "bg-brand text-paper" : "text-muted hover:bg-paper hover:text-ink"}`}
          >
            <svg className="shrink-0" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={path} /></svg>
            {label}
          </Link>
          );
        })}
      </nav>
      <div className="mt-auto border-t border-line pt-5">
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          aria-pressed={theme === "dark"}
          className="mb-5 flex w-full items-center justify-between gap-3 rounded-xl border border-line bg-paper px-3 py-3 text-sm font-medium transition-colors hover:border-brand"
        >
          <span>{theme === "dark" ? "Dark mode" : "Light mode"}</span>
          <span aria-hidden="true" className="text-lg text-brand">{theme === "dark" ? "☾" : "☀"}</span>
        </button>
        <Link href={`/Login?role=${config.id === "company" ? "company" : "job-seeker"}`} replace onClick={onNavigate} className="mb-4 flex w-full items-center gap-3 rounded-xl border border-line px-3 py-3 text-sm font-semibold text-orange transition-colors hover:bg-paper">
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 4H4v16h5M9 12h12M17 8l4 4-4 4" /></svg>
          Log out
        </Link>
        <Link href="/" onClick={onNavigate} className="text-sm font-medium text-muted transition-colors hover:text-brand">← Back to website</Link>
        <p className="mt-3 hidden text-xs leading-5 text-muted lg:block">Smarter recruitment.<br />Human-led decisions.</p>
      </div>
    </div>
  );
}

export default function WorkspaceSidebar({ config }) {
  const dialogRef = useRef(null);
  const [open, setOpen] = useState(false);

  const closeMenu = () => dialogRef.current?.close();

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onResize = () => { if (desktop.matches) dialogRef.current?.close(); };
    desktop.addEventListener("change", onResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  return (
    <>
      <div className="flex items-center justify-between gap-4 border-b border-line bg-surface/90 px-6 py-4 backdrop-blur-xl lg:hidden">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand">Your workspace</p>
          <p className="mt-1 text-sm font-semibold">{config.title}</p>
        </div>
        <button
          type="button"
          aria-label={`Open ${config.title} menu`}
          aria-haspopup="dialog"
          aria-expanded={open}
          aria-controls={`${config.id}-mobile-menu`}
          onClick={() => { dialogRef.current?.showModal(); setOpen(true); }}
          className="flex items-center gap-2 rounded-2xl border border-line bg-paper px-4 py-3 text-sm font-semibold text-brand shadow-sm transition-transform active:scale-95"
        >
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 5c-3-2-6-2-10-1v15c4-1 7-1 10 1 3-2 6-2 10-1V4c-4-1-7-1-10 1Zm0 0v15" /></svg>
          Menu
        </button>
      </div>
      <aside className="sticky top-0 hidden h-dvh w-72 shrink-0 overflow-y-auto border-r border-line bg-surface lg:block">
        <SidebarContent config={config} />
      </aside>
      <dialog
        ref={dialogRef}
        id={`${config.id}-mobile-menu`}
        aria-label={`${config.title} navigation`}
        onClose={() => setOpen(false)}
        onClick={(event) => { if (event.target === event.currentTarget) closeMenu(); }}
        className="company-mobile-menu fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none overflow-hidden bg-transparent p-0 text-ink lg:hidden"
      >
        <div className="company-menu-page relative flex h-full w-[min(86vw,340px)] flex-col overflow-y-auto rounded-r-3xl border-r border-line bg-surface shadow-2xl">
          <div className="flex items-center justify-between border-b border-line px-6 pt-5 pb-4">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">{config.tagline}</span>
            <button type="button" onClick={closeMenu} aria-label={`Close ${config.title} menu`} className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-paper text-xl transition-colors hover:text-brand">×</button>
          </div>
          <div className="flex-1"><SidebarContent config={config} onNavigate={closeMenu} /></div>
        </div>
      </dialog>
    </>
  );
}
