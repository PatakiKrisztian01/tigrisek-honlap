import { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink, Download } from 'lucide-react';

// ... (A belt adatok változatlanok maradnak, a kód rövidítése miatt itt kihagytam)

export default function Members() {
  return (
    <div className="min-h-screen pt-0">
      
      {/* HERO SZEKCIÓ KÉPPEL (tigrisek.jpg) */}
      <div className="relative h-[300px] w-full flex items-center justify-center overflow-hidden border-b border-gray-800">
        {/* Háttérkép */}
        <img 
          src="/tigrisek.jpg" 
          alt="Budapest Tigers SE Csapat" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Gradiens sötétítés */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />

        {/* Hero tartalom */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <p className="text-neon-orange text-sm font-bold tracking-wider uppercase mb-2 drop-shadow-md">Csapatunk</p>
          <h1 className="text-5xl md:text-6xl font-black text-white uppercase drop-shadow-lg">Tagok</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Important docs */}
        <div className="bg-amber-950/20 border border-amber-900/40 rounded-2xl p-6 mb-12">
          <h3 className="text-amber-400 font-bold text-lg mb-4">Tagoknak — Fontos tudnivalók</h3>
          <ul className="space-y-4 text-gray-300 text-sm">
            <li className="flex items-start gap-3">
              <span className="text-amber-500 flex-shrink-0 mt-0.5">1.</span>
              <div className="space-y-2">
                <span>
                  <strong className="text-white">Sportorvosi vizsgálat</strong> — Gyerekeknek fél évente, felnőtteknek évente kötelező.
                </span>
                <div className="flex flex-wrap gap-3 pt-1">
                  <a 
                    href="https://online.osei.hu/bejelentkezes" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 text-xs text-neon-orange hover:text-orange-400 font-bold underline transition-colors"
                  >
                    <span>OSEI online időpontfoglalás</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a 
                    href="https://osei.hu/images/stories/osei/Sportoli-krdv-20260310-szerkeszthet-.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-bold underline transition-colors"
                  >
                    <span>Letöltendő kérdőív vizsgálathoz (PDF)</span>
                    <Download className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-500 flex-shrink-0 mt-0.5">2.</span>
              <span>
                <strong className="text-white">Fejvédő</strong> — Versenyeken kötelező, edzéseken erősen ajánlott.
                Versenyzőknek mindkét színből (piros és kék) kell legyen!
              </span>
            </li>
          </ul>
        </div>

        {/* Members by rank */}
        <h2 className="text-3xl font-black text-white mb-6">Tagok övszín szerint</h2>
        <div className="space-y-4">
          {belts.map((belt) => (
            <BeltRow key={belt.rank} belt={belt} />
          ))}
        </div>
      </div>
    </div>
  );
}
