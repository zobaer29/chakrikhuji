"use client";

import { useEffect, useState } from "react";

const STEP_MS = 3000;
const PITCH = 70;

const CHIPS = ["Python", "SQL", "Tableau", "Excel", "Power BI", "R"];
const CANDS = [
  { i: 1, n: "Alice Smith", s: 92, p: 0, q: 0 },
  { i: 2, n: "Bob Johnson", s: 88, p: 1, q: 1 },
  { i: 3, n: "Charlie Lee", s: 85, p: 2, q: 2 },
  { i: 4, n: "Diana King", s: 80, p: 3, q: 4 },
  { i: 5, n: "Ethan Brown", s: 84, p: 4, q: 3, review: true },
  { i: 6, n: "Fiona Davis", s: 75, p: 5, q: 5 },
  { i: 7, n: "George Wilson", s: 72, p: 6, q: 6 },
  { i: 8, n: "Hannah Moore", s: 70, p: 7, q: 7 },
];
const CAPS = [
  "HR has set the requirements for the role.",
  "Candidates are scored based on their skills.",
  "The top candidates are shortlisted.",
  "A candidate with a similar score is flagged for review.",
  "You approve the candidate after reviewing their profile.",
  "The approved candidate joins your shortlist, ready for the interview stage.",
];

export default function FairnessSection() {
  const [elapsed, setElapsed] = useState(0);
  const step = Math.floor(elapsed / STEP_MS);
  const prog = (elapsed % STEP_MS) / STEP_MS;
  const [playing, setPlaying] = useState(true);
  const [runKey, setRunKey] = useState(0);
  const [on, setOn] = useState(false);

  // chips entrance: reset then enable after mount
  useEffect(() => {
    let a = requestAnimationFrame(() => {
      setOn(false);
      a = requestAnimationFrame(() => setOn(true));
    });
    return () => cancelAnimationFrame(a);
  }, [runKey]);

  // One clock keeps the caption, rows, and progress in sync.
  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => {
      setElapsed((value) => (value + 50) % (CAPS.length * STEP_MS));
    }, 50);
    return () => clearInterval(id);
  }, [playing]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => { if (media.matches) setPlaying(false); };
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const go = (i) => {
    if (i === 0) setRunKey((k) => k + 1);
    setElapsed(i * STEP_MS);
  };
  const replay = () => {
    go(0);
    setPlaying(true);
  };

  return (
    <section id="sample-report" aria-labelledby="fairness-heading" className="border-y border-[var(--line)] bg-[var(--surface)] py-16 sm:py-24">
      <div className="mx-auto w-[min(1200px,calc(100%-36px))] sm:w-[min(1200px,calc(100%-48px))]">
        <div className="mb-10 max-w-2xl">
          <span className="text-[11px] font-bold uppercase tracking-[2px] text-[var(--green)]">Fairness-aware shortlisting</span>
          <h2 id="fairness-heading" className="my-4 text-3xl font-bold leading-[1.12] tracking-tight text-[var(--ink)] sm:text-4xl lg:text-5xl">Strong candidates deserve<br />a closer look.</h2>
          <p className="text-sm leading-relaxed text-[var(--muted)] sm:text-base">See how closely matched candidates stay visible when a shortlist fills up. You review the context and make the final decision.</p>
        </div>
      {/* stage */}
      <div
        key={runKey}
        className="relative grid grid-cols-1 gap-[18px] overflow-hidden rounded-[20px] border border-[var(--line)] bg-[var(--surface)] p-4 sm:p-[22px] md:grid-cols-[240px_minmax(0,1fr)] md:gap-[26px]"
      >
        {/* role */}
        <div className="border-b border-[var(--line)] pb-4 md:border-b-0 md:border-r md:pb-0 md:pr-[22px]">
          <h3 className="mb-1 text-2xl font-semibold tracking-tight leading-[1.15] text-[var(--ink)]">
            Data Analyst
          </h3>
          <small className="text-[var(--muted)]">Requirements set by HR</small>
          <div className="mt-[18px] flex flex-wrap gap-2">
            {CHIPS.map((c, i) => (
              <span
                key={c}
                style={{ transitionDelay: `${i * 0.28}s` }}
                className={`rounded-full border border-[var(--green)] px-3 py-[3px] text-sm font-medium text-[var(--green)] transition-all duration-500 ease-[cubic-bezier(.3,1.5,.5,1)] motion-reduce:transition-none ${
                  on ? "scale-100 opacity-100" : "scale-75 opacity-0"
                }`}
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* list */}
        <div className="relative h-[558px] min-w-0">
          {/* shortlist limit */}
          <div
            style={{ top: (step >= 5 ? 4 : 3) * PITCH - 5 }}
            className={`absolute inset-x-0 h-0 origin-left border-t-2 border-dashed border-[var(--green)] transition-[top,transform] duration-[800ms] delay-100 motion-reduce:transition-none ${
              step >= 2 ? "scale-x-100" : "scale-x-0"
            }`}
          >
            <em
              className={`absolute -top-6 right-0 text-[12.5px] font-semibold not-italic text-[var(--green)] transition-opacity delay-700 duration-500 ${
                step >= 2 ? "opacity-100" : "opacity-0"
              }`}
            >
              {step >= 5 ? "Final shortlist: 4 candidates" : "Shortlist limit: 3"}
            </em>
          </div>

          {/* rows */}
          {CANDS.map((c) => {
            const warn = c.review && step >= 3 && step < 4;
            const ok = c.review && step >= 4;
            return (
              <div
                key={c.n}
                style={{
                  top: (step >= 2 ? c.q : c.p) * PITCH,
                  transition: `top .9s cubic-bezier(.7,0,.2,1), opacity .5s ${c.p * 0.12}s, transform .5s ${
                    c.p * 0.12
                  }s, border-color .4s, background-color .4s`,
                }}
                className={`absolute inset-x-0 grid h-[52px] grid-cols-[36px_1fr_52px] items-center gap-3 rounded-xl border px-3 motion-reduce:!transition-none ${
                  step >= 5 && c.q >= 4
                    ? "translate-x-[26px] opacity-0"
                    : step >= 1 ? "translate-x-0 opacity-100" : "translate-x-[26px] opacity-0"
                } ${
                  ok
                    ? "border-[var(--green)] bg-[var(--paper)]"
                    : warn
                    ? "border-[var(--accent)] bg-[var(--paper)]"
                    : "border-[var(--line)] bg-[var(--paper)]"
                }`}
              >
                <div className="grid h-9 w-9 place-items-center rounded-full bg-[var(--ink)] text-[13px] font-semibold text-[var(--surface)]">
                  {c.i}
                </div>
                <div className="min-w-0">
                  <div className="truncate text-[15px] font-semibold leading-tight text-[var(--ink)]">
                    {c.n}
                  </div>
                  <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-[var(--line)]">
                    <div
                      style={{ width: step >= 1 ? `${c.s}%` : "0%" }}
                      className="h-full rounded-full bg-[var(--green)] transition-[width] delay-[350ms] duration-1000 ease-out motion-reduce:transition-none"
                    />
                  </div>
                </div>
                <span aria-label={`${c.s}% skill match`} className={`text-right font-mono text-sm font-semibold text-[var(--green)] transition-opacity duration-500 ${step >= 1 ? "opacity-100" : "opacity-0"}`}>
                  {c.s}%
                </span>

                {c.review && (
                  <div
                    className={`absolute -top-[11px] right-[60px] rounded-full px-2.5 py-0.5 text-[12.5px] font-bold transition-all duration-500 sm:right-[76px] ${
                      step >= 3 ? "translate-y-0 opacity-100" : "translate-y-1.5 opacity-0"
                    } ${ok ? "bg-[var(--green)] text-[var(--surface)]" : "bg-[var(--paper)] text-[var(--accent)]"}`}
                  >
                    {step >= 5 ? "Added to shortlist" : ok ? "Approved by you" : "Similar score: review"}
                  </div>
                )}
              </div>
            );
          })}

          <div
            aria-hidden={step < 5}
            className={`absolute inset-x-0 top-[310px] rounded-xl border border-[var(--green)] bg-[var(--paper)] p-5 transition-all duration-700 motion-reduce:transition-none ${step >= 5 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}
          >
            <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--green)]">Next step · Interviews</span>
            <h4 className="mt-2 text-lg font-semibold text-[var(--ink)]">Your shortlist is ready.</h4>
            <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">4 candidates move forward, including the candidate you approved after review.</p>
          </div>

          {/* cursor */}
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className={`pointer-events-none absolute z-10 h-5 w-5 fill-[var(--ink)] transition-all duration-1000 ease-[cubic-bezier(.5,0,.2,1)] motion-reduce:transition-none ${
              step === 4
                ? "left-[calc(100%-120px)] top-[244px] opacity-100"
                : "left-[60%] top-[340px] opacity-0"
            }`}
          >
            <path d="M4 2l16 9-7 2-3 7z" />
          </svg>
        </div>
      </div>

      {/* caption + controls */}
      <div className="mt-[18px] flex flex-wrap items-center justify-between gap-[18px]">
        <p className="m-0 min-h-[1.2em] max-w-2xl text-lg font-semibold leading-snug tracking-tight text-[var(--ink)] sm:text-xl">
          {CAPS[step]}
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label={playing ? "Pause animation" : "Play animation"}
            onClick={() => setPlaying((p) => !p)}
            className="rounded-[9px] border border-[var(--line)] bg-[var(--surface)] px-3.5 py-[7px] text-sm font-semibold text-[var(--ink)] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--green)]"
          >
            {playing ? "Pause" : "Play"}
          </button>
          <button
            type="button"
            onClick={replay}
            className="rounded-[9px] border border-[var(--line)] bg-[var(--surface)] px-3.5 py-[7px] text-sm font-semibold text-[var(--ink)] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--green)]"
          >
            Replay
          </button>
        </div>
      </div>

      {/* step progress */}
      <div className="mt-3.5 flex gap-1.5">
        {CAPS.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Step ${i + 1}: ${CAPS[i]}`}
            aria-current={i === step ? "step" : undefined}
            onClick={() => go(i)}
            className="relative h-8 flex-1 overflow-hidden rounded-full bg-transparent before:absolute before:inset-x-0 before:top-3 before:h-1.5 before:rounded-full before:bg-[var(--line)]"
          >
            <span
              style={{ transform: `scaleX(${i < step ? 1 : i === step ? prog : 0})` }}
              className="absolute inset-x-0 top-3 h-1.5 origin-left rounded-full bg-[var(--green)]"
            />
          </button>
        ))}
      </div>
      <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">Illustrative example with sample candidates and scores.</p>
      </div>
    </section>
  );
}

