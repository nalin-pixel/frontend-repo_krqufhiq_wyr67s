import React from 'react';
import Spline from '@splinetool/react-spline';

// Full-bleed background with the Spline scene and subtle gradient/glow overlays
export default function BackgroundScene() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle radial gradient vignette to deepen the edges */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute -inset-20 bg-[radial-gradient(circle_at_center,rgba(18,20,26,0)_0%,rgba(10,12,16,0.6)_55%,rgba(5,6,10,0.9)_100%)]" />
      </div>

      {/* Soft cyan/purple glow accents, animated slowly for a calm, futuristic feel */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute top-1/4 left-[-10%] h-72 w-72 rounded-full blur-3xl opacity-30 bg-cyan-500/40 animate-pulse-slow" />
        <div className="absolute bottom-0 right-[-10%] h-80 w-80 rounded-full blur-3xl opacity-25 bg-fuchsia-500/40 animate-pulse-slower" />
      </div>

      {/* Thin, subtle grid lines for tech texture */}
      <svg
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" className="text-white" />
      </svg>
    </div>
  );
}
