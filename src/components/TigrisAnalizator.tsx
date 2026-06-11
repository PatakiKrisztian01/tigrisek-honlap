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
      { label: "👨‍👩‍👧 A gyermekemnek keresek simport React, { useMemo, useState } from "react";
import { ArrowRight, RotateCcw, HelpCircle, CheckCircle2, User, Phone, GraduationCap } from "lucide-react";

type Archetype = "harcos" | "villam" | "orzo" | "ebredo" | "kolyok";

interface AnalizatorProps {
  isFullPage?: boolean;
}

// FELNŐTT KÉRDÉSSOR
const ADULT_QUESTIONS = [
  {
    title: "Mi hozott ide ma leginkább?",
    options: [
      { label: "🥋 Szeretnék megtanulni küzdeni és technikás lenni", scores: { harcos: 4 } },
      { label: "💪 Brutális állóképességet és pörgős edzést akarok", scores: { villam: 4 } },
      { label: "🛡️ Hatékony, gyakorlatias önvédelmet keresek", scores: { orzo: 4 } },
      { label: "🌱 Sosincs késő: teljesen kezdőként formába lendülnék", scores: { ebredo: 4 } },
    ],
  },
  {
    title: "Milyen edzéshangulat inspirál a legjobban?",
    options: [
      { label: "🏆 Precíz, fegyelmezett, ahol komoly rangot ad a ruha és az öv", scores: { harcos: 3 } },
      { label: "🥊 Dinamikus, zenés, pörgős küzdősport hangulat", scores: { villam: 3 } },
      { label: "🧠 Nyugodt, koncentrált, ahol a túlélési technikák dominálnak", scores: { orzo: 3 } },
      { label: "🤝 Családias, támogató közösség, ahol nem baj, ha még nulla az erőnlétem", scores: { ebredo: 3 } },
    ],
  },
  {
    title: "Mi lenne a legnagyobb győzelmed egy év múlva?",
    options: [
      { label: "🥋 Büszkén viselném a következő hivatalos övfokozatomat", scores: { harcos: 4 } },
      { label: "🥇 Akár egy hivatalos verseny dobogójára is felállnék", scores: { villam: 4, harcos: 1 } },
      { label: "😊 Magabiztos fellépésem lenne, megszűnne a mindennapi stressz", scores: { orzo: 4 } },
      { label: "🔥 Végre leadtam a felesleget és kicsattanok az energiától", scores: { ebredo: 4 } },
    ],
  },
];

// SZÜLŐI KÉRDÉSSOR (Gyerkőcnek keres sportot)
const CHILD_QUESTIONS = [
  {
    title: "Hány éves a gyermeked?",
    options: [
      { label: "🐯 4–7 éves (Ovis, kisiskolás korosztály)", scores: { kolyok: 5 } },
      { label: "🦅 8–14 éves (Iskolás, junior korosztály)", scores: { harcos: 3, villam: 2 } },
    ],
  },
  {
    title: "Mi a legfőbb célod a gyermeked edzésével?",
    options: [
      { label: "🤝 Közösségbe kerüljön, fegyelmet és tiszteletet tanuljon", scores: { harcos: 3, kolyok: 2 } },
      { label: "⚡ Levezesse a végtelen energiáját egy pörgős, vidám csapatban", scores: { villam: 3, kolyok: 2 } },
      { label: "🛡️ Magabiztossá váljon, és meg tudja védeni magát az iskolában", scores: { orzo: 3, harcos: 2 } },
    ],
  },
  {
    title: "Milyen a gyermeked jelenlegi mozgásigénye?",
    options: [
      { label: "🔥 Megállíthatatlan, állandóan pörög és ugrál", scores: { villam: 3, kolyok: 2 } },
      { label: "🧠 Kicsit visszahúzódóbb, figyelmes, igényli a strukturált feladatokat", scores: { harcos: 4 } },
      { label: "🏃 Szeret mozogni, de gyorsan megunja a monoton dolgokat", scores: { kolyok: 3, villam: 2 } },
    ],
  },
];

const RESULTS = {
  harcos: {
    emoji: "⚡",
    title: "Harcos Szellem",
    sport: "ITF Taekwon-do (Gyermek vagy Felnőtt)",
    why: "A válaszaid alapján számodra fontos a struktúra, a precizitás és az elhivatottság. A Taekwon-do nemcsak egy küzdősport, hanem egy zárt értékrend, amely övvizsgákon és tradicionális technikákon keresztül épít sziklaszilárd fegyelmet és önbizalmat.",
    humor: "Mellékhatásként súlyos övvizsga- és formagyakorlat-függőség alakulhat ki.",
  },
  villam: {
    emoji: "🥊",
    title: "Villám Tigris",
    sport: "Kick-box (Formagyakorlat szakosztály)",
    why: "Te nem szeretsz egy helyben állni! A pörgés, a ritmus és a dinamika mozgat. A Kick-box edzéseinken a modern küzdősport elemeit ötvözzük a zenés, magas intenzitású mozgással, ami garantáltan robbanásszerűen fejleszti az állóképességet.",
    humor: "Vigyázat! Gyorsabban fogsz reagálni a mindennapokban, mint ahogy mások befejeznék a mondatot.",
  },
  orzo: {
    emoji: "🛡️",
    title: "Őrző Tigris",
    sport: "Gyakorlati Önvédelem",
    why: "Számodra a biztonság, a helyzetfelismerés és a tiszta hatékonyság a legfontosabb. Az önvédelem nálunk nem a ringre vagy pontszerzésre épül, hanem arra, hogyan kezeld a stresszt, hogyan lépj fel magabiztosan, és szükség esetén hogyan háríts el egy támadást.",
    humor: "Diagnózis: Előbb veszed észre a gyanús helyzeteket, mint ahogy a baj egyáltalán észrevenne téged.",
  },
  ebredo: {
    emoji: "🌱",
    title: "Ébredő Tigris",
    sport: "Kezdő felnőtt Taekwon-do",
    why: "Tökéletes időzítés! A válaszaid alapján vágysz a megújulásra és a mozgásra, de egy olyan támogató, családias közösségben, ahol teljesen az alapoktól építenek fel, tekintettel lévén a felnőttkori fittség sajátosságaira.",
    humor: "A te történeted nem a múltban, hanem most csütörtökön az első edzésen kezdődik.",
  },
  kolyok: {
    emoji: "🐯",
    title: "Tigriskölyök",
    sport: "Ovis és Kisiskolás Taekwon-do",
    why: "Szülőként a legjobbat keresed: ahol a játékból önbizalom, az önfegyelemből pedig siker lesz. Korosztályos gyerekedzéseinken a 18. kerületben játékos, de fegyelmezett formában fejlesztjük a kicsik mozgáskoordinációját és figyelmét.",
    humor: "Várható eredmény: Az edzések után a gyerkőc meglepően gyorsan és önként fog elaludni este.",
  },
};

export default function TigrisAnalizator({ isFullPage = false }: AnalizatorProps) {
  const [started, setStarted] = useState(false);
  const [isChildRoute, setIsChildRoute] = useState<boolean | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Űrlap állapotok
  const [formData, setFormData] = useState({ name: "", phone: "", ageGroup: "Gyermek (4-14 év)" });

  const [scores, setScores] = useState<Record<string, number>>({
    harcos: 0, villam: 0, orzo: 0, ebredo: 0, kolyok: 0,
  });

  const activeQuestions = useMemo(() => {
    if (isChildRoute === null) return [];
    return isChildRoute ? CHILD_QUESTIONS : ADULT_QUESTIONS;
  }, [isChildRoute]);

  const handleFirstDecision = (forChild: boolean) => {
    setIsChildRoute(forChild);
    setScores({
      harcos: 0, villam: 0, orzo: 0, ebredo: 0,
      kolyok: forChild ? 5 : 0 // Ha gyereknek keresi, kap egy erős kezdőlökést a kolyok ág
    });
    setStarted(true);
    setCurrentStep(0);
  };

  const chooseOption = (option: any) => {
    const nextScores = { ...scores };
    Object.entries(option.scores).forEach(([k, v]) => {
      nextScores[k] = (nextScores[k] || 0) + Number(v);
    });
    setScores(nextScores);
    setCurrentStep((s) => s + 1);
  };

  const handleReset = () => {
    setScores({ harcos: 0, villam: 0, orzo: 0, ebredo: 0, kolyok: 0 });
    setCurrentStep(0);
    setIsChildRoute(null);
    setShowBookingForm(false);
    setFormSubmitted(false);
    setFormData({ name: "", phone: "", ageGroup: "Gyermek (4-14 év)" });
    setStarted(isFullPage); 
  };

  const finished = isChildRoute !== null && currentStep >= activeQuestions.length;
  const ranking = useMemo(() => Object.entries(scores).sort((a, b) => b[1] - a[1]), [scores]);
  const winner = ranking[0]?.[0] as Archetype;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Itt a valóságban elküldheted Supabase-be vagy Vercel backendre
    setFormSubmitted(true);
  };

  // KEZDŐ BANNER (HOME VERZIÓHOZ)
  if (!isFullPage && !started && isChildRoute === null) {
    return (
      <div className="w-full max-w-4xl mx-auto my-12 px-4">
        <div className="bg-gradient-to-br from-gray-950 via-black to-gray-900 border border-neon-orange/20 rounded-3xl p-8 text-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6 text-neon-orange/5 pointer-events-none">
            <HelpCircle size={140} className="transform rotate-12" />
          </div>
          <span className="text-neon-orange text-xs sm:text-sm font-black tracking-widest uppercase mb-2 block">
            Interaktív Tanácsadó
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mb-4">
            Melyik <span className="text-neon-orange">Tigris edzés</span> illik hozzátok?
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mb-8">
            Keresed a tökéletes harcművészetet vagy küzdősportot a 18. kerületben? Töltsd ki a 2 perces analizátort, és tudd meg azonnal a pontos szakmai választ!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <button 
              onClick={() => handleFirstDecision(true)}
              className="bg-neon-orange hover:bg-orange-600 text-black font-black px-6 py-4 rounded-xl text-md transition-all duration-200 hover:scale-105 shadow-md flex-1"
            >
              👶 Gyermekemnek keresek
            </button>
            <button 
              onClick={() => handleFirstDecision(false)}
              className="border border-gray-800 hover:border-gray-700 hover:bg-gray-950 text-white font-black px-6 py-4 rounded-xl text-md transition-all duration-200 hover:scale-105 flex-1"
            >
              🥋 Magamnak / Felnőttnek
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full bg-black text-white overflow-x-hidden ${isFullPage ? 'pt-28 sm:pt-32 md:pt-36 min-h-screen' : ''}`}>
      <div className="max-w-3xl mx-auto px-4">
        
        {/* CÍMSOR */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
            🐯 Tigris <span className="text-neon-orange">Profil</span> Analizátor <span className="text-xs bg-neon-orange text-black px-1.5 py-0.5 rounded font-black align-middle ml-1">V4</span>
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm mt-2">
            Intelligens elágazásokkal támogatott szakmai és marketing szűrőprogram.
          </p>
        </div>

        {/* 0. LÉPÉS: HA VALAKI KÖZVETLENÜL AZ ALOLDALRA ÉRKEZIK */}
        {isChildRoute === null && (
          <div className="bg-gray-950 border border-gray-900 rounded-2xl p-6 sm:p-8 text-center max-w-xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-black mb-6 text-white uppercase">Első lépés: Kinek keressük a sportot?</h2>
            <div className="grid gap-4">
              <button
                onClick={() => handleFirstDecision(true)}
                className="text-left p-5 rounded-xl bg-black border border-gray-900 text-gray-200 hover:bg-neon-orange hover:text-black hover:border-neon-orange font-black transition-all text-base sm:text-lg flex items-center justify-between"
              >
                <span>👨‍👩‍👧 A gyermekemnek (Ovis vagy Iskolás)</span>
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => handleFirstDecision(false)}
                className="text-left p-5 rounded-xl bg-black border border-gray-900 text-gray-200 hover:bg-neon-orange hover:text-black hover:border-neon-orange font-black transition-all text-base sm:text-lg flex items-center justify-between"
              >
                <span>🥋 Saját magamnak (Kezdő felnőtt vagy haladó)</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        )}

        {/* KÉRDÉSEK FOLYAMATA */}
        {started && !finished && isChildRoute !== null && (
          <div className="w-full max-w-xl mx-auto">
            {/* Haladási csík */}
            <div className="w-full bg-gray-900 rounded-full h-2 mb-6 border border-gray-800">
              <div
                className="bg-neon-orange h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / activeQuestions.length) * 100}%` }}
              />
            </div>

            {/* Kérdés kártya */}
            <div className="bg-gray-950 border border-gray-900 rounded-2xl p-6 sm:p-8 text-center">
              <span className="text-xs font-black text-neon-orange uppercase tracking-widest block mb-1">
                {isChildRoute ? "Szülői kérdéssor" : "Felnőtt kérdéssor"} — {currentStep + 1} / {activeQuestions.length}
              </span>
              <h2 className="text-xl sm:text-2xl font-black mb-6 text-white">{activeQuestions[currentStep].title}</h2>

              <div className="grid gap-3">
                {activeQuestions[currentStep].options.map((o: any) => (
                  <button
                    key={o.label}
                    onClick={() => chooseOption(o)}
                    className="text-left p-4 rounded-xl bg-black border border-gray-900 text-gray-200 hover:bg-neon-orange hover:text-black hover:border-neon-orange font-bold transition-all duration-200 text-sm sm:text-base"
                  >
                    {o.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* VÉGEREDMÉNY BLOKK */}
        {finished && winner && (
          <div className="bg-gray-950 border border-gray-900 rounded-2xl p-6 sm:p-8 max-w-xl mx-auto pb-12">
            {!showBookingForm ? (
              <>
                <div className="text-6xl text-center filter drop-shadow-[0_4px_10px_rgba(249,115,22,0.3)]">
                  {RESULTS[winner].emoji}
                </div>
                <span className="text-xs font-black text-center block text-neon-orange uppercase tracking-widest mt-2">A te Tigris karaktered:</span>
                <h2 className="text-3xl font-black text-center text-white uppercase tracking-tight">
                  {RESULTS[winner].title}
                </h2>
                <p className="text-center text-neon-orange font-black text-lg mt-1 border-b border-gray-900 pb-4">
                  Ajánlott szakosztály: {RESULTS[winner].sport}
                </p>

                {/* MIÉRT EZT KAPTAD SZAKMAI INDOKLÁS */}
                <div className="mt-6">
                  <h3 className="font-black text-white text-sm uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <CheckCircle2 size={16} className="text-neon-orange" /> Miért éppen ezt ajánljuk?
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed bg-black/50 p-4 border border-gray-900 rounded-xl">
                    {RESULTS[winner].why}
                  </p>
                </div>

                {/* VICCES DIAGNÓZIS BOX */}
                <div className="mt-4 p-4 bg-black border border-gray-900 rounded-xl">
                  <h3 className="font-black text-neon-orange text-xs uppercase tracking-wider mb-1">Humoros diagnózis</h3>
                  <p className="text-gray-400 text-xs sm:text-sm italic">"{RESULTS[winner].humor}"</p>
                </div>

                <div className="mt-4 p-4 bg-neon-orange/5 border border-neon-orange/20 rounded-xl text-center">
                  <p className="text-gray-300 text-xs sm:text-sm font-medium">
                    📈 A hozzád hasonló kitöltők <strong className="text-white">73%-a</strong> 1 héten belül lejár hozzánk próbaedzésre a 18. kerületben.
                  </p>
                </div>

                {/* AKCIÓ GOMBOK */}
                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <button 
                    onClick={() => setShowBookingForm(true)}
                    className="flex-1 bg-neon-orange hover:bg-orange-600 text-black font-black p-4 rounded-xl text-center text-sm sm:text-base transition-all duration-200 shadow-lg shadow-neon-orange/20 inline-flex items-center justify-center gap-2 hover:scale-[1.02]"
                  >
                    🐯 Ingyenes Próbaedzés Foglalása <ArrowRight size={16} />
                  </button>

                  <button
                    onClick={handleReset}
                    className="border border-gray-800 hover:border-gray-700 p-4 rounded-xl flex items-center justify-center transition-colors text-gray-400 hover:text-white"
                    title="Újratöltés"
                  >
                    <RotateCcw size={18} />
                  </button>
                </div>
              </>
            ) : (
              /* BEÉPÍTETT INLINE JELENTKEZÉSI ŰRLAP */
              <div className="w-full">
                {!formSubmitted ? (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-black uppercase tracking-tight text-white">Próbaedzés Regisztráció</h3>
                      <p className="text-xs text-gray-400 mt-1">Próbáljátok ki teljesen ingyen, kötelezettségek nélkül!</p>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-black uppercase text-gray-400 block">Teljes Név:</label>
                      <div className="relative">
                        <User className="absolute left-3 top-3.5 h-4 w-4 text-gray-500" />
                        <input 
                          type="text" 
                          required 
                          placeholder="Minta János" 
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full bg-black border border-gray-900 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-neon-orange"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-black uppercase text-gray-400 block">Telefonszám:</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3.5 h-4 w-4 text-gray-500" />
                        <input 
                          type="tel" 
                          required 
                          placeholder="+36 20 123 4567" 
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full bg-black border border-gray-900 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-neon-orange"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-black uppercase text-gray-400 block">Korosztály:</label>
                      <div className="relative">
                        <GraduationCap className="absolute left-3 top-3.5 h-4 w-4 text-gray-500" />
                        <select 
                          value={formData.ageGroup}
                          onChange={(e) => setFormData({...formData, ageGroup: e.target.value})}
                          className="w-full bg-black border border-gray-900 rounded-xl py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-neon-orange appearance-none"
                        >
                          <option>Ovis csoport (4-7 év)</option>
                          <option>Gyermek csoport (8-14 év)</option>
                          <option>Felnőtt / Junior csoport (15+ év)</option>
                        </select>
                      </div>
                    </div>

                    <div className="pt-2 flex gap-3">
                      <button 
                        type="button" 
                        onClick={() => setShowBookingForm(false)}
                        className="border border-gray-800 text-gray-400 px-4 py-3 rounded-xl text-sm font-bold hover:bg-gray-900 hover:text-white"
                      >
                        Vissza
                      </button>
                      <button 
                        type="submit" 
                        className="flex-1 bg-neon-orange hover:bg-orange-600 text-black font-black py-3 rounded-xl text-sm transition-all shadow-md shadow-neon-orange/10"
                      >
                        Hivatalos Jelentkezés Beküldése
                      </button>
                    </div>
                  </form>
                ) : (
                  /* SIKERES BEKÜLDÉS UTÁNI ABLAK */
                  <div className="text-center py-6 space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neon-orange/10 border border-neon-orange/20 text-neon-orange mb-2">
                      <CheckCircle2 size={36} />
                    </div>
                    <h3 className="text-2xl font-black text-white uppercase tracking-tight">Sikeres Regisztráció!</h3>
                    <p className="text-sm text-gray-300 max-w-sm mx-auto leading-relaxed">
                      Köszönjük, <strong className="text-white">{formData.name}</strong>! A jelentkezést rögzítettük a <strong className="text-white">{formData.ageGroup}</strong> edzésünkre. Hamarosan keresni fogunk a megadott számon a részletekkel!
                    </p>
                    <div className="pt-4">
                      <button 
                        onClick={handleReset}
                        className="border border-gray-800 hover:border-gray-700 px-6 py-3 rounded-xl text-sm font-bold text-gray-400 hover:text-white"
                      >
                        Kvíz Újratöltése
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}portot", scores: { kolyok: 10 } },
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
