import React from 'react';

const brands = [
  'NordicWave',
  'Aurora Labs',
  'Skylit Systems',
  'Fjord Analytics',
  'Polar Grid',
];

export default function TrustBar() {
  return (
    <section className="w-full py-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-center gap-3 text-white/50">
          <div className="h-px w-10 bg-white/10" />
          <p className="text-xs tracking-widest uppercase">Trusted by forward-thinking companies</p>
          <div className="h-px w-10 bg-white/10" />
        </div>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {brands.map((b) => (
            <div
              key={b}
              className="flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/60 hover:text-white/80 transition-colors"
            >
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
