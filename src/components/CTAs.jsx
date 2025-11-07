import React from 'react';

export default function CTAs() {
  return (
    <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
      {/* Primary CTA with silver-to-cyan/lilac gradient and soft glow */}
      <a
        href="#kontakt"
        className="group relative inline-flex items-center justify-center rounded-full px-6 py-3 text-sm sm:text-base font-medium text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
      >
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-slate-100 via-slate-200 to-cyan-200 shadow-[0_0_30px_10px_rgba(59,130,246,0.15)] transition-all duration-700 group-hover:shadow-[0_0_40px_14px_rgba(167,139,250,0.22)]" />
        <span className="relative">Bestill gratis konsultasjon</span>
      </a>

      {/* Secondary CTA with thin silver outline and subtle hover */}
      <a
        href="#hvordan"
        className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm sm:text-base font-medium text-white/90 backdrop-blur-sm transition-colors hover:border-white/50"
      >
        Se hvordan det fungerer
      </a>
    </div>
  );
}
