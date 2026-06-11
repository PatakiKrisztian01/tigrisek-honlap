import React, { useMemo, useState, useEffect } from "react";
import { ArrowRight, RotateCcw, HelpCircle, CheckCircle2, User, Phone, GraduationCap, ShieldCheck, Sparkles, Flame, Clock } from "lucide-react";

type KarakterTipus = "ovis_tkd" | "taekwon_do" | "kick_box_forma";

interface ValasztoProps {
  teljesOldalas?: boolean;
}

// LAPOZGATÓS KÖNYV STRUKTÚRA (Dinamikus Kérdésfa)
const ENYEM_A_DÖNTES_KONYV = {
  // 1. KÉRDÉS: A KÖZÖS INDULÓPONT
  0: {
    id: 0,
    szekcio: "start",
    cim: "1. ÁLLOMÁS: A belépő – Ki lép be ma a Tigris-barlang kapuján?",
    lehetosegek: [
      { felirat: "🦁 Egy apró, de annál hangosabb mini-Tigris (4–7 éves ovis szülője vagyok).", kovetkezo: 101, pontok: { ovis_tkd: 5 } },
      { felirat: "🦅 Egy energiabomba diák, aki az iskolapad után végre le akarja tarolni a tatamit.", kovetkezo: 201, pontok: { taekwon_do: 2 } },
      { felirat: "🥋 Felnőttként, megfontoltan érkezem – szeretném a nulláról felépíteni a fizikumom vagy régi motorosként visszatérni.", kovetkezo: 201, pontok: { taekwon_do: 2 } },
      { felirat: "⚡ Egy igazi lázadó tehetség (vagy a szülője), aki unja a sablonos sportokat, és valami látványosat keres.", kovetkezo: 201, pontok: { kick_box_forma: 3 } },
    ]
  },

  // --- 「A」 FEJEZET: AZ OVISOK KALANDJA (100-as ID-k) ---
  101: {
    id: 101,
    szekcio: "ovis",
    cim: "2. ÁLLOMÁS: Fizikai adottságok – Képes már a gyerkőc egy szabályos cigánykerékre vagy komolyabb ugrásra?",
    lehetosegek: [
      { felirat: "🤸 Igen! Simán tolja a cigánykereket, pörög-forog, elképesztő a mozgáskoordinációja ovis létére.", visszajelzes: "Wow! Ez ritka kincs ebben a korban. Belőle hatalmas akrobata és Kick-box formagyakorlat bajnok válhat nálunk!", kovetkezo: 102, pontok: { kick_box_forma: 8 } },
      { felirat: "🏃 Még nem tud cigánykerekezni, de megállíthatatlanul fut, ugrik, mászik és lebontja a házat.", visszajelzes: "Akkor az energiái megvannak! Csatornázzuk be ezt a tüzet a Taekwon-do alapjaival.", kovetkezo: 102, pontok: { ovis_tkd: 4 } },
      { felirat: "🧸 Inkább megfontoltabb, óvatosabb mozgású, néha még picit bizonytalan az egyensúlya.", visszajelzes: "A legjobb időszak az egyensúly és a koordináció finomhangolására az ovis csoportunkban.", kovetkezo: 102, pontok: { ovis_tkd: 4 } },
      { felirat: "📺 Csak akkor pörög fel, ha a kedvenc mesehőseit utánozza a nappali közepén.", visszajelzes: "A belső motiváció már ott van! Élőben még nagyobb élmény lesz hősnek lenni.", kovetkezo: 102, pontok: { ovis_tkd: 3, kick_box_forma: 1 } },
    ]
  },
  102: {
    id: 102,
    szekcio: "ovis",
    cim: "3. ÁLLOMÁS: Mentális fókusz – Hogyan reagál a kis Tigris, ha szabályokat vagy feladatokat kap?",
    lehetosegek: [
      { felirat: "🎭 Néha hajlamos színházat játszani vagy dacolni, ha nem az van, amit ő akar.", visszajelzes: "A fegyelmet nálunk játékosan, de határozottan tanulják meg a kortárs közösségben.", kovetkezo: 103, pontok: { ovis_tkd: 4 } },
      { felirat: "🎯 Szépen figyel, de nagyjából 5 perc után elterelődik a figyelme valami újra.", visszajelzes: "Teljesen normális ovis adottság. Az edzések struktúrája pont a fókuszidőt nyújtja meg.", kovetkezo: 103, pontok: { ovis_tkd: 4 } },
      { felirat: "🤝 Nagyon tisztelettudó, imádja a dicséretet és büszke, ha jól teljesít egy feladatot.", visszajelzes: "Ez a tökéletes Taekwon-do szellem alapja. Imádni fogja az edzéseket!", kovetkezo: 103, pontok: { ovis_tkd: 4, taekwon_do: 1 } },
      { felirat: "⚡ Csak akkor hajlandó koncentrálni, ha az pörgős, izgalmas vagy zenei ritmusra épül.", visszajelzes: "A ritmusérzék és a dinamika nálunk kiemelt szerepet kap a mozgásfejlesztésben.", kovetkezo: 103, pontok: { kick_box_forma: 4 } },
    ]
  },
  103: {
    id: 103,
    szekcio: "ovis",
    cim: "4. ÁLLOMÁS: Társasági dinamika – Mennyire magabiztos a többi gyerek között?",
    lehetosegek: [
      { felirat: "📣 Ő a hangadó, minden játékban az élre tör, igazi vezéregyéniség.", visszajelzes: "A jó vezetői képességekhez fegyelem és tartás kell. Jó helyen lesz a Tigriseknél!", kovetkezo: 104, pontok: { ovis_tkd: 3, kick_box_forma: 2 } },
      { felirat: "🌸 Picit visszahúzódóbb, csendes, szüksége van egy kis időre, amíg feloldódik.", visszajelzes: "A küzdősport biztonságos környezetet ad. Lépésről lépésre fog kinyílni a gyerkőc.", kovetkezo: 104, pontok: { ovis_tkd: 5 } },
      { felirat: "🤹 Szuper barátkozó, mindenkivel azonnal megtalálja a közös hangot.", visszajelzes: "A 18. kerületi ovis csapatunk családias hangulata pont az ilyen nyitott gyerkőcök kedvence.", kovetkezo: 104, pontok: { ovis_tkd: 4 } },
      { felirat: "🦾 Szereti megmutatni az erejét, néha picit túlzottan is domináns akar lenni.", visszajelzes: "Megtanítjuk a kontrollt és a tiszteletet, hogy az erejét védelemre, ne rombolásra használja.", kovetkezo: 104, pontok: { ovis_tkd: 4 } },
    ]
  },
  104: {
    id: 104,
    szekcio: "ovis",
    cim: "5. ÁLLOMÁS: Eszközök és érdeklődés – Mi indítja be leginkább a fantáziáját?",
    lehetosegek: [
      { felirat: "🎨 A színes, kreatív dolgok, a ritmusok, a zene és a pörgős játékok.", visszajelzes: "A kreativitás az akrobatikus formák alapja, ezt komolyan kamatoztatni tudja.", kovetkezo: 105, pontok: { kick_box_forma: 4 } },
      { felirat: "🛡️ A lovagok, szuperhősök, a klasszikus küzdelem és az önvédelmi mozdulatok.", visszajelzes: "A Taekwon-do szellemisége pontosan a modern kor szuperhőseit neveli ki.", kovetkezo: 105, pontok: { ovis_tkd: 4 } },
      { felirat: "🧸 Mindenféle tárgy, bot vagy játék megpörgetése, dobálása és elkapása.", visszajelzes: "Ez a fajta manipulációs készség később a fegyveres formagyakorlatoknál (bot, nunchaku) aranyat ér!", kovetkezo: 105, pontok: { kick_box_forma: 5 } },
      { felirat: "🥋 Maga az egyenruha (Do-Bok) és a színes övek világa nyűgözi le.", visszajelzes: "A tradicionális értékek és az övvizsgák rendszere már most motiválja őt.", kovetkezo: 105, pontok: { ovis_tkd: 4 } },
    ]
  },
  105: {
    id: 105,
    szekcio: "ovis",
    cim: "6. ÁLLOMÁS: A jövőbeli dicsőségfal – Szülőként melyik pillanattól libabőrözne a hátad egy év múlva?",
    lehetosegek: [
      { felirat: "🥇 Amikor a gyerkőcöm magabiztosan kiáll a tatamira, és egy látványos, zenés bemutatóval lenyűgözi a nézőket.", visszajelzes: "A színpadi kiállás és a gátlások legyőzése a formagyakorlat águnk legnagyobb ajándéka.", kovetkezo: 106, pontok: { kick_box_forma: 5 } },
      { felirat: "🥋 Amikor az edzője ünnepélyesen átadja neki az első hivatalos ovis Taekwon-do csíkját vagy fokozatát.", visszajelzes: "A megdolgozott siker íze. Csodálatos mérföldkő lesz a gyerkőc életében.", kovetkezo: 106, pontok: { ovis_tkd: 5 } },
      { felirat: "😊 Amikor látom, hogy kihúzott gerinccel, magabiztosan sétál be az óvodába/iskolába, mert meg tudja védeni magát.", visszajelzes: "A belső tartás a legjobb pajzs az életben. Erre rakjuk le az alapokat.", kovetkezo: 106, pontok: { ovis_tkd: 4 } },
      { felirat: "🛌 Amikor az edzés után hazaérve megeszi az összes vacsoráját, és este 8-kor magától, mosolyogva elalszik.", visszajelzes: "Garantáljuk, hogy a felesleges energiákat maximálisan, hasznosan fogja levezetni nálunk!", kovetkezo: 106, pontok: { ovis_tkd: 4, kick_box_forma: 2 } },
    ]
  },
  106: {
    id: 106,
    szekcio: "ovis",
    cim: "7. ÁLLOMÁS: A Tigris-Kód – Mi a legfőbb belső érték, amit szeretnél, ha gyermeked magával vinne az edzőteremből?",
    lehetosegek: [
      { felirat: "🧠 Megrendíthetetlen belső fegyelem, koncentráció és a felnőttek/társak iránti maximális tisztelet.", visszajelzes: "A Budapesti Tigriseknél a tisztelet az első és az utolsó lecke is. Ez nálunk alapérték.", kovetkezo: 999, pontok: { ovis_tkd: 5 } },
      { felirat: "✨ A lámpaláz teljes hiánya, kreativitás és a bátorság, hogy megmutassa a tudását a világnak.", visszajelzes: "A formagyakorlatok pontosan ezt a fajta extra magabiztosságot és expresszivitást építik fel.", kovetkezo: 999, pontok: { kick_box_forma: 5 } },
      { felirat: "🛡️ Olyan fizikai és verbális önvédelmi készség, ami miatt szülőként sosem kell aggódnom miatta.", visszajelzes: "A biztonságérzet alapvető jog. Megtanítjuk emelt fővel kezelni a konfliktusokat.", kovetkezo: 999, pontok: { ovis_tkd: 4 } },
      { felirat: " Családias, támogató közösségi élmény, ahol barátokra lel és imád sportolni.", visszajelzes: "Nálunk nincsenek klikkesedések, egy nagy Tigris-család vagyunk a 18. kerületben.", kovetkezo: 999, pontok: { ovis_tkd: 3, kick_box_forma: 2 } },
    ]
  },

  // --- 「B」 FEJEZET: JUNIOR & FELNŐTT KALAND (200-as ID-k) ---
  201: {
    id: 201,
    szekcio: "felnott",
    cim: "2. ÁLLOMÁS: Ritmus és Koordináció – Ha megszólal egy jó ütemű, pörgős zene, hogyan reagál a tested?",
    lehetosegek: [
      { felirat: "🎵 Azonnal elkap a ritmus, ösztönösen mozgok, kiváló a ritmusérzékem.", visszajelzes: "Tökéletes! A Kick-box formagyakorlat (Musical Forms) alapja a zene és a mozgás precíz szinkronja.", kovetkezo: 202, pontok: { kick_box_forma: 5 } },
      { felirat: "🥋 Nem a zene érdekel, én a belső csendre, a maximális fókuszra és a tiszta technikára törekszem.", visszajelzes: "A tradicionális ITF Taekwon-do pontosan ezt a tiszta, meditatív, mégis robbanékony fókuszt adja meg.", kovetkezo: 202, pontok: { taekwon_do: 5 } },
      { felirat: "🔄 Képes vagyok egyszerre több dologra figyelni, jó az agy-izom kapcsolatom és a koordinációm.", visszajelzes: "A magas szintű koordináció nálunk mindkét szakosztályban hatalmas előnyt jelent.", kovetkezo: 202, pontok: { kick_box_forma: 3, taekwon_do: 3 } },
      { felirat: "🪵 Jelenleg kicsit rozsdásnak érzem magam, de a reflexeim és az elszántságom abszolút a helyén vannak.", visszajelzes: "Ne aggódj! Az összevont edzéseinken 4 különböző tudásszint van, teljesen a nulláról építünk fel.", kovetkezo: 202, pontok: { taekwon_do: 4 } },
    ]
  },
  202: {
    id: 202,
    szekcio: "felnott",
    cim: "3. ÁLLOMÁS: Fizikai vágyak és Akrobatika – Ha látsz egy filmet, ahol fegyverekkel (bottal, nunchakuval) csinálnak szaltókat, mi az első gondolatod?",
    lehetosegek: [
      { felirat: "🤩 Úristen, ezt nekem is meg kell tanulnom! Elképesztő a show, a botozás és a kardok forgatása.", visszajelzes: "Ez az! Nálunk a kick-box formagyakorlatokon pontosan nunchakuval, bottal és karddal dolgozunk, ráadásul ez egy hivatalos versenyszám is!", kovetkezo: 203, pontok: { kick_box_forma: 6 } },
      { felirat: "🥋 Látványos, de én a puszta kezes és lábas, tradicionális és pusztító erejű technikákat akarom uralni.", visszajelzes: "A Taekwon-do a puszta kéz és láb művészete. A fizikai rombolóerő és kontroll tökéletes egyensúlya.", kovetkezo: 203, pontok: { taekwon_do: 5 } },
      { felirat: "🤸 Vonzanak az akrobatikus elemek, a cigánykerék, a pörgések, de fegyverek nélkül is szívesen csinálnám.", visszajelzes: "A modern küzdősportok látványvilágát nálunk mindkét ágon maximálisan megtalálod.", kovetkezo: 203, pontok: { kick_box_forma: 4, taekwon_do: 2 } },
      { felirat: "🛡️ Menő, de engem sokkal inkább a gyakorlatias, sallangmentes utcai önvédelem és a hatékonyság érdekel.", visszajelzes: "A Taekwon-do bázisán alapuló önvédelmi technikáink pontosan a valós stresszhelyzetek megoldására épülnek.", kovetkezo: 203, pontok: { taekwon_do: 5 } },
    ]
  },
  203: {
    id: 203,
    szekcio: "felnott",
    cim: "4. ÁLLOMÁS: A gravitációs kihívás – Milyen mozgásforma indítja be igazán a motorodat?",
    lehetosegek: [
      { felirat: "🦅 A magasba törő ugrások, tengely körüli pörgések és a látványos akrobatika – minél kevesebbet vagyok a földön, annál jobb.", visszajelzes: "A repülő technikák és a trükközés a formagyakorlat águnk ékkövei.", kovetkezo: 204, pontok: { kick_box_forma: 5 } },
      { felirat: "🧱 A sziklaszilárd talajfogás, a tűpontos, egyenes vonalú formagyakorlatok és a megrendíthetetlen egyensúly.", visszajelzes: "A Taekwon-do erőtörései és tradicionális mintagyakorlatai (Tul) pontosan ezt a masszív stabilitást követelik meg.", kovetkezo: 204, pontok: { taekwon_do: 5 } },
      { felirat: "🥊 A pörgős, folyamatos, dinamikus kardió edzés, ahol teljesen ki lehet izzadni a mindennapi stresszt.", visszajelzes: "Készítsd a törölközőt, a Budapesti Tigrisek edzésein garantáltan új fokozatba kapcsol az anyagcseréd!", kovetkezo: 204, pontok: { taekwon_do: 3, kick_box_forma: 2 } },
      { felirat: "🧘 A fokozatos, ízületkímélő, de hatékony átmozgatás, ami visszaadja a testem rugalmasságát.", visszajelzes: "Tökéletes. Mivel 4 külön szintű edzésünk van az összevont csoporton belül, a kezdőkkel az alapoktól, biztonságosan indulunk.", kovetkezo: 204, pontok: { taekwon_do: 4 } },
    ]
  },
  204: {
    id: 204,
    szekcio: "felnott",
    cim: "5. ÁLLOMÁS: Lámpaláz és Kiállás – Mennyire mersz kiállni mások elé, vagy a középpontban lenni?",
    lehetosegek: [
      { felirat: "🎭 Imádom a reflektorfényt, a tapsot, és kifejezetten motivál, ha a közönség engem figyel.", visszajelzes: "Benned egy igazi showman lakik! A Kick-box forma versenyeken a bírók és a nézők tágra nyílt szemmel fognak figyelni.", kovetkezo: 205, pontok: { kick_box_forma: 6 } },
      { felirat: "🥋 Meg tudom csinálni, de nekem kell a tiszta struktúra, a szabályok és a hivatalos keretek (pl. egy övvizsga), ami tartást ad.", visszajelzes: "A Taekwon-do hierarchiája és vizsgarendszere sziklaszilárd keretet biztosít az egyéni fejlődésednek.", kovetkezo: 205, pontok: { taekwon_do: 5 } },
      { felirat: "🍃 Inkább a háttérből figyelek, nem vágyom a reflektorfényre, magamnak akarok bizonyítani.", visszajelzes: "Ez a bölcs harcos hozzáállása. Nálunk nem kell színészkedni, önmagad legjobb verziója a cél.", kovetkezo: 205, pontok: { taekwon_do: 4 } },
      { felirat: "⛓️ Régen magabiztos voltam, de a stresszes mindennapok miatt ezt most teljesen újra fel kell építenem.", visszajelzes: "A küzdősport a lélek legjobb orvosa. Vissza fogjuk adni a hitedet a saját erődben!", kovetkezo: 205, pontok: { taekwon_do: 4, kick_box_forma: 1 } },
    ]
  },
  205: {
    id: 205,
    szekcio: "felnott",
    cim: "6. ÁLLOMÁS: A jövőbeli dicsőségfal – Ha elképzeled magad egy év múlva, melyik pillanattól dobbanna meg a szíved?",
    lehetosegek: [
      { felirat: "🎵 Megszólal a zene, a fényszórók rám vetülnek, bemutatom a fegyveres akrobatikámat, a végén pedig felrobban a terem.", visszajelzes: "A Musical Forms kategória pontosan ezt a libabőrös élményt nyújtja minden egyes alkalommal.", kovetkezo: 206, pontok: { kick_box_forma: 5 } },
      { felirat: "📜 Az edzőm a felsorakoztatott csapat előtt ünnepélyesen felköti a derekamra a kemény munkával megszerzett következő övemet.", visszajelzes: "A hivatalos nemzetközi övvizsgák rangja nálunk életre szóló büszkeséget ad.", kovetkezo: 206, pontok: { taekwon_do: 5 } },
      { felirat: "🔥 Amikor a tükörbe nézek, és egy szálkás, robbanékony, energiától kicsattanó embert látok az irodai fáradtság helyett.", visszajelzes: "A tükör nem fog hazudni. A 18. kerületi edzőtermünkben teljesen átalakul a fizikumod.", kovetkezo: 206, pontok: { taekwon_do: 4, kick_box_forma: 2 } },
      { felirat: "🤝 Hogy egy olyan baráti és összetartó közösség része vagyok, akikkel az edzésen kívül is számíthatunk egymásra.", visszajelzes: "A Budapesti Tigrisek nem csak egy klub, ez egy igazi, egymást emelő család.", kovetkezo: 206, pontok: { taekwon_do: 4 } },
    ]
  },
  206: {
    id: 206,
    szekcio: "felnott",
    cim: "7. ÁLLOMÁS: A Tigris-Kód – Mi a legfőbb belső érték, amit magaddal akarsz vinni a mindennapokba?",
    lehetosegek: [
      { felirat: "✨ A lámpaláz és a gátlások teljes megsemmisítése: merjek kiállni, beszélni és szerepelni bárki előtt az életben.", visszajelzes: "A színpadi és tatami rutin olyan magabiztosságot ad, amit a tárgyalóteremben vagy az iskolában is kamatoztatsz.", kovetkezo: 999, pontok: { kick_box_forma: 5 } },
      { felirat: "🧠 Megingathatatlan önfegyelem, morális tartás és az a tiszteletadás, ami kiemel a szürke hétköznapokból.", visszajelzes: "A Taekwon-do öt tana (Önfegyelem, Becsületesség, Kitartás, Udvariasság, Elszántság) vezetni fog az életben.", kovetkezo: 999, pontok: { taekwon_do: 5 } },
      { felirat: "🛡️ A szilárd tudat, hogy vészhelyzetben képes vagyok megvédeni magamat és a szeretteimet is.", visszajelzes: "A leghatékonyabb önvédelem a magabiztos kisugárzás, amivel a bajt már előre elkerülöd.", kovetkezo: 999, pontok: { taekwon_do: 5 } },
      { felirat: "🔋 Maximális stresszlevezetés, mentális feltöltődés és tiszta, pozitív energiák a hétvégi pörgéshez.", visszajelzes: "A legjobb feszültségoldó a küzdősport. Kiütjük a stresszt a mindennapokból!", kovetkezo: 999, pontok: { taekwon_do: 3, kick_box_forma: 3 } },
    ]
  }
};

const EREDMENYEK = {
  ovis_tkd: {
    id: "ovis_tkd",
    cim: "Ovis ITF Taekwon-do szakosztály",
    sportag: "Speciális Ovis Csoport (Külön Helyszínen!)",
    miert: "A válaszaid alapján a gyerkőc számára a Budapesti Tigrisek kifejezetten ovisoknak dedikált Taekwon-do programja a tökéletes választás! Mivel ez egy külön, kifejezetten nekik kialakított helyszínen fut, a környezet maximálisan biztonságos és játékos. Itt a harcművészet alapjaival finomhangoljuk a kicsik fókuszidejét, mozgáskoordinációját és tisztelettudatát, felkészítve őket az élet és az iskola kihívásaira.",
    indulas: "Szeleburdi figyelem, otthoni kanapérobbantás, digitális képernyők túlzott vonzása.",
    erkezes: "Megnyúlt fókuszidő, tisztelettudó viselkedés, koordinált mozgás és esti gyors elalvás.",
    poen: "Mellékhatásként a gyerkőc otthon is meglepő fegyelemmel fog rendet rakni a játékai között."
  },
  taekwon_do: {
    id: "taekwon_do",
    cim: "Tradicionális ITF Taekwon-do szakosztály",
    sportag: "Összevont Iskolás & Felnőtt Edzés (4 Különböző Szinttel!)",
    miert: "Neked vagy a gyermekednek a tiszta struktúra, a fegyelem és a tradicionális értékek a legfontosabbak. A Budapesti Tigrisek összevont Taekwon-do edzésein a termen belül 4 teljesen különböző tudásszintre bontva dolgozunk, így a legkezdőbbtől a haladóig mindenki a saját tempójában fejlődik. A puszta kezes és lábas technikák, a hivatalos nemzetközi övvizsgák és a gyakorlati önvédelem sziklaszilárd belső tartást adnak.",
    indulas: "Irodai vagy iskolai stressz, bizonytalan állóképesség, céltalan mozgásformák.",
    erkezes: "Kihúzott gerinc, tiszta és fegyelmezett fókusz, magas szintű rúgástechnika és magabiztosság.",
    poen: "Diagnózis: Hamarosan kapni fogsz egy ellenállhatatlan vágyat a hivatalos formaruhák és a színes övek iránt."
  },
  kick_box_forma: {
    id: "kick_box_forma",
    cim: "Kick-box Formagyakorlat szakosztály",
    sportag: "Akrobatika, Ritmus & Legendás Fegyverek (Musical Forms)",
    miert: "Benned vagy a gyermekedben egy igazi előadóművész és akrobata lakik! A válaszok (és az ovisoknál a zseniális cigánykerék-potenciál) egyértelműen a Kick-box formagyakorlat (Musical Forms) felé terelnek titeket. Ez a prémium, rendkívül egyedi látványsport a legmagasabb szintű mozgáskoordinációt építi fel: az edzéseken nunchakuval, bottal és karddal hajtunk végre akrobatikus elemeket és pörgéseket – sokszor zenével összekötve. Ez egy hivatalos, rendkívül sikeres versenyszám is a kick-box világában!",
    indulas: "Unalmas, monoton sportok, kiaknázatlan ritmusérzék vagy elpazarolt akrobatikus tehetség.",
    erkezes: "Látványos fegyveres technikák, szaltók, cigánykerekek, gátlások nélküli, magabiztos színpadi és tatami kiállás.",
    poen: "Vigyázat! A barátoknak és a családnak leesik majd az álla, amikor meglátják, mit művelsz egy nunchakuval vagy egy bottal a kezedben."
  }
};

const VELEMENYEK = [
  { nev: "Horváth Anita (Ovis anyuka)", celcsoport: "Ovis csoport", szoveg: "Féltem, hogy az 5 éves kisfiamat elnyomják a többiek. Ehelyett a külön ovis helyszínen játékos fegyelmet és hatalmas törődést kapott. A Tigrisek edzői zseniális pedagógusok!", ertekeles: 5 },
  { nev: "Szabó Gábor (Iskolás szülő)", celcsoport: "Iskolás csoport", szoveg: "A lányomat bántották a suliban, de 4 hónap Taekwon-do után úgy kihúzta magát, hogy megszűnt a piszkálódás. Az, hogy a csoporton belül 4 szint van, fantasztikus a fejlődésnek.", ertekeles: 5 },
  { nev: "B. Balázs (Junior tag, 16 éves)", celcsoport: "Kick-box Forma", szoveg: "A nunchaku és a bot forgatása zenére egyszerűen mindent visz! Imádom az akrobatikát, a versenyeken a fellépés elképesztő adrenalint ad. Nem találsz még egy ilyen klubot.", ertekeles: 5 },
  { nev: "Kovács Péter (Újrakezdő felnőtt, 38 éves)", celcsoport: "Felnőtt TKD", szoveg: "Azt hittem, közel a negyvenhez lemaradok az összevont edzésen. De mivel külön szinten kezelik a kezdőket, maximális türelmet kaptam. Teljesen visszakaptam az energiámat!", ertekeles: 5 },
  { nev: "Dr. Varga Elena (Felnőtt önvédelem)", celcsoport: "Taekwon-do", szoveg: "A Taekwon-do edzések nemcsak fizikai technikákat adtak, hanem olyan magabiztos kisugárzást, ami miatt az esti műszakok után egyedül sétálva is teljes biztonságban érzem magam.", ertekeles: 5 }
];

export default function TigrisValaszto({ teljesOldalas = false }: ValasztoProps) {
  const [elinditva, setElinditva] = useState(false);
  const [aktualisId, setAktualisId] = useState<number>(0);
  const [urlapLathato, setUrlapLathato] = useState(false);
  const [urlapElkuldve, setUrlapElkuldve] = useState(false);
  
  const [aktivVisszajelzes, setAktivVisszajelzes] = useState<string | null>(null);
  const [atmenetFolyamatban, setAtmenetFolyamatban] = useState(false);
  const [szabadHelyek, setSzabadHelyek] = useState(5);

  useEffect(() => {
    const idozito = setTimeout(() => {
      setSzabadHelyek(3);
    }, 45000);
    return () => clearTimeout(idozito);
  }, []);

  const [urlapAdat, setUrlapAdat] = useState({ nev: "", telefon: "", korosztaly: "Összevont Iskolás / Felnőtt (4 szinten)" });
  const [pontok, setPontok] = useState<Record<KarakterTipus, number>>({
    ovis_tkd: 0, taekwon_do: 0, kick_box_forma: 0
  });

  // A JELENLEGI KÉRDÉSOBJEKTUM A KONYVBŐL
  const aktualisKerdes = useMemo(() => {
    return ENYEM_A_DÖNTES_KONYV[aktualisId as keyof typeof ENYEM_A_DÖNTES_KONYV];
  }, [aktualisId]);

  // SZÁMOLJUK, HÁNYADIK KÉRDÉSNÉL JÁR AZ ADOTT ÁGON (A SZÉP SÁVHOZ)
  const progresszSzazalek = useMemo(() => {
    if (aktualisId === 0) return 10;
    if (aktualisId === 999) return 100;
    
    // Az ovis vagy felnőtt ágon belüli sorszám becslése
    const sorszam = aktualisId > 200 ? (aktualisId - 200 + 1) : (aktualisId - 100 + 1);
    return Math.min(((sorszam / 7) * 100), 95);
  }, [aktualisId]);

  const handleValasztas = (lehetoseg: any) => {
    if (atmenetFolyamatban) return;

    // Pontok hozzáadása
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
      }, 5200); // 5.2 másodperces feszültségkeltő és edukációs villanás
    } else {
      setAktualisId(kovetkezoId);
    }
  };

  const handleAlaphelyzet = () => {
    setPontok({ ovis_tkd: 0, taekwon_do: 0, kick_box_forma: 0 });
    setAktualisId(0);
    setUrlapLathato(false);
    setUrlapElkuldve(false);
    setAktivVisszajelzes(null);
    setUrlapAdat({ nev: "", telefon: "", korosztaly: "Összevont Iskolás / Felnőtt (4 szinten)" });
    setElinditva(teljesOldalas); 
  };

  const gyoztesKarakter = useMemo(() => {
    if (aktualisId !== 999) return null;
    return Object.entries(pontok).sort((a, b) => b[1] - a[1])[0]?.[0] as KarakterTipus;
  }, [aktualisId, pontok]);

  const handleUrlapMegnyitas = () => {
    setUrlapLathato(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleUrlapKuldes = (e: React.FormEvent) => {
    e.preventDefault();
    setUrlapElkuldve(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // KEZDŐKÉPERNYŐ (HA NINCS AUTOMATIKUSAN ELINDÍTVA)
  if (!teljesOldalas && !elinditva && aktualisId === 0) {
    return (
      <div className="w-full max-w-4xl mx-auto my-12 px-4">
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes sötetbőlElőugrik {
            0% { opacity: 0; transform: scale(0.97); filter: blur(4px); }
            17.8% { opacity: 1; transform: scale(1); filter: blur(0px); }
            82.2% { opacity: 1; transform: scale(1); filter: blur(0px); }
            100% { opacity: 0; transform: scale(1.01); filter: blur(4px); }
          }
          .animacio-szovere-villanas { animation: sötetbőlElőugrik 5.2s ease-in-out forwards; }
          @keyframes futoSzoveg { 0% { transform: translate3d(0, 0, 0); } 100% { transform: translate3d(-50%, 0, 0); } }
          .animacio-szalag { display: inline-flex; animation: futoSzoveg 50s linear infinite; }
          .animacio-szalag:hover { animation-play-state: paused; }
        `}} />

        <div className="bg-gradient-to-br from-gray-950 via-black to-gray-900 border border-neon-orange/20 rounded-3xl p-8 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-6 text-neon-orange/5 pointer-events-none">
            <HelpCircle size={140} className="transform rotate-12" />
          </div>
          <div className="inline-flex items-center gap-1.5 bg-neon-orange/10 border border-neon-orange/20 text-neon-orange text-xs font-black tracking-widest uppercase px-3 py-1 rounded-full mb-4">
            <Sparkles size={12} /> Interaktív Kalandtérkép
          </div>
          
          <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight max-w-2xl mx-auto mb-3 leading-tight">
            Melyik <span className="text-neon-orange">Tigris Szakosztály</span> rejtőzik bennetek?
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-lg mx-auto mb-8 leading-relaxed">
            Ez nem egy unalmas kérdőív, hanem egy interaktív történet. Lapozz bele, teszteld a koordinációdat, és találd meg a tökéletes csoportot!
          </p>
          
          <button 
            onClick={() => { setElinditva(true); setAktualisId(0); }}
            className="bg-neon-orange hover:bg-orange-600 text-black font-black px-8 py-4 rounded-xl text-md transition-all duration-200 hover:scale-105 shadow-lg shadow-neon-orange/20 max-w-xs mx-auto block w-full"
          >
            🔥 Indítás: Belépés a Tigris-fészekbe
          </button>
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
        .animacio-szoveg-villanas { animation: sötetbőlElőugrik 5.2s ease-in-out forwards; }
        @keyframes futoSzoveg { 0% { transform: translate3d(0, 0, 0); } 100% { transform: translate3d(-50%, 0, 0); } }
        .animacio-szalag { display: inline-flex; animation: futoSzoveg 50s linear infinite; }
        .animacio-szalag:hover { animation-play-state: paused; }
      `}} />

      <div className="max-w-2xl mx-auto px-4">
        
        {/* FEJLÉC */}
        <div className="text-center mb-8 bg-gray-950/50 border border-gray-900 rounded-2xl p-4">
          <h1 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white flex items-center justify-center gap-2">
            <Sparkles size={18} className="text-neon-orange" /> Lapozgatós Csoportválasztó Kaland
          </h1>
          <p className="text-gray-400 text-xs mt-1 max-w-md mx-auto">
            A Budapesti Tigrisek Sportegyesület hivatalos, dinamikus felmérő szoftvere.
          </p>
        </div>

        {/* JÁTÉK/KÉRDÉS FÁZIS */}
        {aktualisKerdes && aktualisId !== 999 && (
          <div className="w-full">
            {/* FOLYAMATSÁV */}
            <div className="w-full bg-gray-900 rounded-full h-2 mb-6 border border-gray-800 relative">
              <div
                className="bg-neon-orange h-2 rounded-full transition-all duration-300 shadow-[0_0_8px_rgba(249,115,22,0.6)]"
                style={{ width: `${progresszSzazalek}%` }}
              />
            </div>

            {/* KÁRTYA TÖRZS */}
            <div className="bg-gray-950 border border-gray-900 rounded-2xl p-6 sm:p-8 text-center shadow-xl relative min-h-[360px] flex flex-col justify-center">
              {aktivVisszajelzes ? (
                <div className="animacio-szoveg-villanas space-y-4 py-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-neon-orange/10 text-neon-orange">
                    <ShieldCheck size={28} />
                  </div>
                  <p className="text-white font-bold text-lg sm:text-xl max-w-md mx-auto leading-relaxed px-2">
                    {aktivVisszajelzes}
                  </p>
                  <p className="text-xs text-gray-500 uppercase tracking-widest animate-pulse pt-2">
                    Fizikai és mentális profil elemzése a Tigris-Kód alapján...
                  </p>
                </div>
              ) : (
                <div className="w-full">
                  <span className="text-xs font-black text-neon-orange uppercase tracking-widest block mb-2">
                    {aktualisKerdes.szekcio === "start" ? "A kaland kezdete" : aktualisKerdes.szekcio === "ovis" ? "🦁 Ovis Fejezet" : "🦅 Junior & Felnőtt Fejezet"}
                  </span>
                  <h2 className="text-lg sm:text-xl font-black mb-6 text-white tracking-tight leading-snug">
                    {aktualisKerdes.cim}
                  </h2>

                  <div className="grid gap-3.5">
                    {aktualisKerdes.lehetosegek.map((o: any, index: number) => (
                      <button
                        key={index}
                        disabled={atmenetFolyamatban}
                        onClick={() => handleValasztas(o)}
                        className="text-left p-4 rounded-xl bg-black border border-gray-900 text-gray-200 hover:bg-neon-orange hover:text-black hover:border-neon-orange font-bold transition-all duration-150 text-sm active:scale-95 flex items-center justify-between group"
                      >
                        <span className="pr-2">{o.felirat}</span>
                        <ArrowRight size={16} className="text-gray-700 group-hover:text-black shrink-0 transition-colors" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* VÉGEREDMÉNY KIÉRTÉKELÉS */}
        {aktualisId === 999 && gyoztesKarakter && EREDMENYEK[gyoztesKarakter] && (
          <div className="bg-gray-950 border border-gray-900 rounded-2xl p-6 sm:p-8 shadow-2xl pb-12">
            {!urlapLathato ? (
              <>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neon-orange/10 text-neon-orange mb-3 mx-auto flex">
                  <Flame size={32} />
                </div>
                <span className="text-xs font-black text-center block text-neon-orange uppercase tracking-widest">A könyv becsukódott. Az eredményed:</span>
                <h2 className="text-2xl sm:text-3xl font-black text-center text-white uppercase tracking-tight mt-1">
                  {EREDMENYEK[gyoztesKarakter].cim}
                </h2>
                <p className="text-center text-neon-orange font-black text-sm sm:text-base mt-2 border-b border-gray-900 pb-4">
                  Ajánlott szakosztályunk: <span className="underline">{EREDMENYEK[gyoztesKarakter].sportag}</span>
                </p>

                <div className="mt-6">
                  <h3 className="font-black text-white text-sm uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <CheckCircle2 size={16} className="text-neon-orange" /> Miért ezt dobta ki a kalandod?
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed bg-black/60 p-4 border border-gray-900 rounded-xl🏢">
                    {EREDMENYEK[gyoztesKarakter].miert}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                  <div className="bg-red-950/20 border border-red-900/30 p-3.5 rounded-xl">
                    <span className="text-xs font-black text-red-500 uppercase tracking-widest block mb-1">🔴 Jelenlegi állapot</span>
                    <p className="text-gray-400 text-xs italic">{EREDMENYEK[gyoztesKarakter].indulas}</p>
                  </div>
                  <div className="bg-green-950/20 border border-green-900/30 p-3.5 rounded-xl">
                    <span className="text-xs font-black text-green-400 uppercase tracking-widest block mb-1">🟢 Célkitűzés a Tigriseknél</span>
                    <p className="text-gray-200 text-xs font-semibold">{EREDMENYEK[gyoztesKarakter].erkezes}</p>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-black border border-gray-900 rounded-xl">
                  <h3 className="font-black text-neon-orange text-xs uppercase tracking-wider mb-1">🥋 Edzői megjegyzés / Mellékhatás</h3>
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
              
              /* REGISZTRÁCIÓS ŰRLAP KÜLÖNLEGES AJÁNLATTAL */
              <div className="w-full">
                {!urlapElkuldve ? (
                  <div className="space-y-6">
                    
                    <div className="bg-red-950/20 border border-red-900/40 p-3 rounded-xl flex items-center justify-center gap-2 text-red-400 text-xs font-black uppercase tracking-wider animate-pulse">
                      <Clock size={16} />
                      Figyelem: Ebben a hónapban már csak {szabadHelyek} szabad tagi helyünk maradt ezen a szinten!
                    </div>

                    <form onSubmit={handleUrlapKuldes} className="space-y-4">
                      <div className="text-center">
                        <h3 className="text-xl font-black uppercase tracking-tight text-white">Ingyenes Próbahetek Aktiválása</h3>
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
                            value={urlapAdat.nev}
                            onChange={(e) => setUrlapAdat({...urlapAdat, nev: e.target.value})}
                            className="w-full bg-black border border-gray-900 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-neon-orange"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-black uppercase text-gray-400 block">Telefonszámod (Ezen egyeztetjük a pontos helyszínt és napot):</label>
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
                        <label className="text-xs font-black uppercase text-gray-400 block">Korosztály / Szakosztály hitelesítése:</label>
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
                        <div className="font-black text-white uppercase text-[10px] tracking-wider text-neon-orange">A Start-csomagod ingyenes tartalma:</div>
                        <div className="flex items-center gap-1.5">✓ 1 teljes hét korlátlan edzéslátogatás a szakosztályodban</div>
                        <div className="flex items-center gap-1.5">✓ Személyes koordinációs szintfelmérés és beosztás az első órán</div>
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
                    <h3 className="text-2xl font-black text-white uppercase tracking-tight">A jelentkezésed beérkezett!</h3>
                    <p className="text-sm text-gray-300 max-w-sm mx-auto leading-relaxed">
                      Kedves <strong className="text-white">{urlapAdat.nev}</strong>! Sikerrel lefoglaltad a próbahetet a Budapesti Tigrisek <strong className="text-white">{urlapAdat.korosztaly}</strong> csoportjába. 24 órán belül hívunk a <strong className="text-neon-orange">{urlapAdat.telefon}</strong> számon a pontos részletekkel!
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

      {/* HORIZONTÁLIS FUTÓ ÉRTÉKELÉSI SZALAG */}
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
