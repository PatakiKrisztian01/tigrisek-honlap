import { useEffect } from 'react';
import { Trophy, Medal, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Bajnok {
  id: string;
  nev: string;
  titulus: string;   
  kepUrl: string;    
  // Marketing kiemelések (ez jelenik meg nagyban, ikonokkal)
  kiemeltCimek: { ikon: string; szoveg: string }[];
  // Minden egyéb részlet (ez alatta jelenik meg finoman)
  reszletesEredmenyek: string[];
}

const bajnokokListaja: Bajnok[] = [
  {
    id: "pataki-krisztian",
    nev: "Pataki Krisztián",
    titulus: "VI. Dan — Klubvezető Elnök",
    kepUrl: "/patakikrisztian.webp",
    kiemeltCimek: [
      { ikon: "🏆", szoveg: "3× Európa-bajnok" },
      { ikon: "🏆", szoveg: "5× World Cup győztes" },
      { ikon: "🥉", szoveg: "2× Világbajnoki bronzérmes" }
    ],
    reszletesEredmenyek: [
      "2x ITF Taekwon-do Európa-bajnoki arany",
      "2x ITF Taekwon-do Európa-bajnoki ezüst",
      "3x ITF Taekwon-do Európa-bajnoki arany",
      "5x ITF Taekwon-do World Cup arany",
      "1x ITF Taekwon-do World Cup ezüst",
      "2x ITF Taekwon-do World Cup bronz",
      "All Style Karate Kick-box Európa-bajnoki arany",
      "2x ITF Taekwon-do Világbajnokság Bronz"
    ]
  },
  {
    id: "pataki-marcell",
    nev: "Pataki Marcell",
    titulus: "2.gup — Nemzetközi Bajnok",
    kepUrl: "", // Ha lesz fotó, ide jön a neve (pl. "/patakimarcell.webp")
    kiemeltCimek: [
      { ikon: "🏆", szoveg: "2× Világkupa-győztes" },
      { ikon: "🥈🥉", szoveg: "Többszörös Európa-bajnoki érmes" },
      { ikon: "🏆", szoveg: "4× Európa Kupa győztes" }
    ],
    reszletesEredmenyek: [
      "2x WAKO Kick-box Világkupa arany",
      "4x WAKO Kick-box Európa kupa Arany",
      "2x WAKO Kick-box Európa-bajnokság Ezüst",
      "2x WAKO Kick-box Európa-bajnokság Bronz"
    ]
  },
  {
    id: "bajnok-3",
    nev: "3. Sportoló Neve",
    titulus: "Fokozat / Pozíció",
    kepUrl: "",
    kiemeltCimek: [
      { ikon: "🏆", szoveg: "Legnagyobb cím 1" },
      { ikon: "🥈", szoveg: "Legnagyobb cím 2" }
    ],
    reszletesEredmenyek: [
      "További bajnoki eredmény 1",
      "További bajnoki eredmény 2"
    ]
  }
  // Ide jön majd a többi 5 sportoló pontosan ugyanezzel a mintával...
];

// PONTOSÍTVA: A függvény neve most már Bajnokaink, így a fájlneveddel tökéletes az összhang!
export default function Bajnokaink() {
  useEffect(() => {
    document.title = "Hall of Fame | Budapest Tigers SE";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* HERO FEJLÉC */}
      <div className="relative h-[280px] w-full mt-16 md:mt-20 flex items-center justify-center border-b border-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/75 z-10" />
        <img 
          src="/tigrisek.webp" 
          className="absolute inset-0 w-full h-full object-cover blur-sm opacity-20" 
          alt="Budapest Tigers" 
        />
        
        <div className="relative max-w-4xl mx-auto px-6 w-full text-center z-20">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-neon-orange/10 text-neon-orange mb-3 border border-neon-orange/20">
            <Trophy size={20} className="animate-pulse" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-1">
            Hall Of Fame
          </h1>
          <p className="text-neon-orange text-[11px] font-black uppercase tracking-widest">
            Hírességek Csarnoka — Akik beírták magukat a Tigers történelmébe
          </p>
        </div>
      </div>

      {/* TABLÓ RÁCS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="mb-8">
          <Link 
            to="/tagok" 
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-neon-orange transition-colors"
          >
            <ArrowLeft size={14} /> Vissza a tagokhoz
          </Link>
        </div>

        {/* 4 OSZLOPOS MARKETING-ORIENTÁLT RÁCS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {bajnokokListaja.map((bajnok) => {
            const vanKep = bajnok.kepUrl && bajnok.kepUrl.trim() !== "";
            
            return (
              <div 
                key={bajnok.id} 
                className="bg-gray-950/40 border border-gray-900 rounded-2xl overflow-hidden hover:border-neon-orange/40 transition-all duration-300 shadow-xl flex flex-col group"
              >
                
                {/* Fotó helye */}
                <div className="relative aspect-[3/4] w-full bg-black/50 overflow-hidden border-b border-gray-900 flex items-center justify-center">
                  {vanKep ? (
                    <img 
                      src={bajnok.kepUrl} 
                      alt={bajnok.nev}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-103 transition-all duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-b from-gray-950 to-gray-900/40 relative">
                      <img 
                        src="/tigrislogo.webp" 
                        alt="Tigers Logo Helyőrző" 
                        className="w-20 h-20 object-contain opacity-10 group-hover:opacity-20 transition-opacity duration-300" 
                      />
                      <span className="text-[9px] text-gray-600 uppercase font-black tracking-widest absolute bottom-4">
                        Fotó hamarosan
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-40" />
                </div>

                {/* Szöveges tartalom */}
                <div className="p-5 flex-1 flex flex-col justify-between bg-gradient-to-b from-gray-950 to-black">
                  <div>
                    <h3 className="text-base font-black text-white uppercase tracking-tight group-hover:text-neon-orange transition-colors">
                      {bajnok.nev}
                    </h3>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mt-0.5 mb-4">
                      {bajnok.titulus}
                    </p>
                    
                    {/* 🔥 MARKETING BLOKK: A 3 legütősebb cím (Azonnal olvasható) */}
                    <div className="space-y-2 mb-4 bg-black/40 p-3 rounded-xl border border-gray-900/60">
                      {bajnok.kiemeltCimek.map((cim, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span className="text-sm filter drop-shadow-[0_0_4px_rgba(249,115,22,0.2)]">{cim.ikon}</span>
                          <span className="text-xs font-black text-gray-200 uppercase tracking-wide">
                            {cim.szoveg}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* RÉSZLETES LISTA: Finom, kisebb betűkkel a háttérben */}
                    <div className="pt-3 border-t border-gray-900/40">
                      <p className="text-[9px] uppercase font-black tracking-widest text-gray-600 mb-1.5">Összes eredmény:</p>
                      <ul className="space-y-1 max-h-[100px] overflow-y-auto pr-1 custom-scrollbar">
                        {bajnok.reszletesEredmenyek.map((eredmeny, index) => (
                          <li key={index} className="text-[10px] text-gray-400 leading-tight list-none flex items-start gap-1">
                            <span className="text-neon-orange/60 text-[8px] mt-0.5">•</span>
                            <span>{eredmeny}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
