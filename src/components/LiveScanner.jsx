"use client";
import { useState } from "react";

export default function LiveScanner() {
  const [jd, setJd] = useState("Looking for a Full-Stack Developer with React, Node.js, MongoDB, and REST API experience.");
  const [file, setFile] = useState(null);
  const [previewed, setPreviewed] = useState(false);
  return (
    <section id="scanner" className="home-section scanner-section">
      <div className="home-container">
        <div className="section-heading scanner-heading">
          <span className="eyebrow">Take a look inside</span>
          <h2>See a CV match<br />in context.</h2>
          <p>Explore an illustrative CV-to-job comparison with matched skills, skill gaps, and improvement suggestions. Your file stays on your device; live analysis and ATS checks are not connected.</p>
        </div>
        <div className="scanner-grid">
          <form className="scanner-form" onSubmit={(event) => { event.preventDefault(); setPreviewed(true); }}>
            <div className="field-group">
              <label htmlFor="resume">01 / Your resume</label>
              <div className="file-picker">
                <span aria-hidden="true" className="upload-icon">↑</span>
                <strong>{file ? file.name : "Choose a resume"}</strong>
                <span>PDF file · stays on your device</span>
                <input id="resume" type="file" accept=".pdf,application/pdf" onChange={(event) => { setFile(event.target.files?.[0] ?? null); setPreviewed(false); }} />
              </div>
            </div>
            <div className="field-group">
              <label htmlFor="job-description">02 / The role you have in mind</label>
              <textarea id="job-description" rows={5} value={jd} onChange={(event) => { setJd(event.target.value); setPreviewed(false); }} placeholder="Paste a job description…" />
            </div>
            <button className="primary-action" type="submit">Preview sample report <span aria-hidden="true">↗</span></button>
            <p className="scanner-note" role="status">{previewed ? "Sample report ready. The example shown is illustrative and is not based on your inputs." : "An example report is shown alongside the form."}</p>
          </form>
          <article className={`sample-report${previewed ? " report-ready" : ""}`} aria-label="Sample resume match report">
            <div className="report-header"><div><span className="eyebrow">Illustrative report</span><h3>A promising match.</h3></div><span className="match-score">92<small>%</small></span></div>
            <div className="report-group"><h4>Matched skills</h4><div className="skill-tags">{["React.js", "Node.js", "MongoDB", "REST API"].map((skill) => <span key={skill}>✓ {skill}</span>)}</div></div>
            <div className="report-group"><h4>Skill gaps to explore</h4><div className="skill-tags skill-tags-growth">{["Docker", "AWS"].map((skill) => <span key={skill}>+ {skill}</span>)}</div></div>
            <div className="report-feedback"><h4>Personalized suggestions · sample</h4><p>Strong full-stack architecture foundation. Learning containerization with Docker could strengthen this example profile for relevant roles.</p></div>
            <p className="scanner-note">A match score is one signal, and does not guarantee an interview.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
