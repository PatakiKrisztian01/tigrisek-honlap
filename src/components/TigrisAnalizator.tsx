import React, { useMemo, useState } from "react";
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
      { label: "🏆 Precíz, fegyelmezett, ahol komoly rangot add a ruha és az öv", scores: { harcos: 3 } },
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

// SZÜLŐI KÉRDÉSSOR
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
      kolyok: forChild ? 5 : 0
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
    setFormSubmitted(true);
  };

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
        
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
            🐯 Tigris <span className="text-neon-orange">Profil</span> Analizátor <span className="text-xs bg-neon-orange text-black px-1.5 py-0.5 rounded font-black align-middle ml-1">V4</span>
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm mt-2">
            Intelligens elágazásokkal támogatott szakmai és marketing szűrőprogram.
          </p>
        </div>

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

        {started && !finished && isChildRoute !== null && (
          <div className="w-full max-w-xl mx-auto">
            <div className="w-full bg-gray-900 rounded-full h-2 mb-6 border border-gray-800">
              <div
                className="bg-neon-orange h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / activeQuestions.length) * 100}%` }}
              />
            </div>

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

                <div className="mt-6">
                  <h3 className="font-black text-white text-sm uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <CheckCircle2 size={16} className="text-neon-orange" /> Miért éppen ezt ajánljuk?
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed bg-black/50 p-4 border border-gray-900 rounded-xl">
                    {RESULTS[winner].why}
                  </p>
                </div>

                <div className="mt-4 p-4 bg-black border border-gray-900 rounded-xl">
                  <h3 className="font-black text-neon-orange text-xs uppercase tracking-wider mb-1">Humoros diagnózis</h3>
                  <p className="text-gray-400 text-xs sm:text-sm italic">"{RESULTS[winner].humor}"</p>
                </div>

                <div className="mt-4 p-4 bg-neon-orange/5 border border-neon-orange/20 rounded-xl text-center">
                  <p className="text-gray-300 text-xs sm:text-sm font-medium">
                    📈 A hozzád hasonló kitöltők <strong className="text-white">73%-a</strong> 1 héten belül lejár hozzánk próbaedzésre a 18. kerületben.
                  </p>
                </div>

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
}
