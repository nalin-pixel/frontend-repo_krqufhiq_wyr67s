import React from 'react';
import BackgroundScene from './components/BackgroundScene';
import LogoHeading from './components/LogoHeading';
import CTAs from './components/CTAs';
import TrustBar from './components/TrustBar';

export default function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#0a0c10] via-[#0a0c10] to-[#0b0e14] text-white">
      {/* Background 3D scene and overlays */}
      <BackgroundScene />

      {/* Foreground content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="flex min-h-[80vh] items-center">
          <div className="mx-auto max-w-6xl px-6 w-full">
            <div className="flex flex-col items-center justify-center text-center">
              {/* Top logo-like heading */}
              <LogoHeading />
              {/* Calls to action */}
              <CTAs />
            </div>
          </div>
        </section>

        {/* Trust bar below hero, still above the fold on most screens */}
        <TrustBar />

        {/* Anchors for CTAs */}
        <section id="hvordan" className="px-6 pb-24">
          <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm text-white/70">
            <h2 className="text-white text-xl sm:text-2xl font-medium mb-3">Slik fungerer det</h2>
            <p className="leading-relaxed">
              Vi starter med en kort kartlegging for å forstå mål, nåværende systemer og potensial for automasjon. Deretter
              designer vi en fokusert løsning som kombinerer intelligente nettsider, integrasjoner og AI-drevne arbeidsflyter.
              Resultatet er en presis, robust og målbar forbedring av drift og synlighet.
            </p>
          </div>
        </section>

        <section id="kontakt" className="px-6 pb-24">
          <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <h2 className="text-white text-xl sm:text-2xl font-medium mb-4">Bestill en gratis konsultasjon</h2>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white/90">
              <input className="rounded-md bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Navn" />
              <input className="rounded-md bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="E-post" type="email" />
              <textarea className="sm:col-span-2 rounded-md bg-white/5 border border-white/10 px-4 py-3 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Kort om behov og mål" />
              <div className="sm:col-span-2">
                <button type="submit" className="relative inline-flex items-center justify-center rounded-full px-6 py-3 font-medium text-slate-900">
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-slate-100 via-slate-200 to-cyan-200 shadow-[0_0_30px_10px_rgba(59,130,246,0.15)]" />
                  <span className="relative">Send forespørsel</span>
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* Minimal top gradient sheen to echo luxury feel */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/5 to-transparent" />
    </div>
  );
}
