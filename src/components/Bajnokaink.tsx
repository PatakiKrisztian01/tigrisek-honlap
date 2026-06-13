import { useEffect } from 'react';
import { Trophy, ArrowLeft, Flame, ShieldAlert, Award } from 'lucide-react';
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
  }
];

export default function Bajnokaink() {
  useEffect(() => {
    document.title = "Elite Hall of Fame | Budapest Tigers SE";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden selection:bg-neon-orange selection:text-black">
      
      {/* DINAMIKUS HÁTTÉR EFFEKTEK (Hogy ne legyen sírkert hangulat) */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-neon-orange/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[150px] pointer-events-none" />

      {/* HERO SECTION VADABB STÍLUSBAN */}
      <div className="relative h-[340px] w-full mt-16 md:mt-20 flex items-center justify-center overflow-hidden border-b border-gray-900/50">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/80 to-black z-10" />
        <img 
          src="/tigrisek.webp" 
          className="absolute inset-0 w-full h-full object-cover scale-105 blur-md opacity-20 transform rotate-1 animate-pulse" 
          alt="Budapest Tigers" 
        />
        
        <div className="relative max-w-5xl mx-auto px-6 w-full text-center z-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-orange/10 border border-neon-orange/30 text-neon-orange text-[10px] font-black uppercase tracking-widest mb-4 mx-auto">
            <Flame size={12} className="animate-bounce" /> Budapest Tigers Elite
          </div>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter mb-2 bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
            HALL OF FAME
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm font-medium max-w-xl mx-auto tracking-wide">
            Azok a harcosok, akik vérrel, verejtékkel és megtörhetetlen akarattal aranybetűkkel írták be magukat a klub történelmébe.
          </p>
        </div>
      </div>

      {/* TARTALOM */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-20">
        
        <div className="mb-10">
          <Link 
            to="/tagok" 
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-gray-500 hover:text-neon-orange transition-all group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Vissza a csapathoz
          </Link>
        </div>

        {/* PRÉMIUM, AKCIÓDÚS RÁCS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {bajnokokListaja.map((bajnok) => {
            const vanKep = bajnok.kepUrl && bajnok.kepUrl.trim() !== "";
            
            return (
              <div 
                key={bajnok.id} 
                className="bg-gradient-to-br from-gray-950 via-gray-950 to-black border border-gray-900 rounded-3xl overflow-hidden hover:border-neon-orange/50 transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.8)] flex flex-col sm:flex-row group relative"
              >
                {/* Neon élvilágítás hoverre */}
                <div className="absolute inset-0 bg-gradient-to-r from-neon-orange/0 via-neon-orange/5 to-neon-orange/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* PROFI FOTÓ BLOKK */}
                <div className="w-full sm:w-2/5 relative aspect-[4/5] sm:aspect-auto bg-black flex items-center justify-center overflow-hidden border-b sm:border-b-0 sm:border-r border-gray-900/60">
                  {vanKep ? (
                    <img 
                      src={bajnok.kepUrl} 
                      alt={bajnok.nev}
                      className="w-full h-full object-cover grayscale contrast-115 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-b from-gray-950 to-black relative">
                      <div className="w-16 h-16 rounded-full bg-gray-900/50 flex items-center justify-center border border-gray-800 group-hover:border-neon-orange/30 transition-colors">
                        <Award size={28} className="text-gray-700 group-hover:text-neon-orange/60 transition-colors" />
                      </div>
                      <span className="text-[8px] text-gray-600 uppercase font-black tracking-widest absolute bottom-4">
                        PHOTO PENDING
                      </span>
                    </div>
                  )}
                  {/* Sötétítő réteg a fotó aljára a drámai hatásért */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-80" />
                </div>

                {/* ADATOK ÉS JELVÉNYEK (BADGES) */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between relative z-10">
                  <div>
                    {/* Név és Titulus feszültséggel teli tipográfiával */}
                    <div className="mb-4">
                      <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight group-hover:text-neon-orange transition-colors duration-300">
                        {bajnok.nev}
                      </h3>
                      <div className="h-[2px] w-12 bg-neon-orange mt-1 mb-2 group-hover:w-20 transition-all duration-500" />
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                        {bajnok.titulus}
                      </p>
                    </div>
                    
                    {/* KIMITŰZŐK / JELVÉNYEK (Plecsnik) */}
                    <div className="flex flex-col gap-2 mb-6">
                      {bajnok.kiemeltCimek.map((cim, idx) => (
                        <div 
                          key={idx} 
                          className={`flex items-center gap-3 px-3 py-2 rounded-xl border ${cim.bgClass} backdrop-blur-sm transform group-hover:translate-x-1 transition-transform duration-300`}
                          style={{ transitionDelay: `${idx * 50}s` }}
                        >
                          <span className="text-base filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">{cim.ikon}</span>
                          <span className={`text-xs font-black uppercase tracking-wide ${cim.textClass}`}>
                            {cim.szoveg}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* STATISZTIKÁK */}
                    <div className="pt-4 border-t border-gray-900">
                      <span className="text-[9px] uppercase font-black tracking-widest text-gray-500 block mb-2">
                        Hivatalos eredménylista:
                      </span>
                      <div className="space-y-1.5 max-h-[120px] overflow-y-auto pr-2 custom-scrollbar">
                        {bajnok.reszletesEredmenyek.map((eredmeny, index) => (
                          <div key={index} className="text-[11px] text-gray-400 font-medium leading-relaxed flex items-start gap-2">
                            <span className="text-neon-orange text-[10px] mt-0.5">/</span>
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
