import { useEffect } from 'react';
import { Trophy, ArrowLeft, Flame, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Bajnok {
  id: string;
  nev: string;
  titulus: string;   
  kepUrl: string;    
  kiemeltCimek: { ikon: string; szoveg: string; bgClass: string; textClass: string }[];
  reszletesEredmenyek: string[];
}

const bajnokokListaja: Bajnok[] = [
  {
    id: "pataki-krisztian",
    nev: "Pataki Krisztián",
    titulus: "VI. Dan — Klubvezető Elnök",
    kepUrl: "/patakikrisztian.webp",
    kiemeltCimek: [
      { ikon: "🔥", szoveg: "3× Európa-bajnok", bgClass: "bg-red-500/10 border-red-500/30", textClass: "text-red-400" },
      { ikon: "🏆", szoveg: "5× World Cup győztes", bgClass: "bg-amber-500/10 border-amber-500/30", textClass: "text-amber-400" },
      { ikon: "🥉", szoveg: "2× Világbajnoki bronz", bgClass: "bg-orange-600/10 border-orange-600/30", textClass: "text-orange-400" }
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
    kepUrl: "", 
    kiemeltCimek: [
      { ikon: "🏆", szoveg: "2× Világkupa-győztes", bgClass: "bg-amber-500/10 border-amber-500/30", textClass: "text-amber-400" },
      { ikon: "🥈", szoveg: "Többszörös EB érmes", bgClass: "bg-slate-400/10 border-slate-400/30", textClass: "text-slate-300" },
      { ikon: "⚡", szoveg: "4× Európa Kupa győztes", bgClass: "bg-yellow-500/10 border-yellow-500/30", textClass: "text-yellow-400" }
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
    nev: "3. Bajnok Neve",
    titulus: "Fokozat / Pozíció",
    kepUrl: "",
    kiemeltCimek: [
      { ikon: "🏆", szoveg: "Kiemelt cím 1", bgClass: "bg-amber-500/10 border-amber-500/30", textClass: "text-amber-400" },
      { ikon: "🏅", szoveg: "Kiemelt cím 2", bgClass: "bg-yellow-500/10 border-yellow-500/30", textClass: "text-yellow-400" }
    ],
    reszletesEredmenyek: [
      "Excelből jövő eredmény 1...",
      "Excelből jövő eredmény 2..."
    ]
  },
  {
    id: "bajnok-4",
    nev: "4. Bajnok Neve",
    titulus: "Fokozat / Pozíció",
    kepUrl: "",
    kiemeltCimek: [
      { ikon: "🏆", szoveg: "Kiemelt cím 1", bgClass: "bg-amber-500/10 border-amber-500/30", textClass: "text-amber-400" }
    ],
    reszletesEredmenyek: [
      "Excelből jövő eredmény 1...",
      "Excelből jövő eredmény 2..."
    ]
  },
  {
    id: "bajnok-5",
    nev: "5. Bajnok Neve",
    titulus: "Fokozat / Pozíció",
    kepUrl: "",
    kiemeltCimek: [
      { ikon: "🏆", szoveg: "Kiemelt cím 1", bgClass: "bg-amber-500/10 border-amber-500/30", textClass: "text-amber-400" }
    ],
    reszletesEredmenyek: [
      "Excelből jövő eredmény 1...",
      "Excelből jövő eredmény 2..."
    ]
  },
  {
    id: "bajnok-6",
    nev: "6. Bajnok Neve",
    titulus: "Fokozat / Pozíció",
    kepUrl: "",
    kiemeltCimek: [
      { ikon: "🏆", szoveg: "Kiemelt cím 1", bgClass: "bg-amber-500/10 border-amber-500/30", textClass: "text-amber-400" }
    ],
    reszletesEredmenyek: [
      "Excelből jövő eredmény 1...",
      "Excelből jövő eredmény 2..."
    ]
  },
  {
    id: "bajnok-7",
    nev: "7. Bajnok Neve",
    titulus: "Fokozat / Pozíció",
    kepUrl: "",
    kiemeltCimek: [
      { ikon: "🏆", szoveg: "Kiemelt cím 1", bgClass: "bg-amber-500/10 border-amber-500/30", textClass: "text-amber-400" }
    ],
    reszletesEredmenyek: [
      "Excelből jövő eredmény 1...",
      "Excelből jövő eredmény 2..."
    ]
  },
  {
    id: "bajnok-8",
    nev: "8. Bajnok Neve",
    titulus: "Fokozat / Pozíció",
    kepUrl: "",
    kiemeltCimek: [
      { ikon: "🏆", szoveg: "Kiemelt cím 1", bgClass: "bg-amber-500/10 border-amber-500/30", textClass: "text-amber-400" }
    ],
    reszletesEredmenyek: [
      "Excelből jövő eredmény 1...",
      "Excelből jövő eredmény 2..."
    ]
  }
];

export default function Bajnokaink() {
  useEffect(() => {
    document.title = "Elite Hall of Fame | Budapest Tigers SE";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden selection:bg-neon-orange selection:text-black">
      
      {/* NAGY HÁTTÉR AMBIENT FÉNYEK */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-neon-orange/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[700px] h-[700px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />

      {/* FEJLÉC */}
      <div className="relative h-[320px] w-full mt-16 md:mt-20 flex items-center justify-center overflow-hidden border-b border-gray-900/40">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/80 to-black z-10" />
        <img 
          src="/tigrisek.webp" 
          className="absolute inset-0 w-full h-full object-cover scale-105 blur-sm opacity-15" 
          alt="Budapest Tigers" 
        />
        
        <div className="relative max-w-5xl mx-auto px-6 w-full text-center z-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] font-black uppercase tracking-widest mb-4 mx-auto animate-pulse">
            <Flame size={12} /> HÍRESSÉGEK CSARNOKA
          </div>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter mb-2 bg-gradient-to-r from-white via-amber-200 to-gray-500 bg-clip-text text-transparent">
            THE TIGERS ELITE
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm font-medium max-w-xl mx-auto tracking-wide">
            A Budapest Tigers SE legsikeresebb sportolói, akik nemzetközi szinten is a csúcsra értek.
          </p>
        </div>
      </div>

      {/* TARTALOM REZIDENCIA */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-20">
        
        <div className="mb-10">
          <Link 
            to="/tagok" 
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-gray-500 hover:text-amber-400 transition-all group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Vissza a csapathoz
          </Link>
        </div>

        {/* 1 SOR = 1 EMBER MEGJELENÍTÉS (Szuper tiszta, görgetősáv mentes elrendezés) */}
        <div className="flex flex-col gap-12">
          {bajnokokListaja.map((bajnok) => {
            const vanKep = bajnok.kepUrl && bajnok.kepUrl.trim() !== "";
            
            return (
              <div 
                key={bajnok.id} 
                className="bg-gradient-to-r from-gray-950 via-gray-950 to-black border border-gray-900 rounded-3xl overflow-hidden shadow-[0_24px_50px_rgba(0,0,0,0.9)] flex flex-col md:flex-row group relative"
              >
                
                {/* 🌟 CSILLOGÓ VASTAG ARANY KERET A KÉP KÖRÜL */}
                <div className="w-full md:w-[280px] p-4 bg-black flex-shrink-0 flex items-center justify-center">
                  <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden p-[4px] bg-gradient-to-br from-amber-300 via-yellow-600 to-amber-700 shadow-[0_0_20px_rgba(217,119,6,0.15)] group-hover:shadow-[0_0_30px_rgba(217,119,6,0.4)] group-hover:from-yellow-400 group-hover:via-amber-500 group-hover:to-yellow-200 transition-all duration-500">
                    
                    {/* Belső fekete elválasztó sáv, hogy a kép és a keret gyönyörűen elkülönüljön */}
                    <div className="w-full h-full rounded-[14px] overflow-hidden bg-gray-950 flex items-center justify-center relative">
                      {vanKep ? (
                        <img 
                          src={bajnok.kepUrl} 
                          alt={bajnok.nev}
                          className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-103 transition-all duration-700"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-b from-gray-950 to-gray-900">
                          <Award size={36} className="text-gray-800 group-hover:text-amber-500/50 transition-colors duration-500" />
                          <span className="text-[8px] text-gray-600 uppercase font-black tracking-widest mt-2">
                            FOTÓ KÉSZÜL
                          </span>
                        </div>
                      )}
                      {/* Sötét színátmenet a kép aljára */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                    </div>

                  </div>
                </div>

                {/* ADATOK (Nincs belső görgetés, minden kiterjed) */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between border-t md:border-t-0 md:border-l border-gray-900/60">
                  <div>
                    
                    {/* NÉV ÉS RANG */}
                    <div className="mb-6">
                      <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight group-hover:text-amber-400 transition-colors duration-300">
                        {bajnok.nev}
                      </h3>
                      <div className="h-[2px] w-16 bg-amber-500 mt-1 mb-2 group-hover:w-28 transition-all duration-500" />
                      <p className="text-xs font-black text-gray-400 uppercase tracking-widest">
                        {bajnok.titulus}
                      </p>
                    </div>
                    
                    {/* KIEMELT JELVÉNYEK (Plecsnik) */}
                    <div className="flex flex-wrap gap-2.5 mb-6">
                      {bajnok.kiemeltCimek.map((cim, idx) => (
                        <div 
                          key={idx} 
                          className={`flex items-center gap-2.5 px-4 py-2 rounded-xl border ${cim.bgClass} backdrop-blur-sm shadow-sm`}
                        >
                          <span className="text-sm filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">{cim.ikon}</span>
                          <span className={`text-xs font-black uppercase tracking-wide ${cim.textClass}`}>
                            {cim.szoveg}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* HIVATALOS EDREDMÉNYLISTA (Nincs többé max-height és nincs görgetősáv!) */}
                    <div className="pt-5 border-t border-gray-900">
                      <span className="text-[10px] uppercase font-black tracking-widest text-amber-500/70 block mb-3">
                        Minden hivatalos eredmény:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                        {bajnok.reszletesEredmenyek.map((eredmeny, index) => (
                          <div key={index} className="text-xs text-gray-400 font-medium leading-relaxed flex items-start gap-2 bg-gray-900/20 p-1.5 rounded-lg border border-gray-900/40">
                            <span className="text-amber-500 font-black text-[11px] mt-0.5">›</span>
                            <span>{eredmeny}</span>
                          </div>
                        ))}
                      </div>
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
