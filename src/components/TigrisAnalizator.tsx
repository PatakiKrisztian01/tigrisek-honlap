import React, { useMemo, useState } from "react";
import { ArrowRight, RotateCcw, HelpCircle } from "lucide-react";

type Archetype = "harcos" | "villam" | "orzo" | "ebredo" | "kolyok";

interface AnalizatorProps {
  isFullPage?: boolean;
}

const QUESTIONS = [
  {
    title: "Mi hozott ide ma?",
    options: [
      { label: "🥋 Megtanulnék küzdeni", scores: { harcos: 3 } },
      { label: "💪 Erősebb akarok lenni", scores: { villam: 2, ebredo: 2 } },
      { label: "🛡️ Önvédelmet keresek", scores: { orzo: 4 } },
      { label: "🤝 Közösséget keresek", scores: { ebredo: 3 } },
      { label: "👨‍👩‍👧 A gyermekemnek keresek sportot", scores: { kolyok: 10 } },
    ],
  },
  {
    title: "Melyik filmes jelenetben lennél?",
    options: [
      { label: "🏆 A döntő pillanat", scores: { harcos: 3 } },
      { label: "🥊 Intenzív edzésmontázs", scores: { villam: 3 } },
      { label: "🛡️ Valaki megvéd egy gyengébbet", scores: { orzo: 3 } },
      { label: "😂 Barátokkal kaland", scores: { ebredo: 3 } },
    ],
  },
  {
    title: "Milyen voltál gyerekként?",
    options: [
      { label: "⚡ Folyton mozgásban", scores: { villam: 3 } },
      { label: "🏆 Versengő", scores: { harcos: 3 } },
      { label: "🧠 Megfigyelő", scores: { orzo: 3 } },
      { label: "🤝 Társasági", scores: { ebredo: 3 } },
    ],
  },
  {
    title: "Mi lenne az álomeredmény egy év múlva?",
    options: [
      { label: "🥋 Új övfokozat", scores: { harcos: 4 } },
      { label: "🥇 Dobogón állok", scores: { villam: 4, harcos: 2 } },
      { label: "😊 Sokkal magabiztosabb vagyok", scores: { orzo: 4 } },
      { label: "🔥 Sokkal jobb formában vagyok", scores: { ebredo: 4 } },
    ],
  },
];

const RESULTS = {
  harcos: {
    emoji: "⚡",
    title: "Harcos Szellem",
    sport: "ITF Taekwon-do",
    humor: "Mellékhatásként előfordulhat övvizsga-függőség.",
  },
  villam: {
    emoji: "🥊",
    title: "Villám Tigris",
    sport: "Kick-box",
    humor: "Gyorsabban reagálsz, mint ahogy mások befejezik a mondatot.",
  },
  orzo: {
    emoji: "🛡️",
    title: "Őrző Tigris",
    sport: "Önvédelem",
    humor: "Előbb veszed észre a bajt, mint hogy a baj észrevegyen téged.",
  },
  ebredo: {
    emoji: "🌱",
    title: "Ébredő Tigris",
    sport: "Kezdő felnőtt Taekwon-do",
    humor: "A történet most kezdődik.",
  },
  kolyok: {
    emoji: "🐯",
    title: "Tigriskölyök",
    sport: "Ovis Taekwon-do",
    humor: "A játékból önbizalom, az önbizalomból siker lesz.",
  },
};

export default function TigrisAnalizator({ isFullPage = false }: AnalizatorProps) {
  const [step, setStep] = useState(0);
  const [started, setStarted] = useState(false);
  const [scores, setScores] = useState<Record<string, number>>({
    harcos: 0, villam: 0, orzo: 0, ebredo: 0, kolyok: 0,
  });

  const choose = (option: any) => {
    const next = { ...scores };
    Object.entries(option.scores).forEach(([k, v]) => {
      next[k] = (next[k] || 0) + Number(v);
    });
    setScores(next);
    
    // GYORSÍTÁS: Ha a gyerek opciót választotta, ugorjon azonnal a végére,
    // mivel a többi kérdés felnőttes.
    if (step === 0 && option.scores.kolyok) {
      setStep(QUESTIONS.length);
    } else {
      setStep((s) => s + 1);
    }
  };

  const handleReset = () => {
    setScores({ harcos: 0, villam: 0, orzo: 0, ebredo: 0, kolyok: 0 });
    setStep(0);
    setStarted(isFullPage); // Ha full page, egyből indul újra, ha home, vissza a kezdőlapra
  };

  const finished = step >= QUESTIONS.length;
  const ranking = useMemo(() => Object.entries(scores).sort((a, b) => b[1] - a[1]), [scores]);
  const winner = ranking[0]?.[0] as Archetype;

  // HOME VERZIÓ: Ha még nem indította el a főoldalon, egy szép kedvcsináló blokk jelenik meg
  if (!isFullPage && !started) {
    return (
      <div className="w-full max-w-4xl mx-auto my-12 px-4">
        <div className="bg-gradient-to-br from-gray-950 via-black to-gray-900 border border-neon-orange/20 rounded-3xl p-8 text-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6 text-neon-orange/10 pointer-events-none">
            <HelpCircle size={120} className="transform rotate-12" />
          </div>
          <span className="text-neon-orange text-xs sm:text-sm font-black tracking-widest uppercase mb-2 block">
            Interaktív Kvíz
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mb-4">
            Melyik <span className="text-neon-orange">Tigris alkat</span> vagy?
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mb-6">
            Keresed a hozzád illő küzdősportot a 18. kerületben? Töltsd ki a 2 perces, humoros analizátorunkat a meglepően pontos eredményért!
          </p>
          <button 
            onClick={() => setStarted(true)}
            className="bg-neon-orange hover:bg-orange-600 text-black font-black px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:scale-105 shadow-lg shadow-neon-orange/20 inline-flex items-center gap-2"
          >
            Teszt Indítása <ArrowRight size={20} />
          </button>
        </div>
      </div>
    );
  }

  return (
    // Beépített golyóálló P-húzat az aloldalhoz, de nullázódik a Home-ban
    <div className={`w-full bg-black text-white overflow-x-hidden ${isFullPage ? 'pt-28 sm:pt-32 md:pt-36 min-h-screen' : ''}`}>
      <div className="max-w-3xl mx-auto px-4">
        
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            🐯 Tigris <span className="text-neon-orange">Profil</span> Analizátor
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm mt-2">
            2 perc. Humor. Harcművészet. Meglepően pontos eredmények.
          </p>
        </div>

        {!finished && (
          <div className="w-full max-w-xl mx-auto">
            {/* Csík progress bar */}
            <div className="w-full bg-gray-900 rounded-full h-2 mb-6 border border-gray-800">
              <div
                className="bg-neon-orange h-2 rounded-full transition-all duration-300"
                style={{ width: `${(step / QUESTIONS.length) * 100}%` }}
              />
            </div>

            {/* Kérdés kártya - A GYIK stílusú prémium ablak */}
            <div className="bg-gray-950 border border-gray-900 rounded-2xl p-6 sm:p-8 text-center">
              <h2 className="text-xl sm:text-2xl font-black mb-6 text-white">{QUESTIONS[step].title}</h2>

              <div className="grid gap-3">
                {QUESTIONS[step].options.map((o: any) => (
                  <button
                    key={o.label}
                    onClick={() => choose(o)}
                    className="text-left p-4 rounded-xl bg-black border border-gray-900 text-gray-200 hover:bg-neon-orange hover:text-black hover:border-neon-orange font-bold transition-all duration-200 text-sm sm:text-base"
                  >
                    {o.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {finished && winner && (
          <div className="bg-gray-950 border border-gray-900 rounded-2xl p-6 sm:p-8 max-w-xl mx-auto">
            <div className="text-6xl text-center filter drop-shadow-[0_4px_10px_rgba(249,115,22,0.3)]">
              {RESULTS[winner].emoji}
            </div>
            <h2 className="text-3xl font-black text-center mt-4 text-white uppercase tracking-tight">
              {RESULTS[winner].title}
            </h2>
            <p className="text-center text-neon-orange font-black text-lg mt-1">
              {RESULTS[winner].sport}
            </p>

            {/* Statisztika / Csíkok */}
            <div className="mt-6 space-y-4">
              {ranking.slice(0, 3).map(([k, v]) => {
                const total = ranking.reduce((s, x) => s + x[1], 0);
                const pct = Math.round((v / Math.max(1, total)) * 100);
                if (pct === 0) return null;
                return (
                  <div key={k} className="mb-2">
                    <div className="flex justify-between text-xs sm:text-sm font-bold text-gray-300 mb-1">
                      <span>{RESULTS[k as Archetype].title}</span>
                      <span className="text-neon-orange">{pct}%</span>
                    </div>
                    <div className="bg-black border border-gray-900 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-neon-orange h-2.5 rounded-full transition-all duration-500" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Diagnózis box */}
            <div className="mt-6 p-4 bg-black border border-gray-900 rounded-xl">
              <h3 className="font-black text-neon-orange text-sm uppercase tracking-wider mb-1">Vicces diagnózis</h3>
              <p className="text-gray-300 text-sm sm:text-base">{RESULTS[winner].humor}</p>
            </div>

            <div className="mt-4 p-4 bg-neon-orange/5 border border-neon-orange/20 rounded-xl text-center">
              <p className="text-gray-300 text-xs sm:text-sm font-medium">
                📈 A hozzád hasonló kitöltők <strong className="text-white">73%-a</strong> kipróbál nálunk legalább egy edzést.
              </p>
            </div>

            {/* Akció gombok */}
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <a 
                href="/Edzesek" 
                className="flex-1 bg-neon-orange hover:bg-orange-600 text-black font-black p-4 rounded-xl text-center text-sm sm:text-base transition-all duration-200 shadow-lg shadow-neon-orange/20 inline-flex items-center justify-center gap-2"
              >
                Megnézem az edzéseket <ArrowRight size={16} />
              </a>

              <button
                onClick={handleReset}
                className="border border-gray-800 hover:border-gray-700 p-4 rounded-xl flex items-center justify-center transition-colors text-gray-400 hover:text-white"
                title="Újratöltés"
              >
                <RotateCcw size={18} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
