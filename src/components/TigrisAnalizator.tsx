import React, { useMemo, useState, useEffect } from "react";
import { ArrowRight, RotateCcw, HelpCircle, CheckCircle2, User, Phone, GraduationCap, ShieldCheck, Sparkles, Flame, Clock, Star, Share2, Award, BarChart3, Heart } from "lucide-react";

type KarakterTipus = "ovis_tkd" | "taekwon_do" | "kick_box_forma";

interface ValasztoProps {
  teljesOldalas?: boolean;
}

// LAPOZGATÓS KÖNYV STRUKTÚRA (Letisztított, sallangmentes, gyors válaszokkal)
const ENYEM_A_DÖNTES_KONYV = {
  0: {
    id: 0,
    szekcio: "start",
    cim: "1. ÁLLOMÁS: A kapu – Ki érkezett ma a Tigris-Dojangba?",
    lehetosegek: [
      { felirat: "🦁 Egy örökmozgó mini-Tigris (4–7 éves ovis szülője vagyok).", kovetkezo: 101, pontok: { ovis_tkd: 5 } },
      { felirat: "🦅 Egy energiabomba diák, kai letarolná a tatamit.", kovetkezo: 201, pontok: { taekwon_do: 4 } },
      { felirat: "🥋 Felnőttként érkezem – a nulláról építeném újra magam.", kovetkezo: 201, pontok: { taekwon_do: 4 } },
      { felirat: "⚡ Egy látványos tehetség, aki unja a sablonos sportokat.", kovetkezo: 201, pontok: { kick_box_forma: 5 } },
    ]
  },

  // --- 「A」 FEJEZET: AZ OVISOK KALANDJA ---
  101: {
    id: 101,
    szekcio: "ovis",
    cim: "2. ÁLLOMÁS: Fizikai szupererő – Mit tud most a kis Tigris?",
    lehetosegek: [
      { felirat: "🤸 Simán cigánykerekezik, igazi őstehetség.", visszajelzes: "Ez ritka kincs ovis korban! Remek kick-box formagyakorlat bajnok válhat belőle.", kovetkezo: 102, pontok: { kick_box_forma: 6 } },
      { felirat: "🏃 Nem koordinált még, de megállíthatatlanul rombol.", visszajelzes: "Tökéletes! Becsatornázzuk ezt a tüzet a Taekwon-do alapjaival.", kovetkezo: 102, pontok: { ovis_tkd: 5 } },
      { felirat: "🧸 Megfontoltabb, óvatosabb, picit még bizonytalan.", visszajelzes: "A legjobb időszak az egyensúly és a magabiztosság finomhangolására az ovis csoportunkban.", kovetkezo: 102, pontok: { ovis_tkd: 5 } },
    ]
  },
  102: {
    id: 102,
    szekcio: "ovis",
    cim: "3. ÁLLOMÁS: Fókusz – Hogyan reagál a szabályokra?",
    lehetosegek: [
      { felirat: "🎭 Hajlamos dacolni, ha nem az van, amit ő akar.", visszajelzes: "A szabályokat nálunk játékosan, de határozottan tanulják meg a gyerekek.", kovetkezo: 103, pontok: { ovis_tkd: 5 } },
      { felirat: "🎯 Szépen figyel, de 5 perc után elterelődi.", visszajelzes: "Teljesen normális ovis adottság. Az edzések felépítése pont ezt a fókuszidőt nyújtja meg.", kovetkezo: 103, pontok: { ovis_tkd: 4, kick_box_forma: 2 } },
      { felirat: "🤝 Nagyon szófogadó, imádja a feladatokat.", visszajelzes: "Ez a tökéletes Taekwon-do szellem alapja. Imádni fogja az edzéseket!", kovetkezo: 103, pontok: { ovis_tkd: 5, taekwon_do: 2 } },
    ]
  },
  103: {
    id: 103,
    szekcio: "ovis",
    cim: "4. ÁLLOMÁS: Társaság – Mennyire magabiztos a többiek között?",
    lehetosegek: [
      { felirat: "📣 Ő a hangadó, minden játékban az élre tör.", visszajelzes: "A jó vezetői képességekhez fegyelem kell. Jó helyen lesz a Tigriseknél!", kovetkezo: 104, pontok: { ovis_tkd: 4, kick_box_forma: 2 } },
      { felirat: "🌸 Picit visszahúzódóbb, csendes, idő kell neki.", visszajelzes: "A küzdősport biztonságos környezetet ad. Lépésről lépésre fog kinyílni.", kovetkezo: 104, pontok: { ovis_tkd: 6 } },
      { felirat: "🤹 Szuper barátkozó, mindenkivel azonnal megtalálja a hangot.", visszajelzes: "A 18. kerületi ovis csapatunk családias hangulata pont neki való.", kovetkezo: 104, pontok: { ovis_tkd: 5 } },
    ]
  },
  104: {
    id: 104,
    szekcio: "ovis",
    cim: "5. ÁLLOMÁS: Eszközök – Mi indítja be leginkább a fantáziáját?",
    lehetosegek: [
      { felirat: "⚔️ Botok pörgetése, dobálása és a kardozás.", visszajelzes: "Ez a készség később a fegyveres formagyakorlatoknál (bot, nunchaku) aranyat ér!", kovetkezo: 105, pontok: { kick_box_forma: 6 } },
      { felirat: "🛡️ A szuperhősök és az önvédelmi mozdulatok.", visszajelzes: "A Taekwon-do szellemisége pontosan a modern kor szuperhőseit neveli ki.", kovetkezo: 105, pontok: { ovis_tkd: 5 } },
      { felirat: "🥋 Maga az egyenruha és a színes övek világa.", visszajelzes: "A tradicionális értékek és az övvizsgák rendszere már most motiválja őt.", kovetkezo: 105, pontok: { ovis_tkd: 5 } },
    ]
  },
  105: {
    id: 105,
    szekcio: "ovis",
    cim: "6. ÁLLOMÁS: Szülői vágy – Mi lenne számodra a legnagyobb segítség?",
    lehetosegek: [
      { felirat: "🛌 Este végre magától, fáradtan elalszik.", visszajelzes: "Garantáljuk, hogy a felesleges energiákat maximálisan, hasznosan fogja levezetni nálunk!", kovetkezo: 106, pontok: { ovis_tkd: 5, kick_box_forma: 2 } },
      { felirat: "🥇 Hogy bátran kiálljon mások elé, lámpaláz nélkül.", visszajelzes: "A színpadi kiállás és a gátlások legyőzése a formagyakorlat águnk legnagyobb ajándéka.", kovetkezo: 106, pontok: { kick_box_forma: 6 } },
      { felirat: "😊 Hogy kihúzott gerinccel menjen a közösségbe.", visszajelzes: "A belső tartás a legjobb pajzs az életben. Erre rakjuk le az alapokat.", kovetkezo: 106, pontok: { ovis_tkd: 5 } },
    ]
  },
  106: {
    id: 106,
    szekcio: "ovis",
    cim: "7. ÁLLOMÁS: Értékek – Mit szeretnél, ha leginkább magával vinne?",
    lehetosegek: [
      { felirat: "🧠 Fegyelem, fókusz és tisztelet.", visszajelzes: "Nálunk a tisztelet az első és az utolsó lecke is. Ez alapérték a Tigriseknél.", kovetkezo: 999, pontok: { ovis_tkd: 6 } },
      { felirat: "✨ Kreativitás, bátorság és önkifejezés.", visszajelzes: "A formagyakorlatok pontosan ezt a fajta magabiztos, látványos erőt építik fel.", kovetkezo: 999, pontok: { kick_box_forma: 6 } },
      { felirat: "🤝 Egy befogadó, barátságos gyerekközösség.", visszajelzes: "Nálunk nincsenek klikkesedések, egy nagy Tigris-család vagyunk a 18. kerületben.", kovetkezo: 999, pontok: { ovis_tkd: 4, kick_box_forma: 4 } },
    ]
  },

  // --- 「B」 FEJEZET: JUNIOR & FELNŐTT KALAND ---
  201: {
    id: 201,
    szekcio: "felnott",
    cim: "2. ÁLLOMÁS: Ritmus – Ha megszólal egy jó ütemű zene...",
    lehetosegek: [
      { felirat: "🎵 Azonnal elkap az ütem, ösztönösen mozgok.", visszajelzes: "Tökéletes! A Kick-box formagyakorlat alapja a zene és a mozgás precíz szinkronja.", kovetkezo: 202, pontok: { kick_box_forma: 6 } },
      { felirat: "🥋 Nem a zene érdekel, hanem a tiszta technika és fókusz.", visszajelzes: "A tradicionális ITF Taekwon-do pontosan ezt a meditatív, mégis robbanékony fókuszt adja.", kovetkezo: 202, pontok: { taekwon_do: 6 } },
      { felirat: "🪵 Kicsit rozsdás vagyok, de elszánt.", visszajelzes: "Ne aggódj! Az edzéseinken 4 különböző tudásszint van, teljesen a nulláról építünk fel.", kovetkezo: 202, pontok: { taekwon_do: 5 } },
    ]
  },
  202: {
    id: 202,
    szekcio: "felnott",
    cim: "3. ÁLLOMÁS: Stílus – Mi indítja be a fantáziád?",
    lehetosegek: [
      { felirat: "🤩 Bottal, nunchakuval pörögni és szaltózni (mint a filmekben).", visszajelzes: "Ez az! Nálunk a kick-box formagyakorlatokon pontosan nunchakuval, bottal és karddal dolgozunk.", kovetkezo: 203, pontok: { kick_box_forma: 7 } },
      { felirat: "🥋 Puszta kezes, nagy erejű, tradicionális technikák.", visszajelzes: "A Taekwon-do a puszta kéz és láb művészete. A kontroll tökéletes egyensúlya.", kovetkezo: 203, pontok: { taekwon_do: 6 } },
      { felirat: "🛡️ Sallangmentes, hatékony önvédelem a hétköznapokra.", visszajelzes: "A Taekwon-do bázisán alapuló önvédelmi technikáink pontosan a valós helyzetekre épülnek.", kovetkezo: 203, pontok: { taekwon_do: 6 } },
    ]
  },
  203: {
    id: 203,
    szekcio: "felnott",
    cim: "4. ÁLLOMÁS: Mozgásforma – Melyik világ áll hozzád közelebb?",
    lehetosegek: [
      { felirat: "🦅 Magas ugrások, pörgések és látványos trükkök.", visszajelzes: "A repülő technikák és a trükközés a formagyakorlat águnk ékkövei.", kovetkezo: 204, pontok: { kick_box_forma: 6 } },
      { felirat: "🧱 Sziklaszilárd talajfogás, pontosság és egyensúly.", visszajelzes: "A Taekwon-do erőtörései és tradicionális mintagyakorlatai pontosan ezt a stabilitást adják.", kovetkezo: 204, pontok: { taekwon_do: 6 } },
      { felirat: "🥊 Pörgős, folyamatos kardió, ahol kiizzadhatom a stresszt.", visszajelzes: "Készítsd a törölközőt, a Budapesti Tigrisek edzésein garantáltan kiizzadsz mindent!", kovetkezo: 204, pontok: { taekwon_do: 4, kick_box_forma: 3 } },
    ]
  },
  204: {
    id: 204,
    szekcio: "felnott",
    cim: "5. ÁLLOMÁS: Szereplés – Hogy állsz a figyelemmel?",
    lehetosegek: [
      { felirat: "🎭 Motivál, ha a közönség vagy a bíról engem figyelnek.", visszajelzes: "Benned egy igazi előadó lakik! A Kick-box forma versenyeken imádni fogják a stílusod.", kovetkezo: 205, pontok: { kick_box_forma: 7 } },
      { felirat: "🥋 Kell a tiszta struktúra és az övvizsgák rendszere.", visszajelzes: "A Taekwon-do rangja sziklaszilárd keretet biztosít az egyéni fejlődésednek.", kovetkezo: 205, pontok: { taekwon_do: 6 } },
      { felirat: "🍃 Inkább magamnak, csendben akarok bizonyítani.", visszajelzes: "Ez a bölcs harcos hozzáállása. Nálunk nem kell színészkedni, önmagad legjobb verziója a cél.", kovetkezo: 205, pontok: { taekwon_do: 5 } },
    ]
  },
  205: {
    id: 205,
    szekcio: "felnott",
    cim: "6. ÁLLOMÁS: Célok – Egy év múlva mivel lennél elégedett?",
    lehetosegek: [
      { felirat: "🎵 Zenés-fegyveres bemutató után tapsol a nézőtér.", visszajelzes: "A Musical Forms kategória pontosan ezt a libabőrös élményt nyújtja.", kovetkezo: 206, pontok: { kick_box_forma: 6 } },
      { felirat: "📜 Az edzőm ünnepélyesen átadja a megérdemelt új övemet.", visszajelzes: "A hivatalos nemzetközi övvizsgák rangja nálunk életre szóló büszkeséget ad.", kovetkezo: 206, pontok: { taekwon_do: 6 } },
      { felirat: "🔥 Szálkás, energiától kicsattanó fizikum a fáradtság helyett.", visszajelzes: "A tükör nem fog hazudni. A 18. kerületi edzőtermünkben teljesen átalakul a fizikumod.", kovetkezo: 206, pontok: { taekwon_do: 5, kick_box_forma: 3 } },
    ]
  },
  206: {
    id: 206,
    szekcio: "felnott",
    cim: "7. ÁLLOMÁS: Belső fegyver – Mi kell leginkább a mindennapokban?",
    lehetosegek: [
      { felirat: "✨ Magabiztos kiállás és a lámpaláz hiánya.", visszajelzes: "A tatami rutin olyan magabiztosságot ad, amit a magánéletben és a munkádban is kamatoztatsz.", kovetkezo: 999, pontok: { kick_box_forma: 6 } },
      { felirat: "🧠 Önfejűség helyett önfegyelem, tartás és tisztelet.", visszajelzes: "A Taekwon-do öt tana (Önfegyelem, Becsületesség, Kitartás, Udvariasság, Elszántság) vezetni fog az életben.", kovetkezo: 999, pontok: { taekwon_do: 6 } },
      { felirat: "🔋 Maximális stresszlevezetés és tiszta energiák.", visszajelzes: "A legjobb feszültségoldó a küzdősport. Kiütjük a stresszt a mindennapokból!", kovetkezo: 999, pontok: { taekwon_do: 4, kick_box_forma: 4 } },
    ]
  }
};

const EREDMENYEK = {
  ovis_tkd: {
    id: "ovis_tkd",
    titulus: "Fegyelmezett Kis Oroszlán",
    cim: "Ovis Taekwon-do csoport",
    sportag: "Ovis Csoportunkhoz (Külön Helyszínen!)",
    leiras: "Megfontolt, de hatalmas belső energiákkal rendelkező karakter vagy! A gyerkőc számára a Budapesti Tigrisek kifejezetten ovisoknak szóló programja a legjobb választás. Egy külön, teljesen biztonságos környezetben, játékos formában tanulják meg a tiszteletet, növelik a fókuszt és vezetik le az energiáikat.",
    tulajdonsagok: ["szereted a kiszámítható, tiszta szabályokat", "fontos neked a játékos, de következetes nevelés", "szeretnél egy biztonságos, támogató közeget", "olyan sportot keresel, ami belső tartást ad"],
    imadnivalo: ["játékos fegyelem", "közösségi élmények", "óriási mozgásigény levezetése", "látványos koordináció-fejlesztés"],
    poen: "Mellékhatás: A gyerkőc otthon is meglepő fegyelemmel fog rendet rakni a játékai között."
  },
  taekwon_do: {
    id: "taekwon_do",
    titulus: "Tradicionális Harcos Szellem",
    cim: "Tradicionális Taekwon-do csoport",
    sportag: "Összevont Iskolás & Felnőtt Edzésünkhöz (4 külön szinttel!)",
    leiras: "Imádod a tiszta struktúrát, a belső csendet és a hatékony, pontos technikákat. A termen belül 4 teljesen különböző tudásszintre bontva dolgozunk, így a saját tempódban fejlődhetsz. A puszta kezes és lábas technikák, valamint a hivatalos nemzetközi övvizsgák sziklaszilárd belső tartást adnak a mindennapokhoz.",
    tulajdonsagok: ["szereted a folyamatos, mérhető fejlődést", "jól viseled a kihívásokat", "fontos neked a tisztelet és a rendszer", "szeretsz egy összetartó közösséghez tartozni"],
    imadnivalo: ["hivatalos övvizsgák", "hagyományőrző technikák", "családias hangulat", "valódi, magabiztos önvédelem"],
    poen: "Diagnózis: Hamarosan kapni fogsz egy ellenállhatatlan vágyat a hófehér formaruhák és a színes övek iránt."
  },
  kick_box_forma: {
    id: "kick_box_forma",
    titulus: "Akrobatikus Akcióhős",
    cim: "Kick-box Formagyakorlat csoport",
    sportag: "Akrobatika, Ritmus & Legendás Fegyverek (Musical Forms) csoportunkhoz",
    leiras: "Benned egy igazi előadó és akrobata lakik, aki gyűlöli a monotonitást! Ez a rendkívül egyedi látványsport a legmagasabb szintű mozgásfejlesztést nyújtja: az edzéseken nunchakuval, bottal és karddal hajtunk végre látványos pörgéseket és akrobatikus elemeket zenére – ráadásul ez egy hivatalos, rendkívül sikeres versenyszám is!",
    tulajdonsagok: ["szereted a kreatív, pörgős mozgásformákat", "nem ijedsz meg a szerepléstől és a kihívásoktól", "kiváló a ritmusérzéked és a koordinációd", "valami igazán különlegeset akarsz tanulni"],
    imadnivalo: ["látványos fegyveres technikák (bot, nunchaku)", "akrobatika és ugrások", "pörgős, zenés edzések", "hazai és nemzetközi versenyek"],
    poen: "Vigyázat! A barátoknak leesik majd az álla, amikor meglátják, mit művelsz egy bottal vagy egy nunchakuval a kezedben."
  }
};

const VELEMENYEK = [
  { nev: "Horváth Anita (Ovis anyuka)", celcsoport: "Ovis csoport", szoveg: "Féltem, hogy az 5 éves fiamat elnyomják. Ehelyett a külön ovis helyszínen játékos fegyelmet és hatalmas törődést kapott. Zseniálisak!", ertekeles: 5 },
  { nev: "Szabó Gábor (Iskolás szülő)", celcsoport: "Iskolás csoport", szoveg: "A lányomat bántották a suliban, de 4 hónap Taekwon-do után úgy kihúzta magát, hogy megszűnt a piszkálódás. A 4 külön szint egy csoporton belül zseniális.", ertekeles: 5 },
  { nev: "B. Balázs (Junior tag, 16 éves)", celcsoport: "Kick-box Forma", szoveg: "A nunchaku és a bot forgatása zenére egyszerűen mindent visz! A versenyeken a fellépés elképesztő adrenalint ad.", ertekeles: 5 },
  { nev: "Kovács Péter (Újrakezdő felnőtt, 38 éves)", celcsoport: "Felnőtt TKD", szoveg: "Azt hittem, közel a negyvenhez lemaradok. De mivel külön szinten kezelik a kezdőket, maximális türelmet és brutális állóképességet kaptam.", ertekeles: 5 }
];

export default function TigrisValaszto({ teljesOldalas = false }: ValasztoProps) {
  const [elinditva, setElinditva] = useState(false);
  const [aktualisId, setAktualisId] = useState<number>(0);
  const [urlapLathato, setUrlapLathato] = useState(false);
  const [urlapElkuldve, setUrlapElkuldve] = useState(false);
  const [megosztvaStatusz, setMegosztvaStatusz] = useState(false);
  
  const [aktivVisszajelzes, setAktivVisszajelzes] = useState<string | null>(null);
  const [atmenetFolyamatban, setAtmenetFolyamatban] = useState(false);
  const [szabadHelyek, setSzabadHelyek] = useState(5);

  useEffect(() => {
    const idozito = setTimeout(() => { setSzabadHelyek(3); }, 45000);
    return () => clearTimeout(idozito);
  }, []);

  const [urlapAdat, setUrlapAdat] = useState({ nev: "", telefon: "", korosztaly: "Összevont Iskolás / Felnőtt (4 szinten)" });
  const [pontok, setPontok] = useState<Record<KarakterTipus, number>>({
    ovis_tkd: 0, taekwon_do: 0, kick_box_forma: 0
  });

  const aktualisKerdes = useMemo(() => {
    return ENYEM_A_DÖNTES_KONYV[aktualisId as keyof typeof ENYEM_A_DÖNTES_KONYV];
  }, [aktualisId]);

  const progresszSzazalek = useMemo(() => {
    if (aktualisId === 0) return 10;
    if (aktualisId === 999) return 100;
    const sorszam = aktualisId > 200 ? (aktualisId - 200 + 1) : (aktualisId - 100 + 1);
    return Math.min(((sorszam / 7) * 100), 95);
  }, [aktualisId]);

  const profilSzazalekok = useMemo(() => {
    const osszPont = pontok.ovis_tkd + pontok.taekwon_do + pontok.kick_box_forma;
    if (osszPont === 0) return { ovis_tkd: 33, taekwon_do: 33, kick_box_forma: 34 };
    
    return {
      ovis_tkd: Math.round((pontok.ovis_tkd / osszPont) * 100),
      taekwon_do: Math.round((pontok.taekwon_do / osszPont) * 100),
      kick_box_forma: Math.round((pontok.kick_box_forma / osszPont) * 100)
    };
  }, [pontok]);

  const gyoztesKarakter = useMemo(() => {
    if (aktualisId !== 999) return null;
    return Object.entries(pontok).sort((a, b) => b[1] - a[1])[0]?.[0] as KarakterTipus;
  }, [aktualisId, pontok]);

  const handleValasztas = (lehetoseg: any) => {
    if (atmenetFolyamatban) return;

    const kovetkezoPontok = { ...pontok };
    if (lehetoseg.pontok) {
      Object.entries(lehetoseg.pontok).forEach(([kulcs, ertek]) => {
        if (kulcs in kovetkezoPontok) {
          kovetkezoPontok[kulcs as KarakterTipus] += Number(ertek);
        }
      });
    }
    setPontok(kovetkezoPontok);

    const kovetkezoId = lehetoseg.kovetkezo;

    if (lehetoseg.visszajelzes) {
      setAktivVisszajelzes(lehetoseg.visszajelzes);
      setAtmenetFolyamatban(true);
      setTimeout(() => {
        setAktualisId(kovetkezoId);
        setAktivVisszajelzes(null);
        setAtmenetFolyamatban(false);
      }, 3500); 
    } else {
      setAktualisId(kovetkezoId);
    }
  };

  const handleAlaphelyzet = () => {
    setPontok({ ovis_tkd: 0, taekwon_do: 0, kick_box_forma: 0 });
    setAktualisId(0);
    setUrlapLathato(false);
    setUrlapElkuldve(false);
    setMegosztvaStatusz(false);
    setAktivVisszajelzes(null);
    setUrlapAdat({ nev: "", telefon: "", korosztaly: "Összevont Iskolás / Felnőtt (4 szinten)" });
    setElinditva(teljesOldalas); 
  };

  const handleMegosztas = () => {
    if (!gyoztesKarakter || !EREDMENYEK[gyoztesKarakter]) return;
    const szoveg = `⚡ Kiszámoltam a Tigris Profilomat!\n\nKarakterem: ${EREDMENYEK[gyoztesKarakter].titulus} 🐯\n\nProfil eloszlásom:\n🥋 Taekwon-do: ${profilSzazalekok.taekwon_do}%\n🔥 Kick-box Forma: ${profilSzazalekok.kick_box_forma}%\n🦁 Ovis program: ${profilSzazalekok.ovis_tkd}%\n\nTudd meg te is, melyik edzés illik hozzád a Budapesti Tigriseknél! » link`;
    
    navigator.clipboard.writeText(szoveg).then(() => {
      setMegosztvaStatusz(true);
      setTimeout(() => setMegosztvaStatusz(false), 3000);
    });
  };

  const handleUrlapMegnyitas = () => {
    if (gyoztesKarakter) {
      let alapértelmezettAga = "Összevont Iskolás / Felnőtt Taekwon-do (4 szinten)";
      if (gyoztesKarakter === "ovis_tkd") alapértelmezettAga = "Ovis Taekwon-do (4-7 év, külön helyszínen)";
      if (gyoztesKarakter === "kick_box_forma") alapértelmezettAga = "Kick-box Formagyakorlat (Akrobatika & Fegyverek)";
      
      setUrlapAdat(prev => ({ ...prev, korosztaly: alapértelmezettAga }));
    }
    setUrlapLathato(true);
  };

  const handleUrlapKuldes = (e: React.FormEvent) => {
    e.preventDefault();
    setUrlapElkuldve(true);
  };

  return (
    <div className={`w-full bg-black text-white overflow-x-hidden ${teljesOldalas ? 'pt-28 sm:pt-32 md:pt-36 min-h-screen' : ''}`}>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes sötetbőlElőugrik {
          0% { opacity: 0; transform: scale(0.98); filter: blur(3px); }
          15% { opacity: 1; transform: scale(1); filter: blur(0px); }
          85% { opacity: 1; transform: scale(1); filter: blur(0px); }
          100% { opacity: 0; transform: scale(1.01); filter: blur(3px); }
        }
        .animacio-szoveg-villanas { animation: sötetbőlElőugrik 3.5s ease-in-out forwards; }
        
        /* 2X-ES LASSÍTÁS: 35s helyett 70s lett a kényelmes olvasásért */
        @keyframes futoSzoveg { 0% { transform: translate3d(0, 0, 0); } 100% { transform: translate3d(-50%, 0, 0); } }
        .animacio-szalag { display: inline-flex; animation: futoSzoveg 70s linear infinite; }
        
        /* MOBIL LASSÍTÁS: 25s helyett 50s lett a kis képernyőkre */
        @media (max-w: 640px) { .animacio-szalag { animation: futoSzoveg 50s linear infinite; } }
      `}} />

      <div className="max-w-4xl mx-auto px-4">
        
        {/* FEJLÉC */}
        <div className="text-center mb-8 bg-gray-950/50 border border-gray-900 rounded-2xl p-4">
          <h1 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white flex items-center justify-center gap-2">
            <Heart size={18} className="text-neon-orange" /> Lapozgatós Csoportválasztó Kaland
          </h1>
          <p className="text-gray-400 text-xs mt-1 max-w-md mx-auto">
            Segítünk megtalálni a hozzád vagy gyermekedhez leginkább illő edzést.
          </p>
        </div>

        {/* KEZDŐKÉPERNYŐ */}
        {!teljesOldalas && !elinditva && aktualisId === 0 && (
          <div className="w-full mb-8">
            <div className="bg-gradient-to-br from-gray-950 via-black to-gray-900 border border-neon-orange/20 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-6 text-neon-orange/5 pointer-events-none">
                <HelpCircle size={140} className="transform rotate-12" />
              </div>
              <div className="inline-flex items-center gap-1.5 bg-neon-orange/10 border border-neon-orange/20 text-neon-orange text-xs font-black tracking-widest uppercase px-3 py-1 rounded-full mb-4">
                <Sparkles size={12} /> Közösségi Kalandtérkép
              </div>
              
              <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight max-w-3xl mx-auto mb-4 leading-tight">
                Fedezd fel, milyen <span className="text-neon-orange">Tigris</span> lakik bennetek!
              </h2>
              <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
                Nem kell látatlanban sportágat választanod. Játszd végig a rövid történetet, és nézzük meg, melyik edzésünk és közösségünk passzol leginkább a személyiségedhez!
              </p>
              
              <button 
                onClick={() => { setElinditva(true); setAktualisId(0); }}
                className="bg-neon-orange hover:bg-orange-600 text-black font-black px-8 py-4 rounded-xl text-md transition-all duration-200 hover:scale-105 shadow-lg shadow-neon-orange/20 max-w-xs mx-auto block w-full"
              >
                🔥 Indítás: Belépés a Tigris-Dojangba
              </button>
            </div>
          </div>
        )}

        {/* JÁTÉK/KÉRDÉS FÁZIS */}
        {elinditva && aktualisKerdes && aktualisId !== 999 && (
          <div className="w-full">
            <div className="w-full bg-gray-900 rounded-full h-2 mb-6 border border-gray-800 relative">
              <div
                className="bg-neon-orange h-2 rounded-full transition-all duration-300 shadow-[0_0_8px_rgba(249,115,22,0.6)]"
                style={{ width: `${progresszSzazalek}%` }}
              />
            </div>

            <div className="bg-gray-950 border border-gray-900 rounded-2xl p-6 sm:p-10 text-center shadow-xl relative min-h-[360px] flex flex-col justify-center">
              {aktivVisszajelzes ? (
                <div className="animacio-szoveg-villanas space-y-4 py-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-neon-orange/10 text-neon-orange">
                    <ShieldCheck size={28} />
                  </div>
                  <p className="text-white font-bold text-lg sm:text-2xl max-w-2xl mx-auto leading-relaxed px-2">
                    {aktivVisszajelzes}
                  </p>
                  <p className="text-xs text-gray-500 uppercase tracking-widest animate-pulse pt-2">
                    Következő állomás előkészítése...
                  </p>
                </div>
              ) : (
                <div className="w-full text-left">
                  <span className="text-xs font-black text-neon-orange uppercase tracking-widest block mb-2 text-center sm:text-left">
                    {aktualisKerdes.szekcio === "start" ? "A kaland kezdete" : aktualisKerdes.szekcio === "ovis" ? "🦁 Ovis Fejezet" : "🦅 Junior & Felnőtt Fejezet"}
                  </span>
                  <h2 className="text-lg sm:text-2xl font-black mb-6 text-white tracking-tight leading-snug text-center sm:text-left">
                    {aktualisKerdes.cim}
                  </h2>

                  <div className="grid gap-3">
                    {aktualisKerdes.lehetosegek.map((o: any, index: number) => (
                      <button
                        key={index}
                        disabled={atmenetFolyamatban}
                        onClick={() => handleValasztas(o)}
                        className="text-left p-4 rounded-xl bg-black border border-gray-900 text-gray-200 hover:bg-neon-orange hover:text-black hover:border-neon-orange font-bold transition-all duration-150 text-sm sm:text-base active:scale-95 flex items-center justify-between group"
                      >
                        <span className="pr-4">{o.felirat}</span>
                        <ArrowRight size={18} className="text-gray-700 group-hover:text-black shrink-0 transition-colors" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* FINÁLÉ / EREDMÉNYOLDAL */}
        {aktualisId === 999 && gyoztesKarakter && EREDMENYEK[gyoztesKarakter] && (
          <div className="bg-gray-950 border border-gray-900 rounded-2xl p-6 sm:p-10 shadow-2xl pb-12">
            {!urlapLathato ? (
              <>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-neon-orange/10 text-neon-orange mb-3 mx-auto flex">
                  <Award size={28} />
                </div>
                <span className="text-xs font-black text-center block text-neon-orange uppercase tracking-widest">Kaland befejezve. Az eredményed:</span>
                
                <h2 className="text-3xl sm:text-4xl font-black text-center text-white uppercase tracking-tight mt-1 border-b border-gray-900 pb-5">
                  {EREDMENYEK[gyoztesKarakter].titulus} <span className="text-neon-orange">vagy!</span>
                </h2>

                {/* DIGITÁLIS SZÁZALÉKOS TIGRIS PROFIL */}
                <div className="mt-8 bg-black border border-gray-900 rounded-2xl p-6">
                  <h3 className="font-black text-white text-xs uppercase tracking-wider mb-4 flex items-center gap-2">
                    <BarChart3 size={16} className="text-neon-orange" /> A te egyedi Tigris Profilod:
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-xs font-bold mb-1">
                        <span className="text-gray-300">Tradicionális Taekwon-do</span>
                        <span className="text-neon-orange font-black">{profilSzazalekok.taekwon_do}%</span>
                      </div>
                      <div className="w-full bg-gray-900 h-2.5 rounded-full overflow-hidden">
                        <div className="bg-neon-orange h-full rounded-full transition-all duration-1000" style={{ width: `${profilSzazalekok.taekwon_do}%` }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-bold mb-1">
                        <span className="text-gray-300">Kick-box Forma (Akrobatika & Fegyverek)</span>
                        <span className="text-orange-400 font-black">{profilSzazalekok.kick_box_forma}%</span>
                      </div>
                      <div className="w-full bg-gray-900 h-2.5 rounded-full overflow-hidden">
                        <div className="bg-orange-500 h-full rounded-full transition-all duration-1000" style={{ width: `${profilSzazalekok.kick_box_forma}%` }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-bold mb-1">
                        <span className="text-gray-300">Ovis mozgásfejlesztés</span>
                        <span className="text-yellow-500 font-black">{profilSzazalekok.ovis_tkd}%</span>
                      </div>
                      <div className="w-full bg-gray-900 h-2.5 rounded-full overflow-hidden">
                        <div className="bg-yellow-500 h-full rounded-full transition-all duration-1000" style={{ width: `${profilSzazalekok.ovis_tkd}%` }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* MIÉRT EZT KAPTAD & MIT FOGSZ SZERETNI BLOKK */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-black border border-gray-900 p-5 rounded-xl">
                    <h3 className="font-black text-white text-xs uppercase tracking-wider mb-3 flex items-center gap-1.5 text-neon-orange">
                      🐯 Miért ezt kaptad?
                    </h3>
                    <ul className="space-y-2">
                      {EREDMENYEK[gyoztesKarakter].tulajdonsagok.map((t, idx) => (
                        <li key={idx} className="text-xs sm:text-sm text-gray-300 flex items-start gap-2">
                          <span className="text-neon-orange font-bold shrink-0">✓</span> {t}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-black border border-gray-900 p-5 rounded-xl">
                    <h3 className="font-black text-white text-xs uppercase tracking-wider mb-3 flex items-center gap-1.5 text-neon-orange">
                      🥋 Mit fogsz imádni nálunk?
                    </h3>
                    <ul className="space-y-2">
                      {EREDMENYEK[gyoztesKarakter].imadnivalo.map((im, idx) => (
                        <li key={idx} className="text-xs sm:text-sm text-gray-300 flex items-start gap-2">
                          <span className="text-neon-orange text-lg leading-none shrink-0">•</span> {im}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* AJÁNLÁS & POÉN */}
                <div className="mt-4 p-5 bg-black border border-gray-900 rounded-xl space-y-3">
                  <div>
                    <h4 className="font-black text-gray-400 text-xs uppercase tracking-wider mb-1">Neked javasolt szakosztály:</h4>
                    <p className="text-gray-200 text-sm sm:text-base font-bold">
                      {EREDMENYEK[gyoztesKarakter].cim}
                    </p>
                    <p className="text-gray-400 text-xs sm:text-sm mt-1 leading-relaxed">
                      {EREDMENYEK[gyoztesKarakter].leiras}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-gray-900 text-xs text-gray-500 italic">
                    📌 {EREDMENYEK[gyoztesKarakter].poen}
                  </div>
                </div>

                {/* MEGOSZTÁS GOMB */}
                <div className="mt-6 p-4 bg-gradient-to-r from-gray-950 to-gray-900 border border-gray-900 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <h4 className="text-sm font-black text-white uppercase">Megmutatnád másoknak is?</h4>
                    <p className="text-xs text-gray-500">Másold ki a Tigris Profilod, és küldd el ismerőseidnek!</p>
                  </div>
                  <button
                    onClick={handleMegosztas}
                    className="bg-gray-900 hover:bg-black border border-gray-800 text-gray-200 hover:text-white px-4 py-2.5 rounded-lg text-xs font-black flex items-center gap-1.5 transition-all shrink-0 active:scale-95"
                  >
                    <Share2 size={14} className="text-neon-orange" />
                    {megosztvaStatusz ? "✓ Másolva a vágólapra!" : "Profil másolása küldéshez"}
                  </button>
                </div>

                {/* AKCIÓGOMBOK */}
                <div className="flex flex-col gap-3 mt-8">
                  <button 
                    onClick={handleUrlapMegnyitas}
                    className="w-full bg-neon-orange hover:bg-orange-600 text-black font-black p-4 rounded-xl text-center text-base transition-all shadow-xl shadow-neon-orange/20 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-95 group"
                  >
                    <span>🎁 Jelentkezem ingyenes próba hétre a(z) {EREDMENYEK[gyoztesKarakter].cim}-hoz</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={handleAlaphelyzet}
                    className="text-xs font-black text-gray-500 hover:text-white transition-colors flex items-center justify-center gap-1.5 mt-2 mx-auto"
                  >
                    <RotateCcw size={12} /> Újra elölről kezdem
                  </button>
                </div>
              </>
            ) : (
              
              /* REGISZTRÁCIÓS ŰRLAP */
              <div className="w-full">
                {!urlapElkuldve ? (
                  <div className="space-y-6">
                    <div className="bg-red-950/20 border border-red-900/40 p-3 rounded-xl flex items-center justify-center gap-2 text-red-400 text-xs font-black tracking-wider animate-pulse uppercase">
                      <Clock size={16} />
                      Ebben a hónapban már csak {szabadHelyek} szabad helyünk maradt az edzéseken!
                    </div>

                    <form onSubmit={handleUrlapKuldes} className="space-y-4">
                      <div className="text-center">
                        <h3 className="text-xl font-black uppercase tracking-tight text-white">Próbahetek Aktiválása</h3>
                        <p className="text-xs text-gray-400 mt-1">Próbáld ki a hozzád illő csoportot kötelezettségek nélkül.</p>
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-black uppercase text-gray-400 block">Neved (vagy gyermeked neve):</label>
                        <div className="relative">
                          <User className="absolute left-3 top-3.5 h-4 w-4 text-gray-500" />
                          <input 
                            type="text" required placeholder="Minta János" value={urlapAdat.nev}
                            onChange={(e) => setUrlapAdat({...urlapAdat, nev: e.target.value})}
                            className="w-full bg-black border border-gray-900 rounded-xl py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-neon-orange"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-black uppercase text-gray-400 block">Telefonszámod (időpontegyeztetéshez):</label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3.5 h-4 w-4 text-gray-500" />
                          <input 
                            type="tel" required placeholder="+36 20 123 4567" value={urlapAdat.telefon}
                            onChange={(e) => setUrlapAdat({...urlapAdat, telefon: e.target.value})}
                            className="w-full bg-black border border-gray-900 rounded-xl py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-neon-orange"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-black uppercase text-gray-400 block">Kiválasztott csoportod:</label>
                        <div className="relative">
                          <GraduationCap className="absolute left-3 top-3.5 h-4 w-4 text-gray-500" />
                          <select 
                            value={urlapAdat.korosztaly}
                            onChange={(e) => setUrlapAdat({...urlapAdat, korosztaly: e.target.value})}
                            className="w-full bg-black border border-gray-900 rounded-xl py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-neon-orange appearance-none"
                          >
                            <option>Ovis Taekwon-do (4-7 év, külön helyszínen)</option>
                            <option>Összevont Iskolás / Felnőtt Taekwon-do (4 szinten)</option>
                            <option>Kick-box Formagyakorlat (Akrobatika & Fegyverek)</option>
                          </select>
                        </div>
                      </div>

                      <div className="bg-black border border-gray-900 rounded-xl p-3 text-xs space-y-1.5 text-gray-400">
                        <div className="font-black text-neon-orange uppercase text-[10px] tracking-wider">Mit tartalmaz a próbaidőszak?</div>
                        <div>✓ 1 teljes hét korlátlan edzéslátogatás a kiválasztott csoportban</div>
                        <div>✓ Segítünk beilleszkedni az első perctől kezdve</div>
                      </div>

                      <div className="pt-2 flex gap-3">
                        <button 
                          type="button" onClick={() => setUrlapLathato(false)}
                          className="border border-gray-800 text-gray-400 px-4 py-3 rounded-xl text-sm font-bold hover:bg-gray-900"
                        >
                          Vissza
                        </button>
                        <button 
                          type="submit" 
                          className="flex-1 bg-neon-orange hover:bg-orange-600 text-black font-black py-3 rounded-xl text-sm transition-all shadow-md shadow-neon-orange/10"
                        >
                          Helyem biztosítása 0 Ft-ért
                        </button>
                      </div>
                    </form>
                  </div>
                ) : (
                  <div className="text-center py-6 space-y-4">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-neon-orange/10 border border-neon-orange/20 text-neon-orange mb-2">
                      <Flame size={32} className="animate-pulse" />
                    </div>
                    <h3 className="text-2xl font-black text-white uppercase tracking-tight">Sikeres jelentkezés!</h3>
                    <p className="text-sm text-gray-300 max-w-sm mx-auto leading-relaxed">
                      Kedves <strong className="text-white">{urlapAdat.nev}</strong>! Sikerrel lefoglaltad a helyed. Hamarosan keresni fogunk a <strong className="text-neon-orange">{urlapAdat.telefon}</strong> számodon, hogy egyeztessük az első ingyenes edzésed időpontját!
                    </p>
                    <div className="pt-4">
                      <button 
                        onClick={handleAlaphelyzet}
                        className="border border-gray-800 px-6 py-3 rounded-xl text-sm font-bold text-gray-400 hover:text-white"
                      >
                        Bezárás
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* HITELLESÍTŐ ÉRTÉKELÉSI SZALAG (Tökéletesített szélességgel és lassítással) */}
      <div className="w-full bg-gray-950 border-t border-b border-gray-900 py-6 mt-16 overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        
        <div className="whitespace-nowrap animacio-szalag flex items-center gap-6">
          {[...VELEMENYEK, ...VELEMENYEK, ...VELEMENYEK].map((v, i) => (
            <div 
              key={i} 
              className="inline-block bg-black border border-gray-900 px-6 py-4 rounded-xl min-w-[280px] sm:min-w-[460px] max-w-[520px] whitespace-normal align-top shadow-xl"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] font-black uppercase text-neon-orange bg-neon-orange/10 px-2 py-0.5 rounded tracking-wider">
                  {v.celcsoport}
                </span>
                <div className="flex items-center gap-0.5 text-neon-orange drop-shadow-[0_0_4px_rgba(249,115,22,0.5)]">
                  <Star className="w-3.5 h-3.5 fill-neon-orange" />
                  <Star className="w-3.5 h-3.5 fill-neon-orange" />
                  <Star className="w-3.5 h-3.5 fill-neon-orange" />
                  <Star className="w-3.5 h-3.5 fill-neon-orange" />
                  <Star className="w-3.5 h-3.5 fill-neon-orange" />
                </div>
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
