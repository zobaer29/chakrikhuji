"use client";
import React, { useEffect, useRef, useState } from "react";

const HybridHeroCanvas = () => {
  const canvasRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadFailed, setLoadFailed] = useState(false);
  const frameCount = 100;

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

    // Preload images
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

    let currentFrameFloat = 0;
    let scrollVelocity = 0;
    let lastScrollY = window.scrollY;
    let animationFrameId;
    let lastTime = null;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const deltaY = currentScrollY - lastScrollY;
      scrollVelocity = Math.max(
        -5,
        Math.min(5, scrollVelocity + deltaY * 0.08),
      );
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const baseSpeed = 0.4;

    const render = (time) => {
      animationFrameId = requestAnimationFrame(render);

      const elapsed =
        lastTime === null ? 0 : Math.min((time - lastTime) / 16.667, 3);
      lastTime = time;
      if (!motion.matches && !document.hidden) {
        currentFrameFloat += (baseSpeed + scrollVelocity) * elapsed;
      }

      scrollVelocity *= Math.pow(0.9, elapsed);

      if (currentFrameFloat >= frameCount) {
        currentFrameFloat = currentFrameFloat % frameCount;
      } else if (currentFrameFloat < 0) {
        currentFrameFloat = frameCount + (currentFrameFloat % frameCount);
      }

      const frameIndex = Math.floor(currentFrameFloat);
      const image = images[frameIndex];

      if (
        image?.complete &&
        image.naturalWidth > 0 &&
        image.naturalHeight > 0
      ) {
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
    <section id="home" className="pt-8 sm:pt-16 pb-12 sm:pb-16">
      <div className="w-[min(1200px,calc(100%-36px))] sm:w-[min(1200px,calc(100%-48px))] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* Left Copy */}
        <div className="flex flex-col items-start">
          <span className="text-[11px] font-bold tracking-[2px] uppercase text-[var(--green)] mb-3">
            Better CVs · Smarter Hiring · Fairer Decisions
          </span>
          <h1 className="text-[clamp(38px,6vw,72px)] font-bold tracking-tight text-[var(--ink)] leading-[1.08] mb-5">
            Better matches.
            <br />
            <em className="font-serif font-normal text-[var(--green)] not-italic">
              Fairer chances.
            </em>
          </h1>
          <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed max-w-xl mb-8">
            Helping job seekers improve their CVs and HR teams find relevant
            candidates—with AI insights, fairness-aware shortlisting, and people
            making the final decisions.
          </p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href="#scanner"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-[var(--green)] text-[var(--paper)] text-sm font-semibold hover:brightness-105 active:scale-[0.98] transition-all shadow-sm"
            >
              <span>Explore the sample report</span>
              <span aria-hidden="true">↗</span>
            </a>
            <a
              href="#features"
              className="inline-flex items-center text-sm font-semibold text-[var(--ink)] hover:text-[var(--green)] border-b border-[var(--line)] hover:border-current pb-0.5 transition-colors"
            >
              For job seekers & HR
            </a>
          </div>
        </div>

        {/* Hero Visual Canvas */}
        <figure className="relative m-0 min-w-0 group">
          {/* Subtle Ambient Backlight */}
          <div className="absolute -inset-2 rounded-[2rem_0.75rem_2rem_0.75rem] bg-gradient-to-tr from-[var(--green)]/20 via-transparent to-[var(--orange)]/25 blur-xl opacity-75 pointer-events-none" />

          {/* Asymmetric Cut-Corner Container */}
          <div
            className="relative overflow-hidden rounded-tl-[2.5rem] rounded-br-[2.5rem] rounded-tr-xl rounded-bl-xl border-2 border-[var(--orange)]/60 hover:border-[var(--orange)] bg-[var(--surface)] shadow-2xl aspect-video flex items-center justify-center transition-colors"
            style={{
              clipPath:
                "polygon(0 24px, 24px 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%)",
            }}
          >
            <canvas
              ref={canvasRef}
              width={1280}
              height={720}
              role="img"
              aria-label="Animated resume scanner"
              className="w-full h-full object-cover"
            />

            {/* Subtle Glass Inner Rim Highlight */}
            <div className="pointer-events-none absolute inset-0 border border-white/10 rounded-tl-[2.5rem] rounded-br-[2.5rem] rounded-tr-xl rounded-bl-xl" />

            {(!imagesLoaded || loadFailed) && (
              <div
                className="absolute inset-0 flex items-center justify-center text-xs font-medium text-[var(--muted)] bg-[var(--surface)]/80 backdrop-blur-xs"
                role="status"
              >
                {loadFailed ? "Animation unavailable" : "Loading animation…"}
              </div>
            )}
          </div>
        </figure>
      </div>
    </section>
  );
};

export default HybridHeroCanvas;
