import { useState } from 'react';

type TabId = 'overview' | 'history' | 'techniques' | 'belts' | 'founder' | 'oath' | 'dictionary' | 'rules' | 'forms';

const tabs: { id: TabId; label: string }[] = [
  { id: 'overview', label: 'Áttekintés' },
  { id: 'techniques', label: 'Technikák' },
  { id: 'belts', label: 'Övszínek' },
  { id: 'forms', label: '24 Formagyakorlat' },
  { id: 'history', label: 'Történelem' },
  { id: 'founder', label: 'Choi Hong Hi' },
  { id: 'oath', label: 'Eskü' },
  { id: 'dictionary', label: 'Szótár' },
  { id: 'rules', label: 'Szabályok' },
];

const dictionary = [
  { korean: 'Charyot', hungarian: 'Vigyázz!' },
  { korean: 'Kyong-ye', hungarian: 'Tisztelegjetek!' },
  { korean: 'Joonbi', hungarian: 'Készülj!' },
  { korean: 'Shijak', hungarian: 'Kezdjetek!' },
  { korean: 'Koman', hungarian: 'Megállj!' },
  { korean: 'Paro', hungarian: 'Vissza alapállásba!' },
  { korean: 'Haessan', hungarian: 'Széjjel!' },
  { korean: 'Tul', hungarian: 'Formagyakorlat' },
  { korean: 'Matsogi', hungarian: 'Küzdelem' },
  { korean: 'Baro', hungarian: 'Helyes!' },
  { korean: 'Ibo matsogi', hungarian: 'Kétlépéses küzdelem' },
  { korean: 'Sambo matsogi', hungarian: 'Háromfokozatú küzdelem' },
  { korean: 'Hosinsul', hungarian: 'Önvédelem' },
  { korean: 'Twigi', hungarian: 'Ugró technika' },
  { korean: 'Dollyo chagi', hungarian: 'Forduló rúgás' },
  { korean: 'Ap chagi', hungarian: 'Előre rúgás' },
  { korean: 'Bandae dollyo chagi', hungarian: 'Visszafelé forduló rúgás' },
  { korean: 'Yop chagi', hungarian: 'Oldal rúgás' },
  { korean: 'Dwit chagi', hungarian: 'Hátra rúgás' },
  { korean: 'Nopunde', hungarian: 'Magas szint' },
  { korean: 'Kaunde', hungarian: 'Középső szint' },
  { korean: 'Najunde', hungarian: 'Alacsony szint' },
  { korean: 'Olgul', hungarian: 'Arc / Magas fokozat' },
  { korean: 'Momtong', hungarian: 'Törzs / Középső szint' },
  { korean: 'Bakat palmok', hungarian: 'Külső csukló' },
  { korean: 'An palmok', hungarian: 'Belső csukló' },
];

const forms = Array.from({ length: 24 }, (_, i) => ({
  num: i + 1,
  image: `https://tigrisek.hu/images/formagyak/p${i + 1}.jpg`,
}));

export default function Taekwondo() {
  const [activeTab, setActiveTab] = useState<TabId>('overview');

  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <div className="relative py-16 bg-gradient-to-b from-gray-900 to-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-neon-orange text-sm font-bold tracking-wider uppercase mb-2">Tudástár</p>
          <h1 className="text-5xl font-black text-white">Taekwon-do</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-gray-800 pb-4 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-lg text-sm font-bold transition-all duration-200 whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-neon-orange text-black'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <blockquote className="text-center text-2xl font-light italic text-gray-200 mb-8 border-l-4 border-neon-orange pl-6">
                "A győzelemért az embernek tudnia kell mindenekelőtt önmagát legyőznie."
              </blockquote>

              <div className="space-y-5 text-gray-300 leading-relaxed">
                <p>
                  A taekwon-do több mint 2000 éves múltra visszatekintő koreai eredetű harcművészet, mely napjainkra az egyik legismertebb és legnépszerűbb modern küzdősporttá fejlődött, és amely őrzi a harcművészetek legnemesebb hagyományait, a harci tudományok szellemét, és gondoskodik ezek életben tartásáról.
                </p>
                <p>
                  A taekwon-do kifejezés három szóképből áll: a "tae" rúgást, a lábtechnikák összességét jelenti, a "kwon" a kéztechnikák összefoglaló neve, a "do" jelentése út, művészet. Szabadon fordítva: a lábbal és kézzel küzdés művészete. Ez az elnevezés több szempontból is jó választásnak bizonyult. Egyrészt hasonlít az ősi taek kyon elnevezéshez, így bizonyos szempontból folytonosságot jelez a régi és az új stílus között, másrészt, pedig híven fejezi ki a sportág jellemzőit.
                </p>
                <p>
                  A taekwon-do azonban nem csak egyszerűen ütés és rúgás, nemcsak önvédelmi rendszer vagy küzdősport, hanem ennél sokkal több. A koreaiak megközelítésében életút, életforma, mely célja, hogy a taekwon-do gyakorlása révén harmonikusan fejlődjék a szellem, a lélek és a test.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Techniques Tab */}
        {activeTab === 'techniques' && (
          <div className="space-y-6">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <h2 className="text-2xl font-black text-white mb-6">Technikák</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-white font-bold text-lg mb-3">1. Bázis technika</h3>
                  <p className="text-gray-400">
                    A tradicionális harcművészetek Alfája és Omegája - így a Taekwon-do tanulásának is soha el nem hagyható alapja! Időről időre tudás szinttől függetlenül, az alapvető állásokat, kéz és lábtechnikákat mindenkinek újra és újra gyakorolnia kell! Az edzéseken a bázisok csoportos képzése kötött formában, helyben vagy mozgásban, partner segítsége nélkül történik. Az intenzív gyakorlás és nagy ismétlésszám nyomán kialakul az erő fókuszálásának képessége, javul a koordináció, az egyensúly és térérzék, fejlődik az általános mozgáskultúra. Folyamatosan tökéletesednek: gyorsabbá, pontosabbá és hatásosabbá válnak az egyre magasabb szintű támadó és védekező technikák.
                  </p>
                </div>

                <div>
                  <h3 className="text-white font-bold text-lg mb-3">2. Formagyakorlat (Versenyszám)</h3>
                  <p className="text-gray-400 mb-4">
                    Az erőteljes dinamizmussal, egyedül végzett formagyakorlatok, különböző irányokból támadó képzelt ellenfelek leküzdését jelképezik előre meghatározott technikákkal. A szimmetriára épülő mozgássorozatokban, pontosan kidolgozott koreográfia szerint, ütések, hárítások, rúgások, ugró ütések és ugró rúgások logikus kombinációi váltják egymást. A Taekwon-doban összesen 24 kötelező formagyakorlat van, melyek a nap 24 óráját, vagyis magát az életet (az élet állandó körforgását) szimbolizálják.
                  </p>
                  <p className="text-gray-400">
                    Összesen 24 Tull - formagyakorlat van az ITF taekwon-dóban. Ezeket Choi Hong Hi nagymester tervezte és alkotta meg. A tull-ok elnevezéseikkel emléket állítanak a koreai történelem egy-egy kimagasló alakjának, hadvezérének, államférfinek, vagy éppenséggel ismert tudósnak, filozófusnak, nemzetközi költőnek stb.
                  </p>
                </div>

                <div>
                  <h3 className="text-white font-bold text-lg mb-3">3. Formai küzdelem</h3>
                  <p className="text-gray-400">
                    (Páros bázis, vagy küzdelmi helyzet gyakorlat). A bázis, illetve formagyakorlatokból átemelt támadás és védés minták, szigorú rend alapján előre-hátra haladásban, kötött formában történnek partner közreműködésével. Az idealizált gyakorlatokban előre elképzelt és megtervezett harchelyzeteket imitálva: egy-kettő-három, vagy akár több lépésben folyik az egyre nehezebb kombinációk fokozatos elsajátítása. A páros formai küzdelemben való jártasság lényegében a felkészítés utolsó állomása, mely után következhet a valódi szabad küzdelem.
                  </p>
                </div>

                <div>
                  <h3 className="text-white font-bold text-lg mb-3">4. Szabad küzdelem (Versenyszám)</h3>
                  <p className="text-gray-400">
                    A Taekwon-do tulajdonképpeni végső célja, értelme, mely az igazi megmérettetést jelenti - kötetlen -"éles" harchelyzetben. A Taekwon-do gyakorlói a bázisok, formagyakorlatok és formai küzdelmek során beépült tudás birtokában próbálnak felülkerekedni most már kiszámíthatatlanul támadó ellenfelükön. A siker vagy kudarc azonban nem kis mértékben lelki tényezők és pszichikai felkészültség függvénye! A technikák elsajátítása ugyanis a harcművész útnak csak egyik állomása. A Taekwon-do tanainak 5. pontjában foglalt ún. "Rettenthetetlen küzdőszellem" nélkül nincs és nem is lehet igazi győzelem!
                  </p>
                </div>

                <div>
                  <h3 className="text-white font-bold text-lg mb-3">5. Önvédelem</h3>
                  <p className="text-gray-400 mb-4">
                    A haladók és mesterek gyakorolhatják elsősorban, hiszen a támadó ellenfél harcképtelenné tételéhez szükség van olyan technikai áttekintésre és harcművész előképzettségre, amivel kezdők még nem rendelkeznek. Célja a hatásos közelharc és "túlélő" technikák elsajátítása, melyek képesek elhárítani valós veszélyhelyzeteket. Lásd pl. fojtásból, fogásból, leszorításból szabadulás, támadás visszaverése szűk helyen zárt térben, védekezés hátrakötözött kézzel csak lábmunkával, egynél több ellenfél, ill. fegyveres támadó elleni hatékony küzdelem stb.
                  </p>
                  <p className="text-white font-bold mb-3">Ősi íratlan szabályok:</p>
                  <ul className="text-gray-400 space-y-1 ml-4">
                    <li>- inkább kitérni, mint elfogadni az értelmetlen provokálást, kihívást</li>
                    <li>- inkább lefogni, visszatartani, mint megsebesíteni</li>
                    <li>- inkább megsebesíteni, mint megnyomorítani</li>
                    <li>- inkább megnyomorítani, mint megölni</li>
                    <li>- inkább megölni, mint hogy téged öljön meg</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-white font-bold text-lg mb-3">6. Töréstechnika (Versenyszám)</h3>
                  <p className="text-gray-400">
                    A Taekwon-donak igen fontos, nagy kihívást jelentő, látványos része. Valójában eszköz, mely művelőinek testi-lelki erejét, ügyességét, bátorságát és technikai tudását hivatott tükrözni. Napjainkra a küzdelmek már védőfelszerelésben, szigorú szabályok között folynak, ezért a Taekwon-dosok különböző szakítószilárdságú tárgyak törésekor mérhetik le egy adott technika tényleges pusztító erejét... A törésekhez használt végtagfelületek edzését, keményítését már fehér övtől el kell kezdeni és azután soha nem is lehet abbahagyni! A magas szintre edzett testrészek a tudományos elvekre épülő technikával ötvözve lenyűgöző teljesítményekre lesznek képesek. Így fejlődik pl. kezünk idővel életveszélyes "fegyverré", mely nélkülözhetetlen a törésbemutatóknál, de egyúttal hatásos segítőnkké válik a valódi önvédelemben és közelharcban is.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Belts Tab */}
        {activeTab === 'belts' && (
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
            <h2 className="text-2xl font-black text-white mb-6">Övszínek Magyarázata</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-white font-bold mb-2">Fehér öv:</h3>
                <p className="text-gray-400">Az érintetlenség és gyermeki tisztaság szimbóluma. Utal arra, hogy a kezdő taekwon-dos még nem rendelkezik komoly taekwon-do tudással.</p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-2">Sárga öv:</h3>
                <p className="text-gray-400">A földet szimbolizálja, melyben az elültetett növény kicsírázik, és gyökeret ereszt. Így rögződnek a tudás alapjai is a taekwon-dosban.</p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-2">Zöld öv:</h3>
                <p className="text-gray-400">A növényt, növekedését szimbolizálja. Jelzi, hogy a technikák is igazi fejlődésnek indulnak.</p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-2">Kék öv:</h3>
                <p className="text-gray-400">Az eget szimbolizálja, amely felé most már terebélyes faként tör a növény. Utal a mind magasabb taekwon-do tudásra.</p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-2">Piros öv:</h3>
                <p className="text-gray-400">A tűz, a vér és a veszély szimbóluma. Emlékezteti a tanítványt, hogy most már óvatosan kell bánnia megszerzett taekwon-do tudásával, de figyelmezteti ellenfelét is, hogy maradjon távol!</p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-2">Fekete öv:</h3>
                <p className="text-gray-400">Szimbolizálja a félelmetes és kiismerhetetlen harcmodort. Ellentéte a fehérnek. Az elmélyült és mesterfokú taekwon-do tudást jelzi.</p>
              </div>
            </div>
          </div>
        )}

        {/* Forms Tab */}
        {activeTab === 'forms' && (
          <div>
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 mb-6">
              <h2 className="text-2xl font-black text-white mb-4">24 Formagyakorlat (Tull)</h2>
              <p className="text-gray-400 mb-2">
                A 24 tulajdonképpeni tull-okat két előkészítő formagyakorlat előzi meg, melyek célja a tanulók alapvető koordináltságának kialakítása és az egyszerűbb technikák kétoldalas ismételtetésén keresztül rákészítés a nehezebb feladatokra. Ezek a négyirányú ütés (Sajoo Chirugi) és a négyirányú hárítás (Sajoo Makgi).
              </p>
              <p className="text-gray-400">
                A tull-ok elnevezéseikkel emléket állítanak a koreai történelem egy-egy kimagasló alakjának, hadvezérének, államférfinek, vagy éppenséggel ismert tudósnak, filozófusnak, nemzetközi költőnek stb.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {forms.map((form) => (
                <a
                  key={form.num}
                  href={form.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-neon-orange/50 transition-all duration-300 group"
                >
                  <img
                    src={form.image}
                    alt={`Formagyakorlat ${form.num}`}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="p-3 text-center">
                    <p className="text-neon-orange font-bold">Tull {form.num}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* History Tab */}
        {activeTab === 'history' && (
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
            <h2 className="text-2xl font-black text-white mb-6">Történelem</h2>
            <p className="text-gray-400 leading-relaxed">
              A taekwon-do több mint 2000 éves múltra visszatekintő koreai eredetű harcművészet, mely napjainkra az egyik legismertebb és legnépszerűbb modern küzdősporttá fejlődött, és amely őrzi a harcművészetek legnemesebb hagyományait.
            </p>
          </div>
        )}

        {/* Founder Tab */}
        {activeTab === 'founder' && (
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
            <h2 className="text-2xl font-black text-white mb-6">Choi Hong Hi</h2>
            <p className="text-gray-400 leading-relaxed">
              Choi Hong Hi tábornok (1918–2002) a modern ITF Taekwon-do megalapítója. Az ITF (International Taekwondo Federation) 1966-ban alakult meg Choi Hong Hi vezetésével, aki a harcművészetet a világ minden tájára elvitte.
            </p>
          </div>
        )}

        {/* Oath Tab */}
        {activeTab === 'oath' && (
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
            <h2 className="text-2xl font-black text-white mb-6">Eskü</h2>
            <p className="text-gray-400 mb-6">Az edzések elején és versenyeken a taekwon-do-sok a következő esküt mondják:</p>
            <div className="space-y-3 mb-8">
              {[
                'Betartom a Taekwon-do alapelveit.',
                'Tisztelem az instruktort és idősebb tagjait.',
                'Soha nem élek vissza a Taekwon-dóval.',
                'Igazságos és becsületes emberi életet élek.',
                'Taekwon-dót egy erőteljesebb, békésebb világ érdekében gyakorlom.',
              ].map((point, i) => (
                <p key={i} className="text-gray-300">
                  <span className="text-neon-orange font-bold">{i + 1}.</span> {point}
                </p>
              ))}
            </div>
          </div>
        )}

        {/* Dictionary Tab */}
        {activeTab === 'dictionary' && (
          <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-2 bg-gray-800 px-6 py-4 border-b border-gray-700 font-bold">
              <span className="text-gray-300">Koreai</span>
              <span className="text-gray-300">Magyar</span>
            </div>
            <div className="divide-y divide-gray-800">
              {dictionary.map((entry, i) => (
                <div key={i} className={`grid grid-cols-2 px-6 py-3 ${i % 2 === 0 ? '' : 'bg-gray-900/50'}`}>
                  <span className="text-neon-orange font-bold text-sm">{entry.korean}</span>
                  <span className="text-gray-300 text-sm">{entry.hungarian}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Rules Tab */}
        {activeTab === 'rules' && (
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
            <h2 className="text-2xl font-black text-white mb-6">Versenyszabályok</h2>
            <p className="text-gray-400 mb-6">
              Az eredeti taekwon-do versenyszabályokról részletes információkért kérjük, forduljon az ITF (International Taekwondo Federation) vagy helyi szövetségéhez.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
