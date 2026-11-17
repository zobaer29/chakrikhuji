"use client";
import React, { useState } from "react";

const LiveScanner = () => {
  const [jd, setJd] = useState("Looking for a Full-Stack Developer with React, Node.js, MongoDB, and REST API experience.");
  const [cvFile, setCvFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result] = useState({
    match_percentage: 92,
    matched_skills: ["React.js", "Node.js", "MongoDB", "REST API"],
    missing_skills: ["Docker", "AWS"],
    feedback: "Strong full-stack architecture foundation. Adding containerization (Docker) could strengthen this profile for relevant roles."
  });

  const handleAnalyze = async (e) => {
    e.preventDefault();
    setLoading(true);
    // এখানে আপনার Express.js API কল হবে (FormData সহ)
    // আপাতত UI প্রিভিউয়ের জন্য ১.৫ সেকেন্ড ডিলে দেখানো হলো
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  return (
    <section id="scanner" className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--paper)] relative">
      <div className="max-w-6xl mx-auto">
        {/* সেকশন হেডার */}
        <div className="text-center mb-14">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-[var(--green)] border border-cyan-500/20">
            TAKE A LOOK INSIDE
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[var(--ink)]">
            Explore the <span className="text-[var(--green)]">Resume Match Preview</span>
          </h2>
          <p className="mt-3 text-[var(--muted)] max-w-2xl mx-auto">
            Explore a sample match report. This demo does not upload or analyze your file; the results below are illustrative.
          </p>
        </div>

        {/* ২-কলাম ইন্টারেক্টিভ বক্স */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 rounded-xl bg-[var(--surface)] border border-[var(--line)] ">
          
          {/* বাম পাশ: ইনপুট ফর্ম */}
          <form onSubmit={handleAnalyze} className="lg:col-span-6 space-y-5">
            <div>
              <label className="block text-sm font-medium text-[var(--ink)] mb-2">
                1. Upload Candidate Resume (PDF)
              </label>
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-[var(--soft-line)] rounded-2xl cursor-pointer bg-[var(--paper)] hover:border-cyan-500/50 transition-all">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <p className="text-sm text-[var(--muted)]">
                    {cvFile ? (
                      <span className="text-[var(--green)] font-semibold">{cvFile.name}</span>
                    ) : (
                      <>Choose a PDF from your device</>
                    )}
                  </p>
                </div>
                <input
                  type="file"
                  accept=".pdf"
                  className="hidden"
                  onChange={(e) => setCvFile(e.target.files[0])}
                />
              </label>
            </div>

            <div>
              <label htmlFor="job-description" className="block text-sm font-medium text-[var(--ink)] mb-2">
                2. Target Job Description
              </label>
              <textarea
                id="job-description"
                rows={4}
                value={jd}
                onChange={(e) => setJd(e.target.value)}
                className="w-full p-4 rounded-2xl bg-[var(--paper)] border border-[var(--line)] text-sm text-[var(--ink)] focus:outline-none focus:border-cyan-500/50"
                placeholder="Paste job requirements here..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl bg-[#e8ad77] text-[#030712] font-bold text-sm   transition-all disabled:opacity-60"
            >
              {loading ? "Preparing sample report..." : "Preview sample report"}
            </button>
          </form>

          {/* ডান পাশ: লাইভ AI রেজাল্ট আউটপুট */}
          <div className="lg:col-span-6 p-6 rounded-2xl bg-[var(--paper)] border border-[var(--line)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-[var(--line)]">
                <div>
                  <p className="text-xs uppercase tracking-wider text-[var(--muted)]">Illustrative Compatibility Score</p>
                  <h3 className="text-3xl font-extrabold text-[var(--green)] mt-1">
                    {result.match_percentage}% Match
                  </h3>
                </div>
                <div className="w-14 h-14 rounded-full border-4 border-[#10B981] flex items-center justify-center text-sm font-bold text-[var(--ink)] ">
                  {result.match_percentage}%
                </div>
              </div>

              {/* Matched Skills */}
              <div className="mt-5">
                <p className="text-xs font-semibold text-[var(--muted)] mb-2">MATCHED SKILLS</p>
                <div className="flex flex-wrap gap-2">
                  {result.matched_skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-[#10B981]/10 text-[var(--green)] border border-[#10B981]/20"
                    >
                      ✓ {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Missing Skills (Orange Contrast ব্যবহার করা হয়েছে) */}
              <div className="mt-5">
                <p className="text-xs font-semibold text-[var(--muted)] mb-2">MISSING / RECOMMENDED SKILLS</p>
                <div className="flex flex-wrap gap-2">
                  {result.missing_skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-[#F97316]/10 text-[var(--accent)] border border-[#F97316]/25"
                    >
                      ! {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* AI Feedback */}
            <div className="mt-6 p-4 rounded-xl bg-[var(--surface)] border border-cyan-500/20">
              <p className="text-xs font-semibold text-[var(--green)] mb-1">Sample feedback</p>
              <p className="text-xs text-[var(--muted)] leading-relaxed">{result.feedback}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LiveScanner;