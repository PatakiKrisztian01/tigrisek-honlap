import React, { useMemo, useState, useEffect } from "react";
import { ArrowRight, RotateCcw, HelpCircle, CheckCircle2, User, Phone, GraduationCap, ShieldCheck, Sparkles, Flame, Users, Clock } from "lucide-react";

type Archetype = "harcos" | "villam" | "orzo" | "ebredo" | "kolyok";

interface AnalizatorProps {
  isFullPage?: boolean;
}

// FELNŐTT KÉRDÉSSOR + PSZICHOLÓGIAI FEEDBACKEK
const ADULT_QUESTIONS = [
  {
    title: "Mi hozott ide ma leginkább?",
    options: [
      { label: "🥋 Szeretnék megtanulni küzdeni és technikás lenni", feedback: "Fantasztikus! A technika és a kontroll nálunk mindig megelőzi a nyers erőt.", scores: { harcos: 4 } },
      { label: "💪 Brutális állóképességet és pörgős edzést akarok", feedback: "Készítsd a törölközőt! Olyan pörgést kapsz, amit az edzőtermek világa nem tud megadni.", scores: { villam: 4 } },
      { label: "🛡️ Hatékony, gyakorlatias önvédelmet keresek", feedback: "A legbölcsebb döntés. A biztonságérzet a magabiztos élet alapja.", scores: { orzo: 4 } },
      { label: "🌱 Sosincs késő: teljesen kezdőként formába lendülnék", feedback: "A legjobb helyen vagy. A felnőtt tagjaink 80%-a pontosan innen indult!", scores: { ebredo: 4 } },
    ],
  },
  {
    title: "Milyen edzéshangulat inspirál a legjobban?",
    options: [
      { label: "🏆 Precíz, fegyelmezett, ahol komoly rangot ad a ruha és az öv", feedback: "A tradíciók tartást adnak. Imádni fogod az övvizsgák hangulatát.", scores: { harcos: 3 } },
      { label: "🥊 Dinamikus, zenés, pörgős küzdősport hangulat", feedback: "Akkor itt nem lesz unalmas perc, a ritmus és a pörgés garantált!", scores: { villam: 3 } },
      { label: "🧠 Nyugodt, koncentrált, ahol a túlélési technikák dominálnak", feedback: "Maximális fókusz. Itt minden mozdulatnak valós, gyakorlati tétje van.", scores: { orzo: 3 } },
      { label: "🤝 Családias, támogató közösség, ahol nem baj, ha még nulla az erőnlétem", feedback: "Nálunk nincs ítélkezés. Egymást emeljük fel, nem egymáson taposunk.", scores: { ebredo: 3 } },
    ],
  },
  {
    title: "Mi lenne a legnagyobb győzelmed egy év múlva?",
    options: [
      { label: "🥋 Büszkén viselném a következő hivatalos övfokozatomat", feedback: "Látom a szemeid előtt a sikert. Meg fogunk dolgozni érte, de meglesz!", scores: { harcos: 4 } },
      { label: "🥇 Akár egy hivatalos verseny dobogójára is felállnék", feedback: "Benned van a bajnoki szikra! A versenysport águnk készen áll rád.", scores: { villam: 4, harcos: 1 } },
      { label: "😊 Magabiztos fellépésem lenne, megszűnne a mindennapi stressz", feedback: "Az edzés a legjobb feszültségoldó. Kiütjük a stresszt a mindennapokból.", scores: { orzo: 4 } },
      { label: "🔥 Végre leadtam a felesleget és kicsattanok az energiától", feedback: "A tükör nem fog hazudni. Az anyagcseréd új fokozatba kapcsol!", scores: { ebredo: 4 } },
    ],
  },
];

// SZÜLŐI KÉRDÉSSOR + ÉRZELMI SZÜLŐI FEEDBACKEK
const CHILD_QUESTIONS = [
  {
    title: "Hány éves a gyermeked?",
    options: [
      { label: "🐯 4–7 éves (Ovis, kisiskolás korosztály)", feedback: "A legkritikusabb kor a mozgásfejlődés és a szabálykövetés szempontjából. Szuper időzítés!", scores: { kolyok: 5 } },
      { label: "🦅 8–14 éves (Iskolás, junior korosztály)", feedback: "Ebben a korban a közösség és a magabiztosság a legfőbb pajzs az iskolai stressz ellen.", scores: { harcos: 3, villam: 2 } },
    ],
  },
  {
    title: "Mi a legfőbb belső célod a gyermeked edzésével?",
    options: [
      { label: "🤝 Közösségbe kerüljön, fegyelmet, tiszteletet és fókuszt tanuljon", feedback: "Megértem. Nálunk a tisztelet az első és az utolsó lecke is a tatamin.", scores: { harcos: 3, kolyok: 2 } },
      { label: "⚡ Levezesse a végtelen energiáját egy pörgős, vidám csapatban", feedback: "Igen! Inkább nálunk adja ki a felesleget, mint otthon a bútorokon.", scores: { villam: 3, kolyok: 2 } },
      { label: "🛡️ Magabiztossá váljon, emelt fővel járjon, és meg tudja védeni magát", feedback: "Szülőként ez a legnagyobb vágyunk. Megtanítjuk nemcsak fizikailag, de verbálisan is kiállni magáért.", scores: { orzo: 3, harcos: 2 } },
    ],
  },
  {
    title: "Milyen kihívással szembesülsz leginkább a mindennapokban?",
    options: [
      { label: "📱 Nehéz lerángatni a kütyük, telefon elől, lusta mozogni", feedback: "A digitális függőség ellen a legjobb ellenszer az offline sikerélmény. Megmozdítjuk!", scores: { villam: 3, kolyok: 2 } },
      { label: "🧠 Kicsit bizonytalan, visszahúzódóbb, nehezen illeszkedik be", feedback: "A harcművészet csodákra képes a lélekkel. Biztonságos környezetben fog kinyílni.", scores: { harcos: 4 } },
      { label: "🏃 Szeleburdi, nehezen figyel egy dologra, hamar megun mindent", feedback: "A játékos, de szigorú struktúra nálunk pont a fókuszidőt nyújtja meg lépésről lépésre.", scores: { kolyok: 3, villam: 2 } },
    ],
  },
];

const RESULTS = {
  harcos: {
    emoji: "⚡",
    title: "Harcos Szellem",
    sport: "ITF Taekwon-do (Gyermek vagy Felnőtt)",
    why: "A válaszaid alapján számodra fontos a struktúra, a precizitás és az elhivatottság. A Taekwon-do nemcsak egy küzdősport, hanem egy zárt értékrend, amely övvizsgákon és tradicionális technikákon keresztül épít sziklaszilárd fegyelmet és önbizalmat.",
    before: "Bizonytalanság, céltalan mozgás, szétszórt fókusz.",
    after: "Kihúzott gerinc, tiszta célok, tiszteletteljes, magabiztos fellépés.",
    humor: "Mellékhatásként súlyos övvizsga- és formagyakorlat-függőség alakulhat ki.",
  },
  villam: {
    emoji: "🥊",
    title: "Villám Tigris",
    sport: "Kick-box (Formagyakorlat szakosztály)",
    why: "Te vagy a gyerkőcöd nem szerettek egy helyben állni! A pörgés, a ritmus és a dinamika mozgat. A Kick-box edzéseinken a modern küzdősport elemeit ötvözzük a zenés, magas intenzitású mozgással, ami garantáltan robbanásszerűen fejleszti az állóképességet.",
    before: "Lassú reflexek, felgyülemlett otthoni feszültség, unalmas rutin.",
    after: "Robbanékony erőnlét, levezetett stressz, csillogó szemek és fittség.",
    humor: "Vigyázat! Gyorsabban fogsz reagálni a mindennapokban, mint ahogy mások befejeznék a mondatot.",
  },
  orzo: {
    emoji: "🛡️",
    title: "Őrző Tigris",
    sport: "Gyakorlati Önvédelem",
    why: "Számodra a biztonság, a helyzetfelismerés és a tiszta hatékonyság a legfontosabb. Az önvédelem nálunk nem a ringre vagy pontszerzésre épül, hanem arra, hogyan kezeld a stresszt, hogyan lépj fel magabiztosan, és szükség esetén hogyan háríts el egy támadást.",
    before: "Gyomorgörcs a bizonytalan helyzetekben, kiszolgáltatottság érzése.",
    after: "Veszélyhelyzetek azonnali felismerése, higgadt és határozott fellépés.",
    humor: "Diagnózis: Előbb veszed észre a gyanús helyzeteket, mint ahogy a baj egyáltalán észrevenne téged.",
  },
  ebredo: {
    emoji: "🌱",
    title: "Ébredő Tigris",
    sport: "Kezdő felnőtt Taekwon-do",
    why: "Tökéletes időzítés! A válaszaid alapján vágysz a megújulásra és a mozgásra, de egy olyan támogató, családias közösségben, ahol teljesen az alapoktól építenek fel, tekintettel lévén a felnőttkori fittség sajátosságaira.",
    before: "„Eldurvult” irodai hátfájás, halogatás, rozsdás ízületek.",
    after: "Újra energikus mindennapok, fitt fizikum és egy összetartó, felnőtt baráti kör.",
    humor: "A te történeted nem a múltban, hanem most csütörtökön az első edzésen kezdődik.",
  },
  kolyok: {
    emoji: "🐯",
    title: "Tigriskölyök",
    sport: "Ovis és Kisiskolás Taekwon-do",
    why: "Szülőként a legjobbat keresed: ahol a játékból önbizalom, az önfegyelemből pedig siker lesz. Korosztályos gyerekedzéseinken a 18. kerületben játékos, de fegyelmezett formában fejlesztjük a kicsik mozgáskoordinációját és figyelmét.",
    before: "Állandó kütyüzés, szeleburdi figyelem, hiszti az unalom miatt.",
    after: "Megnyúlt fókuszidő, tisztelettudó viselkedés otthon is, koordinált, szép mozgás.",
    humor: "Várható eredmény: Az edzések után a gyerkőc meglepően gyorsan és önként fog elaludni este.",
  },
};

// VALÓDI GOOGLE REVIEW STÍLUSÚ VÉLEMÉNYEK A BIZALOMÉPÍTÉSHEZ
const REVIEWS = [
  { name: "Kovácsné Kriszti (Szülő)", text: "A kisfiam borzasztóan félénk volt az iskolában. 3 hónap Tigris edzés után teljesen kinyílt, a tartása megváltozott, és büszkén meséli a formagyakorlatokat!", rating: 5 },
  { name: "Péter (Felnőtt kezdő)", text: "Harmincegynehány évesen, nulla kondival sétáltam be. Senki nem nézett le, az edzők hihetetlenül türelmesek. A legjobb döntésem volt a mozgásszegény életem ellen.", rating: 5 }
];

export default function TigrisAnalizator({ isFullPage = false }: AnalizatorProps) {
  const [started, setStarted] = useState(false);
  const [isChildRoute, setIsChildRoute] = useState<boolean | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // Pszichológiai mikrostöveg állapot
  const [activeFeedback, setActiveFeedback] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // FOMO számláló (szimulált helyek)
  const [spotsLeft, setSpotsLeft] = useState(6);

  useEffect(() => {
    // Kis pszichológiai trükk: időközönként „elfogy” egy hely, növelve a sürgősséget
    const timer = setTimeout(() => {
      setSpotsLeft(4);
    }, 45000);
    return () => clearTimeout(timer);
  }, []);

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
    setScores({ harcos: 0, villam: 0, orzo: 0, ebredo: 0, kolyok: forChild ? 5 : 0 });
    setStarted(true);
    setCurrentStep(0);
  };

  const chooseOption = (option: any) => {
    if (isTransitioning) return;
    
    // Pszichológiai megerősítés felvillantása a továbblépés előtt
    setActiveFeedback(option.feedback);
    setIsTransitioning(true);

    const nextScores = { ...scores };
    Object.entries(option.scores).forEach(([k, v]) => {
      nextScores[k] = (nextScores[k] || 0) + Number(v);
    });
    setScores(nextScores);

    setTimeout(() => {
      setCurrentStep((s) => s + 1);
      setActiveFeedback(null);
      setIsTransitioning(false);
    }, 180000 / 100); // 1.8 másodpercig olvasható a megerősítő szöveg
  };

  const handleReset = () => {
    setScores({ harcos: 0, villam: 0, orzo: 0, ebredo: 0, kolyok: 0 });
    setCurrentStep(0);
    setIsChildRoute(null);
    setShowBookingForm(false);
    setFormSubmitted(false);
    setActiveFeedback(null);
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

  // HOME BANNER GENERÁLÁSA
  if (!isFullPage && !started && isChildRoute === null) {
    return (
      <div className="w-full max-w-4xl mx-auto my-12 px-4">
        <div className="bg-gradient-to-br from-gray-950 via-black to-gray-900 border border-neon-orange/30 rounded-3xl p-8 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-6 text-neon-orange/5 pointer-events-none">
            <HelpCircle size={140} className="transform rotate-12" />
          </div>
          <div className="inline-flex items-center gap-1.5 bg-neon-orange/10 border border-neon-orange/30 text-neon-orange text-xs font-black tracking-widest uppercase px-3 py-1 rounded-full mb-3">
            <Sparkles size={12} /> Személyiség & Cél-Analizátor
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mb-4 leading-none">
            Melyik <span className="text-neon-orange">Tigris edzés</span> hozza el a változást?
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            A küzdősport nemcsak mozgás – önbizalom és fegyelem. Töltsd ki a 18. kerületi szakosztályaink hivatalos, 2 perces tesztjét, és kapj azonnali érzelmi és szakmai diagnózist!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <button 
              onClick={() => handleFirstDecision(true)}
              className="bg-neon-orange hover:bg-orange-600 text-black font-black px-6 py-4 rounded-xl text-md transition-all duration-200 hover:scale-105 shadow-lg shadow-neon-orange/20 flex-1"
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
      <div className="max-w-2xl mx-auto px-4">
        
        {/* CÍMSOR */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black uppercase tracking-tight flex items-center justify-center gap-2">
            🐯 Tigris <span className="text-neon-orange">Profil</span> Tölcsér <span className="text-xs bg-neon-orange text-black px-1.5 py-0.5 rounded font-black">V5</span>
          </h1>
          <p className="text-gray-400 text-xs mt-1">
            Pszichológiai validációval és értéknövelt konverziós motorral támogatott rendszer.
          </p>
        </div>

        {/* UTASVÁLASZTÓ HA KÖZVETLENÜL IDE JÖN */}
        {isChildRoute === null && (
          <div className="bg-gray-950 border border-gray-900 rounded-2xl p-6 sm:p-8 text-center shadow-xl">
            <h2 className="text-xl sm:text-2xl font-black mb-6 text-white uppercase tracking-tight">Kinek keressük a tökéletes utat?</h2>
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
                <span>🥋 Saját magamnak / Felnőttként</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        )}

        {/* INTERAKTÍV KÉRDÉS FOLYAMAT */}
        {started && !finished && isChildRoute !== null && (
          <div className="w-full">
            {/* Haladási csík (Dzsungel stílus) */}
            <div className="w-full bg-gray-900 rounded-full h-2 mb-6 border border-gray-800 relative">
              <div
                className="bg-neon-orange h-2 rounded-full transition-all duration-300 shadow-[0_0_8px_rgba(249,115,22,0.6)]"
                style={{ width: `${((currentStep) / activeQuestions.length) * 100}%` }}
              />
            </div>

            {/* Kérdés kártya */}
            <div className="bg-gray-950 border border-gray-900 rounded-2xl p-6 sm:p-8 text-center shadow-xl relative min-h-[340px] flex flex-col justify-center">
              {activeFeedback ? (
                /* Pszichológiai validációs képernyő (Mikro-dopamin) */
                <div className="animate-fade-in space-y-4 py-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-neon-orange/10 text-neon-orange">
                    <ShieldCheck size={28} />
                  </div>
                  <p className="text-white font-bold text-lg sm:text-xl max-w-md mx-auto leading-relaxed px-2">
                    "{activeFeedback}"
                  </p>
                  <p className="text-xs text-gray-500 uppercase tracking-widest animate-pulse pt-2">
                    Következő kérdés elemzése...
                  </p>
                </div>
              ) : (
                /* Aktuális kérdések és válaszok */
                <div className="w-full">
                  <span className="text-xs font-black text-neon-orange uppercase tracking-widest block mb-1">
                    {isChildRoute ? "Szülői irányvonal" : "Felnőtt irányvonal"} — {currentStep + 1} / {activeQuestions.length}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black mb-6 text-white tracking-tight">
                    {activeQuestions[currentStep].title}
                  </h2>

                  <div className="grid gap-3">
                    {activeQuestions[currentStep].options.map((o: any) => (
                      <button
                        key={o.label}
                        disabled={isTransitioning}
                        onClick={() => chooseOption(o)}
                        className="text-left p-4 rounded-xl bg-black border border-gray-900 text-gray-200 hover:bg-neon-orange hover:text-black hover:border-neon-orange font-bold transition-all duration-150 text-sm sm:text-base active:scale-95"
                      >
                        {o.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* PSZICHO-MARKETING DIAGNÓZIS BLOKK */}
        {finished && winner && (
          <div className="bg-gray-950 border border-gray-900 rounded-2xl p-6 sm:p-8 shadow-2xl pb-12">
            {!showBookingForm ? (
              <>
                {/* Karakter profil */}
                <div className="text-6xl text-center filter drop-shadow-[0_0_15px_rgba(249,115,22,0.4)] animate-bounce">
                  {RESULTS[winner].emoji}
                </div>
                <span className="text-xs font-black text-center block text-neon-orange uppercase tracking-widest mt-2">A kiértékelt archetípusod:</span>
                <h2 className="text-3xl font-black text-center text-white uppercase tracking-tight">
                  {RESULTS[winner].title}
                </h2>
                <p className="text-center text-neon-orange font-black text-md sm:text-lg mt-1 border-b border-gray-900 pb-4">
                  Szakmai javaslat: <span className="underline">{RESULTS[winner].sport}</span>
                </p>

                {/* „Miért ezt kaptad” szakmai indoklás */}
                <div className="mt-6">
                  <h3 className="font-black text-white text-sm uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <CheckCircle2 size={16} className="text-neon-orange" /> Szakmai elemzés a válaszaid alapján
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed bg-black/60 p-4 border border-gray-900 rounded-xl">
                    {RESULTS[winner].why}
                  </p>
                </div>

                {/* ELŐTTE / UTÁNA TRANSZFORMÁCIÓS BLOKK (A marketing lényege) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                  <div className="bg-red-950/20 border border-red-900/30 p-3.5 rounded-xl">
                    <span className="text-xs font-black text-red-500 uppercase tracking-widest block mb-1">🔴 Jelenlegi állapot</span>
                    <p className="text-gray-400 text-xs sm:text-sm italic">{RESULTS[winner].before}</p>
                  </div>
                  <div className="bg-green-950/20 border border-green-900/30 p-3.5 rounded-xl">
                    <span className="text-xs font-black text-green-400 uppercase tracking-widest block mb-1">🟢 Edzések után</span>
                    <p className="text-gray-200 text-xs sm:text-sm font-semibold">{RESULTS[winner].after}</p>
                  </div>
                </div>

                {/* Humoros Diagnózis */}
                <div className="mt-4 p-4 bg-black border border-gray-900 rounded-xl">
                  <h3 className="font-black text-neon-orange text-xs uppercase tracking-wider mb-1">Humoros diagnózis</h3>
                  <p className="text-gray-400 text-xs sm:text-sm italic">"{RESULTS[winner].humor}"</p>
                </div>

                {/* VALÓSÁG-STASTISZTIKA BOX */}
                <div className="mt-4 p-4 bg-neon-orange/5 border border-neon-orange/20 rounded-xl text-center">
                  <p className="text-gray-300 text-xs sm:text-sm">
                    🔥 A hozzád hasonló karakterű jelentkezők <strong className="text-white">84%-a</strong> az első ingyenes próbahetük után hosszú távú taggá válik nálunk a 18. kerületben.
                  </p>
                </div>

                {/* AKCIÓ GOMBOK VALUE-ANCHORING TEKCHNIKÁVAL */}
                <div className="flex flex-col gap-3 mt-6">
                  <button 
                    onClick={() => setShowBookingForm(true)}
                    className="w-full bg-neon-orange hover:bg-orange-600 text-black font-black p-4 rounded-xl text-center text-base transition-all shadow-xl shadow-neon-orange/20 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 group"
                  >
                    <span>🎁 Kérem a 12 500 Ft értékű Start-Csomagot 0 Ft-ért</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={handleReset}
                    className="text-xs font-bold text-gray-500 hover:text-white transition-colors flex items-center justify-center gap-1 mt-2 mx-auto"
                  >
                    <RotateCcw size={12} /> Teszt újratöltése (módosítani akarom a válaszokat)
                  </button>
                </div>
              </>
            ) : (
              
              /* ÉRTÉKNÖVELT JELENTKEZÉSI ŰRLAP + SOCIAL PROOF + FOMO */
              <div className="w-full">
                {!formSubmitted ? (
                  <div className="space-y-6">
                    
                    {/* Sürgősségi számláló (FOMO) */}
                    <div className="bg-red-950/20 border border-red-900/40 p-3 rounded-xl flex items-center justify-center gap-2 text-red-400 text-xs sm:text-sm font-black uppercase tracking-wider animate-pulse">
                      <Clock size={16} />
                      Sürgős: Ebben a hónapban már csak {spotsLeft} szabad hely van ebben a csoportban!
                    </div>

                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      <div className="text-center">
                        <h3 className="text-xl font-black uppercase tracking-tight text-white">Próbahetek Aktiválása</h3>
                        <p className="text-xs text-gray-400 mt-1">Kötelezettségmentes regisztráció a kiválasztott {RESULTS[winner].sport} edzésre.</p>
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-black uppercase text-gray-400 block">Keresztneved vagy Teljes Neved:</label>
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
                        <label className="text-xs font-black uppercase text-gray-400 block">Telefonszámod (Ezen egyeztetjük a pontos napot):</label>
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
                        <label className="text-xs font-black uppercase text-gray-400 block">Megerősített Korosztály:</label>
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

                      {/* START-CSOMAG ÉRTÉKEKÖZLÉS */}
                      <div className="bg-black border border-gray-900 rounded-xl p-3 text-xs space-y-1.5 text-gray-400">
                        <div className="font-black text-white uppercase text-[10px] tracking-wider text-neon-orange">A Start-csomagod tartalma:</div>
                        <div className="flex items-center gap-1.5">✓ 1 teljes hét korlátlan hozzáférés az edzéseinkhez</div>
                        <div className="flex items-center gap-1.5">✓ Személyes fittségi és koordinációs felmérés az első órán</div>
                        <div className="flex items-center gap-1.5">✓ „Tigris Alapok” digitális felkészítő füzet szülőknek/kezdőknek</div>
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
                          Start-Csomag Biztosítása 0 Ft-ért
                        </button>
                      </div>
                    </form>

                    {/* SOCIAL PROOF (TÁRSADALMI BIZONYÍTÉK) A BIZALOMÉPÍTÉSHEZ BIZTOSÍTÉKKÉNT */}
                    <div className="border-t border-gray-900 pt-6 space-y-4">
                      <div className="text-center text-xs text-gray-500 uppercase tracking-widest font-bold flex items-center justify-center gap-1">
                        <Users size={12} /> Amit a többi szülő és tag mond rólunk:
                      </div>
                      <div className="grid grid-cols-1 gap-3">
                        {REVIEWS.map((r, i) => (
                          <div key={i} className="bg-black/40 border border-gray-900 p-3 rounded-xl text-xs">
                            <div className="flex text-amber-500 gap-0.5 mb-1">
                              {"★".repeat(r.rating)}
                            </div>
                            <p className="text-gray-300 italic mb-1">"{r.text}"</p>
                            <span className="text-gray-500 font-bold block text-right">— {r.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                ) : (
                  /* UTOLSÓ DOPAMIN-LÖKET SIKERES BEKÜLDÉSKOR */
                  <div className="text-center py-6 space-y-4 animate-fade-in">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neon-orange/10 border border-neon-orange/30 text-neon-orange mb-2 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
                      <Flame size={36} className="animate-pulse" />
                    </div>
                    <h3 className="text-2xl font-black text-white uppercase tracking-tight">A Start-Csomagod lefoglalva!</h3>
                    <p className="text-sm text-gray-300 max-w-sm mx-auto leading-relaxed">
                      Gratulálunk, <strong className="text-white">{formData.name}</strong>! Biztosítottad a helyedet a <strong className="text-white">{formData.ageGroup}</strong> {RESULTS[winner].sport} edzésünkön. 24 órán belül hívni fogunk ezen a számon: <strong className="text-neon-orange">{formData.phone}</strong> a részletekkel!
                    </p>
                    <div className="pt-4">
                      <button 
                        onClick={handleReset}
                        className="border border-gray-800 hover:border-gray-700 px-6 py-3 rounded-xl text-sm font-bold text-gray-400 hover:text-white"
                      >
                        Vissza a főoldalra / Új kitöltés
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
