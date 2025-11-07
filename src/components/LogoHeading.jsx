import React from 'react';

export default function LogoHeading() {
  return (
    <div className="flex flex-col items-center gap-6 text-center">
      {/* SYNORA wordmark */}
      <div className="tracking-[0.35em] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white/95">
        SYNORA
      </div>

      {/* Tagline */}
      <p className="max-w-3xl text-base sm:text-lg md:text-xl text-white/70 leading-relaxed">
        AI-drevne løsninger for bedrifter som vil frem i tid.
      </p>

      {/* Subtext */}
      <p className="max-w-3xl text-sm sm:text-base text-white/60 leading-relaxed">
        Vi hjelper små og mellomstore bedrifter å effektivisere arbeid, øke synlighet og skalere med intelligente nettsider og automatiserte systemer.
      </p>
    </div>
  );
}
