"use client";
import React, { useEffect, useRef, useState } from "react";

const HybridHeroCanvas = () => {
  const canvasRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadFailed, setLoadFailed] = useState(false);
  const frameCount = 100; // আপনার মোট ফ্রেম সংখ্যা

  const currentFrame = (index) =>
    `/image/hero/frame_${index.toString().padStart(3, "0")}.png`;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    const images = [];
    let loadedCount = 0;
    let successfulCount = 0;
    let disposed = false;

    const settleImage = () => {
      if (disposed) return;
      loadedCount++;
      if (loadedCount === frameCount) {
        setImagesLoaded(true);
        setLoadFailed(successfulCount === 0);
      }
    };

    // ১. ইমেজ প্রিলোড করা
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.onload = () => {
        if (disposed) return;
        successfulCount++;
        setImagesLoaded(true);
        settleImage();
      };
      img.onerror = settleImage;
      images.push(img);
      img.src = currentFrame(i);
    }

    canvas.width = 1280;
    canvas.height = 720;

    // ২. অ্যানিমেশন ও স্ক্রল ভেলোসিটি ভেরিয়েবল
    let currentFrameFloat = 0; // দশমিক মান রাখা হচ্ছে স্মুথনেসের জন্য
    let scrollVelocity = 0;
    let lastScrollY = window.scrollY;
    let animationFrameId;
    let lastTime = null;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");

    // স্ক্রল ইভেন্ট লিসেনার
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const deltaY = currentScrollY - lastScrollY;
      
      // স্ক্রলের গতির সাথে ফ্রেম পরিবর্তনের তীব্রতা (0.08 অ্যাডজাস্ট করতে পারেন)
      scrollVelocity = Math.max(-5, Math.min(5, scrollVelocity + deltaY * 0.08)); 
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // ৩. মেইন রেন্ডার লুপ (Auto-loop + Scroll Velocity Merge)
    const baseSpeed = 0.4; // অটো-লুপের স্বাভাবিক গতি (প্রতি ফ্রেমে ০.৪ স্টেপ)

    const render = (time) => {
      animationFrameId = requestAnimationFrame(render);

      // অটো-লুপ গতি + স্ক্রল ভেলোসিটি যোগ করা
      const elapsed = lastTime === null ? 0 : Math.min((time - lastTime) / 16.667, 3);
      lastTime = time;
      if (!motion.matches && !document.hidden) {
        currentFrameFloat += (baseSpeed + scrollVelocity) * elapsed;
      }

      // স্ক্রল ভেলোসিটি ধীরে ধীরে কমানো (Friction / Damping ইফেক্ট)
      scrollVelocity *= Math.pow(0.9, elapsed);

      // ১০০ ফ্রেমের মধ্যে লুপ রাখা (সামনে বা পিছনে যেদিকেই যাক)
      if (currentFrameFloat >= frameCount) {
        currentFrameFloat = currentFrameFloat % frameCount;
      } else if (currentFrameFloat < 0) {
        currentFrameFloat = frameCount + (currentFrameFloat % frameCount);
      }

      const frameIndex = Math.floor(currentFrameFloat);

      const image = images[frameIndex];
      // Failed requests also set complete=true; dimensions confirm a usable image.
      if (image?.complete && image.naturalWidth > 0 && image.naturalHeight > 0) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      disposed = true;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("scroll", handleScroll);
      images.forEach((image) => {
        image.onload = null;
        image.onerror = null;
      });
    };
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="home-container hero-layout">
        <div className="hero-copy">
          <span className="eyebrow">Our tagline: Better CVs, Smarter Hiring, Fairer Decisions.</span>
          <h1>Better matches.<br /><em>Fairer chances.</em></h1>
          <p>Helping job seekers improve their CVs and HR teams find relevant candidates—with AI insights, fairness-aware shortlisting, and people making the final decisions.</p>
          <div className="hero-actions"><a className="primary-action" href="#scanner">Explore the sample report <span aria-hidden="true">↗</span></a><a className="text-action" href="#features">For job seekers & HR</a></div>
          <p className="hero-footnote">Platform in development. Explore an illustrative preview.</p>
        </div>
        <figure className="hero-visual">
          <div className="animation-stage">
            <canvas ref={canvasRef} width={1280} height={720} role="img" aria-label="Animated resume scanner" className="hero-canvas" />
            {(!imagesLoaded || loadFailed) && <div className="animation-status" role="status">{loadFailed ? "Animation unavailable" : "Loading animation…"}</div>}
          </div>
          <figcaption><span>01 — Connect experience with opportunity</span><span>Built for both sides ↗</span></figcaption>
        </figure>
      </div>
      <div className="home-container hero-bottom"><span>Smarter, faster, more transparent recruitment.</span><a href="#how-it-works">Take a look around ↓</a></div>
    </section>
  );
};

export default HybridHeroCanvas;
