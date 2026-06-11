import React, { useMemo, useState, useEffect } from "react";
import { ArrowRight, RotateCcw, HelpCircle, CheckCircle2, User, Phone, GraduationCap, ShieldCheck, Sparkles, Flame, Users, Clock } from "lucide-react";

type Archetype = "harcos" | "villam" | "orzo" | "ebredo" | "kolyok";

interface AnalizatorProps {
  isFullPage?: boolean;
}

const ADULT_QUESTIONS = [
  {
    title: "Mi hozott ide ma leginkább?",
    options: [
      { label: "🥋 Szeretnék megtanulni küzdeni és technikás lenni", feedback: "Fantasztikus! A technika és a kontroll a Budapesti Tigriseknél mindig megelőzi a nyers erőt.", scores: { harcos: 4 } },
      { label: "💪 Brutális állóképességet és pörgős edzést akarok", feedback: "Készítsd a törölközőt! Olyan pörgést kapsz, amit a hagyományos edzőtermek világa nem tud megadni.", scores: { villam: 4 } },
      { label: "🛡️ Hatékony, gyakorlatias önvédelmet keresek", feedback: "A legbölcsebb döntés. A biztonságérzet a magabiztos élet alapja.", scores: { orzo: 4 } },
      { label: "🌱 Sosincs késő: teljesen kezdőként formába lendülnék", feedback: "A legjobb helyen vagy. A felnőtt tagjaink 80%-a pontosan innen indult a 18. kerületben!", scores: { ebredo: 4 } },
    ],
  },
  {
    title: "Milyen edzéshangulat inspirál a legjobban?",
    options: [
      { label: "🏆 Precíz, fegyelmezett, ahol komoly rangot ad a ruha és az öv", feedback: "A tradíciók tartást adnak. Imádni fogod a Budapesti Tigrisek hivatalos övvizsgáit.", scores: { harcos: 3 } },
      { label: "🥊 Dinamikus, zenés, pörgős küzdősport hangulat", feedback: "Akkor itt nem lesz unalmas perc, a ritmus és a pörgés garantált!", scores: { villam: 3 } },
      { label: "🧠 Nyugodt,街koncentrált, ahol a túlélési technikák dominálnak", feedback: "Maximális fókusz. Nálunk minden mozdulatnak valós, gyakorlati tétje van.", scores: { orzo: 3 } },
      { label: "🤝 Családias, támogató közösség, ahol nem baj, if még nulla az erőnlétem", feedback: "Nálunk nincs ítélkezés. Egymást emeljük fel, nem egymáson taposunk.", scores: { ebredo: 3 } },
    ],
  },
  {
    title: "Mi lenne a legnagyobb győzelmed egy év múlva?",
    options: [
      { label: "🥋 Büszkén viselném a következő hivatalos övfokozatomat", feedback: "Látom a szemeid előtt a sikert. Meg fogunk dolgozni érte, de meglesz!", scores: { harcos: 4 } },
      { label: "🥇 Akár egy hivatalos verseny dobogójára is felállnék", feedback: "Benned van a bajnoki szikra! A Budapesti Tigrisek versenysport ága készen áll rád.", scores: { villam: 4, harcos: 1 } },
      { label: "😊 Magabiztos fellépésem lenne, megszűnne a mindennapi stressz", feedback: "Az edzés a legjobb feszültségoldó. Kiütjük a stresszt a mindennapokból.", scores: { orzo: 4 } },
      { label: "🔥 Végre leadtam a felesleget és kicsattanok az energiától", feedback: "A tükör nem fog hazudni. Az anyagcseréd nálunk új fokozatba kapcsol!", scores: { ebredo: 4 } },
    ],
  },
];

const CHILD_QUESTIONS = [
  {
    title: "Hány éves a gyermeked?",
    options: [
      { label: "🦁 4–7 éves (Ovis, kisiskolás korosztály)", feedback: "A legkritikusabb kor a mozgásfejlődés szempontjából. Szuper időzítés a Tigris Kölyök programhoz!", scores: { kolyok: 5 } },
      { label: "🦅 8–14 éves (Iskolás, junior korosztály)", feedback: "Ebben a korban a közösség és a magabiztosság a legfőbb pajzs az iskolai stressz ellen.", scores: { harcos: 3, villam: 2 } },
    ],
  },
  {
    title: "Mi a legfőbb belső célod a gyermeked edzésével?",
    options: [
      { label: "🤝 Közösségbe kerüljön, fegyelmet, tiszteletet és fókuszt tanuljon", feedback: "Megértem. A Budapesti Tigriseknél a tisztelet az első és az utolsó lecke is.", scores: { harcos: 3, kolyok: 2 } },
      { label: "⚡ Levezesse a végtelen energiáját egy pörgős, vidám csapatban", feedback: "Igen! Inkább nálunk adja ki a felesleget a 18. kerületi edzőtermünkben, mint otthon.", scores: { villam: 3, kolyok: 2 } },
      { label: "🛡️ Magabiztossá váljon, emelt fővel járjon, és meg tudja védeni magát", feedback: "Szülőként ez a legnagyobb vágyunk. Megtanítjuk fizikailag és verbálisan is kiállni magáért.", scores: { orzo: 3, harcos: 2 } },
    ],
  },
  {
    title: "Milyen kihívással szembesülsz leginkább a mindennapokban?",
    options: [
      { label: "📱 Nehéz lerángatni a kütyük, telefon elől, lusta mozogni", feedback: "A digitális függőség ellen a legjobb ellenszer az offline sikerélmény. Megmozdítjuk!", scores: { villam: 3, kolyok: 2 } },
      { label: "🧠 Kicsit bizonytalan, visszahúzódóbb, nehezen illeszkedik be", feedback: "A küzdősport csodákra képes a lélekkel. Biztonságos környezetben fog kinyílni nálunk.", scores: { harcos: 4 } },
      { label: "🏃 Szeleburdi, nehezen figyel egy dologra, hamar megun mindent", feedback: "A játékos, de szigorú struktúra a Budapesti Tigriseknél pont a fókuszidőt nyújtja meg.", scores: { kolyok: 3, villam: 2 } },
    ],
  },
];

const RESULTS = {
  harcos: { title: "Harcos Szellem", sport: "ITF Taekwon-do (Budapesti Tigrisek)", why: "A válaszaid alapján fontos számodra a struktúra, a fegyelem és az elhivatottság. A Budapesti Tigrisek Sportegyesület Taekwon-do szakosztálya tradíciókon és hivatalos övvizsgákon keresztül épít sziklaszilárd magabiztosságot.", before: "Bizonytalanság, céltalan mozgás, szétszórt fókusz.", after: "Kihúzott gerinc, tiszta célok, tiszteletteljes és magabiztos fellépés.", humor: "Mellékhatásként súlyos övvizsga- és formagyakorlat-függőség alakulhat ki." },
  villam: { title: "Villám Karakter", sport: "Dinamikus Kick-box (18. kerület)", why: "Nálatok a pörgés és a ritmus dominál! A Budapesti Tigrisek modern kick-box edzésein a küzdősport elemeit ötvözzük a magas intenzitású mozgással, ami garantáltan robbanásszerűen fejleszti az állóképességet.", before: "Lassú reflexek, felgyülemlett feszültség, unalmas rutin.", after: "Robbanékony erőnlét, levezetett stressz, csillogó szemek és fittség.", humor: "Vigyázat! Gyorsabban fogsz reagálni a mindennapokban, mint ahogy mások befejeznék a mondatot." },
  orzo: { title: "Őrző Karakter", sport: "Gyakorlati Önvédelem és Taktika", why: "Számodra a biztonság és a helyzetfelismerés a legfontosabb. A 18. kerületi önvédelmi csoportunkban nem a ringre vagy a pontszerzésre építünk, hanem a valós stresszkezelésre és a határozott fellépésre.", before: "Gyomorgörcs a bizonytalan helyzetekben, kiszolgáltatottság.", after: "Veszélyhelyzetek azonnali felismerése, higgadt és határozott hárítás.", humor: "Diagnózis: Előbb veszed észre a gyanús helyzeteket, mint ahogy a baj egyáltalán észrevenne téged." },
  ebredo: { title: "Megújuló Felnőtt", sport: "Kezdő Felnőtt Küzdősport Program", why: "Tökéletes időzítés! Vágyik a tested a mozgásra, a Budapesti Tigrisek családias, felnőtt közösségében pedig teljesen az alapoktól, biztonságosan építjük újra a fizikumodat.", before: "Irodai hátfájás, halogatás, rozsdás ízületek.", after: "Újra energikus mindennapok, fitt test és egy összetartó felnőtt baráti kör.", humor: "A te történeted nem a múltban, hanem most csütörtökön az első edzésen kezdődik." },
  kolyok: { title: "Tigris Kölyök", sport: "Ovis és Kisiskolás Mozgásfejlesztés", why: "Szülőként a legjobbat keresed a 18. kerületben: ahol a játékból önbecsülés, a fegyelemből pedig siker lesz. A Budapesti Tigrisek korosztályos gyerekedzései híresek a fókusz fejlesztéséről.", before: "Állandó kütyüzés, szeleburdi figyelem, unalom miatti hiszti.", after: "Megnyúlt fókuszidő, tisztelettudó viselkedés otthon és koordinált mozgás.", humor: "Várható eredmény: Az edzések után a gyerkőc meglepően gyorsan és önként fog elaludni este." },
};

const REVIEWS = [
  { name: "Horváth Anita (Ovis anyuka)", target: "Ovis csoport", text: "Féltem, hogy az 5 éves kisfiamat elnyomják a többiek a tatamin. Ehelyett játékos fegyelmet és hatalmas törődést kapott. A Budapesti Tigrisek edzői fantasztikus pedagógusok!", rating: 5 },
  { name: "Szabó Gábor (Iskolás szülő)", target: "Iskolás csoport", text: "A lányomat bántották az iskolában, teljesen magába fordult. 4 hónap 18. kerületi Taekwon-do után úgy kihúzta magát, hogy megszűnt a piszkálódás. A tanulmányi fókusza is mérföldekkel jobb lett.", rating: 5 },
  { name: "B. Balázs (Junior tag, 16 éves)", target: "Tini / Junior", text: "Nem találtam a helyem a sima konditermekben, a céltalan görgetést akartam lecserélni valami komolyabbra. Itt egy igazi, összetartó csapatra leltem, a kick-box edzések pörgése zseniális.", rating: 5 },
  { name: "Kovács Péter (Felnőtt kezdő, 38 éves)", target: "Felnőtt kezdő", text: "Azt hittem, közel a negyvenhez, nulla mozgásmúlttal majd kinevetnek. Ehelyett maximális türelmet kaptam a felnőtt csoportban. Sosem késő elkezdeni, teljesen visszakaptam az energiámat!", rating: 5 },
  { name: "Dr. Varga Elena (Felnőtt önvédelem)", target: "Önvédelem", text: "Esti műszakok után sokszor volt gyomorgörcsöm egyedül sétálva. A Budapesti Tigrisek edzései nemcsak fizikai technikákat adtak, hanem olyan magabiztos kisugárzást, ami miatt biztonságban érzem magam.", rating: 5 }
];

export default function TigrisAnalizator({ isFullPage = false }: AnalizatorProps) {
  const [started, setStarted] = useState(false);
  const [isChildRoute, setIsChildRoute] = useState<boolean | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const [activeFeedback, setActiveFeedback] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [spotsLeft, setSpotsLeft] = useState(6);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSpotsLeft(4);
    }, 45000);
    return () => clearTimeout(timer);
  }, []);

  const [formData, setFormData] = useState({ name: "", phone: "", ageGroup: "Gyermek csoport (8-14 év)" });
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
    }, 5600); 
  };

  const handleReset = () => {
    setScores({ harcos: 0, villam: 0, orzo: 0, ebredo: 0, kolyok: 0 });
    setCurrentStep(0);
    setIsChildRoute(null);
    setShowBookingForm(false);
    setFormSubmitted(false);
    setActiveFeedback(null);
    setFormData({ name: "", phone: "", ageGroup: "Gyermek csoport (8-14 év)" });
    setStarted(isFullPage); 
  };

  const openBookingForm = () => {
    setShowBookingForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const finished = isChildRoute !== null && currentStep >= activeQuestions.length;
  const ranking = useMemo(() => Object.entries(scores).sort((a, b) => b[1] - a[1]), [scores]);
  const winner = ranking[0]?.[0] as Archetype;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isFullPage && !started && isChildRoute === null) {
    return (
      <div className="w-full max-w-4xl mx-auto my-12 px-4">
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes fadeInOut {
            0% { opacity: 0; transform: scale(0.97); filter: blur(4px); }
            17.8% { opacity: 1; transform: scale(1); filter: blur(0px); }
            82.2% { opacity: 1; transform: scale(1); filter: blur(0px); }
            100% { opacity: 0; transform: scale(1.01); filter: blur(4px); }
          }
          .animate-fade-in-out {
            animation: fadeInOut 5.6s ease-in-out forwards;
          }
          @keyframes ticker {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-50%, 0, 0); }
          }
          .animate-ticker {
            display: inline-flex;
            animation: ticker 50s linear infinite;
          }
          .animate-ticker:hover {
            animation-play-state: paused;
          }
        `}} />

        <div className="bg-gradient-to-br from-gray-950 via-black to-gray-900 border border-neon-orange/20 rounded-3xl p-8 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-6 text-neon-orange/5 pointer-events-none">
            <HelpCircle size={140} className="transform rotate-12" />
          </div>
          <div className="inline-flex items-center gap-1.5 bg-neon-orange/10 border border-neon-orange/20 text-neon-orange text-xs font-black tracking-widest uppercase px-3 py-1 rounded-full mb-4">
            <Sparkles size={12} /> Gyors online felmérés
          </div>
          
          {/* TISZTA, ÖSSZEFOGOTT, JÓL OLVASHATÓ FEJLÉC ÉS ALCÍM */}
          <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight max-w-2xl mx-auto mb-3 leading-tight">
            Melyik <span className="text-neon-orange">Küzdősport szakosztály</span> passzol hozzátok?
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-lg mx-auto mb-8 leading-relaxed">
            Találd meg a tökéletes csoportot a Budapesti Tigriseknél! Válaszolj pár egyszerű kérdésre, és tudd meg, mi lakik benned.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <button 
              onClick={() => handleFirstDecision(true)}
              className="bg-neon-orange hover:bg-orange-600 text-black font-black px-6 py-4 rounded-xl text-md transition-all duration-200 hover:scale-105 shadow-lg shadow-neon-orange/20 flex-1"
            >
              🤝 Gyermekemnek keresek
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
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInOut {
          0% { opacity: 0; transform: scale(0.97); filter: blur(4px); }
          17.8% { opacity: 1; transform: scale(1); filter: blur(0px); }
          82.2% { opacity: 1; transform: scale(1); filter: blur(0px); }
          100% { opacity: 0; transform: scale(1.01); filter: blur(4px); }
        }
        .animate-fade-in-out {
          animation: fadeInOut 5.6s ease-in-out forwards;
        }
        @keyframes ticker {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animate-ticker {
          display: inline-flex;
          animation: ticker 50s linear infinite;
        }
        .animate-ticker:hover {
          animation-play-state: paused;
        }
      `}} />

      <div className="max-w-2xl mx-auto px-4">
        
        {/* LETISZTULT INTERAKTÍV KIJELZŐ FEJLÉC */}
        <div className="text-center mb-8 bg-gray-950/50 border border-gray-900 rounded-2xl p-4">
          <h1 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white flex items-center justify-center gap-2">
            <Sparkles size={18} className="text-neon-orange" /> Szelektálatlan Csoportanalizátor
          </h1>
          <p className="text-gray-400 text-xs mt-1 max-w-md mx-auto">
            Válassz a lehetőségek közül a Budapesti Tigrisek hivatalos felmérésében.
          </p>
        </div>

        {isChildRoute === null && (
          <div className="bg-gray-950 border border-gray-900 rounded-2xl p-6 sm:p-8 text-center shadow-xl">
            <h2 className="text-lg sm:text-xl font-black mb-6 text-white uppercase tracking-tight">Kinek keressük a tökéletes edzést a 18. kerületben?</h2>
            <div className="grid gap-4">
              <button
                onClick={() => handleFirstDecision(true)}
                className="text-left p-5 rounded-xl bg-black border border-gray-900 text-gray-200 hover:bg-neon-orange hover:text-black hover:border-neon-orange font-black transition-all text-base flex items-center justify-between"
              >
                <span>👨‍👩‍👧 A gyermekemnek (Ovis vagy Iskolás korosztály)</span>
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => handleFirstDecision(false)}
                className="text-left p-5 rounded-xl bg-black border border-gray-900 text-gray-200 hover:bg-neon-orange hover:text-black hover:border-neon-orange font-black transition-all text-base flex items-center justify-between"
              >
                <span>🥋 Saját magamnak / Felnőttként teljesen kezdő szinttől</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        )}

        {started && !finished && isChildRoute !== null && (
          <div className="w-full">
            <div className="w-full bg-gray-900 rounded-full h-2 mb-6 border border-gray-800 relative">
              <div
                className="bg-neon-orange h-2 rounded-full transition-all duration-300 shadow-[0_0_8px_rgba(249,115,22,0.6)]"
                style={{ width: `${(currentStep / activeQuestions.length) * 100}%` }}
              />
            </div>

            <div className="bg-gray-950 border border-gray-900 rounded-2xl p-6 sm:p-8 text-center shadow-xl relative min-h-[340px] flex flex-col justify-center">
              {activeFeedback ? (
                <div className="animate-fade-in-out space-y-4 py-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-neon-orange/10 text-neon-orange">
                    <ShieldCheck size={28} />
                  </div>
                  <p className="text-white font-bold text-lg sm:text-xl max-w-md mx-auto leading-relaxed px-2">
                    {activeFeedback}
                  </p>
                  <p className="text-xs text-gray-500 uppercase tracking-widest animate-pulse pt-2">
                    Profil kiértékelése a Budapesti Tigrisek rendszerében...
                  </p>
                </div>
              ) : (
                <div className="w-full">
                  <span className="text-xs font-black text-neon-orange uppercase tracking-widest block mb-1">
                    {isChildRoute ? "Gyermek profil" : "Felnőtt profil"} — {currentStep + 1} / {activeQuestions.length}
                  </span>
                  <h2 className="text-xl font-black mb-6 text-white tracking-tight">
                    {activeQuestions[currentStep].title}
                  </h2>

                  <div className="grid gap-3">
                    {activeQuestions[currentStep].options.map((o: any) => (
                      <button
                        key={o.label}
                        disabled={isTransitioning}
                        onClick={() => chooseOption(o)}
                        className="text-left p-4 rounded-xl bg-black border border-gray-900 text-gray-200 hover:bg-neon-orange hover:text-black hover:border-neon-orange font-bold transition-all duration-150 text-sm active:scale-95"
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

        {finished && winner && (
          <div className="bg-gray-950 border border-gray-900 rounded-2xl p-6 sm:p-8 shadow-2xl pb-12">
            {!showBookingForm ? (
              <>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neon-orange/10 text-neon-orange mb-3 mx-auto flex">
                  <Flame size={32} />
                </div>
                <span className="text-xs font-black text-center block text-neon-orange uppercase tracking-widest">Kiértékelés eredménye:</span>
                <h2 className="text-2xl sm:text-3xl font-black text-center text-white uppercase tracking-tight mt-1">
                  {RESULTS[winner].title}
                </h2>
                <p className="text-center text-neon-orange font-black text-sm sm:text-base mt-2 border-b border-gray-900 pb-4">
                  Ajánlott szakosztály: <span className="underline">{RESULTS[winner].sport}</span>
                </p>

                <div className="mt-6">
                  <h3 className="font-black text-white text-sm uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <CheckCircle2 size={16} className="text-neon-orange" /> Miért éppen ezt ajánljuk?
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed bg-black/60 p-4 border border-gray-900 rounded-xl">
                    {RESULTS[winner].why}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                  <div className="bg-red-950/20 border border-red-900/30 p-3.5 rounded-xl">
                    <span className="text-xs font-black text-red-500 uppercase tracking-widest block mb-1">🔴 Jelenlegi állapot</span>
                    <p className="text-gray-400 text-xs italic">{RESULTS[winner].before}</p>
                  </div>
                  <div className="bg-green-950/20 border border-green-900/30 p-3.5 rounded-xl">
                    <span className="text-xs font-black text-green-400 uppercase tracking-widest block mb-1">🟢 Célkitűzés nálunk</span>
                    <p className="text-gray-200 text-xs font-semibold">{RESULTS[winner].after}</p>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-black border border-gray-900 rounded-xl">
                  <h3 className="font-black text-neon-orange text-xs uppercase tracking-wider mb-1">Edzői megjegyzés</h3>
                  <p className="text-gray-400 text-xs italic">"{RESULTS[winner].humor}"</p>
                </div>

                <div className="flex flex-col gap-3 mt-6">
                  <button 
                    onClick={openBookingForm}
                    className="w-full bg-neon-orange hover:bg-orange-600 text-black font-black p-4 rounded-xl text-center text-base transition-all shadow-xl shadow-neon-orange/20 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 group"
                  >
                    <span>🎁 Kérem a 12 500 Ft értékű Start-Csomagot 0 Ft-ért</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  {/* NAGYOBB, LÁTHATÓBB ÚJRAKITÖLTÉS GOMB */}
                  <button
                    onClick={handleReset}
                    className="text-sm font-black text-gray-400 hover:text-white transition-colors flex items-center justify-center gap-1.5 mt-4 mx-auto border-b border-dashed border-gray-700 pb-0.5 hover:border-white"
                  >
                    <RotateCcw size={14} /> Szeretném újra kitölteni a tesztet
                  </button>
                </div>
              </>
            ) : (
              
              <div className="w-full">
                {!formSubmitted ? (
                  <div className="space-y-6">
                    
                    <div className="bg-red-950/20 border border-red-900/40 p-3 rounded-xl flex items-center justify-center gap-2 text-red-400 text-xs font-black uppercase tracking-wider animate-pulse">
                      <Clock size={16} />
                      Figyelem: Ebben a hónapban már csak {spotsLeft} szabad hely maradt ebben a csoportban!
                    </div>

                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      <div className="text-center">
                        <h3 className="text-xl font-black uppercase tracking-tight text-white">Próbahetek Aktiválása</h3>
                        <p className="text-xs text-gray-400 mt-1">Regisztráció a Budapesti Tigrisek Sportegyesület kiválasztott órájára.</p>
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-black uppercase text-gray-400 block">Teljes neved:</label>
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
                        <label className="text-xs font-black uppercase text-gray-400 block">Telefonszámod (Ezen egyeztetjük az első alkalmat):</label>
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
                        <label className="text-xs font-black uppercase text-gray-400 block">Korosztály megerősítése:</label>
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

                      <div className="bg-black border border-gray-900 rounded-xl p-3 text-xs space-y-1.5 text-gray-400">
                        <div className="font-black text-white uppercase text-[10px] tracking-wider text-neon-orange">A Start-csomagod tartalma:</div>
                        <div className="flex items-center gap-1.5">✓ 1 teljes hét korlátlan hozzáférés a Budapesti Tigrisek edzéseihez</div>
                        <div className="flex items-center gap-1.5">✓ Személyes koordinációs és edzettségi felmérés az első órán</div>
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
                  </div>
                ) : (
                  <div className="text-center py-6 space-y-4 animate-fade-in">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neon-orange/10 border border-neon-orange/20 text-neon-orange mb-2 shadow-[0_0_15px_rgba(249,115,22,0.1)]">
                      <Flame size={36} className="animate-pulse" />
                    </div>
                    <h3 className="text-2xl font-black text-white uppercase tracking-tight">Sikeresen jelentkeztél!</h3>
                    <p className="text-sm text-gray-300 max-w-sm mx-auto leading-relaxed">
                      Kedves <strong className="text-white">{formData.name}</strong>! Helyedet fenntartjuk a Budapesti Tigrisek <strong className="text-white">{formData.ageGroup}</strong> edzésén. 24 órán belül keresünk a <strong className="text-neon-orange">{formData.phone}</strong> számon az időpont-egyeztetés végett!
                    </p>
                    <div className="pt-4">
                      <button 
                        onClick={handleReset}
                        className="border border-gray-800 hover:border-gray-700 px-6 py-3 rounded-xl text-sm font-bold text-gray-400 hover:text-white"
                      >
                        Vissza az elejére
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* HORIZONTÁLIS TIKKER SZÉLESÍTETT, FEKVŐ OLVASHATÓSÁGRA OPTIMALIZÁLT KÁRTYÁKKAL */}
      <div className="w-full bg-gray-950 border-t border-b border-gray-900 py-6 mt-16 overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        
        <div className="whitespace-nowrap animate-ticker flex items-center gap-6">
          {[...REVIEWS, ...REVIEWS].map((r, i) => (
            <div 
              key={i} 
              className="inline-block bg-black border border-gray-900 px-6 py-4 rounded-xl min-w-[460px] max-w-[520px] whitespace-normal align-top shadow-xl"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] font-black uppercase text-neon-orange bg-neon-orange/10 px-2 py-0.5 rounded tracking-wider">
                  {r.target}
                </span>
                <div className="flex text-amber-500 text-xs">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-gray-300 text-xs sm:text-sm italic leading-relaxed mb-2">
                "{r.text}"
              </p>
              <span className="text-xs text-gray-500 font-black block text-right">
                — {r.name}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
