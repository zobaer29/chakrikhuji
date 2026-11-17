const STORAGE_KEY = "chakrikhuji-theme";

function readPreference() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "dark" || saved === "light") return saved;
  } catch {}
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
}

export function getTheme() {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export function getServerTheme() {
  return "light";
}

export function toggleTheme() {
  const next = getTheme() === "dark" ? "light" : "dark";
  applyTheme(next);
  try { localStorage.setItem(STORAGE_KEY, next); } catch {}
}

export function subscribeTheme(onChange) {
  // Restore after hydration too, even if the initial head script did not run.
  applyTheme(readPreference());
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  const sync = () => { applyTheme(readPreference()); onChange(); };
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const onStorage = (event) => {
    if (event.key === STORAGE_KEY || event.key === null) sync();
  };
  window.addEventListener("storage", onStorage);
  media.addEventListener("change", sync);
  return () => {
    observer.disconnect();
    window.removeEventListener("storage", onStorage);
    media.removeEventListener("change", sync);
  };
}
