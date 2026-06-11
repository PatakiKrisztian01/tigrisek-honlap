import React, { useMemo, useState } from "react";
import { ArrowRight, RotateCcw } from "lucide-react";

type Archetype = "harcos" | "villam" | "orzo" | "ebredo" | "kolyok";

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

export default function TigrisProfilAnalizatorV3() {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({
    harcos: 0, villam: 0, orzo: 0, ebredo: 0, kolyok: 0,
  });

  const choose = (option:any) => {
    const next = { ...scores };
    Object.entries(option.scores).forEach(([k,v]) => {
      next[k] = (next[k] || 0) + Number(v);
    });
    setScores(next);
    setStep((s) => s + 1);
  };

  const finished = step >= QUESTIONS.length;

  const ranking = useMemo(() => {
    return Object.entries(scores).sort((a,b)=>b[1]-a[1]);
  }, [scores]);

  const winner = ranking[0]?.[0] as Archetype;

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-black text-center mb-3">🐯 Tigris Profil Analizátor</h1>
        <p className="text-center text-gray-400 mb-8">
          2 perc. Humor. Harcművészet. Meglepően pontos eredmény.
        </p>

        {!finished && (
          <>
            <div className="w-full bg-gray-800 rounded-full h-3 mb-8">
              <div
                className="bg-orange-500 h-3 rounded-full transition-all"
                style={{ width: `${(step / QUESTIONS.length) * 100}%` }}
              />
            </div>

            <div className="bg-gray-900 rounded-3xl p-8">
              <h2 className="text-3xl font-bold mb-6">{QUESTIONS[step].title}</h2>

              <div className="grid gap-3">
                {QUESTIONS[step].options.map((o:any) => (
                  <button
                    key={o.label}
                    onClick={() => choose(o)}
                    className="text-left p-4 rounded-xl bg-gray-800 hover:bg-orange-500 hover:text-black transition-all"
                  >
                    {o.label}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}

        {finished && winner && (
          <div className="bg-gray-900 rounded-3xl p-8">
            <div className="text-7xl text-center">{RESULTS[winner].emoji}</div>
            <h2 className="text-4xl font-black text-center mt-4">{RESULTS[winner].title}</h2>
            <p className="text-center text-orange-400 font-bold">{RESULTS[winner].sport}</p>

            <div className="mt-8">
              {ranking.slice(0,3).map(([k,v]) => {
                const pct = Math.round((v / Math.max(1, ranking.reduce((s,x)=>s+x[1],0))) * 100);
                return (
                  <div key={k} className="mb-4">
                    <div className="flex justify-between">
                      <span>{RESULTS[k as Archetype].title}</span>
                      <span>{pct}%</span>
                    </div>
                    <div className="bg-gray-800 h-3 rounded-full">
                      <div className="bg-orange-500 h-3 rounded-full" style={{width:`${pct}%`}} />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 p-5 bg-black/40 rounded-xl">
              <h3 className="font-bold text-orange-400 mb-2">Vicces diagnózis</h3>
              <p>{RESULTS[winner].humor}</p>
            </div>

            <div className="mt-6 p-5 border border-orange-500 rounded-xl">
              <p>📈 A hozzád hasonló kitöltők 73%-a kipróbál legalább egy edzést.</p>
            </div>

            <div className="flex gap-3 mt-8">
              <button className="flex-1 bg-orange-500 text-black font-bold p-4 rounded-xl">
                🐯 Megnézem a hozzám illő edzést <ArrowRight className="inline ml-2" size={18}/>
              </button>

              <button
                onClick={() => window.location.reload()}
                className="border border-gray-700 p-4 rounded-xl"
              >
                <RotateCcw size={18}/>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
