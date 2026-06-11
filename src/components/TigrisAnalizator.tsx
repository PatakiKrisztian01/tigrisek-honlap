import React, { useMemo, useState, useEffect } from "react";
import { ArrowRight, RotateCcw, HelpCircle, CheckCircle2, User, Phone, GraduationCap, ShieldCheck, Sparkles, Flame, Clock } from "lucide-react";

type KarakterTipus = "harcos" | "villam" | "orzo" | "ebredo" | "kolyok";

interface ValasztoProps {
  teljesOldalas?: boolean;
}

const FELNOTT_KERDESEK = [
  {
    cim: "Mi hozott ide ma leginkább?",
    lehetosegek: [
      { felirat: "🥋 Szeretnék megtanulni küzdeni és technikás lenni", visszajelzes: "Fantasztikus! A technika és a kontroll a Budapesti Tigriseknél mindig megelőzi a nyers erőt.", pontok: { harcos: 4 } },
      { felirat: "💪 Brutális állóképességet és pörgős edzést akarok", visszajelzes: "Készítsd a törölközőt! Olyan pörgést kapsz, amit a hagyományos edzőtermek világa nem tud megadni.", pontok: { villam: 4 } },
      { felirat: "🛡️ Hatékony, gyakorlatias önvédelmet keresek", visszajelzes: "A legbölcsebb döntés. A biztonságérzet a magabiztos élet alapja.", pontok: { orzo: 4 } },
      { felirat: "🌱 Szeretnék újra formába lendülni vagy most elkezdeni a mozgást", visszajelzes: "A legjobb helyen vagy. A felnőtt tagjaink jelentős része pontosan innen indult a 18. kerületben!", pontok: { ebredo: 4 } },
    ],
  },
  {
    cim: "Milyen edzéshangulat inspirál a legjobban?",
    lehetosegek: [
      { felirat: "🏆 Precíz, fegyelmezett, ahol komoly rangot ad a ruha és az öv", visszajelzes: "A tradíciók tartást adnak. Imádni fogod a Budapesti Tigrisek hivatalos övvizsgáit.", pontok: { harcos: 3 } },
      { felirat: "🥊 Dinamikus, pörgős, modern küzdősport hangulat", visszajelzes: "Akkor itt nem lesz unalmas perc, a ritmus és a pörgés garantált!", pontok: { villam: 3 } },
      { felirat: "🧠 Nyugodt, koncentrált, ahol a valós szituációk megoldása dominál", visszajelzes: "Maximális fókusz. Nálunk minden mozdulatnak valós, gyakorlati tétje van.", pontok: { orzo: 3 } },
      { felirat: "🤝 Családias, támogató közösség, ahol tiszteletben tartják a saját tempómat", visszajelzes: "Nálunk nincs ítélkezés. Egymást emeljük fel, nem egymáson taposunk.", pontok: { ebredo: 3 } },
    ],
  },
  {
    cim: "Mi lenne a legnagyobb győzelmed egy year múlva?",
    lehetosegek: [
      { felirat: "🥋 Büszkén viselném a következő hivatalos övfokozatomat", visszajelzes: "Látom a szemeid előtt a sikert. Meg fogunk dolgozni érte, de meglesz!", pontok: { harcos: 4 } },
      { felirat: "🥇 Akár egy hivatalos verseny dobogójára is felállnék", visszajelzes: "Benned van a bajnoki szikra! A Budapesti Tigrisek versenysport ága készen áll rád.", pontok: { villam: 4, harcos: 1 } },
      { felirat: "😊 Magabiztos fellépésem lenne, megszűnne a mindennapi stressz", visszajelzes: "Az edzés a legjobb feszültségoldó. Kiütjük a stresszt a mindennapokból.", pontok: { orzo: 4 } },
      { felirat: "🔥 Kicsattanok az energiától és sokkal jobb a kondícióm", visszajelzes: "A tükör nem fog hazudni. Az anyagcseréd nálunk új fokozatba kapcsol!", pontok: { ebredo: 4 } },
    ],
  },
];

const GYEREK_KERDESEK = [
  {
    cim: "Hány éves a gyermeked?",
    lehetosegek: [
      { felirat: "🦁 4–7 éves (Ovis, kisiskolás korosztály)", visszajelzes: "A legkritikusabb kor a mozgásfejlődés szempontjából. Szuper időzítés a Tigris Kölyök programhoz!", pontok: { kolyok: 5 } },
      { felirat: "🦅 8–14 éves (Iskolás, junior korosztály)", visszajelzes: "Ebben a korban a közösség és a magabiztosság a legfőbb pajzs az iskolai stressz ellen.", pontok: { harcos: 3, villam: 2 } },
    ],
  },
  {
    cim: "Mi a legfőbb belső célod a gyermeked edzésével?",
    lehetosegek: [
      { felirat: "🤝 Közösségbe kerüljön, fegyelmet, tiszteletet és fókuszt tanuljon", visszajelzes: "Megértem. A Budapesti Tigriseknél a tisztelet az első és az utolsó lecke is.", pontok: { harcos: 3, kolyok: 2 } },
      { felirat: "⚡ Levezesse a végtelen energiáját egy pörgős, vidám csapatban", visszajelzes: "Igen! Inkább nálunk adja ki a felesleget a 18. kerületi edzőtermünkben, mint otthon.", pontok: { villam: 3, kolyok: 2 } },
      { felirat: "🛡️ Magabiztossá váljon, emelt fővel járjon, and meg tudja védeni magát", visszajelzes: "Szülőként ez a legnagyobb vágyunk. Megtanítjuk fizikailag és verbálisan is kiállni magáért.", pontok: { orzo: 3, harcos: 2 } },
    ],
  },
  {
    cim: "Milyen kihívással szembesülsz leginkább a mindennapokban?",
    lehetosegek: [
      { felirat: "📱 Nehéz lerángatni a képernyők elől, lusta mozogni", visszajelzes: "A digitális függőség ellen a legjobb ellenszer az offline sikerélmény. Megmozdítjuk!", pontok: { villam: 3, kolyok: 2 } },
      { felirat: "🧠 Kicsit bizonytalan, visszahúzódóbb, nehezen illeszkedik be", visszajelzes: "A küzdősport csodákra képes a lélekkel. Biztonságos environments fogni kinyílni nálunk.", pontok: { harcos: 4 } },
      { felirat: "🏃 Szeleburdi, nehezen figyel egy dologra, hamar megun mindent", visszajelzes: "A játékos, de szigorú struktúra a Budapesti Tigriseknél pont a fókuszidőt nyújtja meg.", pontok: { kolyok: 3, villam: 2 } },
    ],
  },
];

const EREDMENYEK = {
  harcos: { cim: "Harcos Szellem", sportag: "ITF Taekwon-do (Budapesti Tigrisek)", miert: "A válaszaid alapján fontos számodra a struktúra, a fegyelem és az elhivatottság. A Budapesti Tigrisek Sportegyesület Taekwon-do szakosztálya tradíciókon és hivatalos övvizsgákon keresztül épít sziklaszilárd magabiztosságot.", indulas: "Bizonytalanság, céltalan mozgás, szétszórt fókusz.", erkezes: "Kihúzott gerinc, tiszta célok, tiszteletteljes és magabiztos fellépés.", poen: "Mellékhatásként súlyos övvizsga- és formagyakorlat-függőség alakulhat ki." },
  villam: { cim: "Villám Karakter", sportag: "Dinamikus Kick-box (18. kerület)", miert: "Nálatok a pörgés és a ritmus dominál! A Budapesti Tigrisek modern kick-box edzésein a küzdősport elemeit ötvözzük a magas intenzitású mozgással, ami garantáltan robbanásszerűen fejleszti az állóképességet.", indulas: "Lassú reflexek, felgyülemlett feszültség, unalmas rutin.", erkezes: "Robbanékony erőnlét, levezetett stressz, csillogó szemek és fittség.", poen: "Vigyázat! Gyorsabban fogsz reagálni a mindennapokban, mint ahogy mások befejeznék a mondatot." },
  orzo: { cim: "Őrző Karakter", sportag: "Gyakorlati Önvédelem és Taktika", miert: "Számodra a biztonság és a helyzetfelismerés a legfontosabb. A 18. kerületi önvédelmi csoportunkban nem a ringre vagy a pontszerzésre építünk, hanem a valós stresszkezelésre és a határozott fellépésre.", indulas: "Gyomorgörcs a bizonytalan helyzetekben, kiszolgáltatottság.", erkezes: "Veszélyhelyzetek azonnali felismerése, higgadt és határozott hárítás.", poen: "Diagnózis: Előbb veszed észre a gyanús helyzeteket, mint ahogy a baj egyáltalán észrevenne téged." },
  ebredo: { cim: "Megújuló Felnőtt", sportag: "Junior és Felnőtt Küzdősport Program", miert: "Tökéletes időzítés! Vágyik a tested a mozgásra, a Budapesti Tigrisek családias, felnőtt közösségében pedig teljesen a te szintedhez igazítva, biztonságosan építjük újra a fizikumodat.", indulas: "Irodai hátfájás, halogatás, rozsdás ízületek.", erkezes: "Újra energikus mindennapok, fitt test és egy összetartó felnőtt baráti kör.", poen: "A te történeted nem a múltban, hanem most csütörtökön az első edzésen kezdődik." },
  kolyok: { cim: "Tigris Kölyök", sportag: "Ovis és Kisiskolás Mozgásfejlesztés", miert: "Szülőként a legjobbat keresed a 18. kerületben: ahol a játékból önbecsülés, a fegyelemből pedig siker lesz. A Budapesti Tigrisek korosztályos gyerekedzései híresek a fókusz fejlesztéséről.", indulas: "Állandó kütyüzés, szeleburdi figyelem, unalom miatti hiszti.", erkezes: "Megnyúlt fókuszidő, tisztelettudó viselkedés otthon és koordinált mozgás.", poen: "Várható eredmény: Az edzések után a gyerkőc meglepően gyorsan és önként fog elaludni este." },
};

const VELEMENYEK = [
  { nev: "Horváth Anita (Ovis anyuka)", celcsoport: "Ovis csoport", szoveg: "Féltem, hogy az 5 éves kisfiamat elnyomják a többiek a tatamin. Ehelyett játékos fegyelmet és hatalmas törődést kapott. A Budapesti Tigrisek edzői fantasztikus pedagógusok!", ertekeles: 5 },
  { nev: "Szabó Gábor (Iskolás szülő)", celcsoport: "Iskolás csoport", szoveg: "A lányomat bántották az iskolában, teljesen magába fordult. 4 hónap 18. kerületi Taekwon-do után úgy kihúzta magát, hogy megszűnt a piszkálódás. A tanulmányi fókusza is mérföldekkel jobb lett.", ertekeles: 5 },
  { nev: "B. Balázs (Junior tag, 16 éves)", celcsoport: "Junior / Felnőtt", szoveg: "Nem találtam a helyem a sima konditermekben, a céltalan görgetést akartam lecserélni valami komolyabbra. Itt egy igazi, összetartó csapatra leltem, a kick-box edzések pörgése zseniális.", ertekeles: 5 },
  { nev: "Kovács Péter (Újrakezdő felnőtt, 38 éves)", celcsoport: "Junior / Felnőtt", szoveg: "Azt hittem, közel a negyvenhez, hosszabb kihagyás után majd kinevetnek. Ehelyett maximális türelmet kaptam a felnőtt csoportban, függetlenül attól, ki milyen szinten van. Teljesen visszakaptam az energiámat!", ertekeles: 5 },
  { nev: "Dr. Varga Elena (Felnőtt önvédelem)", celcsoport: "Önvédelem", szoveg: "Esti műszakok után sokszor volt gyomorgörcsöm egyedül sétálva. A Budapesti Tigrisek edzései nemcsak fizikai technikákat adtak, hanem olyan magabiztos kisugárzást, ami miatt biztonságban érzem magam.", ertekeles: 5 }
];

export default function TigrisValaszto({ teljesOldalas = false }: ValasztoProps) {
  const [elinditva, setElinditva] = useState(false);
  const [gyerekAg, setGyerekAg] = useState<boolean | null>(null);
  const [aktualisLepes, setAktualisLepes] = useState(0);
  const [urlapLathato, setUrlapLathato] = useState(false);
  const [urlapElkuldve, setUrlapElkuldve] = useState(false);
  
  const [aktivVisszajelzes, setAktivVisszajelzes] = useState<string | null>(null);
  const [atmenetFolyamatban, setAtmenetFolyamatban] = useState(false);
  const [szabadHelyek, setSzabadHelyek] = useState(6);

  useEffect(() => {
    const idozito = setTimeout(() => {
      setSzabadHelyek(4);
    }, 45000);
    return () => clearTimeout(idozito);
  }, []);

  const [urlapAdat, setUrlapAdat] = useState({ nev: "", telefon: "", korosztaly: "Junior / Felnőtt csoport (14+ év)" });
  const [pontok, setPontok] = useState<Record<string, number>>({
    harcos: 0, villam: 0, orzo: 0, ebredo: 0, kolyok: 0,
  });

  const aktivKerdesek = useMemo(() => {
    if (gyerekAg === null) return [];
    return gyerekAg ? GYEREK_KERDESEK : FELNOTT_KERDESEK;
  }, [gyerekAg]);

  const handleElsoDonto = (gyermeknekKeres: boolean) => {
    setGyerekAg(gyermeknekKeres);
    setPontok({ harcos: 0, villam: 0, orzo: 0, ebredo: 0, kolyok: gyermeknekKeres ? 5 : 0 });
    setElinditva(true);
    setAktualisLepes(0);
  };

  const handleValasztas = (lehetoseg: any) => {
    if (atmenetFolyamatban) return;
    
    setAktivVisszajelzes(lehetoseg.visszajelzes);
    setAtmenetFolyamatban(true);

    const kovetkezoPontok = { ...pontok };
    Object.entries(lehetoseg.pontok).forEach(([kulcs, ertek]) => {
      kovetkezoPontok[kulcs] = (kovetkezoPontok[kulcs] || 0) + Number(ertek);
    });
    setPontok(kovetkezoPontok);

    setTimeout(() => {
      setAktualisLepes((lepes) => lepes + 1);
      setAktivVisszajelzes(null);
      setAtmenetFolyamatban(false);
    }, 5600); 
  };

  const handleAlaphelyzet = () => {
    setPontok({ harcos: 0, villam: 0, orzo: 0, ebredo: 0, kolyok: 0 });
    setAktualisLepes(0);
    setGyerekAg(null);
    setUrlapLathato(false);
    setUrlapElkuldve(false);
    setAktivVisszajelzes(null);
    setUrlapAdat({ nev: "", telefon: "", korosztaly: "Junior / Felnőtt csoport (14+ év)" });
    setElinditva(teljesOldalas); 
  };

  const handleUrlapMegnyitas = () => {
    setUrlapLathato(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const befejezett = gyerekAg !== null && aktualisLepes >= aktivKerdesek.length;
  const sorrend = useMemo(() => Object.entries(pontok).sort((a, b) => b[1] - a[1]), [pontok]);
  const gyoztesKarakter = sorrend[0]?.[0] as KarakterTipus;

  const handleUrlapKuldes = (e: React.FormEvent) => {
    e.preventDefault();
    setUrlapElkuldve(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!teljesOldalas && !elinditva && gyerekAg === null) {
    return (
      <div className="w-full max-w-4xl mx-auto my-12 px-4">
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes sötetbőlElőugrik {
            0% { opacity: 0; transform: scale(0.97); filter: blur(4px); }
            17.8% { opacity: 1; transform: scale(1); filter: blur(0px); }
            82.2% { opacity: 1; transform: scale(1); filter: blur(0px); }
            100% { opacity: 0; transform: scale(1.01); filter: blur(4px); }
          }
          .animacio-szoveg-villanas {
            animation: sötetbőlElőugrik 5.6s ease-in-out forwards;
          }
          @keyframes futoSzoveg {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-50%, 0, 0); }
          }
          .animacio-szalag {
            display: inline-flex;
            animation: futoSzoveg 50s linear infinite;
          }
          .animacio-szalag:hover {
            animation-play-state: paused;
          }
        `}} />

        <div className="bg-gradient-to-br from-gray-950 via-black to-gray-900 border border-neon-orange/20 rounded-3xl p-8 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-6 text-neon-orange/5 pointer-events-none">
            <HelpCircle size={140} className="transform rotate-12" />
          </div>
          <div className="inline-flex items-center gap-1.5 bg-neon-orange/10 border border-neon-orange/20 text-neon-orange text-xs font-black tracking-widest uppercase px-3 py-1 rounded-full mb-4">
            <Sparkles size={12} /> Gyors online útmutató
          </div>
          
          <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight max-w-2xl mx-auto mb-3 leading-tight">
            Melyik <span className="text-neon-orange">Küzdősport szakosztály</span> passzol hozzátok?
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-lg mx-auto mb-8 leading-relaxed">
            Találd meg a tökéletes csoportot a Budapesti Tigriseknél! Válaszolj pár egyszerű kérdésre, és tervezzük meg a saját utadat.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <button 
              onClick={() => handleElsoDonto(true)}
              className="bg-neon-orange hover:bg-orange-600 text-black font-black px-6 py-4 rounded-xl text-md transition-all duration-200 hover:scale-105 shadow-lg shadow-neon-orange/20 flex-1"
            >
              🤝 Gyermekemnek keresek
            </button>
            <button 
              onClick={() => handleElsoDonto(false)}
              className="border border-gray-800 hover:border-gray-700 hover:bg-gray-950 text-white font-black px-6 py-4 rounded-xl text-md transition-all duration-200 hover:scale-105 flex-1"
            >
              🥋 Junior / Felnőtt korosztály
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full bg-black text-white overflow-x-hidden ${teljesOldalas ? 'pt-28 sm:pt-32 md:pt-36 min-h-screen' : ''}`}>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes sötetbőlElőugrik {
          0% { opacity: 0; transform: scale(0.97); filter: blur(4px); }
          17.8% { opacity: 1; transform: scale(1); filter: blur(0px); }
          82.2% { opacity: 1; transform: scale(1); filter: blur(0px); }
          100% { opacity: 0; transform: scale(1.01); filter: blur(4px); }
        }
        .animacio-szoveg-villanas {
          animation: sötetbőlElőugrik 5.6s ease-in-out forwards;
        }
        @keyframes futoSzoveg {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animacio-szalag {
          display: inline-flex;
          animation: futoSzoveg 50s linear infinite;
        }
        .animacio-szalag:hover {
          animation-play-state: paused;
        }
      `}} />

      <div className="max-w-2xl mx-auto px-4">
        
        <div className="text-center mb-8 bg-gray-950/50 border border-gray-900 rounded-2xl p-4">
          <h1 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white flex items-center justify-center gap-2">
            <Sparkles size={18} className="text-neon-orange" /> Személyre Szabott Csoportválasztó
          </h1>
          <p className="text-gray-400 text-xs mt-1 max-w-md mx-auto">
            Válassz a lehetőségek közül a Budapesti Tigrisek hivatalos felmérésében.
          </p>
        </div>

        {gyerekAg === null && (
          <div className="bg-gray-950 border border-gray-900 rounded-2xl p-6 sm:p-8 text-center shadow-xl">
            <h2 className="text-lg sm:text-xl font-black mb-6 text-white uppercase tracking-tight">Kinek keressük a tökéletes edzést a 18. kerületben?</h2>
            <div className="grid gap-4">
              <button
                onClick={() => handleElsoDonto(true)}
                className="text-left p-5 rounded-xl bg-black border border-gray-900 text-gray-200 hover:bg-neon-orange hover:text-black hover:border-neon-orange font-black transition-all text-base flex items-center justify-between"
              >
                <span>👨‍👩‍👧 A gyermekemnek (Ovis vagy Iskolás csoport)</span>
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => handleElsoDonto(false)}
                className="text-left p-5 rounded-xl bg-black border border-gray-900 text-gray-200 hover:bg-neon-orange hover:text-black hover:border-neon-orange font-black transition-all text-base flex items-center justify-between"
              >
                <span>🥋 Junior / Felnőtt korosztály (Kezdő vagy Haladó szinten)</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        )}

        {elinditva && !befejezett && gyerekAg !== null && (
          <div className="w-full">
            <div className="w-full bg-gray-900 rounded-full h-2 mb-6 border border-gray-800 relative">
              <div
                className="bg-neon-orange h-2 rounded-full transition-all duration-300 shadow-[0_0_8px_rgba(249,115,22,0.6)]"
                style={{ width: `${(aktualisLepes / aktivKerdesek.length) * 100}%` }}
              />
            </div>

            <div className="bg-gray-950 border border-gray-900 rounded-2xl p-6 sm:p-8 text-center shadow-xl relative min-h-[340px] flex flex-col justify-center">
              {aktivVisszajelzes ? (
                <div className="animacio-szoveg-villanas space-y-4 py-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-neon-orange/10 text-neon-orange">
                    <ShieldCheck size={28} />
                  </div>
                  <p className="text-white font-bold text-lg sm:text-xl max-w-md mx-auto leading-relaxed px-2">
                    {aktivVisszajelzes}
                  </p>
                  <p className="text-xs text-gray-500 uppercase tracking-widest animate-pulse pt-2">
                    Profil elemzése a Budapesti Tigrisek rendszerében...
                  </p>
                </div>
              ) : (
                <div className="w-full">
                  <span className="text-xs font-black text-neon-orange uppercase tracking-widest block mb-1">
                    {gyerekAg ? "Gyermek profil" : "Junior és felnőtt profil"} — {aktualisLepes + 1} / {aktivKerdesek.length}
                  </span>
                  <h2 className="text-xl font-black mb-6 text-white tracking-tight">
                    {aktivKerdesek[aktualisLepes].cim}
                  </h2>

                  <div className="grid gap-3">
                    {aktivKerdesek[aktualisLepes].lehetosegek.map((o: any) => (
                      <button
                        key={o.felirat}
                        disabled={atmenetFolyamatban}
                        onClick={() => handleValasztas(o)}
                        className="text-left p-4 rounded-xl bg-black border border-gray-900 text-gray-200 hover:bg-neon-orange hover:text-black hover:border-neon-orange font-bold transition-all duration-150 text-sm active:scale-95"
                      >
                        {o.felirat}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {befejezett && gyoztesKarakter && (
          <div className="bg-gray-950 border border-gray-900 rounded-2xl p-6 sm:p-8 shadow-2xl pb-12">
            {!urlapLathato ? (
              <>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neon-orange/10 text-neon-orange mb-3 mx-auto flex">
                  <Flame size={32} />
                </div>
                <span className="text-xs font-black text-center block text-neon-orange uppercase tracking-widest">Kiértékelés eredménye:</span>
                <h2 className="text-2xl sm:text-3xl font-black text-center text-white uppercase tracking-tight mt-1">
                  {EREDMENYEK[gyoztesKarakter].cim}
                </h2>
                <p className="text-center text-neon-orange font-black text-sm sm:text-base mt-2 border-b border-gray-900 pb-4">
                  Ajánlott szakosztály: <span className="underline">{EREDMENYEK[gyoztesKarakter].sportag}</span>
                </p>

                <div className="mt-6">
                  <h3 className="font-black text-white text-sm uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <CheckCircle2 size={16} className="text-neon-orange" /> Miért éppen ezt ajánljuk?
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed bg-black/60 p-4 border border-gray-900 rounded-xl">
                    {EREDMENYEK[gyoztesKarakter].miert}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                  <div className="bg-red-950/20 border border-red-900/30 p-3.5 rounded-xl">
                    <span className="text-xs font-black text-red-500 uppercase tracking-widest block mb-1">🔴 Jelenlegi állapot</span>
                    <p className="text-gray-400 text-xs italic">{EREDMENYEK[gyoztesKarakter].indulas}</p>
                  </div>
                  <div className="bg-green-950/20 border border-green-900/30 p-3.5 rounded-xl">
                    <span className="text-xs font-black text-green-400 uppercase tracking-widest block mb-1">🟢 Célkitűzés nálunk</span>
                    <p className="text-gray-200 text-xs font-semibold">{EREDMENYEK[gyoztesKarakter].erkezes}</p>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-black border border-gray-900 rounded-xl">
                  <h3 className="font-black text-neon-orange text-xs uppercase tracking-wider mb-1">Edzői megjegyzés</h3>
                  <p className="text-gray-400 text-xs italic">"{EREDMENYEK[gyoztesKarakter].poen}"</p>
                </div>

                <div className="flex flex-col gap-3 mt-6">
                  <button 
                    onClick={handleUrlapMegnyitas}
                    className="w-full bg-neon-orange hover:bg-orange-600 text-black font-black p-4 rounded-xl text-center text-base transition-all shadow-xl shadow-neon-orange/20 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 group"
                  >
                    <span>🎁 Kérem a Start-Csomagot Próbahetekkel</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={handleAlaphelyzet}
                    className="text-sm font-black text-gray-400 hover:text-white transition-colors flex items-center justify-center gap-1.5 mt-4 mx-auto border-b border-dashed border-gray-700 pb-0.5 hover:border-white"
                  >
                    <RotateCcw size={14} /> Szeretném újra kitölteni a tesztet
                  </button>
                </div>
              </>
            ) : (
              
              <div className="w-full">
                {!urlapElkuldve ? (
                  <div className="space-y-6">
                    
                    <div className="bg-red-950/20 border border-red-900/40 p-3 rounded-xl flex items-center justify-center gap-2 text-red-400 text-xs font-black uppercase tracking-wider animate-pulse">
                      <Clock size={16} />
                      Figyelem: Ebben a hónapban már csak {szabadHelyek} szabad helyünk maradt ebben a csoportban!
                    </div>

                    <form onSubmit={handleUrlapKuldes} className="space-y-4">
                      <div className="text-center">
                        <h3 className="text-xl font-black uppercase tracking-tight text-white">Próbahetek Aktiválása</h3>
                        <p className="text-xs text-gray-400 mt-1">Regisztráció a Budapesti Tigrisek Sportegyesület órájára.</p>
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-black uppercase text-gray-400 block">Teljes neved:</label>
                        <div className="relative">
                          <User className="absolute left-3 top-3.5 h-4 w-4 text-gray-500" />
                          <input 
                            type="text" 
                            required 
                            placeholder="Minta János" 
                            value={urlapAdat.nev}
                            onChange={(e) => setUrlapAdat({...urlapAdat, nev: e.target.value})}
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
                            value={urlapAdat.telefon}
                            onChange={(e) => setUrlapAdat({...urlapAdat, telefon: e.target.value})}
                            className="w-full bg-black border border-gray-900 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-neon-orange"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-black uppercase text-gray-400 block">Korosztály megerősítése:</label>
                        <div className="relative">
                          <GraduationCap className="absolute left-3 top-3.5 h-4 w-4 text-gray-500" />
                          <select 
                            value={urlapAdat.korosztaly}
                            onChange={(e) => setUrlapAdat({...urlapAdat, korosztaly: e.target.value})}
                            className="w-full bg-black border border-gray-900 rounded-xl py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-neon-orange appearance-none"
                          >
                            <option>Ovis csoport (4-7 év)</option>
                            <option>Gyermek csoport (8-14 év)</option>
                            <option>Junior / Felnőtt csoport (14+ év)</option>
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
                          onClick={() => setUrlapLathato(false)}
                          className="border border-gray-800 text-gray-400 px-4 py-3 rounded-xl text-sm font-bold hover:bg-gray-900 hover:text-white"
                        >
                          Vissza
                        </button>
                        <button 
                          type="submit" 
                          className="flex-1 bg-neon-orange hover:bg-orange-600 text-black font-black py-3 rounded-xl text-sm transition-all shadow-md shadow-neon-orange/10"
                        >
                          Helyem Biztosítása 0 Ft-ért
                        </button>
                      </div>
                    </form>
                  </div>
                ) : (
                  <div className="text-center py-6 space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neon-orange/10 border border-neon-orange/20 text-neon-orange mb-2 shadow-[0_0_15px_rgba(249,115,22,0.1)]">
                      <Flame size={36} className="animate-pulse" />
                    </div>
                    <h3 className="text-2xl font-black text-white uppercase tracking-tight">Sikeresen jelentkeztél!</h3>
                    <p className="text-sm text-gray-300 max-w-sm mx-auto leading-relaxed">
                      Kedves <strong className="text-white">{urlapAdat.nev}</strong>! Helyedet fenntartjuk a Budapesti Tigrisek <strong className="text-white">{urlapAdat.korosztaly}</strong> edzésén. 24 órán belül keresünk a <strong className="text-neon-orange">{urlapAdat.telefon}</strong> számon az időpont-egyeztetés végett!
                    </p>
                    <div className="pt-4">
                      <button 
                        onClick={handleAlaphelyzet}
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

      {/* HORIZONTÁLIS FUTÓ SZALAG EXTRA SZÉLES, PROFI, MAGYAR NYELVŰ KÁRTYÁKKAL */}
      <div className="w-full bg-gray-950 border-t border-b border-gray-900 py-6 mt-16 overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        
        <div className="whitespace-nowrap animacio-szalag flex items-center gap-6">
          {[...VELEMENYEK, ...VELEMENYEK].map((v, i) => (
            <div 
              key={i} 
              className="inline-block bg-black border border-gray-900 px-6 py-4 rounded-xl min-w-[460px] max-w-[520px] whitespace-normal align-top shadow-xl"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] font-black uppercase text-neon-orange bg-neon-orange/10 px-2 py-0.5 rounded tracking-wider">
                  {v.celcsoport}
                </span>
                <div className="flex text-amber-500 text-xs">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-gray-300 text-xs sm:text-sm italic leading-relaxed mb-2">
                "{v.szoveg}"
              </p>
              <span className="text-xs text-gray-500 font-black block text-right">
                — {v.nev}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
