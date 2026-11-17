"use client";
import { useState, useRef } from "react";

export default function LiveScanner() {
  const [jd, setJd] = useState(
    "Looking for a Full-Stack Developer with React, Node.js, MongoDB, and REST API experience.",
  );
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [previewed, setPreviewed] = useState(false);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile) {
      if (
        droppedFile.type === "application/pdf" ||
        droppedFile.name.endsWith(".pdf")
      ) {
        setFile(droppedFile);
        setPreviewed(false);
      } else {
        alert("Please upload a PDF file.");
      }
    }
  };

  const handleFileChange = (e) => {
    const selected = e.target.files?.[0] ?? null;
    if (selected) {
      setFile(selected);
      setPreviewed(false);
    }
  };

  const handleRemoveFile = (e) => {
    e.stopPropagation();
    setFile(null);
    setPreviewed(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleScanSubmit = (e) => {
    e.preventDefault();
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setPreviewed(true);
    }, 700);
  };

  const formatFileSize = (bytes) => {
    if (!bytes) return "";
    return `${(bytes / 1024).toFixed(0)} KB`;
  };

  return (
    <section id="scanner" className="py-16 sm:py-24 border-b border-[var(--line)]">
      <div className="w-[min(1200px,calc(100%-36px))] sm:w-[min(1200px,calc(100%-48px))] mx-auto">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-[11px] font-bold tracking-[2px] uppercase text-[var(--green)]">
            Take a look inside
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--ink)] leading-[1.12] my-4">
            See a CV match<br />
            in context.
          </h2>
          <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed">
            Explore an illustrative CV-to-job comparison with matched skills, skill gaps, and improvement suggestions. Your file stays on your device; live analysis and ATS checks are not connected.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start p-6 sm:p-10 rounded-3xl border border-[var(--line)] bg-[var(--surface)] shadow-sm">
          {/* Form Side */}
          <form onSubmit={handleScanSubmit} className="flex flex-col gap-6">
            {/* Step 1: File Dropzone */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="resume"
                className="text-xs font-semibold uppercase tracking-wider text-[var(--ink)]"
              >
                01 / Your resume
              </label>

              <div
                onDragOver={handleDragOver}
                onDragEnter={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`relative flex flex-col items-center justify-center gap-3 p-8 rounded-2xl border-2 border-dashed cursor-pointer transition-all ${
                  isDragging
                    ? "border-[var(--green)] bg-[var(--green)]/10 ring-4 ring-[var(--green)]/15 scale-[1.01]"
                    : file
                    ? "border-[var(--green)]/60 bg-[var(--paper)]"
                    : "border-[var(--soft-line)] bg-[var(--paper)] hover:border-[var(--green)] hover:bg-[var(--surface)]"
                }`}
              >
                <input
                  ref={fileInputRef}
                  id="resume"
                  type="file"
                  accept=".pdf,application/pdf"
                  onChange={handleFileChange}
                  className="sr-only"
                />

                {file ? (
                  <div className="flex flex-col items-center gap-2 text-center">
                    <div className="w-12 h-12 rounded-full bg-[var(--green)]/15 text-[var(--green)] flex items-center justify-center text-xl">
                      ✓
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[var(--ink)] break-all max-w-xs">
                        {file.name}
                      </p>
                      <p className="text-xs text-[var(--muted)] mt-0.5">
                        {formatFileSize(file.size)} · PDF ready
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={handleRemoveFile}
                      className="mt-2 text-xs font-medium text-[var(--accent)] hover:underline inline-flex items-center gap-1"
                    >
                      <span>✕ Remove file</span>
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-2 text-center pointer-events-none">
                    <div className="w-12 h-12 rounded-full bg-[var(--line)]/50 text-[var(--green)] flex items-center justify-center text-2xl font-light">
                      ↑
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[var(--ink)]">
                        {isDragging ? "Drop your resume here" : "Choose or drag & drop resume"}
                      </p>
                      <p className="text-xs text-[var(--muted)] mt-1">
                        PDF format · Stays 100% on your device
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Step 2: Job Description */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="job-description"
                className="text-xs font-semibold uppercase tracking-wider text-[var(--ink)]"
              >
                02 / The role you have in mind
              </label>
              <textarea
                id="job-description"
                rows={5}
                value={jd}
                onChange={(e) => {
                  setJd(e.target.value);
                  setPreviewed(false);
                }}
                placeholder="Paste a job description or key requirements here…"
                className="w-full p-4 rounded-xl border border-[var(--line)] bg-[var(--paper)] text-[var(--ink)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--green)] resize-y min-h-[120px]"
              />
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              disabled={isScanning}
              className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-[var(--green)] text-[var(--paper)] text-sm font-semibold hover:brightness-105 active:scale-[0.99] disabled:opacity-60 transition-all shadow-sm"
            >
              {isScanning ? (
                <span className="inline-flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  <span>Scanning & comparing…</span>
                </span>
              ) : (
                <>
                  <span>Preview sample report</span>
                  <span aria-hidden="true">↗</span>
                </>
              )}
            </button>

            <p className="text-xs text-[var(--muted)] leading-relaxed" role="status">
              {previewed
                ? "Sample report generated! The preview highlights key skill intersections and recommendations."
                : "An illustrative comparison report will be previewed alongside your inputs."}
            </p>
          </form>

          {/* Report Side */}
          <article
            className={`flex flex-col gap-6 p-6 sm:p-8 rounded-2xl border transition-all duration-300 ${
              previewed
                ? "border-[var(--green)] bg-[var(--paper)] ring-2 ring-[var(--green)]/20 shadow-md"
                : "border-[var(--line)] bg-[var(--paper)]/60"
            }`}
            aria-label="Sample resume match report"
          >
            {/* Report Header */}
            <div className="flex items-start justify-between gap-4 pb-5 border-b border-[var(--line)]">
              <div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-[var(--green)]">
                  {previewed ? "Report Ready" : "Illustrative report"}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--ink)] mt-1">
                  A promising match.
                </h3>
              </div>
              <div className="text-right">
                <span className="text-4xl sm:text-5xl font-black text-[var(--green)] leading-none">
                  92<span className="text-xl font-bold">%</span>
                </span>
                <span className="block text-[11px] text-[var(--muted)] font-medium mt-1">
                  Match score
                </span>
              </div>
            </div>

            {/* Matched Skills */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--ink)] mb-3">
                Matched skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {["React.js", "Node.js", "MongoDB", "REST API"].map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--green)]/30 bg-[var(--green)]/10 text-xs font-medium text-[var(--green)]"
                  >
                    <span>✓</span> {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Skill Gaps */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--ink)] mb-3">
                Skill gaps to explore
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Docker", "AWS"].map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--accent)]/30 bg-[var(--accent)]/10 text-xs font-medium text-[var(--accent)]"
                  >
                    <span>+</span> {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Suggestions */}
            <div className="pt-4 border-t border-[var(--line)]">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--ink)] mb-2">
                Personalized suggestions · sample
              </h4>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                Strong full-stack architecture foundation. Learning containerization with Docker could strengthen this example profile for relevant roles.
              </p>
            </div>

            <p className="text-[11px] text-[var(--muted)] pt-2 border-t border-[var(--line)]">
              A match score is one signal, and does not guarantee an interview.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
